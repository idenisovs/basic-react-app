import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FancyButton } from '../../shared';
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
            <div>
                <h3>Fancy button example</h3>
                <FancyButton>
                    Hello World
                </FancyButton>
            </div>
        </div>
    );
}