import React, { useState,useContext} from "react";
import Navbar from "./components/Navbar";
import InputItems from "./components/Itemstore/InputItems";
import CartItem from "./components/Cart/CartItem";

import {Route,Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import LoginForm from "./components/Itemstore/LoginForm";
import CartContext from "./Store/Cart-context";




function App() {
const cartctx = useContext(CartContext)

  
  const [shown, setshown] = useState(false);
  const shownhandler = () => {
    setshown(true);
  };
  const hidehandler = () => {
    setshown(false);
  };

  return (
   
    
     
      
      
      <div>
      
      <Navbar shown={shownhandler}></Navbar>
      <hr></hr>
     { shown && <CartItem hide={hidehandler}></CartItem>}
      <Routes>
    <Route exact path='/login' element={<LoginForm></LoginForm>} ></Route>
      <Route exact path='/Store' element={cartctx.isLoggedIn ?<InputItems></InputItems>:<Home></Home>}></Route>
     <Route exact path='/' element={<Home></Home>} ></Route>
     <Route exact path='/About' element={<About></About>} ></Route>
    
      
      </Routes>
      
      </div>
    
    
  );
}

export default App;
