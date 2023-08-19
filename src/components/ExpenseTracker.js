
import React, { useContext, useRef } from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import CartContext from "../Store/Cart-context";
import InputForm from "./InputForm";



const ExpenseTracker = () => {
  const cartctx = useContext(CartContext)
  const selecthandler=useRef();
  const descriptionhandler=useRef()
  const pricehandler=useRef();
  const submithandler=(event)=>{
  event.preventDefault();
  const item=selecthandler.current.value;
  const description=descriptionhandler.current.value;
  const price=pricehandler.current.value;
  const id=Math.random().toString();
  const add={
    id,
    item,
    description,
    price

  }
  cartctx.additem(add)
  }
  
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
      <Container style={{marginTop:'5rem',background:'yellow'}}>
      <Form onSubmit={submithandler}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Expenses List</Form.Label>
          <Form.Select ref={selecthandler} aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="petrol">Petrol</option>
      <option value="disel">Disel</option>
      <option value="salary">Salary</option>
    </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control ref={descriptionhandler} type="text"  />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control ref={pricehandler} type="number"  />
        </Form.Group>
      </Row>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      </Container>

      <InputForm></InputForm>
      
      
    </div>
    
    </div>
  );
};

export default ExpenseTracker;
