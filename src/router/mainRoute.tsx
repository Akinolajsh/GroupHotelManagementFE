import {createBrowserRouter}  from 'react-router-dom'
import Layout from '../components/common/Layout'
import AdminRegister from '../pages/AdminRegister'
import UserRegister from '../pages/UserRegister'
import UserSignIn from '../pages/UserSignIn'


export const mainRoute= createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,

    },{
        path: "/admin-register",
        element:<AdminRegister/>
    },
    {
        path: "/admin-signin",
        element:<AdminRegister/>
    },
    {
        path: "/user-register",
        element:<UserRegister/>
    },
    {
        path: "/user-signin",
        element:<UserSignIn/>
    },
])