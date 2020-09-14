package helm

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"text/template"

	"github.com/Masterminds/sprig/v3"
	jsonnet "github.com/google/go-jsonnet"
	"github.com/google/go-jsonnet/ast"
	"github.com/grafana/tanka/pkg/kubernetes/manifest"
	"github.com/pkg/errors"
	yaml "gopkg.in/yaml.v3"
)

// DefaultNameFormat to use when no nameFormat is supplied
const DefaultNameFormat = `{{ print .kind "_" .metadata.name | snakecase }}`

// JsonnetOpts are additional properties the consumer of the native func might
// pass.
type JsonnetOpts struct {
	TemplateOpts

	// CalledFrom is the file that calls helmTemplate. This is used to find the
	// vendored chart relative to this file
	CalledFrom string `json:"calledFrom"`
	// NameTemplate is used to create the keys in the resulting map
	NameFormat string `json:"nameFormat"`
}

// Template expands a Helm Chart into a regular manifest.List using the `helm
// template` command
func (h ExecHelm) Template(name, chart string, opts TemplateOpts) (manifest.List, error) {
	args := []string{name, chart,
		"--values", "-", // values from stdin
	}
	args = append(args, opts.Flags()...)

	cmd := h.cmd("template", args...)
	var buf bytes.Buffer
	cmd.Stdout = &buf
	cmd.Stderr = os.Stderr

	data, err := yaml.Marshal(opts.Values)
	if err != nil {
		return nil, errors.Wrap(err, "Converting Helm values to YAML")
	}
	cmd.Stdin = bytes.NewReader(data)

	if err := cmd.Run(); err != nil {
		return nil, errors.Wrap(err, "Expanding Helm Chart")
	}

	var list manifest.List
	d := yaml.NewDecoder(&buf)
	for {
		var m manifest.Manifest
		if err := d.Decode(&m); err != nil {
			if err == io.EOF {
				break
			}
			return nil, errors.Wrap(err, "Parsing Helm output")
		}

		// Helm might return "empty" elements in the YAML stream that consist
		// only of comments. Ignore these
		if len(m) == 0 {
			continue
		}

		list = append(list, m)
	}

	return list, nil
}

// NativeFunc returns a jsonnet native function that provides the same
// functionality as `Helm.Template` of this package. Charts are required to be
// present on the local filesystem, at a relative location to the file that
// calls `helm.template()` / `std.native('helmTemplate')`. This guarantees
// hermeticity
func NativeFunc(h Helm) *jsonnet.NativeFunction {
	return &jsonnet.NativeFunction{
		Name: "helmTemplate",
		// Similar to `helm template [NAME] [CHART] [flags]` except 'conf' is a
		// bit more elaborate and chart is a local path
		Params: ast.Identifiers{"name", "chart", "opts"},
		Func: func(data []interface{}) (interface{}, error) {
			name, ok := data[0].(string)
			if !ok {
				return nil, fmt.Errorf("First argument 'name' must be of 'string' type, got '%T' instead", data[0])
			}

			chartpath, ok := data[1].(string)
			if !ok {
				return nil, fmt.Errorf("Second argument 'chart' must be of 'string' type, got '%T' instead", data[1])
			}

			// TODO: validate data[2] actually follows the struct scheme
			opts, err := parseOpts(data[2])
			if err != nil {
				return "", err
			}

			// resolve the Chart relative to the caller
			callerDir := filepath.Dir(opts.CalledFrom)
			chart := filepath.Join(callerDir, chartpath)
			if _, err := os.Stat(chart); err != nil {
				// TODO: add website link for explanation
				return nil, fmt.Errorf("helmTemplate: Failed to find a Chart at '%s': %s", chart, err)
			}

			// render resources
			list, err := h.Template(name, chart, opts.TemplateOpts)
			if err != nil {
				return nil, err
			}

			// convert list to map
			out, err := listAsMap(list, opts.NameFormat)
			if err != nil {
				return nil, err
			}

			return out, nil
		},
	}
}

func parseOpts(data interface{}) (*JsonnetOpts, error) {
	c, err := json.Marshal(data)
	if err != nil {
		return nil, err
	}
	var opts JsonnetOpts
	if err := json.Unmarshal(c, &opts); err != nil {
		return nil, err
	}

	// Charts are only allowed at relative paths. Use conf.CalledFrom to find the callers directory
	if opts.CalledFrom == "" {
		// TODO: rephrase and move lengthy explanation to website
		return nil, fmt.Errorf("helmTemplate: 'opts.calledFrom' is unset or empty.\nTanka must know where helmTemplate was called from to resolve the Helm Chart relative to that.\n")
	}

	if opts.NameFormat == "" {
		opts.NameFormat = DefaultNameFormat
	}

	return &opts, nil
}

func listAsMap(list manifest.List, nameFormat string) (map[string]interface{}, error) {
	tmpl, err := template.New("").
		Funcs(sprig.TxtFuncMap()).
		Parse(nameFormat)
	if err != nil {
		return nil, fmt.Errorf("Parsing name format: %w", err)
	}

	out := make(map[string]interface{})
	for _, m := range list {
		var buf bytes.Buffer
		if err := tmpl.Execute(&buf, m); err != nil {
			return nil, err
		}
		name := buf.String()

		if _, ok := out[name]; ok {
			// TODO: explain on website
			return nil, fmt.Errorf("Two resources share the same name '%s'. Please adapt the name template '%s'", name, nameFormat)
		}
		out[name] = map[string]interface{}(m)
	}

	return out, nil
}
