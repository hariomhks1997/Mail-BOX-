import React,{useState,useContext} from 'react';
import {Container ,Button,Form} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import CartContext from '../Store/Cart-context';

const ProfileComplete = (props) => {
    
    const authctx = useContext(CartContext)
    console.log(authctx.token)
    
    const [name, setname] = useState('');
    const [photo, setphoto] = useState('')

    const namehandler=(event)=>{
       setname(event.target.value)    
    }
    const photohandler=(event)=>{
        setphoto(event.target.value)
    }
    const updatehandler=(event)=>{
  event.preventDefault();
    const enteredname=name;
    const enteredphoto=photo;
    console.log(enteredname,enteredphoto)
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4',{
        method:'POSt',
        body:JSON.stringify({
            idToken:authctx.token,
            displayName:enteredname,
            photoUrl:enteredphoto,
          returnSecureToken:false
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
        
        alert('sucess')
        //navigate('/expensetracker')
        //localStorage.setItem('token',data.idToken)
        //const email=data.email.replace('@','').replace('.','')
       //cartctx.login(email,data.idToken)
      })
      .catch((err)=>{
        alert(err.message)
       
      });
   

   
     

    

    }
  return (
    <div>
        <CardHeader style={{marginTop:'6rem',backgroundColor:'pink',display:'flex',justifyContent:'space-between'}}>
            <li>Winner Never Quit, Quitter never win</li>
            <li>You Profile is 64% completed. A complete profile has higher chance of landng a job. Complete Now </li>
        </CardHeader>
        <hr></hr>
        <Container style={{background:'violet'}}>
            <Form onSubmit={updatehandler}>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'6rem'}}>
            <header style={{fontSize:'2rem',marginTop:'2rem'}}>Contact Details</header>
            <Button style={{marginTop:'2rem'}}>Cancel</Button>
            </div>
            <div style={{display:'flex',marginTop:'2rem'}}>
            <div style={{display:'flex'}}>
            <label>Full Name</label>
        <input onChange={namehandler} type='text'></input>
        </div>
        <div style={{display:'flex',marginLeft:'1rem'}}>
        <label>Profile Phote Url</label>
        <input onChange={photohandler}type='text'></input>
        </div>
        </div>
        <Button type='submit' style={{marginTop:'2rem'}}>Update</Button>
        </Form>
        </Container>
    </div>
  )
}

export default ProfileComplete