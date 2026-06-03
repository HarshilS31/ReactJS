import {useState} from 'react'
const USExample = () => {
    const[count,setCount]=useState(()=>{
        const InitialCount=10;
        return InitialCount;

    });
    function Increment() {
      setCount(prevCount=>prevCount+1);
    }
    function Decrement() {
      setCount(prevCount=>prevCount-1);
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}> + </button>
        <button onClick={Decrement}> - </button>
    </div>
  )
}

export default USExample