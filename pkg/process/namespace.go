package process

import (
	"github.com/grafana/tanka/pkg/kubernetes/manifest"
)

const (
	// AnnotationNamespaced can be set on any resource to override the decision
	// whether 'metadata.namespace' is set by Tanka
	AnnotationNamespaced = MetadataPrefix + "/namespaced"
)

// This is a list of "cluster-wide" resources harvested from `kubectl api-resources --namespaced=false`
// This helps us to know which objects we should NOT apply namespaces to automatically.
// We can add to this list periodically if new types are added. There is no reason not to add popular CRD types here as well.
// Alternatively, library authors can add annotations to control namespacing for a type as well.
var clusterWideKinds = []string{
	"APIService",
	"CertificateSigningRequest",
	"ClusterRole",
	"ClusterRoleBinding",
	"ComponentStatus",
	"CSIDriver",
	"CSINode",
	"CustomResourceDefinition",
	"MutatingWebhookConfiguration",
	"Namespace",
	"Node",
	"NodeMetrics",
	"PersistentVolume",
	"PodSecurityPolicy",
	"PriorityClass",
	"RuntimeClass",
	"SelfSubjectAccessReview",
	"SelfSubjectRulesReview",
	"StorageClass",
	"SubjectAccessReview",
	"TokenReview",
	"ValidatingWebhookConfiguration",
	"VolumeAttachment",

	// cert-manager
	"ClusterIssuer",
}

// clusterWideMap is a generated lookup table on top of clusterWideKinds
var clusterWideMap = buildClusterWideMap()

func buildClusterWideMap() map[string]bool {
	m := make(map[string]bool, len(clusterWideKinds))
	for _, k := range clusterWideKinds {
		m[k] = true
	}
	return m
}

// Namespace injects the default namespace of the environment into each
// resources, that does not already define one. AnnotationNamespaced can be used
// to disable this per resource
func Namespace(list manifest.List, def string) manifest.List {
	if def == "" {
		return list
	}

	for i, m := range list {
		namespaced := true
		if clusterWideMap[m.Kind()] {
			namespaced = false
		}
		// check for annotation override
		if s, ok := m.Metadata().Annotations()[AnnotationNamespaced]; ok {
			namespaced = s == "true"
		}

		if namespaced && !m.Metadata().HasNamespace() {
			m.Metadata()["namespace"] = def
		}

		// remove annotations if empty (we always create those by accessing them)
		if len(m.Metadata().Annotations()) == 0 {
			delete(m.Metadata(), "annotations")
		}

		list[i] = m
	}

	return list
}
