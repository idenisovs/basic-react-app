import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.scss';

export function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <div>
            <Link to="/traffic-lights">
              Traffic Lights
            </Link>
          </div>
          <small>HOC example</small>
        </li>
      </ul>
    </nav>
  )
}