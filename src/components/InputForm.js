import React,{useContext} from 'react'
import InputItem from './InputItem'
import CartContext from '../Store/Cart-context'
import { Container } from 'react-bootstrap'



import ListGroup from 'react-bootstrap/ListGroup';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const InputForm = (props) => {
    const cartctx = useContext(CartContext)
    const totalamount=cartctx.totalamount.toFixed(2)

    if(totalamount>10000){
      props.amounthandler(true)
    }else{
      props.amounthandler(false)
    }
    console.log(cartctx.items)
    
    const product=cartctx.items.map((ite)=>(
    <InputItem key={Math.random().toString()} item={ite.item} description={ite.description} price={ite.price} id={ite.id} date={ite.date} item2={ite} updateitem={props.updateitem}></InputItem>
    ))
    
  return (
    <div>
      <Container style={{marginTop:'2rem',background:'black',alignItems:'center'}}>
    <ListGroup style={{justifyContent:'space-between',padding:'1rem',background:'black'}} horizontal>
      <ListGroup.Item style={{fontSize:'1rem',background:'red'}}>Item List </ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem',background:'red'}}>Description</ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem',background:'red'}}>Price</ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem',background:'red'}}>Date</ListGroup.Item>
    </ListGroup>
    <CardHeader style={{background:'yellow',fontSize:'2rem',textAlign:'center'}}>Total Amount : {totalamount}</CardHeader>
    </Container>  
    
    <Container style={{background:'green',height:'20rem',overflow:'scroll',marginTop:'1rem',}}>
    
    
    
     
      {product}
      
      </Container>  
      </div>
  )
}

export default InputForm