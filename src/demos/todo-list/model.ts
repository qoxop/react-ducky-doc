import { createModel, PayloadAction } from "react-ducky";

export namespace TodoList {
    export type TodoItem = { id: string; finished: boolean; text: string; }
    export type FilterType = 'all'|'unfinished'|'finished';
    export interface State {
        todos: TodoItem[],
        filter: FilterType,
    }
}


const initialState:TodoList.State = { 
    todos: [],
    filter: 'all',
}

const { actions, reducer, getState, useModel, name } =  createModel({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<TodoList.TodoItem>) {
            const { payload } = action;
            state.todos.push(payload);
        },
        toggleTodo(state, action: PayloadAction<string>) {
            const { payload } = action;
            const curTode = state.todos.find((todo) => todo.id === payload);
            if (curTode) {
                curTode.finished = !curTode.finished;
            }
        },
        delTodo(state, action: PayloadAction<string>) {
            const { payload } = action;
            state.todos = state.todos.filter(todo => todo.id !== payload);
        },
        setFilter(state, action: PayloadAction<TodoList.FilterType>) {
            state.filter = action.payload;
        }
    },
    persistence: 'session',
});

export {
    actions,
    reducer,
    getState,
    useModel,
    name
}