import React from "react";

function Buton({ title, onPress }) {
  return <button onClick={onPress}>{title}</button>;
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
