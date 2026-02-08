import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingForm from "./components/BookingForm";
import Home from "./components/Home";


const App = () => {
  

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booking" element={<BookingForm/>} />
      </Routes>
      </BrowserRouter>
  );
};

export default App;
