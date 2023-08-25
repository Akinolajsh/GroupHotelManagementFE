import { Outlet } from "react-router-dom"
import Sider from "./Sider"
import { useSelector } from "react-redux"

const AdminLayout = () => {
  const toggle = useSelector((state : any) => state.toggle)
  return (
    <div>
        <div className="flex">
        <Sider/>
        {
          toggle ? <div className='flex justify-end w-full'>
          <div className="w-[calc(100%-65px)] h-full flex justify-center">
          <Outlet />
          </div>
          </div>: <div className='flex justify-end w-full'>
        <div className="w-[calc(100%-200px)] h-full flex justify-center">
        <Outlet />
        </div>
        </div>
        }
        </div>
    </div>
  )
}

export default AdminLayout