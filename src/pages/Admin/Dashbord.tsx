import AdminHome from "./AdminHome"
import Sider from "./Sider"

const Dashbord = () => {
  return (
    <div className="flex " >
        <div className="w-[270px] h-[100vh] bg-[#024637] text-white ">
            <Sider/>
        </div>
        <div className="w-full"><AdminHome/></div>
    </div>
  )
}

export default Dashbord