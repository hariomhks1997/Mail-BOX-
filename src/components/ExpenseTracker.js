import React from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { NavLink } from "react-router-dom";

const ExpenseTracker = () => {
  
  return (
    <div>
    <div style={{ marginTop: "6rem", display: "flex" }}>
      <CardHeader style={{ backgroundColor: "violet", paddingBlock: "1rem" }}>
        Welcome to Expense Tracker
      </CardHeader>
      
      <CardHeader style={{ marginLeft: "70%", background: "yellow" }}>
        <li>
          <NavLink to="/complete">
            Your Profile Is Incomplete : Complete Now
          </NavLink>
        </li>
      </CardHeader> 
      
    </div>
    
    </div>
  );
};

export default ExpenseTracker;
