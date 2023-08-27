import Cart from './components/Cart/Cart';
import React,{useEffect} from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
let isinitial=true
function App() {
  const showcart=useSelector((state)=>state.ui.cartIsVisible)
  const cart=useSelector((state)=>state.cart);
  console.log(cart)
  useEffect(() => {
    if(isinitial){
      isinitial=false;
      return;
    }
    fetch('https://reacthariom-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify(cart),
    })
  }, [cart])
  
  return (
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
