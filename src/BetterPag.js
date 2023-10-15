import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./importing";

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

  return (
    <div className="container">
      <div className="second-small-container">
        {data.map((el) => (
          <Card product={el} />
        ))}
      </div>
      <div className="small-container">
        <button
          style={{ backgroundColor: skip == 0 ? "lightgray" : "" }}
          onClick={() => (skip > 0 ? setSkip(skip - 30) : "")}
        >
          {"<"}
        </button>
        {buttons.map((e) => (
          <button
            style={{ backgroundColor: skip == e * 30 ? "#2ecc22" : "" }}
            key={e}
            onClick={() => setSkip(e * 30)}
          >
            {e + 1}
          </button>
        ))}
        <button
          style={{ backgroundColor: skip === 120 ? "lightgray" : "" }}
          onClick={() => (skip < 120 ? setSkip(skip + 30) : "")}
        >
          {" "}
          {">"}
        </button>
      </div>
    </div>
  );
}

export default BetterPag;
//=================================
// {
/* <button */
// }
//         onClick={() => skip > 0 && setSkip(skip - 30)}
//         style={{ backgroundColor: skip == 0 ? "gray" : "" }}
//       >
//         {"<"}
//       </button>

//       {buttonValue.map((el) => (
//         <button
//           style={{ backgroundColor: skip == el ? "red" : "" }}
//           onClick={() => setSkip(el)}
//         >
//           {el / 30 + 1}
//         </button>
//       ))}
//       <button
//         onClick={() => {
//           skip < 120 && setSkip(skip + 30);
//         }}
//         style={{ backgroundColor: skip == 120 ? "gray" : "" }}
//       >
//         {">"}
//       </button>
//     </div>
//   );
// }
// export default Pag;
