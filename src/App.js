import logo from "./logo.svg";
import "./App.css";
import Message from "./importing/message.js";
import Card from "./importing/index";
import Slika1 from "./1085299-1.jpg";
import Slika2 from "./7008f64b23dd630c61164cd0fe6129eb015c080b.jpg";
import Slika3 from "./1085299-1.jpg";
import Slika4 from "./2028fae76ba24df78a10184fbf805007.jpg";
import { useState, useEffect } from "react";
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
//       {array.map((e) => {
//         return (
//           <Card
//             imeprezime={e.imeprezime}
//             godine={e.godine}
//             mestorodjenja={e.mestorodjenja}
//             stepenskolovanja={e.stepenskolovanja}
//             zanimanje={e.zanimanje}
//             hobi={e.hobi}
//             partnerstatus={e.partnerstatus}
//           />
//         );
//       })}
//     </div>
//   );
// }
// export default App;

// //======================================================
// // function App() {
// //   const [obj, setObj] = useState({
// //     ime: "",
// //     prezime: "",
// //     godine: "",
// //   });
// //   const [array, setArray] = useState([]);
// //   const handler = (event) => {
// //     setObj({
// //       ...obj,
// //       [event.target.name]: event.target.value,
// //     });
// //   };
// //   const butonHandler = () => {
// //     let newArray = [];
// //     const keys = Object.keys(obj);
// //     keys.forEach((element) => {
// //       if (obj[element].length == 0) {
// //         newArray.push(element);
// //       }
// //       console.log(newArray);
// //     });
// //     if (newArray.length > 0) {
// //       alert(`popunite polje: ${newArray}`);
// //     } else {
// //       setArray([...array, obj]);
// //     }
// //   };

// //   console.log(obj);
// //   return (
// //     <div className="container">
// //       <div className="main">
// //         <p>Ime</p>
// //         <input onChange={handler} name="ime" type="text"></input>
// //         <p>Prezime</p>
// //         <input onChange={handler} name="prezime" type="text"></input>
// //         <p>godine</p>
// //         <input onChange={handler} name="godine" type="text"></input>
// //         <button onClick={butonHandler}>Submit</button>
// //       </div>
// //       {array.map((el) => {
// //         return (
// //           <Card imeprezime={el.ime} prezime={el.prezime} godine={el.godine} />
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // export default App;
// //========================================================

// // function App() {
// //   const [data, setData] = useState(null);

// //   const fetchData = () => {
// //     const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// //     fetch(apiUrl)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setData(data);
// //         console.log(data);
// //       });
// //   };

// //   return (
// //     <div className="container">
// //       <div className="main">
// //         <button onClick={fetchData}>Submit</button>
// //         <div>
// //           {data && (
// //             <ul>
// //               {data.map((item) => (
// //                 <li>{item.title}</li>
// //               ))}
// //             </ul>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// //==============================================================================
// function App() {
//   const [obj, setObj] = useState([
//     { name: "clips", isBought: true },
//     { name: "clips", isBought: false },
//     { name: "clips", isBought: false },
//   ]);
//   return (
//     <div className="container">
//       <div className="main">
//         {obj.map((el) => {
//           return <Card name={el.name} isBought={el.isBought} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;
// //========================================================================

// // let array = [10, 20, 30, 40];
// // {
// //   array.map((el) => (el * 100) / 10);
// //   console.log(array);
// // }
// //=============================================================
// // function App() {
// //   const products = [
// //     {
// //       id: 1,
// //       name: "haris",
// //       age: 18,
// //     },
// //     {
// //       id: 2,
// //       name: "erhad",
// //       age: 19,
// //     },
// //     {
// //       id: 3,
// //       name: "imad",
// //       age: 20,
// //     },
// //     {
// //       id: 4,
// //       name: "amar",
// //       age: 16,
// //     },
// //   ];

// //   return (
// //     <div className="container">
// //       <div className="main">
// //         {products.map((el) => {
// //           return (
// //             <h1 key={el.id}>
// //               {el.name} : {el.age}
// //             </h1>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// //===================================================================
// // function App() {
// //   const [obj, setObj] = useState({
// //     ime: "",
// //     prezime: "",
// //   });
// //   const [buton, setButon] = useState(false);
// //   const handler = (event) => {
// //     setObj({ ...obj, [event.target.name]: event.target.value });
// //   };
// //   return (
// //     <div className="container">
// //       <div className="main">
// //         <input onChange={handler} name="ime"></input>
// //         <input onChange={handler} name="prezime"></input>
// //         <button onClick={() => true && console.log(obj)}></button>
// //       </div>
// //     </div>
// //   );
// // }
// // export default App;
// //=====================================================================
// //=====================================================================
// //TODOLIST REACT
// function App() {
//   const [inputText, setInputText] = useState("");
//   const [array, setArray] = useState([]);
//   const [check, setCheck] = useState(false);
//   function handler(e) {
//     setInputText(e.target.value);
//   }
//   function secondhandler() {
//     setArray([...array, inputText]);
//     setInputText("");
//   }

//   console.log(array);
//   return (
//     <div className="container">
//       <div className="main">
//         <input value={inputText} onChange={handler}></input>
//         <button onClick={secondhandler}>Submit </button>
//         {array.map((el) => {
//           return (
//             <div
//               style={{ display: check == true ? "none" : "flex" }}
//               className="minicard"
//             >
//               {el}

//               <button onClick={() => setCheck(true)}>Remover</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

// //======================================================
// function App() {
//   const [inputText, setInputText] = useState("");
//   const [array, setArray] = useState([]);
//   function handler(e) {
//     setInputText(e.target.value);
//   }
//   function secondhandler() {
//     setArray([...array, inputText]);
//     setInputText("");
//   }
//   console.log(array);

//   return (
//     <div className="container">
//       <div className="main">
//         <input value={inputText} onChange={handler}></input>
//         <button onClick={secondhandler}>Submit</button>
//         {array.map((el) => {
//           return (
//             <div className="minicard">
//               {el}
//               <button onClick={() => setArray(array.filter((e) => e !== el))}>
//                 Remover
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

// //['bkbdkf'] = dodato iz inputa nakon toga filter vraca samo one koji su drugaciji od o isto
// // //==============================================
// // function App() {
// //   const [products, setProducts] = useState([
// //     { name: "Adidas", price: 120, inCart: false },
// //     { name: "Puma", price: 200, inCart: false },
// //     { name: "Nike", price: 300, inCart: false },
// //     { name: "Didadora", price: 70, inCart: false },
// //     { name: "Under Armour", price: 120, inCart: false },
// //   ]);

// //   const mapProduct = products.map((el) => el);
// //   const inCartProducts = products.filter((product) => product.inCart == true);

// //   console.log(inCartProducts.length);

// //   return (
// //     <div className="container">
// //       <div className="main">
// //         {inCartProducts.length > 0 ? (
// //           inCartProducts.map((product) => (
// //             <Card ime={product.name} cena={product.price} />
// //           ))
// //         ) : (
// //           <h1>Nemate proizvoda u korpi</h1>
// //         )}
// //         <button
// //           onClick={() => {
// //             setProducts((el) =>
// //               el.map((e) =>
// //                 e.name === "Puma"
// //                   ? { ...e, inCart: !e.inCart }
// //                   : e && e.name === "Nike"
// //                   ? { ...e, inCart: !e.inCart }
// //                   : e
// //               )
// //             );
// //           }}
// //         >
// //           Dodaj u korpu
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// // export default App;
// //==================================================
// //==================================================
// // function App() {
// //   const [products, setProducts] = useState([
// //     { ime: "Adidas", cena: 120, uKorpi: false },
// //     { ime: "Puma", cena: 200, uKorpi: false },
// //     { ime: "Nike", cena: 300, uKorpi: false },
// //     { ime: "Didadora", cena: 70, uKorpi: false },
// //     { ime: "Under Armour", cena: 120, uKorpi: false },
// //   ]);
// //   const filteredArray = products.filter((el) => el.uKorpi);
// //   console.log(filteredArray);
// //   return (
// //     <div className="container">
// //       <div className="main">
// //         <button
// //           onClick={() => {
// //             setProducts(
// //               products.map((e) =>
// //                 e.ime == "Nike" ? { ...e, uKorpi: !e.uKorpi } : e
// //               )
// //             );
// //           }}
// //         >
// //           Submit
// //         </button>
// //         {filteredArray.length > 0 ? (
// //           filteredArray.map((el) => <Card ime={el.ime} cena={el.cena} />)
// //         ) : (
// //           <h1>Nemate nista trenutno na stanju</h1>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// // export default App;

// // function App() {
// //   const [inputText, setInputText] = useState("");
// //   const [array, setArray] = useState([]);
// //   function handler(e) {
// //     setInputText(e.target.value);
// //   }
// //   function arrays() {
// //     setArray([...array, inputText]);
// //     setInputText("");
// //   }
// //   console.log(array);
// //   // console.log(inputText);
// //   return (
// //     <div className="container">
// //       <div className="main">
// //         <input value={inputText} onChange={handler}></input>
// //         <button onClick={arrays}>Submit</button>
// //         {array.map((el) => {
// //           return (
// //             <div className="minicard">
// //               <button onClick={() => setArray(array.filter((e) => e !== el))}>
// //                 Remover
// //               </button>
// //               {el}
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }
// // export default App;
// // //=====================================================================
// // function App() {
// //   const [resourse, setResourse] = useState("users");
// //   const [falsing, setFalsing] = useState(true);
// //   const [array, setArray] = useState([]);

// //   useEffect(() => {
// //     fetch(`https://jsonplaceholder.typicode.com/${resourse}`)
// //       .then((response) => response.json())
// //       .then((json) => console.log(json));
// //   }, [resourse]); // Dodajte resourse kao zavisnost

// //   return (
// //     <div className="container">
// //       <button onClick={() => setResourse("photos")}>photo</button>
// //       {falsing ? (
// //         <div className="minidiv">
// //           <p>Title: {setResourse(resourse[0])}</p>
// //         </div>
// //       ) : (
// //         <p>nemoj nista prikazati</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;
// // //=======================================================================
// // function App() {
// //   let func = () => {
// //     fetch("https://jsonplaceholder.typicode.com/todos/1")
// //       .then((response) => response.json())
// //       .then((json) => console.log(json));
// //   };
// //   return (
// //     <div className="container">
// //       <div className="main"></div>
// //     </div>
// //   );
// // }
// // export default App;
// //======================================================================
// // function App() {
// //   const [randomnumber, setRandomNumber] = useState(0);
// //   const [div, setDiv] = useState("");
// //   function handler() {
// //     let broj = Math.floor(Math.random() * (24 - -36 + 1)) + -36;
// //     setRandomNumber(broj);
// //   }
// //   return (
// //     <div className="container">
// //       <div
// //         style={{
// //           backgroundColor:
// //             randomnumber > -36 && randomnumber < -20
// //               ? "darkblue"
// //               : randomnumber && randomnumber > -20 && randomnumber < 4
// //               ? "yellow"
// //               : randomnumber && randomnumber > 4 && randomnumber < 24
// //               ? "green"
// //               : randomnumber,
// //         }}
// //         className="main"
// //       >
// //         {randomnumber}
// //         <button onClick={handler}>Random Number</button>
// //       </div>
// //     </div>
// //   );
// // }
// // export default App;
// / // =============================================================
// function App() {
//   const [defaultdata, setDeafultData] = useState([]);
//   const getData = () => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((json) => setDeafultData(json.products.map()));
//     console.log(defaultdata);
//   };
//   return (
//     <div className="container">
//       <button onClick={getData}>uzmi podatke</button>
//     </div>
//   );
// }
// export default App;

// // // =============================================================
import ReactStars from "react-stars";
function App() {
  const [defaultdata, setDeafultData] = useState([]);
  const [array, setArray] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const getData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setDeafultData(json.products);
        setFiltered(json.products);
        const categories = json.products.map((el) => el.category);
        const bezDuplikata = [...new Set(categories)];
        setArray(bezDuplikata);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(defaultdata);

  return (
    <div className="container">
      <div className="divForButtons">
        {array.map((el) => (
          <button
            onClick={() =>
              setFiltered(defaultdata.filter((e) => e.category == el))
            }
          >
            {el}
          </button>
        ))}
      </div>
      <div className="secondmain">
        {array.length > 0 ? (
          filtered.map((el) => (
            <div className="main">
              <Card
                images={el.images[0]}
                brand={el.brand}
                category={el.category}
                description={el.description}
                id={el.id}
                price={el.price}
                stock={el.stock}
              />
              <div className="stars">
                <ReactStars count={5} size={24} value={el.rating} />
              </div>
            </div>
          ))
        ) : (
          <h1>trenuntno nema podatka</h1>
        )}
      </div>
    </div>
  );
}

export default App;
// //=======================================================
// function App() {
//   const [data, setData] = useState({});
//   const [currentProd, setCurrrentProd] = useState(1);
//   const [allProd, setAllProd] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${currentProd}`)
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, [currentProd]);

//   console.log(currentProd);
//   console.log(data);
//   return (
//     <div className="container">
//       {data && (
//         <div>
//           <h1>{data.title}</h1>
//           <h1>{data.descriptioj}</h1>
//           {data.images && <img src={data.images[0]}></img>}
//         </div>
//       )}
//       {allProd.map((el) => (
//         <button onClick={() => setCurrrentProd(el)}>{el}</button>
//       ))}
//     </div>
//   );
// }
// export default App;
// //====================================================================
// // function App() {
// //   const [api, setApi] = useState({});
// //   const [number, setNumber] = useState(2);
// //   const [allButtons, setAllButton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// //   console.log(api);
// //   console.log(api);
// //   useEffect(() => {
// //     fetch(`https://dummyjson.com/products/${number}`)
// //       .then((res) => res.json())
// //       .then((json) => setApi(json));
// //   }, [number]);
// //   return (
// //     <div className="container">
// //       {
// //         <div>
// //           <h1>title :{api.title}</h1>
// //           <h1> description: {api.description}</h1>
// //           {api.images ? <img src={api.images[0]}></img> : null}
// //           {allButtons.map((el) => (
// //             <button onClick={() => setNumber(el + 1)}>{el}</button>
// //           ))}
// //         </div>
// //       }
// //     </div>
// //   );
// // }
// // export default App;
// //=======================================================================
// // function App() {
// //   const [api, setApi] = useState([]);
// //   const [allButtons, setAllButtons] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// //   const [changer, setChanger] = useState(1);
// //   console.log(api);
// //   useEffect(() => {
// //     fetch(`https://dummyjson.com/products/${changer}`)
// //       .then((res) => res.json())
// //       .then((json) => setApi(json));
// //   }, [changer]);
// //   return (
// //     <div className="container">
// //       <div>
// //         <h1>title:{api.title}</h1>
// //         <h1> description:{api.description}</h1>
// //         {api.images && <img src={api.images[0]}></img>}
// //         {allButtons.map((el) => (
// //           <button onClick={() => setChanger(el + 1)}>{el}</button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// //  ======================================================================

// // function App() {
// //   const [data, setData] = useState([]);
// //   const [filteredArray, setFilteredArray] = useState([]);
// //   const [newData, setNewData] = useState([]);

// //   useEffect(() => {
// //     fetch("https://dummyjson.com/products")
// //       .then((res) => res.json())
// //       .then((json) => {
// //         setData(json.products);
// //         const categories = json.products.map((el) => el.category);
// //         setFilteredArray([...new Set(categories)]);
// //         setNewData(json.products);
// //       });
// //   }, []);
// //   console.log(filteredArray);

// //   return (
// //     <div className="container">
// //       <div className="main">
// //         {filteredArray.map((el) => (
// //           <button
// //             onClick={() => setData(newData.filter((e) => e.category == el))}
// //           >
// //             {el}
// //           </button>
// //         ))}
// //       </div>
// //       {data.map((el) => (
// //         <Card
// //           brand={el.brand}
// //           description={el.description}
// //           images={el.images[0]}
// //         />
// //       ))}
// //     </div>
// //   );
// // }
// // export default App;
// //===============================================================
// function App() {
//   const [inputText, setInputText] = useState({
//     ime: "",
//     prezime: "",
//     age: 0,
//   });
//   function handler(event) {
//     setInputText({ ...inputText, [event.target.name]: event.target.value });
//   }
//   return (
//     <div className="container">
//       <input onChange={handler} name="ime"></input>
//       <input onChange={handler} name="prezime"></input>
//       <input onChange={handler} name="age"></input>
//       <button
//         onClick={() => inputText == true && console.log(inputText)}
//       ></button>
//     </div>
//   );
// }
// export default App;
