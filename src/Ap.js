import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Posts from "./pages/Posts";
import "./App.css";

function Ap() {
  return (
    <BrowserRouter>
      <div className="sizing">
        <div className="navBar">
          <Link lassName="link" to={"/"}>
            Homepage
          </Link>
          <Link className="link" to={"/about"}>
            About
          </Link>
          <Link className="link" to={"/posts"}>
            Posts
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={<h1>pozdrav ovo je pocetna stranica</h1>}
          ></Route>
          <Route path="/" element={<HomePage name={"homepageeee"} />} />
          <Route path="/about" element={<AboutPage name={"about"} />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Ap;

//domaci navbar  da se napravi imacemo 3 stranice 1homepage 2 product 3 posts a logo je default
// navbar stavljamo iznad browserrouterf
