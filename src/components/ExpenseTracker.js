
import React from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { NavLink } from "react-router-dom";

const ExpenseTracker = () => {
  
  return (
    <div>
    <div style={{ marginTop: "6rem" }}>
      <CardHeader style={{ backgroundColor: "violet", paddingBlock: "1rem",display:'flex',justifyContent:'space-between',borderRadius:'1rem' }}>
        <li style={{listStyle:'none',padding:'1rem',background:'white',borderRadius:'1rem'}}>Welcome to Expense Tracker</li>
        <li style={{listStyle:'none',background:'lightyellow',padding:'1rem',borderRadius:'1rem'}}>
          <NavLink style={{textDecoration:'none'}} to="/complete">
            Your Profile Is Incomplete : Complete Now
          </NavLink>
        </li>
      </CardHeader>
      
      <CardHeader style={{ marginLeft: "70%", background: "yellow" }}>
        
      </CardHeader> 
      
    </div>
    
    </div>
  );
};

export default ExpenseTracker;
