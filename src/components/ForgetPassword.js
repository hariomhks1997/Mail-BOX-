import { useState } from 'react'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CardHeader from 'react-bootstrap/esm/CardHeader'

const ForgetPassword = () => {
    const navigate=useNavigate();
    const [email, setemail] = useState('')
    const emailhandler=(event)=>{
     setemail(event.target.value)
    }
    const sendlinkhandler=(event)=>{
     event.preventDefault();
     const enteredemail=email;
     console.log(email)
     fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4",
        {
          method: "POSt",
          body: JSON.stringify({
            requestType:"PASSWORD_RESET",
            email:enteredemail,
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
          console.log(data)
          //navigate('/expensetracker')
          //localStorage.setItem('token',data.idToken)
          //const email=data.email.replace('@','').replace('.','')
          //cartctx.login(email,data.idToken)
          navigate('/expensetracker')
        
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  return (
    <Form onSubmit={sendlinkhandler} style={{textAlign:'center',marginTop:'15rem'}}>
         <CardHeader style={{background:'yellow',width:'40%',marginLeft:'29%'}}>Enter The Email Which You Have Forget The Password</CardHeader><br></br><br></br>
         <input onChange={emailhandler}  type='email'></input><br></br><br></br>
         <Button type='submit'>Send Link</Button>
    </Form>
  )
}

export default ForgetPassword