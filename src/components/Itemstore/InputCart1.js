import React, { useContext, useState } from 'react';
import CartContext from '../../Store/Cart-context';

const InputCart1 = (props) => {
  const cartctx = useContext(CartContext)
  const [quantity1, setquantity] = useState(0)
  const quantityhandler=(event)=>{
  setquantity(event.target.value)
  }
  
  
  const submithandler=(event)=>{
     event.preventDefault();
     let id=Math.random().toString();
     let title=props.item;
     let description1=props.description;
     let price1=props.price1;
     let quantity=+quantity1;
     let rate=props.price;
    
     const add={
      id,
      title,
      description1,
      rate,
      price1,
      quantity,
      


     }
     console.log(add)
     cartctx.additem(add)
  }
    

  return (
    <form onSubmit={submithandler}>
    <div style={{display:'flex',marginTop:'1rem',background:'green',paddingBlock:'1rem',width:''}}>
   <li style={{marginLeft:'5rem',listStyle:'none'}}>{props.item}</li>
   <li style={{marginLeft:'5rem',listStyle:'none'}}>{props.description}</li>
   <li style={{marginLeft:'5rem',listStyle:'none'}}>Rate : {props.price}</li>
   <input onChange={quantityhandler} type='number'></input>
   <button type='submit'>Add To Cart</button>

    </div>
    </form>
  )
}

export default InputCart1