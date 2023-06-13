import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, reset } from '../../store/counter';

export function Dashboard() {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    function increaseCounter() {
        dispatch(increment())
    }

    function resetCounter() {
        dispatch(reset());
    }

    return (
        <div>
            <div>
                Counter: {counter}
            </div>
            <div>
                <button type="button" onClick={increaseCounter}>
                    Increase
                </button>
                <button type="button" onClick={resetCounter}>
                    Reset
                </button>
            </div>
        </div>
    );
}