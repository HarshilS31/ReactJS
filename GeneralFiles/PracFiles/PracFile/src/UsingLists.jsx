const UsingLists = () => {
    const userInfo =[
        {
            name:"John",
            email:"John@email.com"
        },
        {
            name:"Emily",
            email:"Emily@email.com"
        }

]
  return (
    <div>
        {userInfo.map(user =>(
            <ul key={user.email}>
                <li>
                    {user.name}
                </li>
                <l1>
                    {user.email }
                </l1>

            </ul>
        ))}
        

    </div>
  )
}

export default UsingLists