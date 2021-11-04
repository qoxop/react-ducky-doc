---
sidebar_position: 1
sidebar_label: useGetAsyncState
---

配合 `React.Suspence`, 实现在组件内**以同步的方式获取异步的状态值**。减少冗余的逻辑判断。下面是一个简单的示例：

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
在这个简单的场景下优势不算太明显，但是，**如果你的组件内依赖于异步数据的界面展示和计算逻辑变多了，那么使用这种同步的方式将会大大简单的代码复杂度**。

同时，结合 `useGetAsyncState` 你可以很方便地应用上骨架屏。

```tsx title="TYPES"
interface UseSelector<S = any, P = any> {
    (
      selector: (state:S) => P), 
      options?: {
      	isEqual?: (last: P, cur: P) => boolean;
        isPending?: (p: P, state?: S) => boolean;
      }
    ): P;
}
```

