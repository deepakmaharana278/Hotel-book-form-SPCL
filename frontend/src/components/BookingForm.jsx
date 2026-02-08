import React from "react";
import Navbar from "./Navbar";

const BookingForm = () => {

  
  return (
    <div>
      <Navbar />
      <div className="pt-24 bg-gray-100 min-h-screen py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#045054]">
              Hotel Booking
            </h2>
            <p className="text-gray-600 mt-3">
              Fill in the details below to reserve your stay.
            </p>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">
                Full name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">
                Phone 
              </label>
              <input
                type="tel"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">
                Check-in Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">
                Check-out Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Room Type
              </label>
              <select className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600">
                <option value="">Select Room</option>
                <option>Single</option>
                <option>Double</option>
                <option>Suite</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Guest Count
              </label>
              <input
                type="number"
                min="1"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium mb-2">
                Special Request
              </label>
              <textarea
                rows="4"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#045054] text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
