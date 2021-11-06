---
sidebar_position: 3
sidebar_label: Controller Tools
---
# Controller Tools

**react-ducky** 提供了一系列的方法，让你可以同时使用 **Class + Hooks** 的方式来编写业务逻辑， 类似于 MVC 模式中的 **Controller** 层。


## 目的

因为对于复杂组件而言，用 **Class** 的方式去组织代码逻辑比在函数闭包内去组织要简洁得多。

但以往的 **Class** 组件对于逻辑复用和抽象不是那么友好(通常需要用到高阶组件，而且没有hook那么灵活方便)，而且使用 useHooks 组件通常需要将代码逻辑分割在不同的生命周期函数内造成业务逻辑分散。

## Controller

**Controller** 类模拟了 React **Class** 组件的一些常用方法，包括 setState 、forceUpdate 等。对应地，它需要使用 `useController` 将其应用到 React 组件上

```ts
type State = {};
type Props = {};
class MyControler extends Controler<State, Props> {
    // 自定义字段
    domRef: createRef();
    // 更多其他的自定义字段 ....
    constructor(props) {
        super(props);
        // 如果你有一些需要在首次进入组件时就执行的逻辑，可以写在这里
        // 但是不能在这里同步地调用 this.setState
    }
    useHooks() {
        // 这里写自定的 hooks 逻辑
        // 代码在这里执行与在函数组件闭包内执行的效果是一样的
        // 同样避免在这里同步地调用 this.setState

    }
    // 自定义方法
    customMethod() {
        // 自定义的方法
        // 可以是某些事件回调函数，也可以是自定义的 hook
        // 可以调用 this.setState 或 this.forceUpdate
    }
    // 更多其他的自定义方法 ....
}
```
## ReduxController

**ReduxController** 继承了 **Controler**，在 **Controler** 的基础上扩展了 `dispatch` 和 `store` 字段。对应地，它需要使用 `useReduxController` 将其应用到 React 组件上。

## useController

在组件内使用一个定义好的 `Controller`。
```tsx
function TodoList(props) {
    const [ctrl, { todos, filter }] = useController(TodoController, props);
    const bindActions = ctrl.actions;
    return (
        <div className="todo-module">
            <AddTodo onSave={bindActions.addTodo} />
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
**useController** 需要传入一个 继承了 **Controller** 的类以及当前组件的 `props` (可选)，然后返回一个只有两个元素的数组，数组的第一项是 **Controller** 类的实例，第二项是 ` useHooks()` 的返回值。

:::tip
`useHooks` 在组件每次更新时都会同步执行
:::

## useReduxController

在组件内使用一个定义好的 **ReduxController**。用法与 `useController` 一样

## Provider