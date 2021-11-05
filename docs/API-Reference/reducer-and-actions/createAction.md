---
sidebar_position: 2
sidebar_label: createAction
---
# createAction

用于定义 Redux `actionType` 和 `actionCreator` 的辅助函数。

```ts
function createAction(type: any, prepareAction?): ActionCreator
```

以前的Redux 写法通常是将 action 和创建 action (`actionCreator`) 的方法分别定义的

```ts
const INCREMENT = 'counter/increment'

function increment(amount: number) {
  return {
    type: INCREMENT,
    payload: amount,
  }
}

const action = increment(3)
// { type: 'counter/increment', payload: 3 }
```

`createAction` 将这两个步骤融合在一起定义，简化的编码步骤。

`createAction` 返回的 `actionCreator` 的 `toString` 方法被重写，返回传入的 `type` 参数。而 `actionCreator` 返回的 `action` 及其参数类型要求可以由传入的 `prepareAction` 进行自定义：

```ts
import { createAction } from 'react-ducky'

const increment = createAction<number | undefined>('counter/increment')

let action = increment()
// { type: 'counter/increment' }

action = increment(3)
// returns { type: 'counter/increment', payload: 3 }

console.log(increment.toString())
// 'counter/increment'

console.log(`The action type is: ${increment}`)
// 'The action type is: counter/increment'

const addTodo = createAction<number | undefined>('todo/add-todo', (text: string) => ({ payload: { text, id: uuid() } }));
// ActionCreator<number, unknown[]>
addTodo('todo item~~~');
// { type: 'todo/add-todo', payload: { text: 'todo item~~~', id: xxxx' } }

```
