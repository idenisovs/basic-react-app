import React from 'react';
import { NavBar } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, TrafficLights, Users, LinkedListExample } from './pages';

import style from './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <div className={style.PageLayout}>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/traffic-lights" element={<TrafficLights />} />
          <Route path="/linked-list-examples" element={<LinkedListExample />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}