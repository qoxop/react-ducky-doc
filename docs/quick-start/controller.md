---
sidebar_position: 4
---

# 编写 Controller

Controller 的作用是链接视图和模型，管理模块生命周期和业务流程等。

## ✏️ 定义

```tsx {10} title="src/todo-list/controller.ts"
import { useMemo } from 'react';
import { bindActionCreators, Store } from 'redux'
import { ReduxControler } from 'react-ducky';
import { actions, useModel as useTodoModel, TodoList } from './model';

export class TodoController extends ReduxControler {
    actions: typeof actions;
    constructor(store:Store) {
        super(store);
        this.actions = bindActionCreators(actions, this.dispatch);
    }
    useHooks() {
        const { filter, todos } = useTodoModel();
        const todoArr = useMemo(() => this.filterTodos(todos, filter), [todos, filter]);
        return { filter, todos: todoArr }
    }
    filterTodos = (todos: TodoList.TodoItem[], filter: TodoList.FilterType) => {
        switch(filter) {
            case 'finished': return todos.filter(todo => todo.finished);
            case 'unfinished': return todos.filter(todo => !todo.finished);
            default: return todos;
        }
    }
}
```

## 🤖 使用
```tsx title="src/todo-list/app.ts"
import React from 'react';
import { TodoController } from './controller'
import { useReduxController } from 'react-ducky';
import  { Todo, AddTodo, Filter } from './components';

export function TodoApp() {
    const [ctrl, { todos, filter }] = useReduxController(TodoController);
    const bindActions = ctrl.actions;
    return (
        <div className="todo-module">
            <AddTodo onSave={ctrl.actions.addTodo} />
            <Filter type={filter} onChange={bindActions.setFilter} />
            <div>
                {todos.map(item => (<Todo
                    key={item.id}
                    todo={item}
                    onToggle={bindActions.toggleTodo}
                    onDelete={bindActions.delTodo}
                />))}
            </div>
        </div>
    )
}
```

## 🧐 是如何运行的 ?

1. **useReduxController** 会将 **TodoController** 进行实例化，实例化后的对象上拥有一下几个属性:
   -  
   - **state:** 类似于 Class 组件的 state 属性，也是响应式的，底层用的是 ` useState ` 和 ` immer ` 实现的，当然 state 必须是一个对象。
   - **setState:** 修改 state 值的方法，使用方法：`this.setState(newState)` 或 ` this.setState(state => state.count++) `
   - **forceUpdate:** 强制更新组件
   - **store:** Redux 的 store 对象，继承了 `ReduxController` 才有
   - **dispatch:** Redux 的 dispatch 方法，继承了 `ReduxController` 才有，可以用于直接触发一个 ` action `，也可以传递给 `bindActionCreators` 进行绑定
2. **useReduxController** 会调用 **TodoController** 的 ` useHooks ` 方法，将 ` useHooks ` 返回值放在自身返回值数组的第二项，第一项是 ` Controller ` 的实例对象。

这样，视图组件就可以使用 `Controller` 上定义的一切属性和方法，同时不需要去管理生命周期和业务流程等复杂逻辑。

