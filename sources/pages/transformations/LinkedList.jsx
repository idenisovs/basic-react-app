import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LinkedListItems from './LinkedListItems';
import styles from './LinkedList.scss';

function LinkedList(props) {
  const { list } = props;

  const [ currentNode, setCurrentNode ] = useState({});

  useEffect(() => {
    if (!list) {
      return;
    }

    setCurrentNode(list);
  }, [list]);

  const { prev: prevNode, next: nextNode } = currentNode;

  function getPreviousNode() {
    setCurrentNode(prevNode);
  }

  function getNextNode() {
    setCurrentNode(nextNode);
  }

  return (
    <div className={styles.LinkedList}>
      <button disabled={!prevNode} onClick={getPreviousNode}>
        Previous Node
      </button>

      <div className={styles.ListItems}>
        <LinkedListItems items={currentNode.items} />
        <small>
          {Math.round(currentNode.rate * 100)}%
        </small>
      </div>

      <button disabled={!nextNode} onClick={getNextNode}>
        Next Node
      </button>
    </div>
  );
}

LinkedList.propTypes = {
  list: PropTypes.object
};

export default LinkedList;