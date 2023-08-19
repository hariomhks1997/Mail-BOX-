import React,{useContext} from 'react'
import InputItem from './InputItem'
import CartContext from '../Store/Cart-context'
import { Container } from 'react-bootstrap'

import ListGroup from 'react-bootstrap/ListGroup';

const InputForm = () => {
    const cartctx = useContext(CartContext)
    console.log(cartctx.items)
    
    const product=cartctx.items.map((ite)=>(
    <InputItem key={ite.id} item={ite.item} description={ite.description} price={ite.price}></InputItem>
    ))
  return (
    <Container style={{background:'green',marginTop:'5rem',height:'20rem',overflow:'scroll',borderRadius:'1rem'}}>
    
      <ListGroup style={{backgroundColor:'black',marginTop:'2rem',justifyContent:'space-between'}} horizontal>
      <ListGroup.Item style={{fontSize:'1rem'}}>Item List </ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem'}}>Description</ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem'}}>Price</ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem'}}>Date</ListGroup.Item>
    </ListGroup>
      
      {product}
      
      </Container>  
  )
}

export default InputForm