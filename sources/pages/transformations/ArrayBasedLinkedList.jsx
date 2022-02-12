import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LinkedListItems from './LinkedListItems';
import styles from './LinkedList.scss';

function ArrayBasedLinkedList(props) {
  const { linkedList } = props;
  const [ currentNode, setCurrentNode ] = useState({});

  useEffect(() => {
    if (linkedList) {
      setCurrentNode(linkedList.CurrentNode);
    }
  }, [linkedList])

  function getPreviousNode() {
    setCurrentNode(linkedList.previous());
  }

  function getNextNode() {
    setCurrentNode(linkedList.next());
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
        <LinkedListItems items={currentNode.items} />
        <small>
          {Math.round(currentNode.rate * 100)}%
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