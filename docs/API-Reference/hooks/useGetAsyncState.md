---
sidebar_position: 2
sidebar_label: useGetAsyncState
---

配合 `React.Suspence` 使用, 实现在组件内**以同步的方式获取异步的状态值**。减少冗余的逻辑判断。下面是一个简单的示例：

## 使用示例
```tsx
import { useGetAsyncState, useSelector } from 'react-ducky';

// state.user 是一个异步状态，是在 layou 层进行请求的。

// 以前写法
function UserDisplay() {
    const user = useSelector(state => state.user);
    if (!user || !user.name) {
        return null;
    }
    return <div>name: {user.name}</div>
}

// 现在写法
function UserDisplay() {
    const user = useGetAsyncState(state => state.user);
    return <div>name: {user.name}</div>
}
```
在这个简单的场景下优势不算太明显，但是，**如果你的组件内依赖于异步数据的界面展示和计算逻辑变多了，那么使用这种同步的方式将会大大简单的代码复杂度**。同时，如果你使用骨架屏，这个`hooks`可以帮到很大的忙。

## 参数说明

```tsx title="TYPES"
interface UseGetAsyncState<S = any, P = any> {
    (
      selector: (state:S) => P), 
      options?: {
      	isEqual?: (last: P, cur: P) => boolean;
        isPending?: (p: P, state?: S) => boolean;
      }
    ): P;
}
```
### isEqual

新旧值是否相等的判断方法。 默认值：
```ts title="isEqual"
function defaultIsEqual(last: any, cur: any) {
  return last === cur;
}
```

:::tip
`useGetAsyncState` 会在 redux 状态更新时使用 `selector` 获取最新的值，然后同过 `isEqual` 判断新旧值是否有变化，若发生变化，则更新组件状态。
:::

### isPending

用于判断当前值是否是在 `pending` 状态。默认值：
```ts title="isPending"
function defaultIsPending(subState: any) {
  return subState?.isPending || subState === undefined || subState === null;
}
```

:::tip
`useGetAsyncState` 在获取到一个新状态值后使用 `isPending` 方法判断是否如果是pending状态，如果是，则新建一个 `promise` 同时抛出它，并开始监听状态值的转变，在状态值转变为非 `pending` 状态时，将 `promise` 状态设置成 `resolve` 。
:::