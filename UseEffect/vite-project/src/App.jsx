import {useState,useEffect} from 'react'
const App = () => {
  const [val,setVal]=useState(0);
  useEffect(()=>{
    console.log("Call usEeFFECT");
    document.title=`Increment the ${val}`
  },[val])
  return (
    <div>
      <h2>{val}</h2>
      <button onClick= { ()=>(setVal(val+1)) } > + </button>
      <button onClick= { ()=>(setVal(val-1)) } > - </button>
    </div>
  )
}

export default App