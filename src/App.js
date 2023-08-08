import logo from "./logo.svg";
import "./App.css";
import Message from "./importing/message.js";
import Card from "./importing/index";
import Slika1 from "./1085299-1.jpg";
import Slika2 from "./7008f64b23dd630c61164cd0fe6129eb015c080b.jpg";
import Slika3 from "./1085299-1.jpg";
import Slika4 from "./2028fae76ba24df78a10184fbf805007.jpg";
import { useState } from "react";
import Buton from "./importing/buton";

// function App() {
//   return (
//     <div className="container">
//       <div className="cards">
//         <Card
//           backgroundImage={Slika1}
//           name="jordan"
//           description="odlicne"
//           price="120€"
//         />
//         <Card
//           backgroundImage={Slika2}
//           name="addidas"
//           description="original"
//           price="100€"
//         />
//         <Card
//           backgroundImage={Slika3}
//           name="nike"
//           description="dobre "
//           price="170€"
//         />
//         <Card
//           backgroundImage={Slika4}
//           name="puma"
//           description="kvalitet vrh"
//           price="70€"
//         />
//       </div>
//     </div>
//   );
// }
//====================================================
const App = () => {
  const [broj, setBroj] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const alertt = (el) => {
    alert(el);
  };
  return (
    <div className="container">
      {broj.map((el) => (
        <Buton
          title={el}
          onPress={() => {
            alertt(el);
          }}
        />
      ))}
    </div>
  );
};
export default App;
// {/* <button onClick={() => setBroj(broj + 1)}>plus</button>
//       {broj}
//       <button onClick={() => setBroj(broj - 1)}>minus</button> */}
//=====================================================================
// const App = () => {
//   const [broj, setBroj] = useState(0);
//   const povecajBroj = () => {
//     setBroj(broj + 30);
//   };
//   return (
//     <div className="container">
//       <Buton name={broj} plus={povecajBroj} />
//     </div>
//   );
// };

// export default App;
