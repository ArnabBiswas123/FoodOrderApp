import styles from './modal.module.css'
import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';

const Backdrop=(props)=>{
    return (
        <div className={styles.backdrop} onClick={props.onClose}/>
    )
}

const ModalOverlay=(props)=>{
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}



const Modal=(props)=>{
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,document.getElementById('overlay'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlay'))}
    </Fragment>
}
export default Modal;

