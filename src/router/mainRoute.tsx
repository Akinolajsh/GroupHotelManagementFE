import {createBrowserRouter}  from 'react-router-dom'
import Layout from '../components/common/Layout'
import UserRegister from '../pages/UserRegister'
import UserSignIn from '../pages/UserSignIn'
import HomeScreen from '../pages/Screen/HomeScreen'
import Description from '../pages/Description'
import CreateRoom from '../pages/Admin/CreateRoom'
import ViewRooms from '../pages/ViewRooms'
import Dashbord from '../pages/Admin/Dashbord'


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
    },
    {
        path: "/user-register",
        element:<UserRegister/>
    },
    {
        path: "/user-sign-in",
        element:<UserSignIn/>
    },
    {
        path: "/description",
        element:<Description/>,
    },{
        path: "/admin-create",
        element: <CreateRoom/>
    },
    {
        path: "/view-rooms",
        element: <ViewRooms/>
    },
    {
        path: "/admin-dashboard",
        element: <Dashbord/>
    },
])