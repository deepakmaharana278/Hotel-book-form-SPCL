import React, { useState } from "react";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "",
    specialRequest: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.fullname) {
      newErrors.fullname = "Full Name is required";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
    }
    if (!formData.checkIn) {
      newErrors.checkIn = "Check-in date is required";
    }

    if (!formData.checkOut) {
      newErrors.checkOut = "Check-out date is required";
    }
    if (formData.checkIn && formData.checkOut) {
      if (formData.checkOut <= formData.checkIn) {
        newErrors.checkOut = "Check-out date must be after check-in date";
      }
    }
    if (!formData.roomType) {
      newErrors.roomType = "Please select a room type";
    }

    if (!formData.guests || formData.guests < 1) {
      newErrors.guests = "Guest count must be at least 1";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        fullname: formData.fullname,
        phone: formData.phone,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        roomType: formData.roomType,
        guests: Number(formData.guests),
        specialRequest: formData.specialRequest,
        createdAt: Timestamp.now(),
      });

      toast.success("Booking saved successfully!");
      setFormData({
        fullname: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        roomType: "",
        guests: "",
        specialRequest: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error("Failed to save booking");
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="pt-24 bg-gray-100 min-h-screen py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#045054]">Hotel Booking</h2>
            <p className="text-gray-600 mt-3">Fill in the details below to reserve your stay.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Full name</label>
              <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600" />
              {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
            </div>
            <div>
              <label className="block font-medium mb-2">Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600" />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label className="block font-medium mb-2">Check-in Date</label>
              <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600" />
              {errors.checkIn && <p className="text-red-500 text-sm">{errors.checkIn}</p>}
            </div>
            <div>
              <label className="block font-medium mb-2">Check-out Date</label>
              <input
                type="date"
                name="checkOut"
                min={formData.checkIn}
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.checkOut && <p className="text-red-500 text-sm">{errors.checkOut}</p>}
            </div>

            <div>
              <label className="block font-medium mb-2">Room Type</label>
              <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600">
                <option value="">Select Room</option>
                <option>Single Room</option>
                <option>Double Room</option>
                <option>Suite</option>
                <option>Family Room</option>
                <option>Deluxe Room</option>
                <option>Presidential Suite</option>
              </select>
              {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType}</p>}
            </div>

            <div>
              <label className="block font-medium mb-2">Guest Count</label>
              <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600" />
              {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium mb-2">Special Request</label>
              <textarea
                rows="4"
                value={formData.specialRequest}
                name="specialRequest"
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-[#045054] text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition">
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
