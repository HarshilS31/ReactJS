import {useParams} from 'react-router-dom'
const User = () => {
  const { id } = useParams()
  return (
    <div className="bg-green-400 text-white p-4">User: {id}</div> // which id is this? This is the id which we have defined in the route path as user/:id. So when we navigate to user/1 then the id will be 1 and when we navigate to user/2 then the id will be 2 and so on. So we can use this id to fetch the user data from the server and display it on the page.
  )
}

export default User