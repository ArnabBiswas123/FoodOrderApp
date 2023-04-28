import React from 'react'
const CartContext=React.createContext({
    items:[],
    totalAmount:0,  //initial data
    addItem:()=>{},
    removeItem:()=>{}
})
export default CartContext;