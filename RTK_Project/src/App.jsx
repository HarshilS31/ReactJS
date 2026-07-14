import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CollectionPage from "./Pages/CollectionPage"
import NavBar from "./components/NavBar"
import {ToastContainer,Flip} from "react-toastify"
const App = () => {

  return ( 
    <div >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionPage />} />
      </Routes>
      <ToastContainer/>

    </div>
    


  )
}

export default App