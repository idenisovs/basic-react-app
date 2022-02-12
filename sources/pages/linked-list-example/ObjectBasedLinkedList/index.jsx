import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LinkedListItems from '../LinkedListItems';
import makeLinkedList from './makeLinkedList';
import styles from '../LinkedList.scss';

function ObjectBasedLinkedList(props) {
  const { anomalies } = props;

  const [ linkedList, setLinkedList ] = useState({});

  useEffect(() => {
    if (!anomalies) {
      return;
    }

    const objectBasedLinkedList = makeLinkedList(anomalies);

    setLinkedList(objectBasedLinkedList);
  }, [anomalies]);

  const { prev: prevNode, next: nextNode } = linkedList;

  function getPreviousNode() {
    setLinkedList(prevNode);
  }

  function getNextNode() {
    setLinkedList(nextNode);
  }

  const { currentItem } = linkedList;

  if (!currentItem) {
    return null;
  }

  return (
    <div className={styles.LinkedList}>
      <button disabled={!prevNode} onClick={getPreviousNode}>
        Previous Node
      </button>

      <div className={styles.ListItems}>
        <LinkedListItems items={currentItem.items} />
        <small>
          {linkedList && Math.round(currentItem.rate * 100) + '%'}
        </small>
      </div>

      <button disabled={!nextNode} onClick={getNextNode}>
        Next Node
      </button>
    </div>
  );
}

ObjectBasedLinkedList.propTypes = {
  anomalies: PropTypes.object
};

export default ObjectBasedLinkedList;