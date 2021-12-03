import React from 'react';
import { NavBar } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Anomalies, Dashboard, TrafficLights, Users } from './pages';

import style from './App.scss';

export default function App() {
  return (
    <Router>
      <NavBar/>

      <div className={style.PageLayout}>
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/traffic-lights">
            <TrafficLights />
          </Route>
          <Route path="/anomalies">
            <Anomalies />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}