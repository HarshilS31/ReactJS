import {memo} from 'react'

const UserCard = memo(function UserCard({name}:{name:string}) {
    console.log("UserCard Rendered!")
  return <div>{name}</div>
    
  
})

export default UserCard