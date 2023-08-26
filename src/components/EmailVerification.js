import React,{useEffect} from 'react';
import { Button } from 'react-bootstrap';
import Model from '../UI/Model';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authActions } from '../Store/auth';
import { useDispatch } from 'react-redux';



const EmailVerification = (props) => {
  const dispatch=useDispatch();
    const navigate=useNavigate();
   //const emailverify = useContext(CartContext)
   const emailverify=useSelector(state=>state.auth.token)

    console.log(emailverify)
    const verifyemail=()=>{
        //event.preventDefault();
        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4",
            {
              method: "POSt",
              body: JSON.stringify({
                requestType:"VERIFY_EMAIL",
                idToken: emailverify,
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
                alert('Please Wait Sometime And Then Refresh The Page Again')
              }else if(err.message==='INVALID_ID_TOKEN'){
                alert('Login time expire')
                dispatch(authActions.logout())
              
                navigate('/login')
              }else{
                
                alert(err.message)
               
              }
              //emailverify.logout();
             
              
            });
    }
    useEffect(() => {
  verifyemail();
    }, [])
    
  return (
    <div>
     {/* <Model>
         <Button onClick={verifyemail}>Verify Email</Button>
    </Model>  */}
    </div>
  )
}

export default EmailVerification;