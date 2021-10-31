---
sidebar_position: 1
sidebar_label: 基础使用
---
import TodoList from 'src/demos/todo-list';


# 基础使用

## 安装

```shell
yarn add react-ducky
```

## 需求
- react 版本 > 16.13.1，必须支持 hooks 写法
- 必须安装 redux，版本不限

## 使用

如果你正在使用的 react-redux 版本还不支持使用 Hook，那么，现在可以使用 react-ducky 来提供。需要在根组件上包裹一个 ReduxProvider 组件，并给这个组件传入一个 store 对象:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxProvider } from 'react-ducky';
import { store } from './store';
import App from './App';

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.Suspense fallback={<div>loading...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
```
### 使用 Hooks API

```tsx
import React, { useEffect } from 'react';
import { useSeletor, useDispatch } from 'react-ducky';

function User() {
  const user = useSeletor(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://example.com/api/get-user')
      .then(function(response) {
         dispatch({type: 'set-user-info', payload: response.json()});
      })
  }, [])

  return <div>
    <div>name: {user?.name}</div> 
  </div>
}
```
:::info
⚠️ `useSeletor` 不考虑传入的 seletor 函数变化的情况(只采用第一次传入的 selector 函数)
:::

## DEMO: Todo-List

下面几个篇章，将使用 `react-ducky` 从零开始搭建一个简易版的 todo-list 应用

<div style={{padding: 16, margin: 16, border: '1px solid #999'}}>
  <TodoList />
</div>
