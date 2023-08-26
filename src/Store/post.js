import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const email=localStorage.getItem('emailtoken')
const initialpoststate={
    
    items:[],
    totalamount:0
};
const postslice=createSlice({
    name:'post',
    initialState:initialpoststate,
    reducers:{
       
       async  postitem  (state,action){
        console.log(action.payload)
        state.totalamount=state.totalamount+action.payload.price
            try{
                const existingitemindex=state.items.findIndex(
                       (items)=>items.date===action.payload.previousdate )
                       const existingitem=state.items[existingitemindex]
            console.log(existingitem)
            if(existingitem){
                  const updateditem={
                    ...existingitem,
                    item:action.payload.item, 
                    description:action.payload.description,
                    price:action.payload.price,
                    date:existingitem.date,
          
          
                  }
                  console.log(updateditem)
                 const response= await axios.put(`https://reacthariom-default-rtdb.firebaseio.com/${email}/${existingitem.id}.json`,
                updateditem);
                console.log(response.data)
                
           // state.items((previtem)=>(previtem.map((cartitem)=>(cartitem.date===existingitem.date?updateditem:cartitem))))
                }else{
                  const response=await axios.post(`https://reacthariom-default-rtdb.firebaseio.com/${email}.json`,
                  action.payload );
                  const data=await response.data.name;
                  let id=data;
                  let date=action.payload.date
                let item=action.payload.item
                let description=action.payload.description
                let price=action.payload.price
              console.log(data)
              const add={
               id,
               date,
               item,
               description,
               price
              }
              console.log(add)
             state.items.push(add)
             
              
                }
            
                      
              
              
                  
                }catch(err){
                    console.log(err.message)
                alert(err.message)
                }
        }
    }

})


export const postActions=postslice.actions; 
export default postslice.reducer