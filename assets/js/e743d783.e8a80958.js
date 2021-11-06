"use strict";(self.webpackChunkreact_ducky_doc=self.webpackChunkreact_ducky_doc||[]).push([[518],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={sidebar_position:3,sidebar_label:"Controller Tools"},c="Controller Tools",s={unversionedId:"API-Reference/controller-tools",id:"API-Reference/controller-tools",isDocsHomePage:!1,title:"Controller Tools",description:"react-ducky \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u65b9\u6cd5\uff0c\u8ba9\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 Class + Hooks \u7684\u65b9\u5f0f\u6765\u7f16\u5199\u4e1a\u52a1\u903b\u8f91\uff0c \u7c7b\u4f3c\u4e8e MVC \u6a21\u5f0f\u4e2d\u7684 Controller \u5c42\u3002",source:"@site/docs/API-Reference/controller-tools.md",sourceDirName:"API-Reference",slug:"/API-Reference/controller-tools",permalink:"/react-ducky-doc/docs/API-Reference/controller-tools",editUrl:"https://github.com/qoxop/react-ducky-doc/tree/main/docs/API-Reference/controller-tools.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Controller Tools"},sidebar:"tutorialSidebar",previous:{title:"createReducer",permalink:"/react-ducky-doc/docs/API-Reference/reducer-and-actions/createReducer"}},p=[{value:"\u76ee\u7684",id:"\u76ee\u7684",children:[],level:2},{value:"Controller",id:"controller",children:[],level:2},{value:"ReduxController",id:"reduxcontroller",children:[],level:2},{value:"useController",id:"usecontroller",children:[],level:2},{value:"useReduxController",id:"usereduxcontroller",children:[],level:2},{value:"Provider",id:"provider",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"controller-tools"},"Controller Tools"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"react-ducky")," \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u65b9\u6cd5\uff0c\u8ba9\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Class + Hooks")," \u7684\u65b9\u5f0f\u6765\u7f16\u5199\u4e1a\u52a1\u903b\u8f91\uff0c \u7c7b\u4f3c\u4e8e MVC \u6a21\u5f0f\u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Controller")," \u5c42\u3002"),(0,l.kt)("h2",{id:"\u76ee\u7684"},"\u76ee\u7684"),(0,l.kt)("p",null,"\u56e0\u4e3a\u5bf9\u4e8e\u590d\u6742\u7ec4\u4ef6\u800c\u8a00\uff0c\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Class")," \u7684\u65b9\u5f0f\u53bb\u7ec4\u7ec7\u4ee3\u7801\u903b\u8f91\u6bd4\u5728\u51fd\u6570\u95ed\u5305\u5185\u53bb\u7ec4\u7ec7\u8981\u7b80\u6d01\u5f97\u591a\u3002"),(0,l.kt)("p",null,"\u4f46\u4ee5\u5f80\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Class")," \u7ec4\u4ef6\u5bf9\u4e8e\u903b\u8f91\u590d\u7528\u548c\u62bd\u8c61\u4e0d\u662f\u90a3\u4e48\u53cb\u597d(\u901a\u5e38\u9700\u8981\u7528\u5230\u9ad8\u9636\u7ec4\u4ef6\uff0c\u800c\u4e14\u6ca1\u6709hook\u90a3\u4e48\u7075\u6d3b\u65b9\u4fbf)\uff0c\u800c\u4e14\u4f7f\u7528 useHooks \u7ec4\u4ef6\u901a\u5e38\u9700\u8981\u5c06\u4ee3\u7801\u903b\u8f91\u5206\u5272\u5728\u4e0d\u540c\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u5185\u9020\u6210\u4e1a\u52a1\u903b\u8f91\u5206\u6563\u3002"),(0,l.kt)("h2",{id:"controller"},"Controller"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Controller")," \u7c7b\u6a21\u62df\u4e86 React ",(0,l.kt)("strong",{parentName:"p"},"Class")," \u7ec4\u4ef6\u7684\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5\uff0c\u5305\u62ec setState \u3001forceUpdate \u7b49\u3002\u5bf9\u5e94\u5730\uff0c\u5b83\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"useController")," \u5c06\u5176\u5e94\u7528\u5230 React \u7ec4\u4ef6\u4e0a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type State = {};\ntype Props = {};\nclass MyControler extends Controler<State, Props> {\n    // \u81ea\u5b9a\u4e49\u5b57\u6bb5\n    domRef: createRef();\n    // \u66f4\u591a\u5176\u4ed6\u7684\u81ea\u5b9a\u4e49\u5b57\u6bb5 ....\n    constructor(props) {\n        super(props);\n        // \u5982\u679c\u4f60\u6709\u4e00\u4e9b\u9700\u8981\u5728\u9996\u6b21\u8fdb\u5165\u7ec4\u4ef6\u65f6\u5c31\u6267\u884c\u7684\u903b\u8f91\uff0c\u53ef\u4ee5\u5199\u5728\u8fd9\u91cc\n        // \u4f46\u662f\u4e0d\u80fd\u5728\u8fd9\u91cc\u540c\u6b65\u5730\u8c03\u7528 this.setState\n    }\n    useHooks() {\n        // \u8fd9\u91cc\u5199\u81ea\u5b9a\u7684 hooks \u903b\u8f91\n        // \u4ee3\u7801\u5728\u8fd9\u91cc\u6267\u884c\u4e0e\u5728\u51fd\u6570\u7ec4\u4ef6\u95ed\u5305\u5185\u6267\u884c\u7684\u6548\u679c\u662f\u4e00\u6837\u7684\n        // \u540c\u6837\u907f\u514d\u5728\u8fd9\u91cc\u540c\u6b65\u5730\u8c03\u7528 this.setState\n\n    }\n    // \u81ea\u5b9a\u4e49\u65b9\u6cd5\n    customMethod() {\n        // \u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5\n        // \u53ef\u4ee5\u662f\u67d0\u4e9b\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u81ea\u5b9a\u4e49\u7684 hook\n        // \u53ef\u4ee5\u8c03\u7528 this.setState \u6216 this.forceUpdate\n    }\n    // \u66f4\u591a\u5176\u4ed6\u7684\u81ea\u5b9a\u4e49\u65b9\u6cd5 ....\n}\n")),(0,l.kt)("h2",{id:"reduxcontroller"},"ReduxController"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ReduxController")," \u7ee7\u627f\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"Controler"),"\uff0c\u5728 ",(0,l.kt)("strong",{parentName:"p"},"Controler")," \u7684\u57fa\u7840\u4e0a\u6269\u5c55\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"dispatch")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"store")," \u5b57\u6bb5\u3002\u5bf9\u5e94\u5730\uff0c\u5b83\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"useReduxController")," \u5c06\u5176\u5e94\u7528\u5230 React \u7ec4\u4ef6\u4e0a\u3002"),(0,l.kt)("h2",{id:"usecontroller"},"useController"),(0,l.kt)("p",null,"\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528\u4e00\u4e2a\u5b9a\u4e49\u597d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Controller"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'function TodoList(props) {\n    const [ctrl, { todos, filter }] = useController(TodoController, props);\n    const bindActions = ctrl.actions;\n    return (\n        <div className="todo-module">\n            <AddTodo onSave={bindActions.addTodo} />\n            <Filter type={filter} onChange={bindActions.setFilter} />\n            <div>\n                {todos.map(item => (<Todo\n                    key={item.id}\n                    todo={item}\n                    onToggle={bindActions.toggleTodo}\n                    onDelete={bindActions.delTodo}\n                />))}\n            </div>\n        </div>\n    )\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"useController")," \u9700\u8981\u4f20\u5165\u4e00\u4e2a \u7ee7\u627f\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"Controller")," \u7684\u7c7b\u4ee5\u53ca\u5f53\u524d\u7ec4\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"props")," (\u53ef\u9009)\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u53ea\u6709\u4e24\u4e2a\u5143\u7d20\u7684\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u7b2c\u4e00\u9879\u662f ",(0,l.kt)("strong",{parentName:"p"},"Controller")," \u7c7b\u7684\u5b9e\u4f8b\uff0c\u7b2c\u4e8c\u9879\u662f ",(0,l.kt)("inlineCode",{parentName:"p"}," useHooks()")," \u7684\u8fd4\u56de\u503c\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"useHooks")," \u5728\u7ec4\u4ef6\u6bcf\u6b21\u66f4\u65b0\u65f6\u90fd\u4f1a\u540c\u6b65\u6267\u884c"))),(0,l.kt)("h2",{id:"usereduxcontroller"},"useReduxController"),(0,l.kt)("p",null,"\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528\u4e00\u4e2a\u5b9a\u4e49\u597d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"ReduxController"),"\u3002\u7528\u6cd5\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"useController")," \u4e00\u6837"),(0,l.kt)("h2",{id:"provider"},"Provider"))}u.isMDXComponent=!0}}]);