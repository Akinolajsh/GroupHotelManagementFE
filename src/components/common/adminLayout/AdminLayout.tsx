import { Outlet } from "react-router-dom"
import Sider from "./Sider"

const AdminLayout = () => {
  return (
    <div>
        <div className="flex">
        <Sider/>
        <div className='flex justify-end w-full'>
        <div className="flex w-[calc(100vw-201px)] min-h-[100vh]">
        <Outlet />
        </div>
        </div>
        </div>
    </div>
  )
}

export default AdminLayout