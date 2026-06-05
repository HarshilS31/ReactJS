import { useContext,useState } from "react"
import { Context1 } from "../UserContext"
const UserProfile = () => {
    const[InputVal,setInptVal]=useState('');
    const {user,updateUser}=useContext(Context1);
    function ChangeUserName(e) {
        e.preventDefault()
        if(InputVal.trim()!="") updateUser(InputVal)
        
    }
  return (
    <div>
        <h1>USER PROFILE:</h1>
        <p>{user.name}</p>
        <form onSubmit={ChangeUserName}>
            <input type="text" placeholder="Enter new name" value={InputVal} onChange={(e)=>setInptVal(e.target.value)}></input>
             <button type="submit">ChangeName</button>
        </form>
        
    </div>
  )
}

export default UserProfile