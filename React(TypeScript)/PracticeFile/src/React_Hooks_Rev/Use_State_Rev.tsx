import React from 'react'
import { useState } from 'react'

const Use_State_Rev = () => {
    const [count,setCount]=useState<number>(0);
  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={()=>setCount(count=>count+1)}> + </button>
    <button onClick={()=>setCount(count=>count-1)}> - </button>
    <button onClick={()=>setCount(0)}> reset count </button>

    </>
  )
}

export default Use_State_Rev