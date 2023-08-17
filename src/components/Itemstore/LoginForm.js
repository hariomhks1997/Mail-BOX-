import React,{useRef,useContext,useState} from 'react'
import CartContext from '../../Store/Cart-context';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const [isLogin, setislogin] = useState(true)
  const changemode=()=>{
     setislogin((prev)=>!prev)
  }
  
    const history=useNavigate();
    const authctx = useContext(CartContext)
    
    const emailinputref=useRef();
    const passwordinputref=useRef();
    const submithandler=(event)=>{
        event.preventDefault();
        const enteredemail=emailinputref.current.value;
        const enteredpassword=passwordinputref.current.value;
        console.log(enteredemail,enteredpassword)
        let url;
    if(isLogin){
     url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4'
    }else{
      
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4'
    }
    fetch(url,{
        method:'Post',
        body:JSON.stringify({
          email:enteredemail,
          password:enteredpassword,
          returnSecureToken:true
        }),
        headers:{
          'Content-type':'application/json'
        }
      }).then((res) =>{
        // setisLoading(false);
        if(res.ok){
          //...
          return res.json();
          
        }else{
          return res.json().then((data)=>{
            //show an error modal
            let errorMessage='Authentician failed';
            // if(data && data.error && data.error.message){
            //   errorMessage=data.error.message;
            // }
            
            throw new Error(errorMessage)
            
          })
        }
      }).then((data)=>{
        const expirationtime=new Date(new Date().getTime()+(+data.expiresIn*1000))
        
        authctx.login(data.idToken,data.email.slice(0,-10),expirationtime.toISOString()); 
        //authctx.emailtoken(data.email.slice(0,-10))
        console.log(data.email)
        
        const email=data.email.slice(0,-10);
        console.log(email)
        
        history('/store');
      })
      .catch((err)=>{
        alert(err.message)
        
      });
    

    }
  return (
    <div>
      
        <form onSubmit={submithandler} style={{color:'black',textAlign:'center',background:'white',height:'auto',marginTop:'10rem',padding:'8rem'}}>
        <h2>{isLogin?'Login':'SignUp'}</h2>
        <label>UserName</label><br></br>
        <input ref={emailinputref} type='email'></input><br></br>
        <label>Password</label><br></br>
        <input ref={passwordinputref} type='password'></input><br></br>
        {isLogin && <button>Login</button>}
        {!isLogin && <button>SignUp</button>}
        {<h3 onClick={changemode}>{!isLogin?'LogIn':'Create Account'}</h3>}
        </form>
    </div>
  )
}

export default LoginForm;