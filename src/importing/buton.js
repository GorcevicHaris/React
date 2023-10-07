import React from "react";

function Buton({ title, onPress }) {
  return (
    <div className="container">
      <div className="mainDiv">
        <button onClick={onPress}>{title}</button>
        <h1>{onPress}</h1>
      </div>
    </div>
  );
}
export default Buton;
//=====================================================
// function Buton({ plus, name }) {
//   return (
//     <button name={name} onClick={plus}>
//       {name}
//     </button>
//   );
// }
// export default Buton;
//====================================================
