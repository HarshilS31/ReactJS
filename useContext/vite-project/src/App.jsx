import { useContext } from "react"
import { createContext } from "react";
import C1 from "./components/C1";
export Context1 = createContext()
const App = () => {
  const name="abc";;
  return (
    <>
    <C1 />
    </>
  )
}

export default App