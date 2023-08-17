import React,{useContext} from 'react';
import CartContext from '../../Store/Cart-context';


const CartItemShown =(props) => {
  const cartctx = useContext(CartContext)
  const submithandler=(event)=>{
   event.preventDefault();
    
    cartctx.removeitem(props.remove)
    
  }
  console.log(props.price)
  return (
    <>
    <hr></hr>
    <form style={{display:'flex',}} onSubmit={submithandler}>
    
      
    <li style={{marginTop:'1.5rem',marginLeft:'1rem'}}>{props.title}</li>
  
    
    

    <div style={{marginTop:'1.5rem',marginLeft:'5rem'}}>Total Quantity : {props.quantity}</div>
   
    
    <li style={{marginTop:'1.5rem',marginLeft:'7rem'}}>Rs:{props.price} </li>
    <button type='submit' style={{color:'red'}} >Remove</button>
    </form>
    <hr></hr>
    </>
  )
}

export default CartItemShown;