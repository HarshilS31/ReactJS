import { useSelector } from "react-redux"
import Grid from "../components/Grid"
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs"




const HomePage = () => {
    const {query} = useSelector(store=>store.search)
  return (
   <div className="min-h-screen w-full text-white bg-gray-900">
        <SearchBar />
        {query!="" ? <Tabs/> : " "}
        {query!="" ? <Grid/> : " "}
    

     
        
    </div>
  )
}

export default HomePage