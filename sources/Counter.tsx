import React, { useState } from 'react';

export default function Counter() {
    const [ counter, setCounter ] = useState(0);

    setTimeout(() => {
        setCounter(counter + 1);
    }, 1000);

    return (
        <div>
            Timer: {counter}
        </div>
    );
}