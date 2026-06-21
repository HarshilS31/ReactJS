import { createRoot } from 'react-dom/client'
import './index.css'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Contact from './Components/Contact'
import About from './Components/About'
import Home from './Components/Home'
import Layout from './Layout'
import { createBrowserRouter } from 'react-router-dom'
import User from './Components/User'
// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<Layout />,
//         children:[
//             {path:'home', element:<Home />},
//             {path:'about', element:<About />},
//             {path:'contact', element:<Contact />},
//             {path:'user/:id', element:<User />},

            
//         ]
//     }
//Explaination: Here we are creating a router using createBrowserRouter and we are defining the routes for our application. We have a Layout component which is the parent component of all the other components and it will render the child component in the Outlet component. We have defined three routes for home, about and contact which will render the respective components when the user navigates to those routes.
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='user/:id' element={<User />}  loader={({ params }) => params.id}/>
        </Route> //another way of defining routes using createRoutesFromElements. 
    )
)


createRoot(document.getElementById('root')!).render(
    <RouterProvider router ={router} />


)
