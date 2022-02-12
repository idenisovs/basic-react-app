import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LinkedListItems from './LinkedListItems';
import styles from './LinkedList.scss';

function ObjectBasedLinkedList(props) {
  const { linkedList } = props;

  const [ currentNode, setCurrentNode ] = useState({});

  useEffect(() => {
    if (!linkedList) {
      return;
    }

    setCurrentNode(linkedList);
  }, [linkedList]);

  const { prev: prevNode, next: nextNode } = currentNode;

  function getPreviousNode() {
    setCurrentNode(prevNode);
  }

  function getNextNode() {
    setCurrentNode(nextNode);
  }

  const { item: currentItem } = currentNode;

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
  linkedList: PropTypes.object
};

export default ObjectBasedLinkedList;