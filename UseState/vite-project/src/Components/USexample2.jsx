import {useEffect, useState} from 'react'
const USexample2 = () => {
    const[name,setName] = useState(()=>{
        const name1=localStorage.getItem("name");
        return name1 ? JSON.parse(name1) : ""
    
    });
    function HandleClear() {
        setName("")
    }
    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(name))
    },[name])

  return (
    <div>
        <h1>{name}</h1>
        <input type="text" value ={name} onChange={(e)=>(setName(e.target.value))} placeholder='Enter your name!' ></input>
        
        <button onClick ={HandleClear}>Clear Name</button>
    </div>
  )
}

export default USexample2