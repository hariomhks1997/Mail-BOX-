import React,{useContext} from 'react';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import classes from './Navbars.module.css';
import { NavLink } from 'react-router-dom';
import CartContext from '../Store/Cart-context';

const Navbars = () => {
  const cartctx = useContext(CartContext)
  
  const logouthandler=()=>{
    cartctx.logout();
  }
  return (
    <div className={classes.nav} style={{position:'fixed',width:'100%'}}>
      
     <Navbar className="bg-body-tertiary">
       <Container>
         <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link><NavLink  to="/home">Home</NavLink></Nav.Link>
             <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
             {cartctx.isLoggedIn && <Nav.Link><NavLink to="/expensetracker">Expense Tracker</NavLink></Nav.Link>}
             {!cartctx.isLoggedIn &&  <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link>}
             {cartctx.isLoggedIn && <Nav.Link><NavLink onClick={logouthandler} to="/logout">Logout</NavLink></Nav.Link>}
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars