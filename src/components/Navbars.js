import React,{useContext} from 'react';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import classes from './Navbars.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authActions } from '../Store/auth';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CartContext from '../Store/Cart-context';

const Navbars = (props) => {
  const cartctx = useContext(CartContext)
 const [show, setshow] = useState(true)


  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  const dispatch=useDispatch();
  
  const logouthandler=()=>{
    //cartctx.logout();
    dispatch(authActions.logout())
  }
  const darkhandler=()=>{
    props.color('black')
    setshow(false)
  }
  const lighthandler=()=>{
props.color('white')
setshow(true)
  }
 
  return (
    <div className={classes.nav} >
      
     <Navbar expand='lg' className="bg-body-tertiary">
       <Container>
         <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link><NavLink  to="/home">Home</NavLink></Nav.Link>
             <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
             {isLoggedIn && <Nav.Link><NavLink to="/expensetracker">Expense Tracker</NavLink></Nav.Link>}
             {!isLoggedIn &&  <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link>}
             {isLoggedIn && <Nav.Link><NavLink onClick={logouthandler} to="/logout">Logout</NavLink></Nav.Link>}
             <NavLink style={{display:'none'}} to="/verifyemail">Email Verification</NavLink>
             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">
                 Another action
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">
                 Separated link
             </NavDropdown.Item>
            </NavDropdown>
            {show && props.amount && <Button onClick={darkhandler}>Dark</Button>}
            {!show && props.amount && <Button onClick={lighthandler}>Light</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars