---
sidebar_position: 1
sidebar_label: base
---

# 兼容 API

为了帮助那些暂时升级不了 `react-redux` 的项目使用上 Hook 写法，而实现了一套接口和表现行为与 `react-redux` 一致的 Hook API。

## `useSelector`

传入一个 `selecter` 函数，从 `redux` 的全局 `state` 中订阅某个值，如果值发生了变化，会通知到组件进行更新

```tsx title="TYPES"
interface UseSelector<S = any, P = any> {
    (selector: (state:S) => P), isEqual?: (last: P, cur: P) => boolean): P;
}
```
`isEqual` 参数是可选的，默认使用 `===` 进行判断。

```tsx title="DEMO"
import { useSelector } from 'react-ducky';

funtion UserDisplay() {
    const user = useSelector(state => state.user);
    return (<div>name: {user.name}</div>);
}
```

:::note
⚠️ ` useSeletor ` 不考虑传入的 seletor 函数变化的情况(只采用第一次传入的 selector 函数)
:::


## ` useDispatch `

  获取 ` redux ` 的 ` dispatch ` 方法

## ` useStore `

  获取 ` redux ` 的 ` store ` 对象

