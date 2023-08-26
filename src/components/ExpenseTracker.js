
import React, { useContext, useRef,useState,useEffect } from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import CartContext from "../Store/Cart-context";
import InputForm from "./InputForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postActions } from '../Store/post';


const ExpenseTracker = (props) => {
  const dispatch=useDispatch();
 // const cartctx=useSelector(state=>state.post.items)
  const emailverify=useSelector(state=>state.auth.token)
  
 const cartctx = useContext(CartContext)
  const [complete, setcomplete] = useState(true)
  const [amount, setamount] = useState(false)
  const amounthandler=(item)=>{
    setamount(item)
    props.amount(item)
  }
  const selecthandler=useRef();
  const descriptionhandler=useRef()
  const pricehandler=useRef();
  const datehandler=useRef();
  const updateitemhandler=(item)=>{
  console.log(item)
  selecthandler.current.value=item.item;
  descriptionhandler.current.value=item.description;
  pricehandler.current.value=item.price;
  datehandler.current.value=item.date;
  
  }
  const submithandler=(event)=>{
  event.preventDefault();
  
  const item=selecthandler.current.value;
  const description=descriptionhandler.current.value;
  const price=pricehandler.current.value;
  const previousdate=datehandler.current.value;
  //const id=Math.random().toString();
  const date=new Date().toLocaleString()
  
  const add={
    //id,
    item,
    description,
    price,
    date,
    previousdate

  }
  //dispatch(postActions.postitem(add))
 cartctx.additem(add)
  selecthandler.current.value=''
  descriptionhandler.current.value=''
  pricehandler.current.value=''
  datehandler.current.value=''

  }
  useEffect(() => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4",
      {
        method: "POSt",
        body: JSON.stringify({
          idToken: emailverify,
        }),
        header: {
          "Content-Type": "application-json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        
        setcomplete(false)
        console.log('updated')
        //navigate('/expensetracker')
        //localStorage.setItem('token',data.idToken)
        //const email=data.email.replace('@','').replace('.','')
        //cartctx.login(email,data.idToken)
      })
      .catch((err) => {
        alert(err.message);
      });
      // eslint-disable-next-line 
  }, []);
  const premium=()=>{
    props.premium('black')
  }
  
  return (
    <div>
    <div style={{ marginTop: "6rem" }}>
      <CardHeader style={{textAlign:'center'}}>
      {amount && <Button style={{fontSize:'2rem'}} onClick={premium}>
            Activate Premium Member
          </Button>}
      </CardHeader>
    
      <CardHeader style={{ backgroundColor: "violet", paddingBlock: "1rem",display:'flex',justifyContent:'space-between',borderRadius:'1rem',marginTop:'1rem' }}>
        <li style={{listStyle:'none',padding:'1rem',background:'white',borderRadius:'1rem'}}>Welcome to Expense Tracker</li>
        
        <li style={{listStyle:'none',background:'lightyellow',padding:'1rem',borderRadius:'1rem' }}>
          {complete && <NavLink style={{textDecoration:'none'}} to="/complete">
            Your Profile Is Incomplete : Complete Now
          </NavLink>}
          
         {!complete && <NavLink style={{textDecoration:'none'}} to="/complete">
            Your Profile Is 100% complete
            <Button >Edit Now</Button>
          </NavLink>}
        </li>
      </CardHeader>
      <Container style={{marginTop:'5rem',background:'yellow'}}>
      <Form onSubmit={submithandler}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Expenses List</Form.Label>
          <Form.Select ref={selecthandler}  aria-label="Default select example">
      
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
        <Form.Group style={{display:'none'}} as={Col} controlId="formGridPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control ref={datehandler} type="text"  />
        </Form.Group>
      </Row>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      </Container>

      <InputForm updateitem={updateitemhandler} amounthandler={amounthandler}></InputForm>
      
      
    </div>
    
    </div>
  );
};

export default ExpenseTracker;
