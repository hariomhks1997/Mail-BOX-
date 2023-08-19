import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const InputItem = (props) => {
    
  return (
    <div style={{color:'black', background:'yellow',marginTop:'2rem',justifyContent:'space-between'}}>
      
      <ListGroup style={{backgroundColor:'yellow',marginTop:'2rem',justifyContent:'space-between'}} horizontal>
      <ListGroup.Item style={{fontSize:'1rem'}}>{props.item} </ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem'}}>{props.description}</ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem'}}>{props.price}</ListGroup.Item>
      <ListGroup.Item style={{fontSize:'1rem'}}>Date</ListGroup.Item>
    </ListGroup>
        
    </div>
  )
}

export default InputItem