"use strict";(self.webpackChunkreact_ducky_doc=self.webpackChunkreact_ducky_doc||[]).push([[518],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,c=new Array(l);c[0]=d;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<l;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6502:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=t(7462),o=t(3366),l=(t(7294),t(3905)),c=["components"],a={sidebar_position:3,sidebar_label:"Controller Tools"},i="Controller Tools",u={unversionedId:"API-Reference/controller-tools",id:"API-Reference/controller-tools",isDocsHomePage:!1,title:"Controller Tools",description:"react-ducky \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u65b9\u6cd5\uff0c\u8ba9\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 Class + Hooks \u7684\u65b9\u5f0f\u6765\u7f16\u5199\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8fbe\u5230\u7c7b\u4f3c\u4e8e MVC \u6a21\u5f0f\u4e2d Controller \u5c42\u7684\u4f5c\u7528\u3002",source:"@site/docs/API-Reference/controller-tools.md",sourceDirName:"API-Reference",slug:"/API-Reference/controller-tools",permalink:"/react-ducky-doc/docs/API-Reference/controller-tools",editUrl:"https://github.com/qoxop/react-ducky-doc/tree/main/docs/API-Reference/controller-tools.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Controller Tools"},sidebar:"tutorialSidebar",previous:{title:"createReducer",permalink:"/react-ducky-doc/docs/API-Reference/reducer-and-actions/createReducer"}},s=[{value:"\u76ee\u7684",id:"\u76ee\u7684",children:[],level:2},{value:"Controller",id:"controller",children:[],level:2},{value:"ReduxController",id:"reduxcontroller",children:[],level:2},{value:"useController",id:"usecontroller",children:[],level:2},{value:"useReduxController",id:"usereduxcontroller",children:[],level:2},{value:"Provider",id:"provider",children:[],level:2}],p={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"controller-tools"},"Controller Tools"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"react-ducky")," \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u65b9\u6cd5\uff0c\u8ba9\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 Class + Hooks \u7684\u65b9\u5f0f\u6765\u7f16\u5199\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8fbe\u5230\u7c7b\u4f3c\u4e8e MVC \u6a21\u5f0f\u4e2d Controller \u5c42\u7684\u4f5c\u7528\u3002"),(0,l.kt)("h2",{id:"\u76ee\u7684"},"\u76ee\u7684"),(0,l.kt)("p",null,"\u56e0\u4e3a\u5bf9\u4e8e\u590d\u6742\u7ec4\u4ef6\u800c\u8a00\uff0c\u7528 class \u7684\u65b9\u5f0f\u53bb\u7ec4\u7ec7\u4ee3\u7801\u903b\u8f91\u6bd4\u5728\u51fd\u6570\u95ed\u5305\u5185\u53bb\u7ec4\u7ec7\u8981\u7b80\u6d01\u5f97\u591a\u3002"),(0,l.kt)("p",null,"\u4f46\u4ee5\u5f80\u7684 class \u7ec4\u4ef6\u5bf9\u5e94\u903b\u8f91\u590d\u7528\u548c\u62bd\u8c61\u4e0d\u662f\u90a3\u4e48\u53cb\u597d(\u901a\u5e38\u9700\u8981\u7528\u5230\u9ad8\u9636\u7ec4\u4ef6\uff0c\u800c\u4e14\u6ca1\u6709hook\u90a3\u4e48\u7075\u6d3b\u65b9\u4fbf)\uff0c\u800c\u4e14\u4f7f\u7528 class \u7ec4\u4ef6\u901a\u5e38\u9700\u8981\u5c06\u4ee3\u7801\u903b\u8f91\u5206\u5272\u5728\u4e0d\u540c\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u5185\u9020\u6210\u4e1a\u52a1\u903b\u8f91\u5206\u6563\u3002"),(0,l.kt)("h2",{id:"controller"},"Controller"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Controller")," \u7c7b\u6a21\u62df\u4e86 React Class \u7ec4\u4ef6\u7684\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5\uff0c\u5305\u62ec setState \u3001forceUpdate \u7b49\u3002\u5bf9\u5e94\u5730\uff0c\u5b83\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"useController")," \u5c06\u5176\u5e94\u7528\u5230 React \u7ec4\u4ef6\u4e0a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type State = {};\ntype Props = {};\nclass MyControler extends Controler<State, Props> {\n    constructor(props) {\n        super(props);\n        // \u5982\u679c\u4f60\u6709\u4e00\u4e9b\u9700\u8981\u5728\u9996\u6b21\u8fdb\u5165\u7ec4\u4ef6\u65f6\u5c31\u6267\u884c\u7684\u903b\u8f91\uff0c\u53ef\u4ee5\u5199\u5728\u8fd9\u91cc\n        // \u4f46\u662f\u4e0d\u80fd\u5728\u8fd9\u91cc\u540c\u6b65\u5730\u8c03\u7528 setState\n    }\n    useHooks() {\n        // \u8fd9\u91cc\u5199\u81ea\u5b9a\u7684 hooks \u903b\u8f91\n        // \u4ee3\u7801\u5728\u8fd9\u91cc\u6267\u884c\u4e0e\u5728\u51fd\u6570\u7ec4\u4ef6\u95ed\u5305\u5185\u6267\u884c\u7684\u6548\u679c\u662f\u4e00\u6837\u7684\n        // \u540c\u6837\u907f\u514d\u5728\u8fd9\u91cc\u540c\u6b65\u5730\u8c03\u7528 setState\n\n    }\n    customMethod() {\n        // \u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5\n        // \u53ef\u4ee5\u662f\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u81ea\u5b9a\u4e49\u7684 hook\n        // \u53ef\u4ee5\u8c03\u7528 this.setState \u6216 this.forceUpdate\n    }\n}\n")),(0,l.kt)("h2",{id:"reduxcontroller"},"ReduxController"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ReduxController")," \u7ee7\u627f\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Controler"),"\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Controler")," \u5730\u57fa\u7840\u4e0a\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"dispatch")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"store")," \u5b57\u6bb5\u3002"),(0,l.kt)("h2",{id:"usecontroller"},"useController"),(0,l.kt)("p",null,"\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528\u4e00\u4e2a\u5b9a\u4e49\u597d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Controller"),"\u3002"),(0,l.kt)("h2",{id:"usereduxcontroller"},"useReduxController"),(0,l.kt)("p",null,"\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528\u4e00\u4e2a\u5b9a\u4e49\u597d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Controller"),"\u3002"),(0,l.kt)("h2",{id:"provider"},"Provider"))}d.isMDXComponent=!0}}]);