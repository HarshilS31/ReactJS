import C1 from "./components/C1"
import { createContext } from "react";
 export const Context1=createContext();
const App = () => {
  const name="abc";
  return (
    <div>
      <Context1.Provider value={name}>
        <C1/>


      </Context1.Provider>
      
    </div>
  )
}

export default App