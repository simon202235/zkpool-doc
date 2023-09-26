"use strict";(self.webpackChunkzkpool_doc=self.webpackChunkzkpool_doc||[]).push([[494],{3905:(e,r,o)=>{o.d(r,{Zo:()=>s,kt:()=>m});var t=o(7294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=t.createContext({}),u=function(e){var r=t.useContext(p),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},s=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(o),f=n,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return o?t.createElement(m,i(i({ref:r},s),{},{components:o})):t.createElement(m,i({ref:r},s))}));function m(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},9222:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=o(7462),n=(o(7294),o(3905));const a={sidebar_label:"How to Run a Prover",sidebar_position:3},i="How to Run a Prover",l={unversionedId:"guides/how-to-run-prover",id:"guides/how-to-run-prover",title:"How to Run a Prover",description:"This document explains how to run a ZKPool prover.",source:"@site/docs/guides/how-to-run-prover.md",sourceDirName:"guides",slug:"/guides/how-to-run-prover",permalink:"/guides/how-to-run-prover",draft:!1,editUrl:"https://github.com/aoraki-labs/zkpool-doc/tree/main/docs/guides/how-to-run-prover.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"How to Run a Prover",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to Register",permalink:"/guides/how-to-register"}},p={},u=[{value:"How to stop a prover",id:"how-to-stop-a-prover",level:2}],s={toc:u},c="wrapper";function d(e){let{components:r,...o}=e;return(0,n.kt)(c,(0,t.Z)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-run-a-prover"},"How to Run a Prover"),(0,n.kt)("p",null,"This document explains how to run a ZKPool prover."),(0,n.kt)("p",null,"After logging into ZKPool, follow the guide on how to connect to ZKPool and run a prover.\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/aoraki-labs/zkpool-doc/assets/117819366/5b9ebf70-332f-47c4-bc35-f2e914982f49",alt:"image"})),(0,n.kt)("p",null,"The basic flow is as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose your operating system: Ubuntu 20.04/22.04 or MacOS ARM or MacOS x86."),(0,n.kt)("li",{parentName:"ol"},"Choose between CPU/GPU (coming soon)."),(0,n.kt)("li",{parentName:"ol"},"Generate an access key for your account."),(0,n.kt)("li",{parentName:"ol"},"Follow one command to download your keys and prover binary, and then run the prover binary.")),(0,n.kt)("h2",{id:"how-to-stop-a-prover"},"How to stop a prover"),(0,n.kt)("p",null,"To stop a running prover, simple run the following command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pkill zkpool-prover\n")))}d.isMDXComponent=!0}}]);