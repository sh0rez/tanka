(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3rzr":function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return b})),s.d(e,"default",(function(){return r}));var t=s("wx14"),n=s("Ff2n"),m=(s("q1tI"),s("7ljp")),p=s("hhGP");s("qKvR");const c=["components"],b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/jsonnet/native-functions.md"}});const N={_frontmatter:b},l=p.a;function r(a){let{components:e}=a,s=Object(n.a)(a,c);return Object(m.b)(l,Object(t.a)({},N,s,{components:e,mdxType:"MDXLayout"}),Object(m.b)("h1",{id:"native-functions"},"Native Functions"),Object(m.b)("p",null,"Tanka extends Jsonnet using ",Object(m.b)("em",{parentName:"p"},"native functions"),", offering additional functionality not yet available in the standard library."),Object(m.b)("p",null,"To use them in your code, you need to access them using ",Object(m.b)("inlineCode",{parentName:"p"},"std.native")," from the standard library:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"someField:"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"  std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"native"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'<name>'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")("),Object(m.b)("span",{parentName:"span",className:"mtk12"},"<"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"arguments"),Object(m.b)("span",{parentName:"span",className:"mtk12"},">"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,Object(m.b)("inlineCode",{parentName:"p"},"std.native")," takes the native function's name as a ",Object(m.b)("inlineCode",{parentName:"p"},"string")," argument and returns a ",Object(m.b)("inlineCode",{parentName:"p"},"function"),", which is called using the second set of parentheses."),Object(m.b)("h2",{id:"sha256"},"sha256"),Object(m.b)("h3",{id:"signature"},"Signature"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"ts"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk9"},"sha256"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"str"),Object(m.b)("span",{parentName:"span",className:"mtk1"},") "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string")))),Object(m.b)("p",null,Object(m.b)("inlineCode",{parentName:"p"},"sha256")," computes the SHA256 sum of the given string."),Object(m.b)("h3",{id:"examples"},"Examples"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"sum:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"native"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'sha256'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'Hello, World!'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Evaluating with Tanka results in the JSON:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"json"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"sum"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")))),Object(m.b)("h2",{id:"parsejson"},"parseJson"),Object(m.b)("h3",{id:"signature-1"},"Signature"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"ts"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk9"},"parseJson"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"json"),Object(m.b)("span",{parentName:"span",className:"mtk1"},") "),Object(m.b)("span",{parentName:"span",className:"mtk7"},"Object")))),Object(m.b)("p",null,Object(m.b)("inlineCode",{parentName:"p"},"parseJson")," parses a json string and returns the respective Jsonnet type (",Object(m.b)("inlineCode",{parentName:"p"},"Object"),", ",Object(m.b)("inlineCode",{parentName:"p"},"Array"),",  etc)."),Object(m.b)("h3",{id:"examples-1"},"Examples"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"array:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"native"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'parseJson'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'[0, 1, 2]'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"object:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"native"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'parseJson'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'\'{ "foo": "bar" }\''),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Evaluating with Tanka results in the JSON:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"json"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"array"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"["),Object(m.b)("span",{parentName:"span",className:"mtk4"},"0"),Object(m.b)("span",{parentName:"span",className:"mtk5"},","),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"1"),Object(m.b)("span",{parentName:"span",className:"mtk5"},","),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"2"),Object(m.b)("span",{parentName:"span",className:"mtk5"},"],")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"object"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk7"},"foo"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"bar"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")))),Object(m.b)("h2",{id:"parseyaml"},"parseYaml"),Object(m.b)("h3",{id:"signature-2"},"Signature"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"ts"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk9"},"parseYaml"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"yaml"),Object(m.b)("span",{parentName:"span",className:"mtk1"},") []"),Object(m.b)("span",{parentName:"span",className:"mtk7"},"Object")))),Object(m.b)("p",null,Object(m.b)("inlineCode",{parentName:"p"},"parseYaml")," wraps ",Object(m.b)("inlineCode",{parentName:"p"},"yaml.Unmarshal")," to convert a string of yaml document(s) into\na set of dicts. If ",Object(m.b)("inlineCode",{parentName:"p"},"yaml")," only contains a single document, a single value array\nwill be returned."),Object(m.b)("h3",{id:"examples-2"},"Examples"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"yaml:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"native"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'parseYaml'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"|||")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk6"},"    ---")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk6"},"    foo: bar")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk6"},"    ---")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk6"},"    bar: baz")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk6"},"  |||"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Evaluating with Tanka results in the JSON:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"json"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"yaml"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"[")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk7"},"foo"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"bar"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"},")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk7"},"bar"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"baz"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"]")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")))),Object(m.b)("h2",{id:"manifestjsonfromjson"},"manifestJsonFromJson"),Object(m.b)("h3",{id:"signature-3"},"Signature"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"ts"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk9"},"manifestJsonFromJson"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"json"),Object(m.b)("span",{parentName:"span",className:"mtk5"},","),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"int"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"indent"),Object(m.b)("span",{parentName:"span",className:"mtk1"},") "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string")))),Object(m.b)("p",null,Object(m.b)("inlineCode",{parentName:"p"},"manifestJsonFromJson")," reserializes JSON and allows to change the indentation."),Object(m.b)("h3",{id:"examples-3"},"Examples"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"indentWithEightSpaces:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"native"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'manifestJsonFromJson'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'\'{ "foo": { "bar": "baz" } }\''),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"8"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Evaluating with Tanka results in the JSON:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"json"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"indentWithEightSpaces"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"{"),Object(m.b)("span",{parentName:"span",className:"mtk5"},"\\n"),Object(m.b)("span",{parentName:"span",className:"mtk6"},"        "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'\\"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"foo"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'\\"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},": {"),Object(m.b)("span",{parentName:"span",className:"mtk5"},"\\n"),Object(m.b)("span",{parentName:"span",className:"mtk6"},"                "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'\\"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"bar"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'\\"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},": "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'\\"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"baz"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'\\"\\n'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"        }"),Object(m.b)("span",{parentName:"span",className:"mtk5"},"\\n"),Object(m.b)("span",{parentName:"span",className:"mtk6"},"}"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'\\n"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")))),Object(m.b)("h2",{id:"manifestyamlfromjson"},"manifestYamlFromJson"),Object(m.b)("h3",{id:"signature-4"},"Signature"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"ts"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk9"},"manifestYamlFromJson"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"json"),Object(m.b)("span",{parentName:"span",className:"mtk1"},") "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string")))),Object(m.b)("p",null,Object(m.b)("inlineCode",{parentName:"p"},"manifestYamlFromJson")," serializes a JSON string as a YAML document."),Object(m.b)("h3",{id:"examples-4"},"Examples"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"yaml:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"native"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'manifestYamlFromJson'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'\'{ "foo": { "bar": "baz" } }\''),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Evaluating with Tanka results in the JSON:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"json"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"yaml"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"foo:"),Object(m.b)("span",{parentName:"span",className:"mtk5"},"\\n"),Object(m.b)("span",{parentName:"span",className:"mtk6"},"    bar: baz"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'\\n"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")))),Object(m.b)("h2",{id:"escapestringregex"},"escapeStringRegex"),Object(m.b)("h3",{id:"signature-5"},"Signature"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"ts"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk9"},"escapeStringRegex"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"s"),Object(m.b)("span",{parentName:"span",className:"mtk1"},") "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string")))),Object(m.b)("p",null,Object(m.b)("inlineCode",{parentName:"p"},"escapeStringRegex")," escapes all regular expression metacharacters and returns a\nregular expression that matches the literal text."),Object(m.b)("h3",{id:"examples-5"},"Examples"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"escaped:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"native"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'escapeStringRegex'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'\"([0-9]+\"'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Evaluating with Tanka results in the JSON:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"json"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"escaped"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"\\"\\\\'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"("),Object(m.b)("span",{parentName:"span",className:"mtk5"},"\\\\"),Object(m.b)("span",{parentName:"span",className:"mtk6"},"[0-9"),Object(m.b)("span",{parentName:"span",className:"mtk5"},"\\\\"),Object(m.b)("span",{parentName:"span",className:"mtk6"},"]"),Object(m.b)("span",{parentName:"span",className:"mtk5"},"\\\\"),Object(m.b)("span",{parentName:"span",className:"mtk6"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'\\""')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")))),Object(m.b)("h2",{id:"regexmatch"},"regexMatch"),Object(m.b)("h3",{id:"signature-6"},"Signature"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"ts"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk9"},"regexMatch"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"regex"),Object(m.b)("span",{parentName:"span",className:"mtk5"},","),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"s"),Object(m.b)("span",{parentName:"span",className:"mtk1"},") "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"boolean")))),Object(m.b)("p",null,Object(m.b)("inlineCode",{parentName:"p"},"regexMatch")," returns whether the given string is matched by the given\n",Object(m.b)("a",{parentName:"p",href:"https://github.com/google/re2/wiki/Syntax"},"RE2")," regular expression."),Object(m.b)("h3",{id:"examples-6"},"Examples"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"matched:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"native"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'regexMatch'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'.'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'a'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Evaluating with Tanka results in the JSON:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"json"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"matched"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"true")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")))),Object(m.b)("h2",{id:"regexsubst"},"regexSubst"),Object(m.b)("h3",{id:"signature-7"},"Signature"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"ts"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk9"},"regexSubst"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"regex"),Object(m.b)("span",{parentName:"span",className:"mtk5"},","),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"src"),Object(m.b)("span",{parentName:"span",className:"mtk5"},","),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"repl"),Object(m.b)("span",{parentName:"span",className:"mtk1"},") "),Object(m.b)("span",{parentName:"span",className:"mtk8"},"string")))),Object(m.b)("p",null,Object(m.b)("inlineCode",{parentName:"p"},"regexSubst")," replaces all matches of the re2 regular expression with the\nreplacement string."),Object(m.b)("h3",{id:"examples-7"},"Examples"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"substituted:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," std."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"native"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'regexSubst'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'p[^m]*'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'pm'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'poe'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Evaluating with Tanka results in the JSON:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"json"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk12"},"substituted"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(m.b)("span",{parentName:"span",className:"mtk6"},"poem"),Object(m.b)("span",{parentName:"span",className:"mtk5"},'"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"}")))),Object(m.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!Object.prototype.hasOwnProperty.call(r,"__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/jsonnet/native-functions.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-jsonnet-native-functions-md-2b62620b62d073a3473b.js.map