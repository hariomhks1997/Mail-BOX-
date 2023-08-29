import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import CardHeader from 'react-bootstrap/esm/CardHeader';



const Forms=()=> {
  const [isLogin, setisLogin] = useState(true)
    const emailrefhandler=useRef();
    const passwordrefhandler=useRef();
    const confirmpasswordrefhandler=useRef();
    const submithandler=async (event)=>{
  event.preventDefault();
  const enteredemail=emailrefhandler.current.value;
    const enteredpassword=passwordrefhandler.current.value;
    const enteredconfirmpassword=confirmpasswordrefhandler.current.value;
    let password;
    let email;
    if(isLogin && enteredconfirmpassword===enteredpassword){
     password=enteredconfirmpassword
     email=enteredemail
    }else if(!isLogin ){
      password=enteredpassword
      email=enteredemail
    }
    try{
    let url;
    if(!isLogin){
     url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4'
    }else{
      
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4'
    }
   const response=await axios.post(url,{
          email:email,
          password:password,
          returnSecureToken:true

      })
      console.log(response)
      alert('sucess')
    }catch(error){
      
      alert(error.response.data.error.message)
    }

    }
  return (
    <div>
  <div style={{justifyContent:'center',alignItems:'center',display:'flex',marginTop:'10rem',}}>
   
    <Form style={{width:'90%',maxWidth:'30rem',background:'violet',borderRadius:'1rem'}} onSubmit={submithandler}>
    <CardHeader style={{textAlign:'center',fontSize:'2rem'}}>SignUp</CardHeader>
      <Form.Group style={{marginTop:'1rem',marginLeft:'1rem',marginRight:'1rem'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailrefhandler} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group >

      <Form.Group style={{marginLeft:'1rem',marginRight:'1rem'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label  >Password</Form.Label>
        <Form.Control ref={passwordrefhandler} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group style={{marginLeft:'1rem',marginRight:'1rem'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label > Confirm Password</Form.Label>
        <Form.Control ref={confirmpasswordrefhandler} type="password" placeholder="Password" />
      </Form.Group>
      
      <Button style={{marginBottom:'1rem',marginLeft:'1rem',marginRight:'1rem',textAlign:'center'}} variant="primary" type="submit">
        SignUp
      </Button>
      
    </Form>
    
    </div>
    <div style={{justifyContent:'center',alignItems:'center',display:'flex',marginTop:'1rem'}}>
    <CardHeader style={{width:'90%',maxWidth:'30rem',backgroundColor:'burlywood',borderRadius:'1rem',fontSize:'1.5rem',textAlign:'center'}}>Have an account? Login</CardHeader>
    </div>
    
    </div>
   
  );
}

export default Forms;