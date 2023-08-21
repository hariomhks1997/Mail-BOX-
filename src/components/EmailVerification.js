import React,{useContext,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import Model from '../UI/Model';
import CartContext from '../Store/Cart-context';
import { useNavigate } from 'react-router-dom';

const EmailVerification = (props) => {
    const navigate=useNavigate();
    const emailverify = useContext(CartContext)
    console.log(emailverify.token)
    const verifyemail=()=>{
        //event.preventDefault();
        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4",
            {
              method: "POSt",
              body: JSON.stringify({
                requestType:"VERIFY_EMAIL",
                idToken: emailverify.token,
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
              
              console.log(data)
              //navigate('/expensetracker')
              //localStorage.setItem('token',data.idToken)
              //const email=data.email.replace('@','').replace('.','')
              //cartctx.login(email,data.idToken)
              navigate('/expensetracker')
              props.shown()
            })
            .catch((err) => {
              if(err.message==='TOO_MANY_ATTEMPTS_TRY_LATER'){
                alert('Please Wait Sometime Then Login ')
              }else{
                alert('Some Thing Went Wrong Please Login Again');
              }
              emailverify.logout();
              
              navigate('/login')
              
            });
    }
    useEffect(() => {
  verifyemail();
    }, [])
    
  return (
    <Model>
        <Button onClick={verifyemail}>Verify Email</Button>
    </Model> 
  )
}

export default EmailVerification;