import { Fragment } from "react";
import Styles from './Header.module.css'
import mealsimage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
  return(<Fragment>
        <header className={Styles.header}>
            <h1>ReactMeals</h1>
           <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={Styles['main-image']}>
            <img src={mealsimage} alt="A table of Foods" />
        </div>
  </Fragment>
)}
export default Header;