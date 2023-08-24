import {AiOutlineSearch} from "react-icons/ai"
import {BsDatabaseDash} from "react-icons/bs"
const Sider = () => {
  return (

    <div className="fixed bg-[#024637]">
        {/* search */}
        <div className=" w-[200px] h-[30px] border mt-[20px] flex  justify-center items-center ml-[20px] ">
            <input className="italic text-[12px] text-[white] w-[150px] h-[30px] outline-none bg-transparent "
             placeholder="Search"
            type="search" />
            <AiOutlineSearch className="text-[white] text-[15px]   "/>
        </div>
        {/* search end */}
        {/* dashboard */}
        <div className="">
            <div className="text-[white] text-[15px] flex items-center gap-[10px] mt-[15px] ml-[20px] w-[200px] h-[30px] border-[1px] border-[white] " >
                <BsDatabaseDash className="text-[white] text-[15px] "/>
            <span> DashBord</span> 
            </div>
            <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
                <BsDatabaseDash className="text-[white] text-[15px] "/>
            <span> Ui Elements</span> 
            </div>
            <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
                <BsDatabaseDash className="text-[white] text-[15px] "/>
            <span> DashBord</span> 
            </div>
            <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
                <BsDatabaseDash className="text-[white] text-[15px] "/>
            <span> DashBord</span> 
            </div>
            <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
                <BsDatabaseDash className="text-[white] text-[15px] "/>
            <span> DashBord</span> 
            </div>
            <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
                <BsDatabaseDash className="text-[white] text-[15px] "/>
            <span> DashBord</span> 
            </div>
            <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
                <BsDatabaseDash className="text-[white] text-[15px] "/>
            <span> DashBord</span> 
            </div>
            <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
                <BsDatabaseDash className="text-[white] text-[15px] "/>
            <span> DashBord</span> 
            </div>
            <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
                <BsDatabaseDash className="text-[white] text-[15px] "/>
            <span> DashBord</span> 
            </div>
            <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
                <BsDatabaseDash className="text-[white] text-[15px] "/>
            <span> DashBord</span> 
            </div>
        
         
        </div>
        {/*end Dashbord */}
        {/* buttonholder */}
    <div className="mt-[80px] flex justify-center">
    <button className="text-[#024637] bg-white text-[15px] font-semibold p-[10px] rounded">Log Out</button>
    </div>
        {/* end buttonholder */}
    </div>
  )
}

export default Sider