import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img.avif";
import "../App.css";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();
  const hotels = [
    {
      id: 1,
      name: "Ocean View Resort",
      location: "Goa",
      price: 4500,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      name: "Mountain Paradise",
      location: "Manali",
      price: 3200,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
      id: 3,
      name: "City Luxury Hotel",
      location: "Bangalore",
      price: 5200,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="w-full bg-linear-to-r from-[#D4A373] via-[#E6C79C] to-[#D4A373] h-100 text-center flex items-center justify-center">
        <div className="p-10">
          <h1 className="font-bold heading text-3xl md:text-5xl tracking-tight">STAY • BOOK • RELAX</h1>
          <p className="m-5 text-sm">A smarter way to book hotels with transparent pricing, instant confirmation, and stays tailored to your travel needs.</p>
          <button onClick={() => navigate("/booking")} className="bg-[#c8823c] hover:bg-[#c48a5b] text-white text-xl cursor-pointer px-4 py-1 rounded-md">
            Book now
          </button>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#045054] mb-10">Popular Hotels</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300">
              <div className="overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover group-hover:scale-110 transition duration-500" />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#6B4F4F]">{hotel.name}</h3>
                <p className="text-gray-600">{hotel.location}</p>


                <div className="flex items-center gap-1 mt-2 text-[#D4A373]">
                  ★★★★☆
                  <span className="text-gray-600 text-sm ml-2">(4.5)</span>
                </div>

                <p className="mt-2 font-bold text-lg text-[#D4A373]">
                  ₹{hotel.price}
                  <span className="text-sm font-normal text-gray-600"> / night</span>
                </p>

                <button onClick={() => navigate("/booking", { state: hotel })} className="mt-4 w-full bg-[#6B4F4F] hover:bg-[#5a3f3f] text-white py-2 rounded-lg transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#045054]">Contact Us</h2>
            <p className="text-gray-600 mt-3">Have questions or need help with booking? We’d love to hear from you.</p>
          </div>
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Full Name</label>
              <input type="text" placeholder="Enter your name" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div>
              <label className="block font-medium mb-2">Email Address</label>
              <input type="email" placeholder="Enter your email" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium mb-2">Message</label>
              <textarea rows="5" placeholder="Write your message..." className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-[#c48a5b] text-white px-8 py-3 rounded-lg hover:bg-[#cc8144]">
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
