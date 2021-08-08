import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <NavBar />
        </Router>
    )
}