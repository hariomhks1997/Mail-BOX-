import { createSlice } from "@reduxjs/toolkit";
const token=localStorage.getItem('token')
const userIsLoggedIn=!!token
const initialauthstate={
    
    isLoggedIn:userIsLoggedIn,
    token:token
};
const authslice=createSlice({
    name:'authentician',
    initialState:initialauthstate,
    reducers:{
        login(state,action){
      localStorage.setItem('token',action.payload)
       const token=localStorage.getItem('token')
       const userIsLoggedIn=!!token
       console.log(userIsLoggedIn)
            
                state.isLoggedIn=userIsLoggedIn;
                state.token=token;

             

        },
        logout(state){
            localStorage.removeItem('token')
            
            state.isLoggedIn=false
        },
        email(state,action){
           localStorage.setItem('emailtoken',action.payload)
        }
    }

})


export const authActions=authslice.actions; 
export default authslice.reducer