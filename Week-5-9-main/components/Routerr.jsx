import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Routerr() {
  return (
    <BrowserRouter>
      <div>
        <h1>My Website</h1>

        {/* Navigation Bar */}
        <nav>
          <Link to="/">Home</Link>  
          <Link to="/about"> About</Link>  
          <Link to="/contact"> Contact</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routerr;