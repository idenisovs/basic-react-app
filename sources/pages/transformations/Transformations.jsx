import React, { useState, useEffect } from 'react';

import { Anomalies } from '../../api';

import makeLinkedList from './makeLinkedList';
import ObjectBasedLinkedList from './ObjectBasedLinkedList';

import styles from './Transformations.scss';
import ArrayBasedLinkedList from './ArrayBasedLinkedList';

export function Transformations() {
    const [anomalies, setAnomalies] = useState(null);
    const [linkedList, setLinkedLists] = useState({
      objectBased: null,
      arrayBased: null
    });

    useEffect(() => {
        Anomalies.getAll().then(setAnomalies);
    }, []);

    useEffect(() => {
      if (!anomalies) {
        return;
      }

      setLinkedLists({
        arrayBased: makeLinkedList(anomalies, true),
        objectBased: makeLinkedList(anomalies, false)
      });
    }, [anomalies]);

    return (
      <section className={styles.Transformations}>
        <div className={styles.LinkedListDemo}>
          <h2>Linked List Demo</h2>

          <div>
            <h3>Object Based</h3>
            <ObjectBasedLinkedList linkedList={linkedList.objectBased} />
          </div>

          <div>
            <h3>Array Based</h3>
            <ArrayBasedLinkedList linkedList={linkedList.arrayBased} />
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