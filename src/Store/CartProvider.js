import React, { useState ,useEffect} from "react";
import CartContext from "./Cart-context";
import axios from "axios";






const CartProvider = (props) => {
  const [additem, setadditem] = useState([])
 const [totalamount, settotalamount] = useState(0);
  // const [quantity, setquantity] = useState(0)
 
const initialtoken=localStorage.getItem('token')
  const [token, settoken] = useState(initialtoken);

  const userIsLoggedIn = !!token;
  
  let email=localStorage.getItem('emailtoken')
  
    
    const fetch=async ()=>{
      try{
        const response =await axios.get(`https://reacthariom-default-rtdb.firebaseio.com/${email}.json`);
        
        
        const data=await response.data
        for(const key in data ){
         
          setadditem((prev)=>([...prev,
            {
              id:key,
              date:data[key].date,
              item:data[key].item,
              price:data[key].price,
              description:data[key].price}])
          )
        }
        
      }catch(err){

      }

    }
   
  useEffect(() => {
    fetch()
    // eslint-disable-next-line
  }, [])
  
    
  
  useEffect(() => {

    let updateAmount = 0;
    //let updateQuantity = 0;

    additem.forEach((item) => {
      // console.log("hii");
      updateAmount += Number(item.price);
     // updateQuantity += Number(item.quantity);
     
    });
    
    settotalamount(updateAmount);
    //setquantity(updateQuantity);
  }, [additem]);
  
  
  
  
 
  
  
  
 
  

  const logouthandler = () => {
    settoken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("emailtoken");
  };
  const loginhandler = async ( emailtoken, token,expirationtime) => {
    settoken(token);

    localStorage.setItem("emailtoken", emailtoken);
    localStorage.setItem("token",token);
    
  
  
   
    

    
  }
  

  const additemhandler =async (item1) => {
    console.log(item1)
    
   
   
    try{
      const existingitemindex=additem.findIndex(
             (items)=>items.date===item1.previousdate )
             const existingitem=additem[existingitemindex]
  console.log(existingitem)
  if(existingitem){
        const updateditem={
          ...existingitem,
          item:item1.item,
          description:item1.description,
          price:item1.price,
          date:existingitem.date,


        }
        console.log(updateditem)
       const response= await axios.put(`https://reacthariom-default-rtdb.firebaseio.com/${email}/${existingitem.id}.json`,
      updateditem);
      console.log(response.data)
      
  setadditem((previtem)=>(previtem.map((cartitem)=>(cartitem.date===existingitem.date?updateditem:cartitem))))
      }else{
        const response=await axios.post(`https://reacthariom-default-rtdb.firebaseio.com/${email}.json`,
        item1 );
        const data=await response.data.name;
        let id=data;
        let date=item1.date
      let item=item1.item
      let description=item1.description
      let price=item1.price
    console.log(data)
    const add={
     id,
     date,
     item,
     description,
     price
    }
    console.log(add)
    setadditem((prev)=>[...prev,add])
    
      }
  
            
    
    
        
      }catch(err){
      alert(err.message)
      }
    
  //   try{
  //     const existingitemindex=additem.findIndex(
  //       (items)=>items.title===item.title
  //     )
  //     const existingitem=additem[existingitemindex]
  //     console.log(existingitem)
  //   const email='idea';
  //   if(existingitem){
  //     const updateditem={
  //       ...existingitem,
  //       quantity:existingitem.quantity+item.quantity,
  //     }
      
  //     await axios.put(`https://reacthariom-default-rtdb.firebaseio.com/${email}/${existingitem._id}`,
  //     {...updateditem,_id:undefined});
      
  //   setadditem((previtem)=>(previtem.map((cartitem)=>(cartitem.title===item.title?updateditem:cartitem))))
  //   }
  //   else{
  //     const post=await axios.post(`https://reacthariom-default-rtdb.firebaseio.com/${email}`,
  //     item );
  //     setadditem((previtem)=>([...previtem,post.data]))
  //     console.log(post.data)
      
  //   }
  //   //settotalamount((prev)=>prev+item.price)
  //    // setquantity((prev)=>prev+item.quantity)
  // }catch(err){
  //  console.log(err)
  //  alert(err.message)
  // }
  }
    
  const removeitemhandler = async (item) => {
    console.log(item)
    const response=await axios.delete(`https://reacthariom-default-rtdb.firebaseio.com/${email}/${item.id}.json`)
    console.log(response)
    setadditem((previtem)=>previtem.filter((item1)=>item1.id!==item.id))
      
    //   const existingitemindex=additem.findIndex(
    //     (items)=>items.id===item.id
    //   )
    //   try{
    //   let updateditems;
    //   const existingitem=additem[existingitemindex]
    //   console.log(existingitem)
    //   const email=localStorage.getItem('emailtoken')
    //   if(existingitem.quantity===1){
    //     const response=await axios.delete(`https://crudcrud.com/api/2ed353955b8741bcbe75a7e93a796ebd/${email}/${existingitem._id}`);
    //    //setadditem((previtem)=>previtem.filter((item1)=>item1.title!==item.title))
    //     console.log(response.data)
    //    updateditems=additem.filter((items)=>items.id!==item.id)
       
    //   }
    //   else{
    //     const updateditem={
    //       ...existingitem,
    //       quantity:existingitem.quantity-1
    //     }
        
    //   await axios.put(`https://crudcrud.com/api/2ed353955b8741bcbe75a7e93a796ebd/${email}/${existingitem._id}`,
    //     {...updateditem,_id:undefined});
        
    //   setadditem((previtem)=>(previtem.map((cartitem)=>(cartitem.title===item.title?updateditem:cartitem))))
    //   updateditems = [...additem];
    //   updateditems[existingitemindex] = updateditem;
    
        
    //   }
    //   settotalamount((prev)=>prev-item.price)
    //   setquantity((prev)=>prev-item.quantity)
    //   setadditem(updateditems);
      
      
    // }catch(err){
    // alert(err.message)
    // }
    
    
  };
  const updatehandler=(item)=>{
    
  }

  const cartContext = {
    token:token,
    //quantity:quantity,
    items:additem, 
  totalamount:totalamount,
    additem: additemhandler,
    removeitem: removeitemhandler,
    message: "Click Here",
    
   
  

    isLoggedIn: userIsLoggedIn,
    login: loginhandler,
    logout: logouthandler,
    update:updatehandler,
    
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
      
    </CartContext.Provider>
  );
};

export default CartProvider;
