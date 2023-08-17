import React,{useState} from 'react';
 import { Container,Card } from 'react-bootstrap';
 import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';
 import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  
     const [email, setemail] = useState('');
     const [password, setpassword] = useState('');
     const [confirmpassword, setconfirmpassword] = useState('')
     const [isLogin, setislogin] = useState(true)
     const changemode=()=>{
        setislogin((prev)=>!prev)
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
     const checkhandler=()=>{

     }
     const submithandler=(event)=>{
       event.preventDefault();
       const enteredemail=email;
       const enteredpassword=password;
       const enteredconfirmpassword=confirmpassword;
       let password2;
       if(!isLogin && enteredpassword===enteredconfirmpassword){
          password2=enteredconfirmpassword
       }else if(isLogin && enteredpassword){
         password2=enteredpassword
       }else{
        alert('Password Not Matching')
       }
      
       console.log(enteredemail,password2)
       let url;
       if(isLogin){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4'
       }else{
        url='https:identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4'
       }
       fetch(url,{
         method:'POSt',
         body:JSON.stringify({
           email:enteredemail,
           password:password2,
           returnSecureToken:true
         }),
         header:{
             'Content-Type':'application-json'
         }
       }).then((res)=>{
         console.log(res)
         if(res.ok){
           return res.json();
        
     
         }else{
           return res.json().then((data)=>{
             throw new Error(data.error.message)
           })
         }
       }).then((data)=>{
         console.log(data)
         alert('sucess')
         navigate('/expensetracker')
         localStorage.setItem('token',data.idToken)
         //cartctx.login(data.email,data.idToken)
       })
       .catch((err)=>{
         alert(err.message)
        
       });
    

    
      

     }

  return (
       <Container style={{width:'35%',background:'rgba(0, 255, 132, 0.881)',padding:'2rem',borderRadius:'3rem',marginTop:'6rem',alignItems:'center'}}>
       
        
      <Form  onSubmit={submithandler} style={{width:'auto',}}>
     
      <Card style={{textAlign:'center',background:'pink',marginBottom:'1rem'}} >
  <Card.Body style={{fontSize:'2rem',height:'1rem',marginBottom:'3rem'}}>{!isLogin?'Create Account':'LogIn'}</Card.Body>
</Card>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'bold'}}>Email address</Form.Label>
        <Form.Control onChange={emailhandler} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize:'bold'}}>Password</Form.Label>
        <Form.Control onChange={passwordhandler} type="password" placeholder="Password" />
      </Form.Group>
      {!isLogin &&  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control onChange={confirmpasswordhandler}type="password" placeholder="Password" />
      </Form.Group>}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={checkhandler} type="checkbox" label="Check me out" />
      </Form.Group>
      <div  style={{textAlign:'center'}}>
      {isLogin && <Button variant="primary" type="submit">
        Login
      </Button>}
      
      {!isLogin && <Button  variant="primary" type="submit">
        SignUp
      </Button>}
      </div>
      <Card style={{textAlign:'center',marginTop:'1rem'}} >
  <Card.Body onClick={changemode}>{!isLogin?'Have A already Account ? LogIn':'Create Account'}</Card.Body>
</Card>

  </Form>
  
    </Container> 
    
  )
}

export default Login