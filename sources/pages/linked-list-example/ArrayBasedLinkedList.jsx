import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LinkedListItems from './LinkedListItems';
import styles from './LinkedList.scss';

function ArrayBasedLinkedList(props) {
  const { linkedList } = props;
  const [ currentItem, setCurrentItem ] = useState({});

  useEffect(() => {
    if (linkedList) {
      setCurrentItem(linkedList.CurrentItem);
    }
  }, [linkedList])

  function getPreviousNode() {
    setCurrentItem(linkedList.previous());
  }

  function getNextNode() {
    setCurrentItem(linkedList.next());
  }

  if (!linkedList) {
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