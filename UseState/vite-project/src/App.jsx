import {useState} from "react"
import C1 from "./Components/C1"
import C2 from "./Components/C2"


const App = () => {
  const [count,setCount]=useState(0);


  return (
    <>
    <C1 count={count}   HandleClick ={()=>setCount(count+1)} />
    <C2 count={count}   HandleClick ={()=>setCount(count+1)}/>
  


    </>

  )
}

export default App