import React from 'react'

const BookingForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-gray-300 p-10 rounded-md">
        <h1 className="text-center text-2xl font-bold">Hotel Book Form</h1>
        <div className="mt-1">
          <label>Check-in Date</label>
          <input className="w-full p-2 rounded-md  border border-gray-600" type="date" />
        </div>
        <div className="mt-1">
          <label>Check-out Date</label>
          <input className="w-full p-2 rounded-md  border border-gray-600" type="date" />
        </div>
        <div className="mt-1">
          <label>Room Type</label>
          <select className="w-full p-2 rounded-md  border border-gray-600" name="" id="">
            <option value="">Select Room</option>
              <option>Single</option>
              <option>Double</option>
              <option>Suite</option>
          </select>
        </div>
        <div className="mt-1">
          <label>Guest Count</label>
          <input min="1" className="w-full p-2 rounded-md  border border-gray-600" type="number" />
        </div>
        <div className="mt-1">
          <label>Special Request</label>
          <textarea name="" id="" className="w-full p-2 rounded-md  border border-gray-600" rows="3"></textarea>
        </div>
        <button type="submit" className="bg-green-600 px-3 py-2 w-full rounded-md">Submit</button>
      </form>
    </div>
  )
}

export default BookingForm