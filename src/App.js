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

// //==========================================================
// function App() {
//   const [input, setInput] = useState("");
//   const [buton, setButon] = useState(false);
//   function buttonClicked() {
//     setButon(true);
//   }
//   function inputText(event) {
//     setInput(event.target.value);
//   }
//   return (
//     <div className="container">
//       <div className="card">
//         <input
//           style={{
//             border: buton && input.length <= 4 ? "2px solid red" : "",
//           }}
//           onChange={inputText}
//           placeholder="text"
//           type="text"
//         ></input>
//         <button onClick={buttonClicked} className="buton">
//           click
//         </button>
//       </div>
//     </div>
//   );
// }
// export default App;

//================================================================

// function App() {
//   const [numbers, setNumbers] = useState([1, 2, 3]);
//   return (
//     <div className="container">
//       {numbers.map((el) => (
//         <Card />
//       ))}
//     </div>
//   );
// }

// export default App;
//====================================================================
// function App() {
//   const [input, setInput] = useState("");
//   const [cardContent, setCardContent] = useState(""); // Sadržaj div elementa

//   const handleButtonClick = () => {
//     setCardContent(<div className="mm">Novi div</div>);
//   };
//   return (
//     <div className="container">
//       <div className="Card">
//         <input type="text" placeholder="text"></input>
//         <button onClick={handleButtonClick}>click</button>
//         {cardContent}
//       </div>
//     </div>
//   );
// }

// export default App;
//======================================================

// function App() {
//   const [input, setInput] = useState("");
//   return (
//     <div className="container">
//       <input
//         type="text"
//         placeholder="text"
//         onChange={(e) => setInput(e.target.value)}
//       ></input>
//       <button onClick={() => alert(`cao ${input}`)}>click</button>
//     </div>
//   );
// }
// export default App;
//==================================================================
// function App() {
//   const [brojevi, setBrojevi] = useState([1, 2, 3, 4, 5, 6, 7]);
//   const [noviBroj, setNoviBroj] = useState(0);
//   const [ime, setIme] = useState({
//     ime: "haris",
//     prezime: "gorcevic",
//   });
//   console.log(brojevi);
//   return (
//     <div className="container">
//       <input onChange={(e) => setNoviBroj(e.target.value)} type="text"></input>
//       <button onClick={(e) => setBrojevi([... brojevi, +noviBroj])}>
//         click
//       </button>
//     </div>
//   );
// }

// // export default App;
// //====================================================
// function App() {
//   const [brojevi, setBrojevi] = useState([1, 2, 3, 4, 5, 6, 7]);
//   const [noviBroj, setNoviBroj] = useState(0);
//   const [name, setIme] = useState({
//     ime: "haris",
//     prezime: "gorcevic",
//     godine: 18,
//   });
//   return (
//     <div className="container">
//       <input
//         type="text"
//         onChange={(e) => setIme({ ...name, ime: e.target.value })}
//       ></input>
//       <input
//         type="text"
//         onChange={(e) => setIme({ ...name, prezime: e.target.value })}
//       ></input>
//       <input
//         type="text"
//         onChange={(e) => setIme({ ...name, godine: e.target.value })}
//       ></input>
//       <button onClick={() => setIme(name) + console.log(namenp)}>click</button>
//     </div>
//   );
// }

// export default App;
//==================================================

// function Forma() {
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState({
//     imePrezime: "",
//     zanimanje: "",
//     godine: 0,
//   });

//   function clicked(ev) {
//     console.log(ev.target.name);
//   }
//   const handleInputSecond = (event) => {
//     setUser({
//       ...user,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <div className="main">
//       <input
//         onClick={clicked}
//         className="input"
//         placeholder="Ime i prezime"
//         name="imePrezime"
//         onChange={handleInputSecond}
//       />
//       <input
//         onClick={clicked}
//         className="input"
//         placeholder="Godine"
//         name="godine"
//         onChange={handleInputSecond}
//       />
//       <input
//         className="input"
//         placeholder="Zanimanje"
//         name="zanimanje"
//         onChange={handleInputSecond}
//       />
//       <button
//         className="dugme"
//         onClick={() => {
//           setUsers((prev) => [...prev, user]);
//           setUser({ imePrezime: "", godine: 0, zanimanje: "" });
//         }}
//       >
//         Dodaj korisnika
//       </button>

//       {users.map((user) => {
//         return (
//           <div
//             style={{
//               textAlign: "center",
//               color: "white",
//               backgroundColor: "blue",
//             }}
//           >
//             <p>{user.imePrezime}</p>
//             <p>{user.godine}</p>
//             <p>{user.zanimanje}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Forma;

// function App() {
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState({
//     ime: "",
//     prezime: "",
//     godine: 0,
//   });
//   const handleInputSecond = (event) => {
//     setUser({
//       ...user,
//       [event.target.name]: event.target.value,
//     });
//   };
//   console.log(user);
//   return (
//     <div className="main">
//       <input
//         name="ime"
//         onChange={handleInputSecond}
//         placeholder="name"
//         type="text"
//       ></input>
//       <input
//         onChange={handleInputSecond}
//         name="prezime"
//         placeholder="username"
//         type="text"
//       ></input>
//       <input
//         onChange={handleInputSecond}
//         name="godine"
//         placeholder="age"
//         type="text"
//       ></input>
//       <button
//         onClick={(e) => {
//           setUsers([...users, user]);
//           console.log(user);
//         }}
//       >
//         Create Contact
//       </button>
//       {users.map((user) => {
//         return (
//           <div style={{ width: "200px", height: "200px", background: "blue" }}>
//             <p>{user.ime}</p>
//             <p>{user.prezime}</p>
//             <p>{user.godine}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

//========================================================================

// function App() {
//   const [niz, setNiz] = useState([]);
//   const [obj, setObj] = useState({
//     ime: "haris",
//     prezime: "gorcevic",
//   });
//   console.log(niz);
//   return (
//     <div className="main">
//       <button onClick={() => setNiz([...niz, obj])}>click</button>
//     </div>
//   );
// }

// export default App;
//=======================================================================
//=======================================================================
//      [event.target.name]: event.target.value, je dinamicki da bi u onchanfe mooglo da se menja i da
//se svim inputima moze pristupiti preko name
function App() {
  const [obj, setObj] = useState({
    imeprezime: "",
    godine: 0,
    mestorodjenja: "",
    stepenskolovanja: "",
    zanimanje: "",
    hobi: "",
    partnerstatus: "",
  });
  const [array, setArray] = useState([]);
  const handler = (event) => {
    setObj({
      ...obj,
      [event.target.name]: event.target.value,
    });
  };
  const secondhandler = () => {
    const niz = [];

    const keys = Object.keys(obj);
    // console.log(obj, keys);
    keys.forEach((fieldName) => {
      if (obj[fieldName].length == 0) {
        niz.push(fieldName);
      }
    });
    console.log(niz);

    if (niz.length > 0) {
      alert(`popunite polja : ${niz}`);
    } else {
      setArray([...array, obj]);
    }
  };

  return (
    <div className="container">
      <div className="main">
        <p>Ime i Prezime</p>
        <input onChange={handler} name="imeprezime"></input>
        <p>Godine</p>

        <input onChange={handler} name="godine" type="text"></input>
        <p>Mesto rodjenja</p>
        <input name="mestorodjenja" onChange={handler}></input>
        <p>Stepen skolovanja</p>
        <select onChange={handler} name="stepenskolovanja">
          <option>Osnovna Škola</option>
          <option>Srednja Škola</option>
          <option>Fakultet</option>
        </select>
        <p>Zanimanje</p>

        <input onChange={handler} name="zanimanje"></input>
        <p>Hobi</p>

        <input onChange={handler} name="hobi"></input>
        <p>Partner Status</p>
        <select onChange={handler} name="partnerstatus">
          <option selected disabled></option>
          <option>Da</option>
          <option>Ne</option>
        </select>
        <button onClick={secondhandler}>Create Contact</button>
      </div>
      {array.map((e) => {
        return (
          <Card
            imeprezime={e.imeprezime}
            godine={e.godine}
            mestorodjenja={e.mestorodjenja}
            stepenskolovanja={e.stepenskolovanja}
            zanimanje={e.zanimanje}
            hobi={e.hobi}
            partnerstatus={e.partnerstatus}
          />
        );
      })}
    </div>
  );
}
export default App;

//======================================================
// function App() {
//   const [obj, setObj] = useState({
//     ime: "",
//     prezime: "",
//     godine: "",
//   });
//   const [array, setArray] = useState([]);
//   const handler = (event) => {
//     setObj({
//       ...obj,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const butonHandler = () => {
//     let newArray = [];
//     const keys = Object.keys(obj);
//     keys.forEach((element) => {
//       if (obj[element].length == 0) {
//         newArray.push(element);
//       }
//       console.log(newArray);
//     });
//     if (newArray.length > 0) {
//       alert(`popunite polje: ${newArray}`);
//     } else {
//       setArray([...array, obj]);
//     }
//   };

//   console.log(obj);
//   return (
//     <div className="container">
//       <div className="main">
//         <p>Ime</p>
//         <input onChange={handler} name="ime" type="text"></input>
//         <p>Prezime</p>
//         <input onChange={handler} name="prezime" type="text"></input>
//         <p>godine</p>
//         <input onChange={handler} name="godine" type="text"></input>
//         <button onClick={butonHandler}>Submit</button>
//       </div>
//       {array.map((el) => {
//         return (
//           <Card imeprezime={el.ime} prezime={el.prezime} godine={el.godine} />
//         );
//       })}
//     </div>
//   );
// }

// export default App;
//========================================================

// function App() {
//   const [data, setData] = useState(null);

//   const fetchData = () => {
//     const apiUrl = "https://jsonplaceholder.typicode.com/posts";
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       });
//   };

//   return (
//     <div className="container">
//       <div className="main">
//         <button onClick={fetchData}>Submit</button>
//         <div>
//           {data && (
//             <ul>
//               {data.map((item) => (
//                 <li>{item.title}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
//==============================================================================
function App() {
  const [obj, setObj] = useState([
    { name: "clips", isBought: true },
    { name: "clips", isBought: false },
    { name: "clips", isBought: false },
  ]);
  return (
    <div className="container">
      <div className="main">
        {obj.map((el) => {
          return <Card name={el.name} isBought={el.isBought} />;
        })}
      </div>
    </div>
  );
}

export default App;
//========================================================================

// let array = [10, 20, 30, 40];
// {
//   array.map((el) => (el * 100) / 10);
//   console.log(array);
// }
//=============================================================
// function App() {
//   const products = [
//     {
//       id: 1,
//       name: "haris",
//       age: 18,
//     },
//     {
//       id: 2,
//       name: "erhad",
//       age: 19,
//     },
//     {
//       id: 3,
//       name: "imad",
//       age: 20,
//     },
//     {
//       id: 4,
//       name: "amar",
//       age: 16,
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="main">
//         {products.map((el) => {
//           return (
//             <h1 key={el.id}>
//               {el.name} : {el.age}
//             </h1>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;
//===================================================================
// function App() {
//   const [obj, setObj] = useState({
//     ime: "",
//     prezime: "",
//   });
//   const [buton, setButon] = useState(false);
//   const handler = (event) => {
//     setObj({ ...obj, [event.target.name]: event.target.value });
//   };
//   return (
//     <div className="container">
//       <div className="main">
//         <input onChange={handler} name="ime"></input>
//         <input onChange={handler} name="prezime"></input>
//         <button onClick={() => true && console.log(obj)}></button>
//       </div>
//     </div>
//   );
// }
// export default App;
//=====================================================================
//=====================================================================
//TODOLIST REACT
function App() {
  const [inputText, setInputText] = useState("");
  const [array, setArray] = useState([]);
  const [check, setCheck] = useState(false);
  function handler(e) {
    setInputText(e.target.value);
  }
  function secondhandler() {
    setArray([...array, inputText]);
    setInputText("");
  }

  console.log(array);
  return (
    <div className="container">
      <div className="main">
        <input value={inputText} onChange={handler}></input>
        <button onClick={secondhandler}>Submit </button>
        {array.map((el) => {
          return (
            <div
              style={{ display: check == true ? "none" : "flex" }}
              className="minicard"
            >
              {el}

              <button onClick={() => setCheck(true)}>Remover</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

//======================================================
function App() {
  const [inputText, setInputText] = useState("");
  const [array, setArray] = useState([]);
  function handler(e) {
    setInputText(e.target.value);
  }
  function secondhandler() {
    setArray([...array, inputText]);
    setInputText("");
  }
  console.log(array);

  return (
    <div className="container">
      <div className="main">
        <input value={inputText} onChange={handler}></input>
        <button onClick={secondhandler}>Submit</button>
        {array.map((el) => {
          return (
            <div className="minicard">
              {el}
              <button onClick={() => setArray(array.filter((e) => e !== el))}>
                Remover
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

//['bkbdkf'] = dodato iz inputa nakon toga filter vraca samo one koji su drugaciji od o istog

