---
sidebar_position: 2
---
# 创建新应用

使用你喜欢的脚手架工具创建一个 React 项目，这里使用 vite 的 `@vitejs/app` 进行演示
```shell
yarn create @vitejs/app my-todo-list --template react-ts
cd my-todo-list
```

## 安装依赖

```shell
yarn add redux react-ducky
```

## 配置 Redux
在 src 目录下创建一个 store.ts 文件，在里面定义你的 store 对象。
```ts title=src/store.ts
import {
    compose,
    Reducer,
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { thunkMiddleware } from 'react-ducky';

type ArrayItem<T> = T|Array<T>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;

const reducerObj = {}

export const store = createStore(
    state => state,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);
export const injectReduce = (reducers: ArrayItem<{ key: string; reducer: Reducer; }>) => {
    reducers = reducers instanceof Array ? reducers: [reducers];
    let hasNew = false;
    reducers.forEach(({key, reducer}) => {
        if (!reducerObj[key]) {
            hasNew = true;
            reducerObj[key] = reducer;
        };
    });
    store.replaceReducer(combineReducers(reducerObj));
}
```
## 改造 main.tsx
把 App 包裹上 一个 `ReduxProvider` 组件，确保其他 API 能正常使用。
```tsx {3,4,10,12} title=src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ReduxProvider } from 'react-ducky';
import { store } from './store'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
```
应用已经搭建好，就可以开始来定义数据模型了。