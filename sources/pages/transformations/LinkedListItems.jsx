import React from 'react';
import PropTypes from 'prop-types';

import styles from './LinkedListItems.scss';

const colors = [
  'blue',
  'MediumSpringGreen',
  'red',
  'yellow'
]

function LinkedListItems(props) {
  const { items } = props;

  if (!items.length) {
    return <span>No items!</span>
  }

  let counter = 0;

  return (
    <div className={styles.LinkedListItems}>
      {items.map((item, idx) => {
        const color = colors[counter];

        counter++;

        if (counter === 3) {
          counter = 0;
        }

        return (
          <span key={idx} style={{ color }}>
            {item.name}
          </span>
        );
      })}
    </div>
  );
}

LinkedListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

LinkedListItems.defaultProps = {
  items: []
};

export default LinkedListItems;