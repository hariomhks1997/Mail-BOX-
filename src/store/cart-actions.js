import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';
import axios from 'axios';


const Signup = (sign) => {
const enteredemail=sign.enteredemail;
const enteredpassword=sign.enteredpassword;
console.log(enteredemail,enteredpassword)

    return (dispatch) => {
      const signup = async () => {
        
        
       fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCuBEKLJz4anxFyAvC1RphQ1DIoTjpNfSk',{
            method:'Post',
            body:JSON.stringify({
              email:enteredemail,
              password:enteredpassword,
              returnSecureToken:true
              
            }),
            headers:{
              'Content-type':'application/json'
            }
          })
        
      };
  
      try {
        const cartData =signup();
        dispatch(
          cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity,
          })
        );
      } catch (error) {
        alert('errot')
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching cart data failed!',
          })
        );
      }
    };
  };
  export default Signup;

// export const fetchCartData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         'https://react-hariom-default-rtdb.firebaseio.com/cart.json'
//       );
//       console.log(response.data)
      

//       const data = await response.data;
//       console.log(data)
//       return data;
//     };

//     try {
//       const cartData = await fetchData();
//       dispatch(
//         cartActions.replaceCart({
//           items: cartData.items || [],
//           totalQuantity: cartData.totalQuantity,
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: 'error',
//           title: 'Error!',
//           message: 'Fetching cart data failed!',
//         })
//       );
//     }
//   };
// };

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: 'pending',
//         title: 'Sending...',
//         message: 'Sending cart data!',
//       })
//     );

//     const sendRequest = async () => {
//       await axios.put(
//         'https://react-hariom-default-rtdb.firebaseio.com/cart.json',cart);
    
    //   if (!response.ok) {
    //     throw new Error('Sending cart data failed.');
    //   }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: 'success',
//           title: 'Success!',
//           message: 'Sent cart data successfully!',
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: 'error',
//           title: 'Error!',
//           message: 'Sending cart data failed!',
//         })
//       );
//     }
//   };
// };