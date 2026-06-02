const UserList = () => {
    const users =[
        {
            id:1,name:"Alice",age:30
        },
        {
            id:2,name:"Bob",age:25
        },
        {
            id:3,name:"Charlie",age:22
        }
    ]
  return (
    <div>
        {users.map(u =>(
            <ul key={u.id}>
                <li>Name:{u.name}</li>
                <li>ID:{u.id}</li>
                <li>Age:{u.age}</li>
            </ul>
        ))}
    </div>
  )
}

export default UserList