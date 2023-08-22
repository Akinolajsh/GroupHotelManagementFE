import {createBrowserRouter}  from 'react-router-dom'
import Layout from '../components/common/Layout'
import AdminRegister from '../pages/AdminRegister'


export const mainRoute= createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,

    },{
        path: "/register",
        element:<AdminRegister/>
    }
])