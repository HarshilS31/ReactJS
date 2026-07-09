import { useDispatch, useSelector } from "react-redux"
import { decrement, double, increment } from "./Features/counterSlice"
import { useState } from "react"

const App = () => {
  const dispatch = useDispatch()
  const [num,setNum] = useState(0);
  const count = useSelector(state=>state.counter.value)
  return (
    <div>
      <h1>{count}</h1>
      <input value={num} onChange={(e)=>setNum(e.target.value)}/>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(double(Number(num)))}}>Incremnt by {num}</button>
    </div>
  )
}

export default App