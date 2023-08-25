import {BsChevronDoubleRight} from "react-icons/bs"
import pix from "../../../assets/room.jpg"
const Description = () => {
    
  return (
    <div className=" flex justify-center flex-col items-center bg-[#FFFFFF] w-[100%]">
        {/* border */}
        <div className=" border-[1px] border-[silver] mt-5 flex justify-center flex-col items-center h-[100px] p-7 w-[100%] ">
            <div className="text-[25px] text-[#313137] font-light  ">
            PRESIDENTIAL BEACHFRONT VILLA
            </div>
            <div className="flex justify-center items-center gap-[1px] text-[10px] text-[#BCB1C7] ">
               <span>Home </span>
               <BsChevronDoubleRight className=" text-[8px] mt-[1px] "/>
               <span>Presidential Beach Font Villa</span> 
            </div>
        </div>
        {/* end border */}

        {/* image */}
        <div className="w-[780px] h-[420px]  mt-10 ">
        <img className="w-full h-full rounded hover:cursor-pointer hover:transition-all"
        src={pix} alt="" />
        </div>
        {/* image end */}

        {/* card big one */}
        <div className="w-[100%]  mt-10 flex justify-center bg-[#024637]">
        <div className="w-[780px] flex flex-col  bg-[white] rounded mt-7 hover:cursor-pointer   ">
            {/* inputs */}
            <div className="ml-[17px] mt-[10px] p-2 flex items-center gap-2 ">
                <input className="flex justify-center items-center outline-none border w-[350px] h-[40px] rounded font-semibold text-[#024637] p-2"
                placeholder="23 Aug 2023"
                type="week" />
                <div className="h-[40px] w-[200px] bg-[#024637] text-[white] flex justify-center items-center  ">
                    Check Availabilty
                </div>
            </div>
            {/* end inputs */}
                {/* amount */}
            <div>
                 
            <div className=" ml-[20px] mt-5 p-2 flex items-center  gap-2 ">
                <div className="font-semibold text-[#024637] text-[18px]">$210.00 PER NIGHT</div>
                <div className="h-[40px] w-[200px] border-[1px] border-[#024637] text-[#024637] flex justify-center items-center  ">
                    Deposit Required 50%
                </div>
            </div>
            </div>
            {/* end amount */}
             {/* room detail */}
             <div className="ml-[20px] mt-[20px]">
             <div className="text-[12px] font-light">ROOM DETAILS</div>
             <div>
                <div className="mt-[20px]">
                <span className="text-[13px] font-semibold">Guest: </span>
                <span className="text-[13px] font-light">6 </span>
                </div>
             </div>
           
             <div>
                <div className="">
                <span className="text-[13px] font-semibold">Room size: </span>
                <span className="text-[13px] font-light">120 m </span>
                </div>
             </div>

             <div>
                <div className="">
                <span className="text-[13px] font-semibold">Bed size(s): </span>
                <span className="text-[13px] font-light">1 King, 2 Queens, Sofa Bed   </span>
                </div>
             </div>
             <div>
                <div className="">
                <span className="text-[13px] font-semibold">Room type: </span>
                <span className="text-[13px] font-light"> Luxxry, Superior </span>
                </div>
             </div>
             </div>
             {/* end room <details></details> */}

             {/* facilities */}
             <div className="ml-[15px] p-2">
                <div className="font-semibold text-[15px]  ">Description</div>
                <div className="font-light italic text-[15px] mt-[12px]">Air Conditioning, Alarm clock, Bath or Shower, Coffee machine, DVD Player, Flat-screen TV, Free WiFi, Hairdryer, iPod dock, Laptop safe, Minibar, Pay-per-view Channels, Radio, Safety Deposit Box, Soundproofing, Telephone, Towels, Wake-up service</div>
             </div>
        </div>
     
        </div>
        {/* end card big one */}
    </div>
  )
}

export default Description