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


const App = () => {
  const cartctx = useContext(CartContext)
  const [emailverify, setemailverify] = useState(true)
  const shownhandler=()=>{
    setemailverify(false)
  }
  return (
    <div >
     
     
    <Navbars></Navbars>  
    <Routes>
    <Route exact path='/home' element={<Home></Home>}></Route>
    <Route exact path='/about' element={<About></About>}></Route>
    <Route exact path='/expensetracker' element={emailverify ? <EmailVerification shown={shownhandler}></EmailVerification>:<ExpenseTracker token={cartctx.token}></ExpenseTracker>}></Route>
   <Route exact path='/complete' element={<ProfileComplete  ></ProfileComplete>}></Route>

    <Route exact path='/login' element={<Login></Login>}></Route>
  {emailverify && <Route exact path='/verifyemail' element={<EmailVerification shown={shownhandler}></EmailVerification>}></Route>}
    
      
      
    </Routes>
  
 
    </div>
  )
}

export default App