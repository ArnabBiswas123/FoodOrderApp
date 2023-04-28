import {useState } from "react";
import Header from './component/Layout/Header';
import Meals from "./component/Meals/Meals";
import Cart from './component/Carts/Cart'
import CartProvider from "./store/cart-provider";

function App() {
const [cartIsShown,setCartIsShown]=useState(false);

const showCartHandler=()=>{
  setCartIsShown(true);
}
const hideCartHandler=()=>{
  setCartIsShown(false);
}


  return (
    <CartProvider>
      {cartIsShown&&<Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
