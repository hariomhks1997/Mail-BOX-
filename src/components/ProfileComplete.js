import React, { useState, useContext, useEffect } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import CartContext from "../Store/Cart-context";

const ProfileComplete = (props) => {
  const authctx = useContext(CartContext);
  const [complete, setcomplete] = useState(true)
 
  
  
  

  const [name, setname] = useState("");
  const [photo, setphoto] = useState("");
  useEffect(() => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4",
      {
        method: "POSt",
        body: JSON.stringify({
          idToken: authctx.token,
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
        setname(data.displayName);
        setphoto(data.photoUrl);
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

  const namehandler = (event) => {
    setname(event.target.value);
  };
  const photohandler = (event) => {
    setphoto(event.target.value);
  };
  const updatehandler = (event) => {
    event.preventDefault();
    const enteredname = name;
    const enteredphoto = photo;
    console.log(enteredname, enteredphoto);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4",
      {
        method: "POSt",
        body: JSON.stringify({
          idToken: authctx.token,
          displayName: enteredname,
          photoUrl: enteredphoto,
          returnSecureToken: false,
        }),
        header: {
          "Content-Type": "application-json",
        },
      }
    )
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        alert("sucess");
        setcomplete(false)
        //navigate('/expensetracker')
        //localStorage.setItem('token',data.idToken)
        //const email=data.email.replace('@','').replace('.','')
        //cartctx.login(email,data.idToken)
      })
      .catch((err) => {
        alert(err.message);
        console.log('message updated')
      });
  };
  const updateshower=()=>{
    setcomplete(true)
  }
  return (
    <div>
      <CardHeader
        style={{
          marginTop: "6rem",
          backgroundColor: "pink",
          display: "flex",
          justifyContent: "space-between",
          padding:'1rem',
          borderRadius:'1rem'
        }}
      >
        <li style={{listStyle:'none'}}>Winner Never Quit, Quitter never win</li>
        {complete && <li style={{listStyle:'none'}}>
          You Profile is 64% completed. A complete profile has higher chance of
          landng a job. Complete Now
        </li>}
        {!complete && <li style={{listStyle:'none'}}>
          You Profile is 100% completed. A complete profile has higher chance of
          landng a job.
          <Button onClick={updateshower}>Edit Now</Button>
        </li>}
      </CardHeader>
      <hr></hr>
      <Container style={{ background: "violet", borderRadius:'2rem',width:'20%',minWidth:'50%' }}>
       {complete && <Form onSubmit={updatehandler}>
          <CardHeader
            style={{
              display: "flex",
              justifyContent: "space-between",
              
            }}
          >
            <CardHeader style={{ marginTop: "2rem" }}>
              Contact Details
            </CardHeader>
            <Button style={{ marginTop: "2rem" }}>Cancel</Button>
          </CardHeader>
          <div style={{ display: "flex", marginTop: "2rem",}}>
            <Form.Group style={{ display: "flex" ,}}>
              <Form.Label size="sm" >Full Name</Form.Label>
              <Form.Control size="sm" style={{marginLeft:'0.50rem',borderRadius:'1rem'}} onChange={namehandler} type="text" value={name}></Form.Control>
            </Form.Group>
            <div style={{ display: "flex",}}>
              <Form.Label size="sm" >Profile Phote Url</Form.Label>
              <Form.Control size="sm" style={{marginLeft:'0.50rem',borderRadius:'1rem'}} onChange={photohandler} type="text" value={photo}></Form.Control>
            </div>
          </div>
          <Button type="submit" style={{ marginTop: "2rem",marginBottom:'2rem' }}>
            Update
          </Button>
        </Form>}

       
      </Container>
      
      {! complete && <Card style={{ background: "pink", borderRadius:'2rem',width:'30%',marginLeft:'35%',marginTop:'5rem' }}>
        <CardHeader style={{borderRadius:'2rem'}} >
          <Form >
        <CardHeader style={{marginTop:'1rem',textAlign:'center',background:'orange'}}>Your Completed Profile</CardHeader>
        
        <li style={{listStyle:'none',marginTop:'1rem'}}>Name: {name}</li>
        <li style={{listStyle:'none',marginTop:'1rem'}}>Photo Url: {photo}</li>
        </Form>
        </CardHeader>
       
       </Card >}
       </div>
    
  );
};

export default ProfileComplete;
