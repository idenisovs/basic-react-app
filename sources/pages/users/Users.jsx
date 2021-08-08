import React from 'react';
import { useSelector } from 'react-redux';

export function Users() {
    const counter = useSelector(state => state.counter.value);

    return (
        <div>
            Users: {counter}
        </div>
    );
}