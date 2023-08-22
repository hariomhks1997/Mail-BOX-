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
export const counterActions=counterslice.actions;
export default counterslice.reducer