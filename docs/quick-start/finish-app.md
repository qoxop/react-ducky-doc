---
sidebar_position: 5
---
import TodoList from 'src/demos/todo-list';

# 完成应用

最后，我们需要给我们的应用添加样式，并将 todo-list 模块连接到根组件上即可, [查看完整demo地址](https://github.com/qoxop/react-ducky/tree/main/demos)

```tsx title="改写 src/App.tsx"
import { TodoApp } from './todo/app';
import { reducer, name } from './todo/model';
import { injectReduce } from './store';
import "./App.less";

injectReduce({ key: name, reducer });

export default TodoApp;
```

```less title="改写 src/App.less"
.todo-module {
    max-width: 768px;
    margin: 0 auto;
    .add-todo {
        display: flex;
        margin: 10px 0px;
        input {
            display: block;
            flex: 1;
        }
        button {
            margin: 0 12px;
        }
    }
    .filter {
        margin: 10px 0px;
        span {
            display: inline-block;
            margin: 0 6px;
            color: #666;
            cursor: pointer;
        }
        span:hover {
            text-decoration: underline;
        }
        span.active {
            color: rgb(16, 80, 177);
        }
    }
    .todo {
        display: flex;
        margin: 10px 0px;
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 4px;
        .todo-text {
            margin: 0px 10px;
            flex: 1;
            align-items: center;
            &.finished {
                text-decoration: line-through;
                color: #999;
            }
        }
        .todo-del {
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            background-color: red;
            border-radius: 4px;
            color: #fff;
            font-size: 10px;
        }
    }
}
```

把一些无关文件删除后可以得到如下的文件目录结构。

```shell
.
├── index.html
├── package.json
├── src
│   ├── App.tsx
│   ├── App.less
│   ├── main.tsx
│   ├── store.ts
│   ├── todo-list
│   │   ├── app.tsx
│   │   ├── components
│   │   │   ├── add-todo.tsx
│   │   │   ├── filter.tsx
│   │   │   ├── index.ts
│   │   │   └── todo.tsx
│   │   ├── controller.ts
│   │   └── model.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── vite.config.ts
└── yarn.lock
```

执行如下 `yarn dev` 查看效果


<div style={{padding: 16, margin: 16, border: '1px solid #999'}}>
  <TodoList />
</div>