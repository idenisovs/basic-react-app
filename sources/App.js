import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar } from './components';
import { Dashboard } from './pages';
import { TrafficLights } from './pages/traffic-lights/TrafficLights';


import style from './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <div className={style.PageLayout}>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/traffic-lights" element={<TrafficLights />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}