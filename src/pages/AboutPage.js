import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AboutPage({ name }) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>{name}</h1>
      {/* <Link to={"/"}>IDI NA home page </Link> */}
      {/* <button onClick={() => navigate("/about")}></button> */}
    </div>
  );
}
//=/;====
export default AboutPage;
