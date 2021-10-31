---
sidebar_position: 2
---

# 定义 Model 

一直以来，redux 都作为 react 最为热门的状态管理工具之一，balalalala～～～

## createModel

将 redux 中的 reducer、actions 用统一的方式定义在一起，避免了面条式的代码，使用它可以轻松地完对数据的建模。

👇 下面是一个 todolist 应用的 Model 定义：

```ts
import { createModel, PayloadAction } from "react-ducky";

export type FilterType = 'all'|'unfinished'|'finished';

export interface TodoItem {
    finished: boolean;
    text: string;
    id: string;
}

interface InitialState {
    todos: { [k: string]: TodoItem },
    filter: FilterType,
}

const initialState:InitialState = { 
    todos: {},
    filter: 'all',
}

const { actions, reducer, getState, useModel } =  createModel({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<TodoItem>) {
            const { payload } = action;
            state.todos[payload.id] = payload;
        },
        toggleTodo(state, action: PayloadAction<string>) {
            const { payload } = action;
            const finished = state.todos[payload].finished;
            state.todos[payload].finished = !finished;
        },
        delTodo(state, action: PayloadAction<string>) {
            const { payload } = action;
            delete state.todos[payload];
        },
        setFilter(state, action: PayloadAction<FilterType>) {
            state.filter = action.payload;
        }
    },
    persistence: 'session',
});

export { actions, reducer, getState, useModel }
```
通过一个简单方法调用就完成 todolist 的数据模型定义以及缓存配置等～

### Options

- name： Model 的名字，建议将它作为根reducer对象的挂载字段名
- initialState：初始状态值
- reducers：定义修改状态的方法
- atomFetchers：定义异步数据的获取方法【可选】
- selector：如果你生成的reducer不是使用 Model 的 `name` 挂载在根reducer对象上的话，则需要提供。
- extraReducers：监听其他 action 来修改当前 Model 的状态
- persistence
- persistenceKey

### Model

## 参考
🙏🙏 `createModel` 的设计借鉴了:
- [Dva](https://dvajs.com/guide/concepts.html#models) 的 model 写法
- [redux-toolkits](https://redux-toolkit.js.org/api/createSlice) 的 `creaetSlice`。

## 例子

