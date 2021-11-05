"use strict";(self.webpackChunkreact_ducky_doc=self.webpackChunkreact_ducky_doc||[]).push([[104],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(r),m=c,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9470:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var n=r(7462),c=r(3366),a=(r(7294),r(3905)),o=["components"],i={sidebar_position:2},u="\u521b\u5efa\u65b0\u5e94\u7528",s={unversionedId:"quick-start/create-app",id:"quick-start/create-app",isDocsHomePage:!1,title:"\u521b\u5efa\u65b0\u5e94\u7528",description:"\u4f7f\u7528\u4f60\u559c\u6b22\u7684\u811a\u624b\u67b6\u5de5\u5177\u521b\u5efa\u4e00\u4e2a React \u9879\u76ee\uff0c\u8fd9\u91cc\u4f7f\u7528 vite \u7684 @vitejs/app \u8fdb\u884c\u6f14\u793a",source:"@site/docs/quick-start/create-app.md",sourceDirName:"quick-start",slug:"/quick-start/create-app",permalink:"/react-ducky-doc/docs/quick-start/create-app",editUrl:"https://github.com/qoxop/react-ducky-doc/tree/main/docs/quick-start/create-app.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u4f7f\u7528",permalink:"/react-ducky-doc/docs/quick-start/base"},next:{title:"\u5b9a\u4e49 Model",permalink:"/react-ducky-doc/docs/quick-start/create-model"}},p=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:2},{value:"\u914d\u7f6e Redux",id:"\u914d\u7f6e-redux",children:[],level:2},{value:"\u6539\u9020 main.tsx",id:"\u6539\u9020-maintsx",children:[],level:2}],d={toc:p};function l(e){var t=e.components,r=(0,c.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u521b\u5efa\u65b0\u5e94\u7528"},"\u521b\u5efa\u65b0\u5e94\u7528"),(0,a.kt)("p",null,"\u4f7f\u7528\u4f60\u559c\u6b22\u7684\u811a\u624b\u67b6\u5de5\u5177\u521b\u5efa\u4e00\u4e2a React \u9879\u76ee\uff0c\u8fd9\u91cc\u4f7f\u7528 vite \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@vitejs/app")," \u8fdb\u884c\u6f14\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn create @vitejs/app my-todo-list --template react-ts\ncd my-todo-list\n")),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add redux react-ducky\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e-redux"},"\u914d\u7f6e Redux"),(0,a.kt)("p",null,"\u5728 src \u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a store.ts \u6587\u4ef6\uff0c\u5728\u91cc\u9762\u5b9a\u4e49\u4f60\u7684 store \u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/store.ts",title:"src/store.ts"},"import {\n    compose,\n    Reducer,\n    createStore,\n    combineReducers,\n    applyMiddleware\n} from 'redux';\nimport { thunkMiddleware } from 'react-ducky';\n\ntype ArrayItem<T> = T|Array<T>;\n\nconst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?\n    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :\n    compose;\n\nconst reducerObj = {}\n\nexport const store = createStore(\n    state => state,\n    composeEnhancers(applyMiddleware(thunkMiddleware))\n);\nexport const injectReduce = (reducers: ArrayItem<{ key: string; reducer: Reducer; }>) => {\n    reducers = reducers instanceof Array ? reducers: [reducers];\n    let hasNew = false;\n    reducers.forEach(({key, reducer}) => {\n        if (!reducerObj[key]) {\n            hasNew = true;\n            reducerObj[key] = reducer;\n        };\n    });\n    store.replaceReducer(combineReducers(reducerObj));\n}\n")),(0,a.kt)("h2",{id:"\u6539\u9020-maintsx"},"\u6539\u9020 main.tsx"),(0,a.kt)("p",null,"\u628a App \u5305\u88f9\u4e0a \u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReduxProvider")," \u7ec4\u4ef6\uff0c\u786e\u4fdd\u5176\u4ed6 API \u80fd\u6b63\u5e38\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3,4,10,12} title=src/main.tsx","{3,4,10,12}":!0,title:"src/main.tsx"},"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { ReduxProvider } from 'react-ducky';\nimport { store } from './store'\nimport App from './App'\n\nReactDOM.render(\n  <React.StrictMode>\n    <ReduxProvider store={store}>\n      <App />\n    </ReduxProvider>\n  </React.StrictMode>,\n  document.getElementById('root')\n)\n")),(0,a.kt)("p",null,"\u5e94\u7528\u5df2\u7ecf\u642d\u5efa\u597d\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u6765\u5b9a\u4e49\u6570\u636e\u6a21\u578b\u4e86\u3002"))}l.isMDXComponent=!0}}]);