import { createModel, PayloadAction, AtomObject, createAction } from 'react-ducky';

const increment = createAction<number | undefined>('counter/increment', (num: number) => num)
increment('')

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
    extraReducers: (builder) => {
        builder.addCase('logout', (state) => {
            state.userInfo = null;
        });
    },
    persistence: 'session'
});

export const { addScore, decreaseScore} = model.actions;
export const { userInfo: getUserInfo } = model.atomActions;
export const { getState, useModel, name: modelName } = model;
export default model.reducer;