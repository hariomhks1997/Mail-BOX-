import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import classes from './Form.module.css'
import {Signup,SignIn} from '../store/cart-actions';
import { useDispatch } from 'react-redux';



const Forms=()=> {
  const [isLogin, setisLogin] = useState(true)
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const dispatch=useDispatch();
    const modehandler=()=>{
      setisLogin((prev)=>!prev)
    }
    const emailhandler=(event)=>{
      setemail(event.target.value)
    }
    const passwordhandler=(event)=>{
      setpassword(event.target.value)
    }
    const confirmpasswordhandler=(event)=>{
        setconfirmpassword(event.target.value)

    }
    const submithandler=async (event)=>{
  event.preventDefault();
  const enteredemail=email;
       const enteredpassword=password;
       const enteredconfirmpassword=confirmpassword;
    
    let password1;
    let email1;
    if(!isLogin && enteredpassword===enteredconfirmpassword){
     password1=enteredconfirmpassword
     email1=enteredemail
     if(enteredpassword===enteredconfirmpassword){

     }else{
      alert('password missmatch')
      return;
     }
     console.log(enteredemail,enteredpassword)
    }else if(isLogin ) {
      password1=enteredpassword
      email1=enteredemail
      console.log(enteredemail,enteredpassword) 
    }else{
      alert('password missmatch')
      return;
    }
    if(!isLogin){
    dispatch(Signup(email1,password1,!isLogin))
    }else{
      dispatch(SignIn(email1,password1,isLogin))
    }
    
 

    }
  return (
    <div  className={classes.form}>
  <div style={{justifyContent:'center',alignItems:'center',display:'flex',marginTop:'10%',}}>
   
    <Form style={{width:'90%',maxWidth:'20rem',background:'violet',borderRadius:'1rem'}} onSubmit={submithandler}>
    <CardHeader style={{textAlign:'center',fontSize:'2rem'}}>{!isLogin ?'SignUp':'Login' }</CardHeader>
      <Form.Group style={{marginTop:'1rem',marginLeft:'1rem',marginRight:'1rem'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={emailhandler} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group >

      <Form.Group style={{marginLeft:'1rem',marginRight:'1rem'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label  >Password</Form.Label>
        <Form.Control onChange={passwordhandler} type="password" placeholder="Password" />
      </Form.Group>
      {!isLogin && <Form.Group style={{marginLeft:'1rem',marginRight:'1rem'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label > Confirm Password</Form.Label>
        <Form.Control onChange={confirmpasswordhandler} type="password" placeholder="Password" />
      </Form.Group>}
      <div style={{textAlign:'center'}}>
      <Button style={{marginBottom:'1rem',marginLeft:'1rem',marginRight:'1rem',width:'90%'}} variant="primary" type="submit">
       {!isLogin ? 'SignUp':'Login'}
      </Button>
      </div>
      
    </Form>
    
    </div>
    <div style={{justifyContent:'center',alignItems:'center',display:'flex',marginTop:'1rem'}}>
    <Button style={{width:'90%',maxWidth:'20rem',borderRadius:'1rem',fontSize:'1.5rem',textAlign:'center'}} onClick={modehandler}>{!isLogin ?'Have an account? Login':'Create an account'}</Button>
    </div>
    
    </div>
   
  );
}

export default Forms;