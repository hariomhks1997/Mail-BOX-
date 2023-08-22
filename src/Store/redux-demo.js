import { legacy_createStore } from "redux";


const counterReducer=(state={counter:0},action)=>{
        if(action.type==='increment'){
        return{
            counter:state.counter+2
        }
    }
    if(action.type==='decrement'){
        return{
            counter:state.counter-2,
        }
    }
    return state;
    }
    const store=legacy_createStore(counterReducer)

    export default store;


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