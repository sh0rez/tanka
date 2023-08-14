(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{tUVA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("wx14"),s=a("Ff2n"),i=(a("q1tI"),a("7ljp")),r=a("hhGP");a("qKvR");const l=["components"],o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!Object.prototype.hasOwnProperty.call(o,"__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/diff-strategy.md"}});const c={_frontmatter:o},m=r.a;function d(e){let{components:t}=e,a=Object(s.a)(e,l);return Object(i.b)(m,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"diff-strategies"},"Diff Strategies"),Object(i.b)("p",null,"Tanka supports two different ways of computing differences between the local\nconfiguration and the live cluster state: Either ",Object(i.b)("strong",{parentName:"p"},"native")," ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl diff -f -"),"\nis used, which gives the best possible results, but is only possible for\nclusters with\n",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/blog/2019/01/14/apiserver-dry-run-and-kubectl-diff/"},"server-side diff"),"\nsupport (Kubernetes 1.13+)."),Object(i.b)("p",null,"When this is not available, Tanka falls back to ",Object(i.b)("inlineCode",{parentName:"p"},"subset")," mode."),Object(i.b)("p",null,"You can specify the diff-strategy to use on the command line as well:"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# native")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"tk diff --diff-strategy=native "),Object(i.b)("span",{parentName:"span",className:"mtk9"},".")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# validate: Like native but with a server-side validation")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"tk diff --diff-strategy=validate "),Object(i.b)("span",{parentName:"span",className:"mtk9"},".")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# server-side")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"tk diff --diff-strategy=server "),Object(i.b)("span",{parentName:"span",className:"mtk9"},".")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk3 mtki"},"# subset")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"tk diff --diff-strategy=subset "),Object(i.b)("span",{parentName:"span",className:"mtk9"},".")))),Object(i.b)("h2",{id:"native"},"Native"),Object(i.b)("p",null,"The native diff mode is recommended, because it uses ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl diff")," underneath,\nwhich sends the objects to the Kubernetes API server and computes the\ndifferences over there."),Object(i.b)("p",null,"This has the huge benefit that all possible changes by webhooks and other\ninternal components of Kubernetes can be encountered as well."),Object(i.b)("p",null,"However, this is a fairly new feature and only available on Kubernetes 1.13 or\nlater. Only the API server (master nodes) needs to have that\nversion, worker nodes do not matter."),Object(i.b)("p",null,"There is a\n",Object(i.b)("a",{parentName:"p",href:"known-issues.md#unexpected-diff-if-the-same-port-number-is-used-for-udp-and-tcp"},"known issue"),"\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl diff"),", which affects ports configured to use both TCP and UDP."),Object(i.b)("h3",{id:"server-side-diffs"},"Server-side diffs"),Object(i.b)("p",null,"There are two additional modes which extend ",Object(i.b)("inlineCode",{parentName:"p"},"native"),": ",Object(i.b)("inlineCode",{parentName:"p"},"validate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"server"),".\nWhile all ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl diff")," commands are sent to the API server, these two\nmethods take advantage of an additional server-side diff mode (which uses the\n",Object(i.b)("inlineCode",{parentName:"p"},"kubectl diff --server-side")," flag, complementing the\n",Object(i.b)("a",{parentName:"p",href:"/pr-preview/pr-911/server-side-apply"},"server-side apply")," mode)."),Object(i.b)("p",null,"Since a plain ",Object(i.b)("inlineCode",{parentName:"p"},"server")," diff often produces cruft, and wouldn't be representative\nof a client-side apply, the ",Object(i.b)("inlineCode",{parentName:"p"},"validate")," method allows the server-side diff to\ncheck that all models are valid server-side, but still displays the ",Object(i.b)("inlineCode",{parentName:"p"},"native"),"\ndiff output to the user."),Object(i.b)("h2",{id:"subset"},"Subset"),Object(i.b)("p",null,"If native diffing is not supported by your cluster, Tanka provides subset diff\nas a fallback method."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Subset diff only compares fields present in the local configuration and\nignores all other fields"),". When you remove a field locally, you will see no\ndifferences."),Object(i.b)("p",null,"This is required, because Kubernetes adds dynamic fields to the state during\nruntime, which we cannot know of on the client side. To produce a somewhat\nusable output, we can effectively only compare what we already know about."),Object(i.b)("p",null,"If this is a problem for you, consider switching to ",Object(i.b)("a",{parentName:"p",href:"#native"},"native")," mode."),Object(i.b)("h2",{id:"external-diff-utilities"},"External diff utilities"),Object(i.b)("p",null,"You can use external diff utilities by setting the environment variable\n",Object(i.b)("inlineCode",{parentName:"p"},"KUBECTL_EXTERNAL_DIFF"),". If you want to use a GUI or interactive diff utility\nyou must also set ",Object(i.b)("inlineCode",{parentName:"p"},"KUBECTL_INTERACTIVE_DIFF=1")," to prevent Tanka from capturing\nstdout."),Object(i.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,"__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/diff-strategy.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-diff-strategy-md-610f0f295c6553c44974.js.map