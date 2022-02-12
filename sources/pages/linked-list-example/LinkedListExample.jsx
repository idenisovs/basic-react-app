import React, { useState, useEffect } from 'react';

import { Anomalies } from '../../api';

import ObjectBasedLinkedList from './ObjectBasedLinkedList';
import ArrayBasedLinkedList from './ArrayBasedLinkedList';

import styles from './LinkedListExample.scss';

export function LinkedListExample() {
    const [anomalies, setAnomalies] = useState(null);

    useEffect(() => {
        Anomalies.getAll().then(setAnomalies);
    }, []);

    return (
      <section className={styles.LinkedListExample}>
        <div className={styles.LinkedListDemo}>
          <h2>Linked List Demo</h2>

          <div>
            <h3>Object Based</h3>
            <ObjectBasedLinkedList anomalies={anomalies} />
          </div>

          <div>
            <h3>Array Based</h3>
            <ArrayBasedLinkedList anomalies={anomalies} />
          </div>

        </div>

        <div className={styles.RawData}>
          <h2>Raw data</h2>
          <pre>
              {JSON.stringify(anomalies, null, 4)}
          </pre>
        </div>
      </section>
    );
}