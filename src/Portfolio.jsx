import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./component/NavBar.jsx";

// Pages
import Home from "./Web/Home.jsx";
import About from "./Web/About.jsx";
import Projects_Certs from "./Web/Porjects.jsx";
import Contact from "./Web/Contact.jsx";





export default function Portfolio() {
    return (
        <div className="w-full min-h-screen overflow-x-hidden overflow-y-hidden">
            <Navbar />
            <main className="w-full overflow-x-hidden overflow-y-hidden">
                <Home />
                <About />
                <Projects_Certs />
                <Contact />
            </main>
        </div>
    )
}