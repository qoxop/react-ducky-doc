"use strict";(self.webpackChunkreact_ducky_doc=self.webpackChunkreact_ducky_doc||[]).push([[222],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?o.createElement(f,l(l({ref:t},d),{},{components:r})):o.createElement(f,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8281:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],a={sidebar_position:4},s="\u7f16\u5199 Controller",c={unversionedId:"quick-start/controller",id:"quick-start/controller",isDocsHomePage:!1,title:"\u7f16\u5199 Controller",description:"Controller \u7684\u4f5c\u7528\u662f\u94fe\u63a5\u89c6\u56fe\u548c\u6a21\u578b\uff0c\u7ba1\u7406\u6a21\u5757\u751f\u547d\u5468\u671f\u548c\u4e1a\u52a1\u6d41\u7a0b\u7b49\u3002",source:"@site/docs/quick-start/controller.md",sourceDirName:"quick-start",slug:"/quick-start/controller",permalink:"/react-ducky-doc/docs/quick-start/controller",editUrl:"https://github.com/qoxop/react-ducky-doc/tree/main/docs/quick-start/controller.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u5199 UI \u7ec4\u4ef6",permalink:"/react-ducky-doc/docs/quick-start/create-view"},next:{title:"\u5b8c\u6210\u5e94\u7528",permalink:"/react-ducky-doc/docs/quick-start/finish-app"}},d=[{value:"\u270f\ufe0f \u5b9a\u4e49",id:"\ufe0f-\u5b9a\u4e49",children:[],level:2},{value:"\ud83e\udd16 \u4f7f\u7528",id:"-\u4f7f\u7528",children:[],level:2},{value:"\ud83e\uddd0 \u662f\u5982\u4f55\u8fd0\u884c\u7684 ?",id:"-\u662f\u5982\u4f55\u8fd0\u884c\u7684-",children:[],level:2}],u={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7f16\u5199-controller"},"\u7f16\u5199 Controller"),(0,i.kt)("p",null,"Controller \u7684\u4f5c\u7528\u662f\u94fe\u63a5\u89c6\u56fe\u548c\u6a21\u578b\uff0c\u7ba1\u7406\u6a21\u5757\u751f\u547d\u5468\u671f\u548c\u4e1a\u52a1\u6d41\u7a0b\u7b49\u3002"),(0,i.kt)("h2",{id:"\ufe0f-\u5b9a\u4e49"},"\u270f\ufe0f \u5b9a\u4e49"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{10} title="src/todo-list/controller.ts"',"{10}":!0,title:'"src/todo-list/controller.ts"'},"import { useMemo } from 'react';\nimport { bindActionCreators, Store } from 'redux'\nimport { ReduxControler } from 'react-ducky';\nimport { actions, useModel as useTodoModel, TodoList } from './model';\n\nexport class TodoController extends ReduxControler {\n    actions: typeof actions;\n    constructor(store:Store) {\n        super(store);\n        this.actions = bindActionCreators(actions, this.dispatch);\n    }\n    useHooks() {\n        const { filter, todos } = useTodoModel();\n        const todoArr = useMemo(() => this.filterTodos(todos, filter), [todos, filter]);\n        return { filter, todos: todoArr }\n    }\n    filterTodos = (todos: TodoList.TodoItem[], filter: TodoList.FilterType) => {\n        switch(filter) {\n            case 'finished': return todos.filter(todo => todo.finished);\n            case 'unfinished': return todos.filter(todo => !todo.finished);\n            default: return todos;\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"-\u4f7f\u7528"},"\ud83e\udd16 \u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/todo-list/app.ts"',title:'"src/todo-list/app.ts"'},"import React from 'react';\nimport { TodoController } from './controller'\nimport { useReduxController } from 'react-ducky';\nimport  { Todo, AddTodo, Filter } from './components';\n\nexport function TodoApp() {\n    const [ctrl, { todos, filter }] = useReduxController(TodoController);\n    const bindActions = ctrl.actions;\n    return (\n        <div className=\"todo-module\">\n            <AddTodo onSave={ctrl.actions.addTodo} />\n            <Filter type={filter} onChange={bindActions.setFilter} />\n            <div>\n                {todos.map(item => (<Todo\n                    key={item.id}\n                    todo={item}\n                    onToggle={bindActions.toggleTodo}\n                    onDelete={bindActions.delTodo}\n                />))}\n            </div>\n        </div>\n    )\n}\n")),(0,i.kt)("h2",{id:"-\u662f\u5982\u4f55\u8fd0\u884c\u7684-"},"\ud83e\uddd0 \u662f\u5982\u4f55\u8fd0\u884c\u7684 ?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"useReduxController")," \u4f1a\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"TodoController")," \u8fdb\u884c\u5b9e\u4f8b\u5316\uff0c\u5b9e\u4f8b\u5316\u540e\u7684\u5bf9\u8c61\u4e0a\u62e5\u6709\u4e00\u4e0b\u51e0\u4e2a\u5c5e\u6027:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"}),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"state:")," \u7c7b\u4f3c\u4e8e Class \u7ec4\u4ef6\u7684 state \u5c5e\u6027\uff0c\u4e5f\u662f\u54cd\u5e94\u5f0f\u7684\uff0c\u5e95\u5c42\u7528\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"useState")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"immer")," \u5b9e\u73b0\u7684"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setState:")," \u4fee\u6539 state \u503c\u7684\u65b9\u6cd5\uff0c\u53c2\u6570\u4e3a\u51fd\u6570\u65f6\u4e0e Class \u7ec4\u4ef6\u7684\u7528\u6cd5\u4e0d\u540c => \u4f7f\u7528immer\u7684\u4e0d\u53ef\u53d8\u6570\u636e\u65b9\u6cd5\u66f4\u72b6\u6001 ",(0,i.kt)("inlineCode",{parentName:"li"},"this.setState(state => state.count++)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"forceUpdate:")," \u5f3a\u5236\u66f4\u65b0\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"store:")," redux \u7684 store \u5bf9\u8c61\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"ReduxController")," \u624d\u6709"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dispatch:")," redux \u7684 dispatch \u65b9\u6cd5\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"ReduxController")," \u624d\u6709\uff0c\u53ef\u4ee5\u7528\u4e8e\u76f4\u63a5\u89e6\u53d1\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"action"),"\uff0c\u4e5f\u53ef\u4ee5\u4f20\u9012\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"li"},"bindActionCreators")," \u8fdb\u884c\u7ed1\u5b9a"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"useReduxController")," \u4f1a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"TodoController")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"useHooks")," \u65b9\u6cd5\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"useHooks")," \u8fd4\u56de\u503c\u653e\u5728\u81ea\u8eab\u8fd4\u56de\u503c\u6570\u7ec4\u7684\u7b2c\u4e8c\u9879\uff0c\u7b2c\u4e00\u9879\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"Controller")," \u7684\u5b9e\u4f8b\u5bf9\u8c61\u3002")),(0,i.kt)("p",null,"\u8fd9\u6837\uff0c\u89c6\u56fe\u7ec4\u4ef6\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Controller")," \u4e0a\u5b9a\u4e49\u7684\u4e00\u5207\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u540c\u65f6\u4e0d\u9700\u8981\u53bb\u7ba1\u7406\u751f\u547d\u5468\u671f\u548c\u4e1a\u52a1\u6d41\u7a0b\u7b49\u590d\u6742\u903b\u8f91\u3002"))}p.isMDXComponent=!0}}]);