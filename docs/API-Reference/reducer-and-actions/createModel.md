---
sidebar_position: 1
sidebar_label: createModel
---
# createModel

`createModel` 函数接受初始状态、reducer函数对象、异步数据函数对象和 Model 名称，并自动生成与 `reducer` 和状态对应的 `actionCreators` 和 `action-type`。

这个API参照了 `redux-toolki` 的 `createSlice` 方法，并对其进行了扩展，使其支持数据持久化缓存配置，异步元数据获取自动生成异步Actions等新特性。

```ts title=UserScoreModel
import { createModel, PayloadAction, AtomObject } from 'react-ducky';

type UserScoreState = {
    userInfo: AtomObject<{name: string}>;
    score: number;
}
const state:UserScoreState = {
    userInfo: null,
    score: 0,
}

const model = createModel({
    name: 'user-score',
    initialState: state,
    reducers: {
        addScore(state, action: PayloadAction<number>) {
            state.score += action.payload;
        },
        decreaseScore(state, action: PayloadAction<number>) {
            state.score -= action.payload;
        }
    },
    atomFetchers: {
        userInfo() {
            return Promise.resolve({name: 'javascript'})
        }
    },
    // 将数据持久化到 sessionStorage，避免刷新页面时状态丢失
    persistence: 'session'
});
// 同步 Action
export const { addScore, decreaseScore} = model.actions;
// 异步 Action
export const { userInfo: getUserInfo } = model.atomActions;
// 数据查询
export const { getState, useModel, name: modelName } = model;
// 数据处理
export default model.reducer;
```

## 参数说明
`createModel` 接受单个配置对象参数，具有以下选项:
```ts title=TYPE
type CreateModelOption = {
    // model 名称，用于生成 action type
    name: string;
    // reducer 的初始值
    initialState: any;
    // "case reducers" 的对象。键名将用于生成动作。
    reducers: Record<string, CaseReducer | CaseReducerWithPrepare>;
    // 异步数据获取方法对象
    atomFetchers: Record<string, PromiseFn>;
    // 配置如何从根State 获取到当前 Model 的 state 的方法，建议 reducer 的挂载键名使用 name (则可以不用提供 selector)
    selector?: (appState: A) => any;
    // 监听其他的 Actions 
    extraReducers?: Record<string, CaseReducer> | ((builder: Builder) => void);
    // 数据持久化配置
    persistence?: 'session'|'local';
    persistenceKey?: string;
}
```
### `reducers`

一个包含 Redux“case reducer”函数的对象（用于处理特定动作类型的函数，相当于 switch 中的单个 case 语句）。这个对象将被传递给 `createReducer`，因此 reducer 可以安全地“改变”它们被赋予的状态。

对象中的键将被用于生成字符串类型的 `action type` ，生成格式是 `[name]/[key]`。

```tsx
import { createModel } from "react-ducky";

const countModel = createModel({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count + 1
        },
    }
})
// 生成的 action type = `counter/increment`
```
#### 自定义 ActionCreator

如果你需要自定义 ActionCreator 方法的参数类型，可以使用 prepare 回调方法进行自定义配置，最终生成的 ActionCreator 与 prepare 回调方法的参数要求是一样的。

```tsx
import { createModel, PayloadAction } from 'react-ducky'

interface Item {
  id: string
  text: string
}

const todosModel = createModel({
  name: 'todos',
  initialState: [] as Item[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.push(action.payload)
      },
      prepare: (text: string) => {
        const id = uuid();
        return { payload: { id, text } }
      },
    },
  },
})

// todosModel.actions.addTodo: (text: string) => PayloadAction<Item>
```

### `atomFetchers`

如果你的 initState 类型中存在一些字段是 `AtomObject` 类型的，createModel 会要求你提供对应的数据获取方法，然后根据你提供的数据获取方法自动生成对应的异步的 `ActionsCreator`

```ts
import { createModel, PayloadAction, AtomObject } from 'react-ducky';

type UserState = {
    userInfo: AtomObject<{ name: string, gender: 0|1|2 }>
}

const userModel = createModel<UserState>({
    name: 'user',
    initialState: { userInfo: null },
    atomFetchers: {
        userInfo() {
            return Promise.resolve({name: 'javascript', gender: 0 })
        }
    }
})

// userModel.atomActions.userInfo: () => (dispatch: Dispatch<AnyAction>) => Promise<{ name: string, gender: 0|1|2 }>
```

### `extraReducers`

用于响应当前 `Model` 生成的 `actions` 之外的其他 `actions`。比如，你需要在退出登录这个动作触发时重置当前 `Model` 的数据，像这种场景使用 `extraReducers` 就会特别方便。

`extraReducers` 支持键值对对象写法和回调写法。

```ts
import { createModel, PayloadAction, AtomObject } from 'react-ducky';

type UserState = {
    userInfo: AtomObject<{ name: string, gender: 0|1|2 }>
}

const userModel = createModel<UserState>({
    name: 'user',
    initialState: { userInfo: null },
    atomFetchers: {
        userInfo() {
            return Promise.resolve({name: 'javascript', gender: 0 })
        }
    },
    // 对象写法
    // extraReducers: {
    //     'logout': (state) => {
    //         state.userInfo = null
    //     }
    // },
    // 回调写法
    extraReducers: (builder) => {
        builder.addCase('logout', (state) => {
            state.userInfo = null;
        });
    },
})
```

### `persistence`

用于选择使用什么存储方式进行持久化缓存，目前可选的就俩种 —— `'local'|'sesstion'`, 分别对应 localStorage 和  sessionStorage

### `persistenceKey`

配置存储时所用的键值，默认是 `REDUX-PERSISTENCE-[name]`

## 返回值说明

`createModel` 返回一个 Model 对象，结构如下：

```ts title=TYPES
/**
 * Model 对象数据结构
 */
export type Model<State> = {
    name: string;
    reducer: Reducer;
    actions: ActionCreators;
    getState: () => State;
    useModel: (selector, config?: { isPending, isEqual }) => any;
    atomFetchers?: AsyncActionCreators
}
```