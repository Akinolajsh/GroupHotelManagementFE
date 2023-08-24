import {BiHome} from "react-icons/bi"
import {BsPersonFill} from "react-icons/bs"
import {BsFillCameraFill} from "react-icons/bs"
import { Link } from "react-router-dom"
import {PiWechatLogoFill} from "react-icons/pi"
import {SlCalender} from 'react-icons/sl'
import {SiSaltproject} from 'react-icons/si'
import {GrTasks} from 'react-icons/gr'
import {FaBook} from 'react-icons/fa'
import {TbSettingsX} from 'react-icons/tb'
import {MdOutlineSettingsSuggest} from 'react-icons/md'
import {IoMdStats} from 'react-icons/io'
import {BsFillPersonPlusFill} from "react-icons/bs"
import {BsFillCartFill} from "react-icons/bs"
import {RiBallPenFill} from "react-icons/ri"
import {FaShareSquare} from "react-icons/fa"
import {MdTrackChanges} from "react-icons/md"
import {ImEarth} from "react-icons/im"
import {GiProfit} from "react-icons/gi"
import {AiOutlineWifi} from "react-icons/ai"
import {PiDownloadSimpleLight} from "react-icons/pi"
import {AiOutlineCloudDownload} from "react-icons/ai"
import {TbReport} from "react-icons/tb"
import {BsTicket} from "react-icons/bs"
import {BiSolidReport} from "react-icons/bi"



const Dashbord = () => {
  return (
    <div>
        {/* line */}
        {/*  */}
        <div className="w-full h-[50px] bg-[#024637] flex items-center gap-[10px]">       
            <Link to="/admin-dashboard">           <BiHome className="text-[white] text-[15px] hover:cursor-pointer" /></Link>
          <Link to="/admin-dashboard"> <span className=" text-[white] text-[13px] mt-[4px] hover:underline hover:cursor-pointer font-light">DashBoard</span></Link>
        </div>
        {/* circle */}
         <div className="flex justify-center gap-[10px]  mt-[30px] ">
            {/* ist */}
            <div className="w-[70px] border-[1px] border-[#024637] h-[70px] rounded-[50%] bg-[white] hover:cursor-pointer hover:border-[2px] hover:border-[#024637] hover:bg-white flex justify-center items-center hover:transition-all "> <BsPersonFill className="  text-[30px] text-[#024637] hover:text-[#024637] hover:transition-all" />
            </div> 
            <div className="w-[70px] h-[70px] rounded-[50%] bg-[white] border-[1px] border-[#024637] hover:cursor-pointer hover:border-[2px] hover:border-[#024637] hover:bg-white flex justify-center items-center hover:transition-all "> <PiWechatLogoFill className="  text-[30px] text-[#024637] hover:text-[#024637] hover:transition-all" />
            </div> 
            <div className="w-[70px] h-[70px] rounded-[50%] bg-[white] border-[1px] border-[#024637] hover:cursor-pointer hover:border-[2px] hover:border-[#024637] hover:bg-white flex justify-center items-center hover:transition-all "> <SlCalender className="  text-[30px] text-[#024637]  hover:text-[#024637] hover:transition-all" />
            </div> 
            <div className="w-[70px] h-[70px] border-[1px] border-[#024637] rounded-[50%] bg-[white] hover:cursor-pointer hover:border-[2px] hover:border-[#024637] hover:bg-white flex justify-center items-center hover:transition-all "> <BsFillCameraFill className="  text-[30px] text-[#024637] hover:text-[#024637] hover:transition-all" />
            </div> 
            <div className="w-[70px] h-[70px] border-[1px] border-[#024637]  rounded-[50%] bg-[white] hover:cursor-pointer hover:border-[2px] hover:border-[#024637] hover:bg-white flex justify-center items-center hover:transition-all "> <SiSaltproject className="  text-[30px] text-[#024637] hover:text-[#024637] hover:transition-all" />
            </div> 
            <div className="w-[70px] h-[70px] border-[1px] border-[#024637] rounded-[50%] bg-[white] hover:cursor-pointer hover:border-[2px] hover:border-[#024637] hover:bg-white flex justify-center items-center hover:transition-all "> <GrTasks className="  text-[30px] text-white hover:text-[#024637] hover:transition-all" />
            </div> 
            <div className="w-[70px] h-[70px] rounded-[50%] bg-[white] border-[1px] border-[#024637] hover:cursor-pointer hover:border-[2px] hover:border-[#024637] hover:bg-white flex justify-center items-center hover:transition-all "> <FaBook className="  text-[30px] text-[#024637] hover:text-[#024637] hover:transition-all" />
            </div> 
            <div className="w-[70px] h-[70px] border-[1px] border-[#024637] rounded-[50%] bg-[white] hover:cursor-pointer hover:border-[2px] hover:border-[#024637] hover:bg-white flex justify-center items-center hover:transition-all "> <MdOutlineSettingsSuggest className="  text-[30px] text-[#024637] hover:text-[#024637] hover:transition-all" />
            </div> 
        </div> 
        {/* cards */}
        <div className="flex justify-center flex-wrap gap-[25px] mt-[30px]  ">
            <div className=" w-[250px] h-[250px] border-[1px] border-[#024637] flex flex-col  ">
             <div className="flex justify-between bg-[#6baa9c]  ">
             <span className="text-[15px] font-semibold ml-[10px] mt-[10px] text-[white]">Total Users</span>
                <span className="flex gap-[10px] mt-[10px]">
                    <TbSettingsX className="border-[1px] border-[white]  text-[25px] p-1 font-semibold text-[white] "/>
                    <IoMdStats className="border-[1px] border-[white]  p-1 text-[25px] font-semibold text-[white]"/>
                </span>
             </div>
                <div className="border h-full flex justify-between items-center bg-[white] ">
                   <BsFillPersonPlusFill className="ml-[10px] text-[60px] font-semibold text-[#024637] "/>
                <span className="mr-[10px] text-[35px] font-semibold text-[#024637]">265k</span>
                </div>
            </div>

            <div className=" w-[250px] h-[250px] border-[1px] border-[#024637] flex flex-col  ">
             <div className="flex justify-between bg- m-[10px] ">
             <span className="text-[15px] font-semibold text-[#024637]">Total Sales</span>
                <span className="flex gap-[10px]">
                    <BsFillCartFill className="border-[1px] border-[#024637]  text-[25px] p-1 font-semibold text-[#024637] "/>
                    <IoMdStats className="border-[1px] border-[#024637]  p-1 text-[25px] font-semibold text-[#024637]"/>
                </span>
             </div>
                <div className="border h-full flex justify-between items-center bg-[#024637] ">
                   <RiBallPenFill className="ml-[10px] text-[70px] font-semibold text-[white] "/>
                <span className="mr-[10px] text-[40px] font-semibold text-[white]">300k</span>
                </div>
            </div>
            
            <div className=" w-[250px] h-[250px] border-[1px] border-[#024637] flex flex-col  ">
             <div className="flex justify-between bg- m-[10px] ">
             <span className="text-[15px] font-semibold text-[#024637]"> Popularity</span>
                <span className="flex gap-[10px]">
                    <MdTrackChanges className="border-[1px] border-[#024637]  text-[25px] p-1 font-semibold text-[#024637] "/>
                    <FaShareSquare className="border-[1px] border-[#024637]  p-1 text-[25px] font-semibold text-[#024637]"/>
                </span>
             </div>
                <div className="border h-full flex justify-between items-center bg-[#024637] ">
                   <ImEarth className="ml-[10px] text-[70px] font-semibold text-[white] "/>
                <span className="mr-[10px] text-[40px] font-semibold text-[white]">90%</span>
                </div>
            </div>

            <div className=" w-[250px] h-[250px] border-[1px] border-[#024637] flex flex-col  ">
             <div className="flex justify-between bg- m-[10px] ">
             <span className="text-[15px] font-semibold text-[#024637]"> RSS Subscribers</span>
                <span className="flex gap-[10px]">
                    <TbSettingsX className="border-[1px] border-[#024637]  text-[25px] p-1 font-semibold text-[#024637] "/>
                </span>
             </div>
                <div className="border h-full flex justify-between items-center bg-[#024637] ">
                   <AiOutlineWifi className="ml-[10px] text-[70px] font-semibold text-[white] "/>
                <span className="mr-[10px] text-[40px] font-semibold text-[white]">160k</span>
                </div>
            </div>

            <div className=" w-[250px] h-[250px] border-[1px] border-[#024637] flex flex-col  ">
             <div className="flex justify-between bg- m-[10px] ">
             <span className="text-[15px] font-semibold text-[#024637]">Total Profit</span>
                <span className="flex gap-[10px]">
                    <GiProfit className="border-[1px] border-[#024637]  text-[25px] p-1 font-semibold text-[#024637] "/>
                 
                </span>
             </div>
                <div className="border h-full flex justify-between items-center bg-[#024637] ">
                   <BsFillPersonPlusFill className="ml-[10px] text-[70px] font-semibold text-[white] "/>
                <span className="mr-[10px] text-[40px] font-semibold text-[white]">$5m</span>
                </div>
            </div>

            <div className=" w-[250px] h-[250px] border-[1px] border-[#024637] flex flex-col  ">
             <div className="flex justify-between bg- m-[10px] ">
             <span className="text-[15px] font-semibold text-[#024637]">Total downloads</span>
                <span className="flex gap-[10px]">
                    <PiDownloadSimpleLight className="border-[1px] border-[#024637]  text-[25px] p-1 font-semibold text-[#024637] "/>
                </span>
             </div>
                <div className="border h-full flex justify-between items-center bg-[#024637] ">
                   <AiOutlineCloudDownload className="ml-[10px] text-[70px] font-semibold text-[white] "/>
                <span className="mr-[10px] text-[40px] font-semibold text-[white]">360k</span>
                </div>
            </div>

            <div className=" w-[250px] h-[250px] border-[1px] border-[#024637] flex flex-col  ">
             <div className="flex justify-between bg- m-[10px] ">
             <span className="text-[15px] font-semibold text-[#024637]">Server Downtime</span>
                <span className="flex gap-[10px]">
                    <IoMdStats className="border-[1px] border-[#024637]  p-1 text-[25px] font-semibold text-[#024637]"/>
                </span>
             </div>
                <div className="border h-full flex justify-between items-center bg-[#024637] ">
                   <TbReport className="ml-[10px] text-[70px] font-semibold text-[white] "/>
                <span className="mr-[10px] text-[40px] font-semibold text-[white]">0.1%</span>
                </div>
            </div>

            <div className=" w-[250px] h-[250px] border-[1px] border-[#024637] flex flex-col  ">
             <div className="flex justify-between bg- m-[10px] ">
             <span className="text-[15px] font-semibold text-[#024637]">Total Tickets</span>
                <span className="flex gap-[10px]">
                    <BiSolidReport className="border-[1px] border-[#024637]  text-[25px] p-1 font-semibold text-[#024637] "/>
                </span>
             </div>
                <div className="border h-full flex justify-between items-center bg-[#024637] ">
                   <BsTicket className="ml-[10px] text-[70px] font-semibold text-[white] "/>
                <span className="mr-[10px] text-[40px] font-semibold text-[white]">1.5k</span>
                </div>
            </div>
    
        </div>
        {/* end cards */}
    </div>
  )
}

export default Dashbord

// import React from 'react'

// const Dashbord = () => {
//   return (
//     <div>Dashbord</div>
//   )
// }

// export default Dashbord