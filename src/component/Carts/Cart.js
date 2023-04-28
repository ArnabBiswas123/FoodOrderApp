import { useContext } from 'react'
import Modal from '../UI/modal'
import styles from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart=(props)=>{
    // const cartItems=<ul className={styles['cart-items']}>{[{id:'c1',name:'susi',amount:2,price:12.94}].map((item)=><li>{item.name}</li>)}</ul>
const cartCtx=useContext(CartContext);
const TotalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
const hasItem=cartCtx.items.length>0;

const cartItemRemoveHandler=(id)=>{
    cartCtx.removeItem(id)
}
const cartItemAddHandler=(item)=>{
    cartCtx.addItem(item)
}
 return(
    <Modal onClose={props.onHideCart}>
            {<ul className={styles['cart-items']}>{cartCtx.items.map((item)=><CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)}
            />)}</ul>}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{TotalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
            {hasItem&&<button className={styles.button}>Order</button>}
        </div>
    </Modal>
 )
}
export default Cart;