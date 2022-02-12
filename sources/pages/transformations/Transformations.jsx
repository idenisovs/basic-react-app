import React, { useState, useEffect } from 'react';

import { Anomalies } from '../../api';

import makeLinkedList from './makeLinkedList';
import LinkedList from './LinkedList';

import styles from './Transformations.scss';

export function Transformations() {
    const [anomalies, setAnomalies] = useState(null);
    const [linkedList, setLinkedList] = useState(null);

    useEffect(() => {
        Anomalies.getAll().then(setAnomalies);
    }, []);

    useEffect(() => {
      if (!anomalies) {
        return;
      }

      const linked = makeLinkedList(anomalies);

      setLinkedList(linked);
    }, [anomalies]);

    return (
        <section className={styles.Transformations}>
          <div className={styles.LinkedListDemo}>
            <h2>Linked List Demo</h2>

            <LinkedList list={linkedList} />
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