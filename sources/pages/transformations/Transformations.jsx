import React, { useState, useEffect } from 'react';

import { Anomalies } from '../../api';

export function Transformations() {
    const [anomalies, setAnomalies] = useState([]);

    useEffect(() => {
        Anomalies.getAll().then(setAnomalies);
    }, [])

    return (
        <section>
            <h2>Raw data</h2>
            <pre>
                {JSON.stringify(anomalies, null, 4)}
            </pre>
        </section>
        
    );
}