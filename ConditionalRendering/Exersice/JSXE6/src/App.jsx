import Weather from "./Weather"
import UserStatus from "./UserStatus"

const App = () => {
  return (
    <>
    <Weather temp={23} />
    <UserStatus loggedIn={true} isAdmin={true} />
    
    </>
  )
}

export default App