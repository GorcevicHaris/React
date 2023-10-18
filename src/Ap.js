import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./importing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function Ap() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>welcome </h1>} />
          <Route path="/about" element={<h1>This is about PAGE</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Ap;
