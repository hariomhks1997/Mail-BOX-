import React, { useState ,useEffect} from "react";
import CartContext from "./Cart-context";
import axios from "axios";


const CartProvider = (props) => {
  const [additem, setadditem] = useState([])
  const [totalamount, settotalamount] = useState(0);
  const [quantity, setquantity] = useState(0)
 
  const initialtoken = localStorage.getItem("token");

  const [token, settoken] = useState(initialtoken);

  const userIsLoggedIn = !!token;
  let email=localStorage.getItem('emailtoken')
  useEffect(() => {
    
    const fetch=async ()=>{
      try{
        const response =await axios.get(`https://crudcrud.com/api/7a4458a9a9f54023be4474c9b53579a5/${email}`);
        setadditem(response.data)
      }catch(err){

      }

    }
    fetch();
  
    
  }, [email])
  useEffect(() => {
    let updateAmount = 0;
    let updateQuantity = 0;

    additem.forEach((item) => {
      // console.log("hii");
      updateAmount += Number(item.price1)*item.quantity;
      updateQuantity += Number(item.quantity);
    });
    
    settotalamount(updateAmount);
    setquantity(updateQuantity);
  }, [additem]);
  
 
  

  const logouthandler = () => {
    settoken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("emailtoken");
  };
  const loginhandler = (token, emailtoken, expirationtime) => {
    settoken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("emailtoken", emailtoken);

    
  }

  const additemhandler =async (item) => {
    console.log(item)

    try{
      const existingitemindex=additem.findIndex(
        (items)=>(items.description1===item.description1 && items.title===item.title)
      )
      const existingitem=additem[existingitemindex]
      console.log(existingitem)
    const email=localStorage.getItem('emailtoken')
    if(existingitem){
      const updateditem={
        ...existingitem,
      quantity:existingitem.quantity+item.quantity,
        

      }
      
      await axios.put(`https://crudcrud.com/api/7a4458a9a9f54023be4474c9b53579a5/${email}/${existingitem._id}`,
      {...updateditem,_id:undefined});
      
    setadditem((previtem)=>(previtem.map((cartitem)=>(cartitem.description1===item.description1 && cartitem.title===item.title?updateditem:cartitem))))
    }
    else{
      const post=await axios.post(`https://crudcrud.com/api/7a4458a9a9f54023be4474c9b53579a5/${email}`,
      item );
      setadditem((previtem)=>([...previtem,post.data]))
      
      
    }
    //settotalamount((prev)=>prev+item.rate)
     // setquantity((prev)=>prev+item.quantity)
  }catch(err){
   console.log(err)
   
  }
  }
    
  const removeitemhandler = async (item,type) => {
    
      
      const existingitemindex=additem.findIndex(
        (items)=>items.id===item.id
      )
      try{
      let updateditems;
      const existingitem=additem[existingitemindex]
      console.log(existingitem)
      const email=localStorage.getItem('emailtoken')
      if(existingitem.quantity===1 ||existingitem.quantity===0 ){
        const response=await axios.delete(`https://crudcrud.com/api/7a4458a9a9f54023be4474c9b53579a5/${email}/${existingitem._id}`);
       //setadditem((previtem)=>previtem.filter((item1)=>item1.title!==item.title))
        console.log(response.data)
       updateditems=additem.filter((items)=>items.id!==item.id)
       
      }
      else{
        const updateditem={
          ...existingitem,
          quantity:existingitem.quantity-1,
      
        
        }
        
      await axios.put(`https://crudcrud.com/api/7a4458a9a9f54023be4474c9b53579a5/${email}/${existingitem._id}`,
        {...updateditem,_id:undefined});
        
      setadditem((previtem)=>(previtem.map((cartitem)=>(cartitem.title===item.title?updateditem:cartitem))))
      updateditems = [...additem];
      updateditems[existingitemindex] = updateditem;
    
        
      }
    //  settotalamount((prev)=>prev-item.rate)
     // setquantity((prev)=>prev-item.quantity)
      setadditem(updateditems);
      
      
    }catch(err){
    alert(err.message)
    }
    
    
  };

  const cartContext = {
    quantity:quantity,
    items:additem, 
    totalamount:totalamount,
    additem: additemhandler,
    removeitem: removeitemhandler,
    message: "Click Here",
   
  

    isLoggedIn: userIsLoggedIn,
    login: loginhandler,
    logout: logouthandler,
    
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
      
    </CartContext.Provider>
  );
};

export default CartProvider;
