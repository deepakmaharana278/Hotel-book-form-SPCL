import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-[#045054] text-[#EEEEEE] p-3 sticky top-0">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link className="text-lg font-bold" to="/">
          BookNest
        </Link>

        <div className="hidden md:flex gap-10 font-medium">
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <i className="fas fa-x"></i> : <i className="fas fa-bars"></i>}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#045054] w-full mt-3 shadow-lg">
          <div className="flex flex-col items-center gap-4 py-4 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
