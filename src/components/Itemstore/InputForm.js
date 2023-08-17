import React, { useContext} from "react";
import CartContext from "../../Store/Cart-context";
import InputCart1 from './InputCart1';
import { Card } from "react-bootstrap";


const InputForm = (props) => {
  const cartctx = useContext(CartContext)
  console.log(cartctx)
  const product=cartctx.items.map((item)=>(
    <InputCart1 item={item.title} price={item.rate} description={item.description1} price1={item.price1}></InputCart1>
  ))

  return (
    <Card>
  
    <div style={{background:'pink',height:'30rem',marginTop:'5rem',maxHeight:'20rem',overflow:'scroll',width:'100%'}}>
    {product}
    </div>
    
    </Card>
    

    // <div className='column' row='2' >

    // <div className={classes['cart-items']}  >
    //     <form className={classes.total}style={{display:'flex',marginLeft:'1rem',marginTop:'5rem'}} onSubmit={submithandler}>
    //     <h2>{props.title}</h2><br></br>
    //     <img src={props.image} alt='hd'/>
    //     <div style={{display:'flex'}}>
    //     <h6 style={{marginRight:'10rem'}}>RS : {props.price}</h6>
    //     <button type='submit'>Add</button>
    //     </div>
    //     </form>
    //     <hr></hr>
    // </div>
    // </div>
    // <div className={classes.section}>

    //   <div className={classes.musiccontent}>
    //     <div className={classes.album}>
    //       <h3>{props.title}</h3>
    //       <div className={classes.img1}>
    //       <img className={classes.img} src={props.image} alt='hd'/>
    //       </div>
    //       <div className={classes.proddetails}>
    //       <span>{props.price}</span>
    //       <button onClick={submithandler} type='submit'>Add To Cart</button>
    //       </div>

    //     </div>
    //   </div>

    // </div>
  );
};

export default InputForm;
