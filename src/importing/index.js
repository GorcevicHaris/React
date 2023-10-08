// function Card({
//   imeprezime,
//   godine,
//   mestorodjenja,
//   stepenskolovanja,
//   zanimanje,
//   hobi,
//   partnerstatus,
//   prezime,
// }) {
//   return (
//     <div className="card">
//       <h1>{imeprezime}</h1>
//       <h1>{godine}</h1>
//       <h1>{mestorodjenja}</h1>
//       <h1>{stepenskolovanja}</h1>
//       <h1>{zanimanje}</h1>
//       <h1>{hobi}</h1>
//       <h1>{partnerstatus}</h1>
//       <h1>{prezime}</h1>
//     </div>
//   );
// }
// function Card({ name, isBought }) {
//   return (
//     <div className="card">
//       <h1>{name}</h1>
//       <h1>{name}</h1>
//     </div>
//   );
// }

// export default Card;
import React from "react";

function Card({
  brand,
  capital,
  category,
  description,
  id,
  price,
  stock,
  images,
}) {
  const cardStyle = {
    backgroundImage: `url(${images})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "500px",
    height: "420px",
  };

  return (
    <div className="minidiv" style={cardStyle}>
      {/* <h1>Brand: {brand}</h1> */}
      <h1>Category: {category}</h1>
      <h1>Capital: {capital}</h1>
      {/* <h1>Description: {description}</h1> */}
    </div>
  );
}

export default Card;
