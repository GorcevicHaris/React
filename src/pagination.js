import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./importing";

function Pag() {
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState([]);
  const [buttons, setButtons] = useState();
  const buttonValue = [0, 30, 60, 90, 120];
  // function getData() {
  //   axios.get(`https://dummyjson.com/posts?limit=150`).then((el) => {
  //     setButtons([...Array(el.data.total / 30  1).keys()].slice(1));
  //     console.log(buttons);
  //   });
  // }
  function getData30() {
    axios
      .get(`https://dummyjson.com/posts?limit=30&skip=${skip}`)
      .then((el) => {
        setData(el.data.posts);
      });
  }

  useEffect(() => {
    getData30();
  }, [skip]);
  console.log(buttons);
  console.log(data);
  return (
    <div className="container">
      {data.map((el) => (
        <Card key={el.id} product={el} />
      ))}
      <button
        onClick={() => skip > 0 && setSkip(skip - 30)}
        style={{ backgroundColor: skip == 0 ? "gray" : "" }}
      >
        {"<"}
      </button>

      {buttonValue.map((el) => (
        <button
          style={{ backgroundColor: skip == el ? "red" : "" }}
          onClick={() => setSkip(el)}
        >
          {el / 30 + 1}
        </button>
      ))}
      <button
        onClick={() => {
          skip < 120 && setSkip(skip + 30);
        }}
        style={{ backgroundColor: skip == 120 ? "gray" : "" }}
      >
        {">"}
      </button>
    </div>
  );
}
export default Pag;
