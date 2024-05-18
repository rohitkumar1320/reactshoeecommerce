import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contactus/ContactUs";
import { Route, Routes } from "react-router-dom";
import Mens from "./components/men/Mens";
import Women from "./components/women/Women";

function App() {
    

    return(
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/mens' element={<Mens />}></Route>
        <Route path='/women' element={<Women></Women>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
        
    )

            
}

export default App;

// function App() {
//   const [movies, setMovies] = useState<any>([]);
//   const [cartItem, setCartItem] = useState<any>([]);
//   const [showCart, setShowCart] = useState(false);

//   useEffect(() => {
//     callMovies();
//   }, []);

//   function callMovies() {
//     fetch("https://dummyapi.online/api/pokemon")
//       .then((response) => response.json())
//       .then((json) => {
//         setMovies(json);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   function addItemsToCart(item: any) {
//     if (cartItem.includes(item)) {
//       alert("Already There!");
//     } else setCartItem([...cartItem, item]);
//   }

//   function removeTheCart(items: any) {
//     let filterData: any = cartItem.filter(function (item: any) {
//       return item.id !== items.id;
//     });
//     setCartItem(filterData);
//   }

//   return (
//     <div>
//       <header className="header-container" >
//         <div>Logo</div>
//         <div
//           className="cart-button"
//           onClick={() => {
//             setShowCart(!showCart);
//           }}
//         >
//           Cart{`(${cartItem.length})`}
//         </div>
//       </header>
//       {showCart && (
//         <div
//           className="cart-listing-continer"
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             backgroundColor: "slateblue",
//           }}
//         >
//           {cartItem.length > 0 &&
//             cartItem.map((item: any) => {
//               return (
//                 <div
//                   className="container-card"
//                   onClick={() => {
//                     // addItemsToCart(item);
//                   }}
//                 >
//                   <img src={item.image_url} alt="pokeman" />
//                   <p style={{ textAlign: "center" }}>{item.pokemon}</p>
//                   <button
//                     onClick={() => {
//                       removeTheCart(item);
//                     }}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               );
//             })}
//         </div>
//       )}
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {movies.length > 0 &&
//           movies.map((item: any) => {
//             return (
//               <div
//                 className="container-card"
//                 onClick={() => {
//                   addItemsToCart(item);
//                 }}
//               >
//                 <img src={item.image_url} alt="pokeman" />
//                 <p style={{ textAlign: "center" }}>{item.pokemon}</p>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default App;


{/* <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div> */}