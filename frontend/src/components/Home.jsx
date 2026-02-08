import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import img from "../assets/img.avif";

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
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
            {menuOpen ? <i className="fas fa-x"></i> : <i className="fas fa-bars"></i> }
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

      <div className="w-full bg-[#8DD8CC] text-gray-900 h-100 text-center flex items-center justify-center">
        <div className="p-10">
          <h1 className="font-bold heading text-3xl md:text-5xl tracking-tight">STAY • BOOK • RELAX</h1>
          <p className="m-5 text-sm">A smarter way to book hotels with transparent pricing, instant confirmation, and stays tailored to your travel needs.</p>
          <button onClick={() => navigate("/booking")} className="bg-teal-900 text-white px-3 py-1 rounded-md">
            Book now
          </button>
        </div>
      </div>

      {/* about */}
      <div id="about" className="bg-white py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#045054]">About BookNest</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            BookNest helps travelers find comfortable and affordable stays with ease. Our platform provides transparent pricing, instant booking confirmation, and personalized stay options for every
            traveler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={img} alt="Hotel" className="rounded-xl shadow-lg" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#045054] mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              Our goal is to make hotel booking simple, fast, and trustworthy. We focus on providing users with the best deals and a smooth booking experience from search to confirmation.
            </p>

            <h3 className="text-2xl font-semibold text-[#045054] mb-4">Why Choose Us?</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <i className="fa-solid fa-arrow-right"></i> Transparent pricing with no hidden charges
              </li>
              <li>
                <i className="fa-solid fa-arrow-right"></i> Instant booking confirmation
              </li>
              <li>
                <i className="fa-solid fa-arrow-right"></i> Wide range of hotel options
              </li>
              <li>
                <i className="fa-solid fa-arrow-right"></i> Easy and user-friendly interface
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* contact */}
      <div id="contact" className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#045054]">
            Contact Us
          </h2>
          <p className="text-gray-600 mt-3">
            Have questions or need help with booking? We’d love to hear from you.
          </p>
        </div>
        <form className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-[#045054] text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Home;
