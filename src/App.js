import React,{useContext, useState} from 'react';
import Login from './components/Login';
import Navbars from './components/Navbars';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ExpenseTracker from './components/ExpenseTracker';
import CartContext from './Store/Cart-context';
import ProfileComplete from './components/ProfileComplete';
import EmailVerification from './components/EmailVerification';
import ForgetPassword from './components/ForgetPassword';


const App = () => {
  const cartctx = useContext(CartContext)
  console.log(cartctx.totalamount)
  const [theme, settheme] = useState(true)
  const [emailverify, setemailverify] = useState(true)
  const [colo, setcolo] = useState('white')
  const color=(item)=>{
    setcolo(item)
    console.log(item)
      }
  const shownhandler=()=>{
    setemailverify(false)
  }
  const amount=(item)=>{
settheme(item)

  }
  const premium=(item)=>{
setcolo(item)
  }
  
  return (
    <div style={{background:colo}}>
     
     
    <Navbars amount={theme} color={color}></Navbars>  
    <Routes>
    <Route exact path='/home' element={<Home></Home>}></Route>
    <Route exact path='/about' element={<About></About>}></Route>
    <Route exact path='/expensetracker' element={emailverify ? <EmailVerification shown={shownhandler}></EmailVerification>:<ExpenseTracker token={cartctx.token} amount={amount} premium={premium}></ExpenseTracker>}></Route>
    
   <Route exact path='/complete' element={<ProfileComplete  ></ProfileComplete>}></Route>

    <Route exact path='/login' element={<Login></Login>}></Route>
  {emailverify && <Route exact path='/verifyemail' element={<EmailVerification shown={shownhandler}></EmailVerification>}></Route>}
  <Route exact path='/forget' element={<ForgetPassword></ForgetPassword>}></Route>
    
      
      
    </Routes>
   
 
    </div>
  )
}

export default App