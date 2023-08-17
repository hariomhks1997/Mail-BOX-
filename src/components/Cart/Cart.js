import React,{useContext} from 'react';
import classes from './Cart.module.css';
import CartContext from '../../Store/Cart-context';

const Cart = (props) => {
  const cartctx = useContext(CartContext);

  let quantity=cartctx.quantity;
  
  return (
    <div style={{display:'flex'}}>
        
        <h4 className={classes.button} onClick={props.shown}>Cart</h4>
        {cartctx.isLoggedIn && <h4 >{quantity}</h4>}
        
    </div>
  )
}

export default Cart;