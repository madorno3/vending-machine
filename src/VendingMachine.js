import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import navBar from "./styles.css";
import Home from "./Home";
import Doritos from "./Doritos";
import Monster from "./Monster";
import Water from "./Water";
import Oreos from "./Oreos";


function VendingMachine(){
    return (
        <div>
            <BrowserRouter>
                <nav className="navBar">
                    <Link to="/">Home</Link>
                    <Link to="/doritos">Doritos</Link>
                    <Link to="/monster">Monster</Link>
                    <Link to="/water">Water</Link>
                    <Link to="/oreos">Oreos</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/doritos" element={<Doritos />} />
                    <Route path="/monster" element={<Monster />} />
                    <Route path="/water" element={<Water />} />
                    <Route path="/oreos" element={<Oreos />} /> 

                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;