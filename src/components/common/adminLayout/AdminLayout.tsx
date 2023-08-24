// import React from 'react'
import { Outlet } from "react-router"
import Sider from "./Sider"

const AdminLayout = () => {
  return (
    <div className="flex">
      <div>
      <Sider/>
      </div>
      <Outlet />
    </div>
  )
}

export default AdminLayout