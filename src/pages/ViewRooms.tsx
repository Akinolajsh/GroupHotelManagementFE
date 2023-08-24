import {BsChevronDoubleRight} from "react-icons/bs"
// import room from "../assets/hero1.avif"
import pix from "../assets/hero1.avif"
const ViewRooms = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-between">
 <div className=" border-[1px] border-[silver] mt-5 flex justify-center flex-col items-center h-[100px] p-7 w-[100%] ">
            <div className="text-[25px] text-[#313137] font-light text-600  ">
            ROOMS ARCHIVE
            </div>
            <div className="flex justify-center items-center gap-[1px] text-[10px] text-[#BCB1C7] ">
               <span>Home </span>
               <BsChevronDoubleRight className=" text-[8px] mt-[1px] "/>
               <span>Rooms</span> 
            </div>
        </div>
        <div className="w-[100%] h-[100vh] flex justify-center items-center ">
            <div className="w-[95%] h-[70vh] justify-between flex flex-wrap">
<div className="bg-[#000] justify-center w-[390px] h-[70%] rounded-[10px]">
<img src={pix} alt=""className="w-full h-[55%] justify-center items-center" />

<text className="text-[15px] w-full h-[12%] text-[#fff] items-center flex">PRESIDENTIAL BEACHFRONT VILLA</text>
<div className="w-full h-[10%] text-[#fff] text-[15px] flex">
$210.00 <span>per nigth</span>
</div>

</div>
            </div>
        </div>
</div>
  )
}

export default ViewRooms