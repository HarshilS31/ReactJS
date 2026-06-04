import {useState,useEffect} from 'react'
const GetSomeData = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        async function getData() {
            const resp=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data= await resp.json();
            if(data && data.length) setData(data);
        }
        getData(); 
    },)
  return (
    <div>
        <ul>
            {data.map((e) => (
                    <li key={e.id}>{e.title}</li>
                ))}
        </ul>

    </div>
  )
}

export default GetSomeData