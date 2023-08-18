import React,{useContext} from 'react';
import Login from './components/Login';
import Navbars from './components/Navbars';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ExpenseTracker from './components/ExpenseTracker';
import CartContext from './Store/Cart-context';
import ProfileComplete from './components/ProfileComplete';


const App = () => {
  const cartctx = useContext(CartContext)
  return (
    <div >
      
     
    <Navbars></Navbars>  
    <Routes>
    <Route exact path='/home' element={<Home></Home>}></Route>
    <Route exact path='/about' element={<About></About>}></Route>
   <Route exact path='/expensetracker' element={<ExpenseTracker token={cartctx.token}></ExpenseTracker>}></Route>
   <Route exact path='/complete' element={<ProfileComplete  ></ProfileComplete>}></Route>

    <Route exact path='/login' element={<Login></Login>}></Route>
    
      
      
    </Routes>
  
 
    </div>
  )
}

export default App