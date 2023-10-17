import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./importing";
import { Link } from "react-router-dom";

function BetterPag() {
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState([]);
  const [buttons, setButtons] = useState([]);

  function getData() {
    axios
      .get(`https://dummyjson.com/posts?limit=30&skip=${skip}`)
      .then((el) => {
        setButtons([...Array(el.data.total / 30).keys()]);
        setData(el.data.posts);
      });
  }
  useEffect(() => {
    getData();
  }, [skip]);
  console.log(skip);
  return (
    <div className="container">
      <h1 id="h11"></h1>
      <div className="second-small-container">
        {data.map((el) => (
          <Card product={el} />
        ))}
      </div>
      <div className="small-container">
        {/* <Link to="/">Povratak na početnu stranicu</Link>   */}
        <button
          style={{
            backgroundColor: skip == 0 ? "lightgray" : "",
          }}
          onClick={() => (skip > 0 ? setSkip(skip - 30) : "")}
        >
          <a
            style={{
              textDecoration: "none",
              backgroundColor: "red",
              width: "100%",
            }}
            href="#h11"
          >
            <div className="arrow">{"<"}</div>
          </a>
        </button>

        {buttons.map((e) => (
          <button
            style={{ backgroundColor: skip == e * 30 ? "#2ecc22" : "" }}
            key={e}
            onClick={() => setSkip(e * 30)}
          >
            <a style={{ textDecoration: "none", width: "100%" }} href="#h11">
              {e + 1}
            </a>
          </button>
        ))}
        <button
          style={{ backgroundColor: skip === 120 ? "lightgray" : "" }}
          onClick={() => (skip < 120 ? setSkip(skip + 30) : "")}
        >
          <a style={{ textDecoration: "none", width: "100%" }} href="#h11">
            <div className="arrow">{">"}</div>
          </a>
        </button>
      </div>
    </div>
  );
}
export default BetterPag;
//==================================================================
