import { createModel, PayloadAction } from "react-ducky";

export namespace TodoList {
    export type FilterType = 'all'|'unfinished'|'finished';

    export interface TodoItem {
        finished: boolean;
        text: string;
        id: string;
    }
}

export interface InitialState {
    todos: { [k: string]: TodoList.TodoItem },
    filter: TodoList.FilterType,
}

const initialState:InitialState = { 
    todos: {},
    filter: 'all',
}

const { actions, reducer, getState, useModel, name } =  createModel({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<TodoList.TodoItem>) {
            const { payload } = action;
            state.todos[payload.id] = payload;
        },
        toggleTodo(state, action: PayloadAction<string>) {
            const { payload } = action;
            const finished = state.todos[payload].finished;
            state.todos[payload].finished = !finished;
        },
        delTodo(state, action: PayloadAction<string>) {
            const { payload } = action;
            delete state.todos[payload];
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