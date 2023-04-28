import CartContext from './cart-context'
import { useReducer } from 'react';

const defaultcartstate={
    items:[],
    totalAmount:0
}
const cartreducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedamout=state.totalAmount+action.item.amount*action.item.price;
        
        let updatedItems;

        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id)
        const existingCartItem=state.items[existingCartItemIndex]

        if(existingCartItem){
          const  updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount+action.item.amount
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }else{
           updatedItems=state.items.concat(action.item);
        }
        return{
            items:updatedItems,
            totalAmount:updatedamout
        }
    }
   
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
          };}
}

const CartProvider=(props)=>{
const[cartState,dispatchCartAction]=useReducer(cartreducer,defaultcartstate)

const addItemToCartHandler=(Item)=>{
    dispatchCartAction({type:'ADD',item:Item});
}
const removeItemFromCartHandler=(Id)=>{
    dispatchCartAction({type:'REMOVE',id:Id})
}

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;