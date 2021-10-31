import React, { useMemo } from 'react';
import { bindActionCreators } from 'redux'
import { ReduxControler, useReduxController } from 'react-ducky';
import { actions, useModel as useTodoModel, TodoList } from './model';
import  { Todo, AddTodo, Filter } from './components';
import './style.css';

export class TodoController extends ReduxControler {
    actions: typeof actions;
    constructor(store) {
        super(store);
        this.actions = bindActionCreators(actions, this.dispatch);
    }
    useInit() {
        const { filter, todos } = useTodoModel();
        const todoArr = useMemo(() => {
            switch(filter) {
                case 'finished': return todos.filter(todo => todo.finished);
                case 'unfinished': return todos.filter(todo => !todo.finished);
                default: return todos;
            }
        }, [todos, filter]);
        return { filter, todos: todoArr }
    }
}
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