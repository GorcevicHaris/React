import React from "react";
import { Link, useNavigate } from "react-router-dom";
function HomePage({ name }) {
  const navigate = useNavigate(); //== custom hook
  return (
    <div className="main">
      {/* <Link to={"/homepage"}>IDI NA About link </Link> */}
      {/* <button onClick={() => navigate("homepage")}>about</button> */}
      <h1>{name}</h1>
    </div>
  );
}
export default HomePage;
