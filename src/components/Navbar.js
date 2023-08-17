import React, { useContext} from "react";
import classes from "./Navbar.module.css";
import Cart from "./Cart/Cart";
import CartContext from "../Store/Cart-context";
import { useNavigate,NavLink } from "react-router-dom";

const Navbar = (props) => {
  const cartctx = useContext(CartContext);
  const navigate = useNavigate();
  
  let id;
  const logouthandler = () => {
    id = cartctx;
    id.logout();
    setTimeout(() => {
      navigate('/')
    }, 3000);
    
   
  };
  return (
    <div className={classes.nav}>
      
      <li className={classes.li1}>
        <NavLink to="/">Home</NavLink>
      </li>

      <li className={classes.li3}>
        <NavLink to="/About">About</NavLink>
      </li>
      {cartctx.isLoggedIn && (
        <li className={classes.li2}>
          <NavLink to="/Store">Store</NavLink>
        </li>
      )}
     
        
     
      {!cartctx.isLoggedIn && (
        <li className={classes.li1}>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {cartctx.isLoggedIn && (
        <li>
          <button
            style={{
              background: "red",
              padding: "0.5rem",
              borderRadius: "1.5rem",
              fontSize: "15px",
            }}
            onClick={logouthandler}
          >
            Logout
          </button>
        </li>
      )}

      {cartctx.isLoggedIn && <Cart shown={props.shown}></Cart>}
    </div>
  );
};

export default Navbar;
