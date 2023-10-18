import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./importing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Posts from "./pages/Posts";
import { Link } from "react-router-dom";
function Ap() {
  return (
    <div className="sizing">
      <div className="navBar"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>pocetak</h1>} />
          <Route path="homepage" element={<HomePage name={"homepageeee"} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Ap;
//domaci navbar  da se napravi imacemo 3 stranice 1homepage 2 product 3 posts a logo je default
// navbar stavljamo iznad browserrouterf
