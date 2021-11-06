---
sidebar_position: 3
sidebar_label: useActions
---

## useActions

对 **Model** 的 `actions` 和 `atomActions` 对象进行 `bindActionCreators`

```ts title="useActions 源码"
import { bindActionCreators, Store } from 'redux';
type UseActionsReturn<B, F> = [B, F] & { bindActions: B, fetchAtoms: F };

function useActions<AC extends Parameters<typeof bindActionCreators>[0], AAC extends Parameters<typeof bindActionCreators>[0]>(
    model: { actions: AC, atomActions?: AAC, [k: string]: any }
) {
  const { store } = useContext(ReduxContext);
  return useMemo(() => {
    const bindActions = bindActionCreators(model.actions || {} as AC, store.dispatch);
    const fetchAtoms = bindActionCreators(model.atomActions || {} as AAC, store.dispatch);
    const actions = [bindActions, fetchAtoms] as UseActionsReturn<typeof bindActions, typeof fetchAtoms>;
    actions.bindActions = bindActions;
    actions.fetchAtoms = fetchAtoms;
    return actions;
  }, [])
}
```