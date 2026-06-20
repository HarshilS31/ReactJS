import { useReducer } from "react"
const initState = {count:0}
function reducer(state,action) {
    switch(action.type) {
        case 'increment':
            return {...state,count:state.count+1}
        case 'decrement':
            return {...state,count:state.count-1}
        case 'reset':
            return {...state,count:0}
        case 'incrementByAmount':
            return {...state,count:state.count+action.payload}
        case 'decrementByAmount':
            return {...state,count:state.count-action.payload}
        default:
            return state;
            
    }
}
const CounterReducer = () => {
     const [state,dispatch]=useReducer(reducer,initState)
  return (
    <div>
        <h1>COUNT:{state.count}</h1>
        <button onClick={()=>dispatch({type: 'increment'})}> + </button>
        <button onClick={()=>dispatch({type: 'decrement'})}> - </button>
        <button onClick={()=>dispatch({type: 'reset'})}> reset  </button>

    </div>
  )
}

export default CounterReducer