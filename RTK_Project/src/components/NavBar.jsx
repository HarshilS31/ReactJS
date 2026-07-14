import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <div className="flex gap-6 items-center px-6 py-4 bg-gray-900 border-b border-gray-700">
        <NavLink to="/" className={({isActive})=>`font-medium transition-colors ${isActive ? "text-green-400" : "text-white hover:text-green-300"}`}>Home Page</NavLink>
        <NavLink to="/collections" className={({isActive})=>`font-medium transition-colors ${isActive ? "text-green-400" : "text-white hover:text-green-300"}`}>Collections</NavLink>

    
    </div>
  )
}

export default NavBar