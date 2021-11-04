---
sidebar_position: 3
---

# 编写 UI 组件

现在我们需要编写几个UI组件来，展示我们的界面：
- 新增待办组件
- 待办项组件
- 条件过滤器组件

```tsx title="新增待办组件 => src/todo-list/components/add-todo.tsx"
import React, { useState } from 'react';
import { TodoList } from '../model';

export function AddTodo(props: {
    onSave: (todo: TodoList.TodoItem) => void,
}) {
    const [text, setText] = useState('');
    const submit = () => {
        if (text) {
            props.onSave({ id: `${Date.now()}`, finished: false, text, });
            setText('');
        }
    }
    return (
        <div className="add-todo">
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button disabled={!text} onClick={submit}>
                保存
            </button>
        </div>
    )
}
```

```tsx title="条件过滤器组件 => src/todo-list/components/filter.tsx"
import React from 'react';
import { TodoList } from '../model';

export function Filter(props: { 
    type: TodoList.FilterType;
    onChange: (t: TodoList.FilterType) => void;
}) {
    return (
        <div className="filter">
            <span>Filter:</span>
            <span className={props.type === 'all' ? 'active' : ''} onClick={() => props.onChange('all')} >
                all
            </span> |
            <span className={props.type === 'unfinished' ? 'active' : ''} onClick={() => props.onChange('unfinished')} >
                unfinished
            </span> | 
            <span className={props.type === 'finished' ? 'active' : ''} onClick={() => props.onChange('finished')}>
                finished
            </span>
        </div>
    )
}
```

```tsx title="待办项组件 => src/todo-list/components/todo.tsx"
import React from 'react';
import { TodoList } from '../model';

export function Todo(props: { 
    todo: TodoList.TodoItem;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}) {
    return (
        <div className="todo">
            <div className="checkbox">
                <input
                    type="checkbox"
                    checked={props.todo.finished}
                    onChange={() => props.onToggle(props.todo.id)}
                    name={props.todo.text} id={props.todo.id}
                />
            </div>
            <div className={`todo-text ${props.todo.finished ? 'finished' : ''}`}>
                <span>
                    {props.todo.text}
                </span>
            </div>
            <div className="todo-del" onClick={() => props.onDelete(props.todo.id)}>x</div>
        </div>
        
    )
}
```