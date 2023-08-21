import React,{useReducer} from 'react';


const defaultcartstate={
  items:0
}
const cartReducer=(state,action)=>{
  if(action.type==='AddItem'){
   const updateditems= state.items+1
   console.log(updateditems)
   return{
    items:updateditems
  }

}else{
  const updateditems= state.items-1
  if(updateditems>0){
    return{
   
      items:updateditems
    }
  }else{
    return{
      items:0
    }
  }
 
}


}

const App = () => {
  const [cartstate, dispatchcartaction] = useReducer(cartReducer, defaultcartstate)
  const incrementhandler=()=>{
dispatchcartaction({type:'AddItem'})

  }
  const decrementhandler=()=>{
    dispatchcartaction({type:'removeitem'})
    
  }
  

 
  return (
    <div>
      <h3 id='valuechanger'>{cartstate.items}</h3>
      <button onClick={incrementhandler}>Increment</button>
      <button onClick={decrementhandler}>Decrement</button>
    </div>
  )
}

export default App