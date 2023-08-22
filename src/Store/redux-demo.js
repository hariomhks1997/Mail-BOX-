import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store=configureStore({
    reducer:{
    counter:counterReducer,auth:authReducer
    }
    
});
export default store;
// const counterReducer=(state=initialstate,action)=>{
//         if(action.type==='increment'){
//         return{
//             counter:state.counter+2,
//             showcounter:state.showcounter

//         }
//     }
//     if(action.type==='increase'){
//         return{
//             counter:state.counter+action.amount,
//             showcounter:state.showcounter
//         }
//     }
   
//     if(action.type==='decrease'){
//         return{
//             counter:state.counter-action.amount,
//             showcounter:state.showcounter
//         }
//     }
//      if(action.type==='decrement'){
//         return{
//             counter:state.counter-2,
//             showcounter:state.showcounter
//         }
//     }
//     if(action.type==='toggle'){
//         return{
//         counter:state.counter,
//         showcounter:!state.showcounter  
//         }
//     }
//     return state;
//     }
//    const store=legacy_createStore(counterReducer)

  //  export default store;


// const redux=require('redux');

// const counterReducer=(state={counter:0},action)=>{
//     if(action.type==='increment'){
//     return{
//         counter:state.counter+2
//     }
// }
// if(action.type==='decrement'){
//     return{
//         counter:state.counter-2,
//     }
// }
// return state;
// }
// const store=redux.legacy_createStore(counterReducer);
// //console.log(store.getState());

// const counterSubscriber=()=>{
//   const latestState=  store.getState();
//   console.log(latestState)
// }
// store.subscribe(counterSubscriber);
// store.dispatch({type:'increment'});
// store.dispatch({type:'decrement'})