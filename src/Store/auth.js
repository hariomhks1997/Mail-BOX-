import { legacy_createStore } from "redux";
import { createSlice ,configureStore} from "@reduxjs/toolkit";

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


export const authActions=authslice.actions; 
export default authslice.reducer