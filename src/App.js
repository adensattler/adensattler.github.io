import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './components/Header/Header';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Play from './pages/Play/Play';

function App() {
    return (
        <div className="body">
            {/* navbar */}
            <Header />

            <Routes>
                <Route exact path="/" element={<Work />} />
                <Route exact path="/play" element={<Play />} />
                <Route exact path="/about" element={<About />} />
                {/* wildcard route */}
                {/* <Route exact path="*" element={<Work />} /> */}
            </Routes>
        </div>
    );
}

export default App;
