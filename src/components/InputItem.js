import React,{useContext} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import CartContext from '../Store/Cart-context';
import { Button } from 'react-bootstrap';

const InputItem = (props) => {
  const cartctx = useContext(CartContext)
  const deletehandler=(event)=>{
    event.preventDefault();
    cartctx.removeitem(props.item2)
    
  }
  const updatehandler=(event)=>{
event.preventDefault();
props.updateitem(props.item2)
  }
    
  return (
    <div style={{color:'black', background:'yellow',marginTop:'2rem',justifyContent:'space-between'}}>
      
      <ListGroup style={{backgroundColor:'yellow',marginTop:'2rem',justifyContent:'space-between'}} horizontal>
      <ListGroup.Item style={{fontSize:'1rem'}}>{props.item} </ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem'}}>{props.description}</ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem'}}>Rs : {props.price}</ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem'}}>{props.date}</ListGroup.Item>
      <Button onClick={deletehandler}>Delte</Button>
      <Button onClick={updatehandler}>Update</Button>
      
    </ListGroup>
        
    </div>
  )
}

export default InputItem