import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./About";
import Main from "./Main";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="nav-bar">
                    <Link to="/main">Main</Link>
                    <Link to="/about">About</Link>
                </div>
                <Routes>
                    <Route path="/main" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
