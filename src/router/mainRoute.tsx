import {createBrowserRouter}  from 'react-router-dom'
import Layout from '../components/common/Layout'
import AdminRegister from '../pages/AdminRegister'
import UserRegister from '../pages/UserRegister'
import UserSignIn from '../pages/UserSignIn'
import HomeScreen from '../pages/Screen/HomeScreen'
import AdminSign from '../pages/AdminSign'
import Description from '../pages/Description'


export const mainRoute= createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                index: true,
                element: <HomeScreen/>
            }
        ]

    },{
        path: "/admin-register",
        element:<AdminRegister/>
    },
    {
        path: "/admin-signin",
        element:<AdminSign/>
    },
    {
        path: "/user-register",
        element:<UserRegister/>
    },
    {
        path: "/description",
        element:<Description/>,
    },
])