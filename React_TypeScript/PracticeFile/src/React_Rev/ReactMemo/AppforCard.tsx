import {useState} from 'react'
import UserCard from './UserCard'
const AppforCard = () => {
    const [count,setCount]= useState<number>(0);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>ClickButton:{count}</button>
        <UserCard name="abc" />
    </div>
  )
}

export default AppforCard