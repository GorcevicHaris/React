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
//====================================================
// function App() {
//   return (
//     <div className="container">
//       {customProducts.map((products) => (
//         <Card />
//       ))}
//     </div>
//   );
// }
//===============================================
// title ,description price discountpresentage,brand
//stock ako je ispod 50
//image
//samo smartphones
//ako nema podataka trebd da pise nema podataka
// ... (import naredbi i ostali kod)

// function App() {
//   const [data, setAllData] = useState([]);

//   const fetchData = () => {
//     fetch("https://dummyjson.com/products/1")
//       .then((res) => res.json())
//       .then((response) => {
//         setAllData(response);
//       });
//   };

//   return (
//     <div className="container">
//       <div className="mainDiv">
//         <div className="div2">
//           {data.images && <img className="img" src={data.images[1]} />}
//         </div>
//         <div className="div1">
//           <div className="divP">
//             <p>{data?.title}</p>
//             <p>{data?.brand}</p>
//             <p>{data.description}</p>
//             <p>{data.discountPercentage}</p>
//             <p>{data.price}</p>
//             <p>{data.stock > 50 ? data.stock : ""}</p>
//           </div>
//           <div className="divB">
//             <button onClick={fetchData}>Pretraga</button>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }
// export default App;

// function App() {
//   const [number, setRandomNumber] = useState(0);
//   const randomNumber = () => {
//     const broj = Math.floor(Math.random() * (48 - -36 + 1)) + -36;
//     setRandomNumber(broj);
//   };
//   return (
//     <div className="container">
//       <div className="mainDiv">
//         <Data
//           number={
//             number > -36 && number < -3
//               ? "hladno je"
//               : number && number > -3 && number < 23
//               ? "nista"
//               : number && number > 23
//               ? "vrlo je vruco"
//               : number
//           }
//         />
//         {console.log(number)}
//         <button onClick={randomNumber}>change number</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// //=================================================================
// function App() {
//   const [number, setNumber] = useState(0);
//   const func = () => {
//     setNumber(number + 1);
//   };
//   return (
//     <div className="container">
//       <div className="mainDiv">
//         <Data name={number} number={func} />
//       </div>
//     </div>
//   );
// }
// export default App;
//=======================================================================

// function App() {
//   const [number, setNumber] = useState(0);
//   const random = () => {
//     const broj = Math.floor(Math.random() * (40 - -36 + 1)) + -36;
//     setNumber(broj);
//   };
//   return (
//     <div className="container">
//       <div className="mainDiv">
//         <h1>
//           {number < -3 && number > -36
//             ? "hladno je"
//             : number && number > -3 && number < 20
//             ? "nista "
//             : number && number > 20
//             ? "vruco je"
//             : number}
//         </h1>
//         <button onClick={random}>click me</button>
//       </div>
//     </div>
//   );
// }
// export default App;
// //==========================================================
// function App() {
//   const [input, setInput] = useState("");
//   const [userinput, setUsername] = useState("");
//   const [userpassword, setPassword] = useState("");
//   const [buttonClicked, setButtonClicked] = useState(false);
//   const [userrepassword, setRePassword] = useState("");
//   const [useremail, setEmail] = useState("");

//   const handleemailChange = (event) => {
//     setEmail(event.target.value);
//   };
//   const handlepasswordChange = (event) => {
//     setPassword(event.target.value);
//   };
//   const handlerepassword = (event) => {
//     setRePassword(event.target.value);
//   };

//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//   };
//   const handleInputChange2 = (event) => {
//     setUsername(event.target.value);
//   };
//   const handleButtonClick = () => {
//     setButtonClicked(true);
//   };
//   return (
//     <div className="container">
//       <div className="mainDiv">
//         <input
//           style={{
//             border: buttonClicked && input.length <= 4 ? "2px solid red" : "",
//           }}
//           type="text"
//           placeholder="name"
//           onChange={handleInputChange}
//         />
//         <input
//           style={{
//             border:
//               buttonClicked && userinput.length <= 4 ? "2px solid red" : "",
//           }}
//           onChange={handleInputChange2}
//           type="text"
//           placeholder="username"
//         />
//         <input
//           style={{
//             border:
//               buttonClicked && !useremail.includes("@") ? "2px solid red" : "",
//           }}
//           type="text"
//           placeholder="email"
//           onChange={handleemailChange}
//         />
//         <input
//           style={{
//             border:
//               buttonClicked && userpassword.length < 8 ? "2px solid red" : "",
//           }}
//           onChange={handlepasswordChange}
//           type="password"
//           placeholder="password"
//         />
//         <input
//           style={{
//             border:
//               buttonClicked &&
//               (userrepassword.length < 8 || userrepassword != userpassword)
//                 ? "2px solid red"
//                 : "",
//           }}
//           type="password"
//           placeholder="re-password"
//           onChange={handlerepassword}
//         />
//       </div>
//       <button onClick={handleButtonClick}>click</button>
//     </div>
//   );
// }

// export default App;

// //==============================================================================

// function App() {
//   const odeljenje = [
//     {
//       ime: "Aldin",
//       prezime: "Halilovic",
//       godine: 20,
//       visina: 180,
//     },
//     {
//       ime: "Tajra",
//       prezime: "Bacevac",
//       godine: 17,
//       visina: 210,
//     },
//     {
//       ime: "Iman",
//       prezime: "Licina",
//       godine: 18,
//       visina: 170,
//     },
//     {
//       ime: "Mehmed",
//       prezime: "Muratovic",
//       godine: 16,
//       visina: 185,
//     },
//   ];
//   return (
//     <div className="container">
//       {odeljenje.map((el) => {
//         if (el.prezime != "Licina")
//           return (
//             <Card
//               prezime={el.prezime}
//               ime={el.ime}
//               godine={el.godine}
//               visina={el.visina}
//             />
//           );
//       })}
//     </div>
//   );
// }

// export default App;

// function App() {
//   const odeljenje = [
//     {
//       ime: "haris",
//       prezime: "gorcevic",
//       godine: "18",
//     },
//     {
//       ime: "hamza",
//       prezime: "gorcevic",
//       godine: "20",
//     },
//     {
//       ime: "gvido",
//       prezime: "hukic",
//       godine: "18",
//     },
//   ];
//   return (
//     <div className="container">
//       {odeljenje.map((el) => {
//         return <Card ime={el.ime} prezime={el.prezime} godine={el.godine} />;
//       })}
//     </div>
//   );
// }

// export default App;

// function MojaKomponenta() {
//   const [divovi, setDivovi] = useState([1, 2, 3, 4, 5]);
//   return (
//     <div className="container ">
//       <div className="row">
//         {divovi.map(() => (
//           <Card ime={"haris"} prezime={"gorcevic"} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MojaKomponenta;

// function App() {
//   const [number, setNumber] = useState(0);
//   return (
//     <div>
//       {number}
//       <button onClick={() => setNumber(number + 1)}>+</button>
//     </div>
//   );
// }
// export default App;

//==========================================================

