import React from "react";
import { Link, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate(); //== custom hook
  return (
    <div className="main">
      {/* <Link to={"/about"}>IDI NA About link </Link> */}
      <button onClick={() => navigate("/about")}>about</button>
    </div>
  );
}
export default HomePage;
