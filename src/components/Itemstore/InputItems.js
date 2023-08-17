import React, { memo,useContext,useState } from "react";
import InputForm from "./InputForm";
import CartContext from "../../Store/Cart-context";

const InputItems = () => {
  
  const cartctx = useContext(CartContext);
  const [item, setitem] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState(0);
  const itemhandler = (event) => {
    setitem(event.target.value);
    console.log(event.target.value)
    if(event.target.value==='Eclair' && description==='Large')
    setprice(30);
  else if(event.target.value==='Alphelibe' && description==='Large'){
    setprice(20)
  }else if(event.target.value==='DairyMilk'&& description==='Large'){
  setprice(15)
  }else if(event.target.value==='Eclair' && description==='Small'){
    setprice(25)
  }else if(event.target.value==='Alphelibe' && description==='Small'){
    setprice(15)
  }else if(event.target.value==='DairyMilk' && description==='Small'){
    setprice(10)
  }
  else{
    setprice(0)
  }
  };
  const descriptionhandler = (event) => {
    setdescription(event.target.value);
    if(event.target.value==='Large' && item==='Eclair')
    setprice(30);
  else if(event.target.value==='Large' && item==='Alphelibe'){
    setprice(20)
  }else if(event.target.value==='Large'&& item==='DairyMilk'){
  setprice(15)
  }else if(event.target.value==='Small' && item==='Eclair'){
    setprice(25)
  }else if(event.target.value==='Small' && item==='Alphelibe'){
    setprice(15)
  }else if(event.target.value==='Small' && item==='DairyMilk'){
    setprice(10)
  }
  else{
    setprice(0)
  }
    
  };
  const pricehandlere = (event) => {
    setprice(event.target.value)
  };

  const submithandler = (event) => {
    event.preventDefault();
    let id=Math.random().toString();
    let title=item;
    let description1=description;
    let quantity=+0;
    

    let rate=price;
    let price1=price;
     const add={
      id,
       title,
       description1,
       rate,
       quantity,
       price1,
       
     }
     console.log(add)
     cartctx.additem(add)
    
  };
  
  console.log(cartctx)
  
  
  return (
    <div>
      <form onSubmit={submithandler}>
        <div
          style={{
            display: "flex",
            background: "red",
            marginTop: "5rem",
            width: "100%",
            maxWidth:'100%'
          }}
        >
          <div style={{ marginLeft: "5rem", marginTop: "1rem" }}>
            <label style={{ marginRight: "1rem" }}>Candy Name</label>
            <br></br>
            <select onChange={itemhandler} >
            <option value={item}>{item}</option>
              <option value='Eclair'>Eclair</option>
              <option value='Alphelibe'>Alphelibe</option>
              <option value='DairyMilk'>DairyMilk</option>
            </select>
          </div>
          <div style={{ marginLeft: "5rem", marginTop: "1rem" }}>
            <label style={{ marginRight: "2.5rem" }}>Description</label>
            <br></br>
            <select onChange={descriptionhandler} >
            <option value={description}>{description}</option>
              <option value='Small'>Small</option>
              <option value='Large'>Large</option>
            </select>
          </div>
          <div style={{ marginLeft: "5rem", marginTop: "1rem" }}>
            <label style={{ marginRight: "0.5rem" }}>Price</label>
            <br></br>
            <select onChange={pricehandlere}  >
              <option value={price}>{price}</option>
              
            </select>
          </div>
          <button
            style={{ marginLeft: "5rem", height: "2rem", marginTop: "2rem" }}
          >
            Add Product
          </button>
        </div>
      </form>
      <InputForm></InputForm>
    </div>
    
  )
};
    
  
  

export default memo(InputItems);
