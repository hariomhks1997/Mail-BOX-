import { legacy_createStore } from "redux";
import { createSlice ,configureStore} from "@reduxjs/toolkit";

const initialcounterstate={
    counter:0,
    showcounter:true
}
const counterslice=createSlice({
    name:'counter',
    initialState:initialcounterstate,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--; 
        },
        increase(state,action){
           state.counter=state.counter+action.payload;
        },
        decrease(state,action){
            state.counter=state.counter-action.payload;
         },
        toggleCounter(state){
            state.showcounter=!state.showcounter
        }
     
    }
});
const initialauthstate={
    isAuthenciated:false
};
const authslice=createSlice({
    name:'authentician',
    initialState:initialauthstate,
    reducers:{
        login(state){
            state.isAuthenciated=true;

        },
        logout(state){
            state.isAuthenciated=false
        }
    }

})
const store=configureStore({
    reducer:{
    counter:counterslice.reducer,auth:authslice.reducer
    }
    
}); 
export const counterActions=counterslice.actions;
export const authActions=authslice.actions;
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