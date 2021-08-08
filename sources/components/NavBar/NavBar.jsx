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
                    <Link to="/users">
                        Users
                    </Link>
                </li>
            </ul>
        </nav>
    )
}