import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    value: 0
};

export const increment = createAction('counter/increment');
export const reset = createAction('counter/reset');

export const counterReducer = createReducer(initialState, {
    [increment]: (state) => {
        state.value++;
    },
    [reset]: () => {
        return { ...initialState };
    }
});


