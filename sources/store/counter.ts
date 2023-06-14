import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        reset: state => {
            state.value = 0;
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
