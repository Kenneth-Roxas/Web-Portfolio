import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./component/NavBar.jsx";

// Pages
import Home from "./Web/Home.jsx";
import About from "./Web/About.jsx";
import Projects_Certs from "./Web/Porjects.jsx";





export default function Portfolio() {
    return (
        <div className="w-full min-h-screen overflow-x-hidden">
            <Navbar />
            <main className="w-full overflow-x-hidden">
                <Home />
                <About />
                <Projects_Certs />
            </main>
        </div>
    )
}