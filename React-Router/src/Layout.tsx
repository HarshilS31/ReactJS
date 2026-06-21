import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
// Outlet is used to render the child component of the layout component,and here the Layout component is the parent component of all the other components and it will render the child component in the Outlet component
const Layout = () =>{
    return (
        <div>
            <h1>
                <Header />
                <Outlet />
                <Footer />
            </h1>
        </div>
    )
}
export default Layout