import React from 'react';
import { NavBar } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Users } from './pages';

import style from './App.scss';

export default function App() {
    return (
        <Router>
            <NavBar />

            <div className={style.PageLayout}>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}