import React,{useContext} from 'react'
import InputItem from './InputItem'
import CartContext from '../Store/Cart-context'
import { Button, Container } from 'react-bootstrap'
import { CSVLink } from 'react-csv'
import { useSelector } from 'react-redux';



import ListGroup from 'react-bootstrap/ListGroup';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const InputForm = (props) => {
  //const cartctx=useSelector(state=>state.post.items)
  //const totalamount=useSelector(state=>state.post.totalamount)
  //console.log(cartctx)
  //console.log(totalamount)
    const cartctx = useContext(CartContext)
    const totalamount=cartctx.totalamount.toFixed(2)

    if(totalamount>10000){
      props.amounthandler(true)
    }else{
      props.amounthandler(false)
    }
   
    
    const product=cartctx.items.map((ite)=>(
    <InputItem key={Math.random().toString()} item={ite.item} description={ite.description} price={ite.price} id={ite.id} date={ite.date} item2={ite} updateitem={props.updateitem}></InputItem>
    ))
   const headers=[
    {label:'Item',key:'item'},
    {label:'Description',key:'description'},
    {label:'Price',key:'price'},
    {label:'Date',key:'date'},
    
   ] 
   
   const csvLink={
    filename:'file.txt',
    headers:headers,
    data:cartctx.items
    
   }
   
  return ( 
    <div>
      <CardHeader style={{textAlign:'center',fontSize:'3rem'}}><CSVLink {...csvLink} style={{textDecoration:'none',}}><Button>Download CSV File</Button></CSVLink></CardHeader>
      <Container style={{marginTop:'2rem',background:'pink',alignItems:'center'}}>
    <ListGroup style={{justifyContent:'space-between',padding:'1rem',background:'violet'}} horizontal>
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