import { useState,useEffect } from "react"
interface userData {
    id:number,
    name:string,
    username:string,
    email:string,
    phone:string
}
const UserList = () => {
    const [users,setUsers] = useState<userData[]>([]);
    const [loading,setLoading]= useState<boolean>(true);
    const[error,setError]=useState<string | null>(null);
    useEffect(()=>{
        async function fetchData() {
            try{
                const resp = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!resp.ok) throw new Error("Data could not e fetched,Please try again!")
                const fetched_data:userData[] = await resp.json();
                setUsers(fetched_data);
            }catch(error) {
                setError(error instanceof Error ? error.message : "An error occured")
            } finally {
                setLoading(false);
            }

        }
        fetchData();

    },[])
    if (loading) return <h2>Loading...</h2>
    if(error) return <h2>Some Error Occured....</h2>

  return (
  <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>e-mail</th>
            <th>Phone</th>
        </tr>
    </thead>
    <tbody>
        {users.map(user=>(
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>

            </tr>
           
        ))}
    </tbody>


  </table>
  )
 
}

export default UserList