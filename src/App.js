import React from 'react';
import { Routes, Route } from "react-router-dom";

// importing the pages
import Home from './pages/home/Home';
import Abbout from './pages/abbout/abbout';
import Charity from './pages/Charity/Charity';
import Donate from './pages/donate/Donate';
import Mission from './pages/Missions';


const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="Abbout" element={<Abbout/>} />
                <Route path="Charity" element={<Charity/>} />
                <Route path="Donate" element={<Donate/>} />
                <Route path="Mission" element={<Mission/>} />
            </Routes>
        </div>
    );
}
export default App
