import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./importing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
function Ap() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Ap;
//domaci navbar  da se napravi imacemo 3 stranice 1homepage 2 product 3 posts a logo je default
// navbar stavljamo iznad browserrouterf
