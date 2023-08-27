import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:+0,
        
    },
    reducers:{
        replaceCart(state,action){
            state.totalQuantity=action.payload.totalQuantity;
            state.items=action.payload.items
        },
       addItemToCart(state,action){
        const newItem=action.payload;
      
        const existingItem=state.items.find(item=>item.id===newItem.id);
        //console.log(existingItem)
        state.totalQuantity++
       
        if(!existingItem){
            state.items.push({
                id:newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.title
            })
        }else{
            existingItem.quantity++;
            existingItem.totalPrice=existingItem.totalPrice+newItem.price;

        }
       } ,
       removeItemFromCart(state,action){
        const newitem=action.payload;
        const existingItem=state.items.find(item=>item.id===newitem.id);
        state.totalQuantity--;
        if(existingItem.quantity===1){
          state.items=state.items.filter(item=>item.id!==newitem.id);
        }else{
            existingItem.quantity--;
            existingItem.totalPrice=existingItem.totalPrice-newitem.price

        }
       },
       getitem(state,action){
    
        state.items=action.payload;
        
        
       },
       getquantity(state,action){
   state.totalQuantity=action.payload
       },
    }
})
export const cartActions=cartSlice.actions;
export default cartSlice;