import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LinkedListItems from '../LinkedListItems';
import styles from '../LinkedList.scss';
import makeLinkedList from './makeLinkedList';

function ArrayBasedLinkedList(props) {
  const { anomalies } = props;
  const [ linkedList, setLinkedList ] = useState(null);
  const [ currentItem, setCurrentItem ] = useState(null);

  useEffect(() => {
    if (!anomalies) {
      return;
    }

    const arrayBasedLinkedList = makeLinkedList(anomalies);

    setLinkedList(arrayBasedLinkedList);
    setCurrentItem(arrayBasedLinkedList.CurrentItem);
  }, [anomalies])

  function getPreviousNode() {
    setCurrentItem(linkedList.previous());
  }

  function getNextNode() {
    setCurrentItem(linkedList.next());
  }

  if (!currentItem) {
    return null;
  }

  return (
    <div className={styles.LinkedList}>
      <button disabled={!linkedList.IsPreviousAvailable} onClick={getPreviousNode}>
        Previous Node
      </button>

      <div className={styles.ListItems}>
        <LinkedListItems items={currentItem.items} />
        <small>
          {Math.round(currentItem.rate * 100)}%
        </small>
      </div>

      <button disabled={!linkedList.IsNextAvailable} onClick={getNextNode}>
        Next Node
      </button>
    </div>
  );
}

ArrayBasedLinkedList.propTypes = {
  linkedList: PropTypes.object
};

ArrayBasedLinkedList.defaultProps = {
  linkedList: null
}

export default ArrayBasedLinkedList;