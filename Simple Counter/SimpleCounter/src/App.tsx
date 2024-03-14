import { useReducer, useState } from 'react'

import './App.css'

//type for state 
type State = {
  count:number,
  error:string|null
}
// for action
type Action = {
  type:'incre' | 'decre'

}

//reducer function
function reducer(state:State, action:Action){
  const {type} = action;
  switch (type) {
    case 'incre' :{
      //make a copy of state [...state]

      return {...state, count:state.count+1}


    }
    case 'decre' :{
      //make a copy of state [...state]

      return {...state, count:state.count-1}


    }


      
     
  
    default:
      return state;
     
  }

}




function App() {
  const[state, dispatch]= useReducer(reducer,{
    count:0,
    error:null
  })

  return (  
    <>
    <div className='bg-purple-700  flex flex-col justify-center items-center h-screen'>
      <p className='text-center'>the counter {state.count}</p>
      <button className='mt-4' onClick={()=>{
        dispatch({type:'incre'})
      }}>Increase</button>
      <button onClick={()=>{
        dispatch({type:'decre'})
      }} className='mt-2'>Decrease</button>
    </div>
    </>

      
  )
}

export default App
