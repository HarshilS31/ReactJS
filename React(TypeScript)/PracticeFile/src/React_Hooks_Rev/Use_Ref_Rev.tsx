import React from 'react'
import {useRef,useState}  from 'react'

const Use_Ref_Rev = () => {
    const [count,setCount]= useState<number>(0);
    const IntervalID=useRef<ReturnType<typeof setInterval> | null>(null)
    const startWatch =() =>{
        if(IntervalID.current!==null) return 
        IntervalID.current=setInterval(()=>setCount(count=>count+1),1000)
    }
    const pauseWatch = () =>{
        clearInterval(IntervalID.current!)
        IntervalID.current=null;
    }
    const resetWatch = () =>{
        pauseWatch()
        setCount(0);

    }
  return (
    <>
    <h2>Timer : {count}</h2>
    <button onClick={startWatch}>Start</button>
    <button onClick={pauseWatch}>Pause</button>
    <button onClick={resetWatch}>Reset</button>


    </>
  )
}

export default Use_Ref_Rev