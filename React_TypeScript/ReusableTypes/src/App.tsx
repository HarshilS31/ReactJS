import AdminInfo from "./AdminInfo"
import UserInfo from "./UserInfo"

const App = () => {
  return (
    <div>
      <h1>USER INFO:</h1>
      <UserInfo  userName="abc" 
      email="abc@email.com"
      age={19}
      address ={["California","US"]}/>
      <h1> ADMIN INFO</h1>
      <AdminInfo userName="abc" 
      email="abc@email.com"
      age={19}
      address ={["Aheamdabad","India"]}
      isAdmin="yes" />
    </div>
  )
}

export default App