import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img from "../../../assets/hotelView.jpg"

const ViewAllRooms = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      {/* Main */}
      <div className="min-h-[90%] w-full flex justify-center  flex-col items-center">
        <div className="w-full h-[120px] border-b-[1px] border-t-[1px] border-[silver]  flex justify-center items-center flex-col">
          <div className="text-[20px]">ROOMS ARCHIVE</div>
          <div className="flex justify-center items-center gap-1 mt-2 text-[12px] text-[#828080]">
            <div>HOME</div>
            <MdKeyboardDoubleArrowRight />
            <div>HOME</div>
          </div>
        </div>
        <div className="w-[90%] min-h-[450px]  flex-wrap flex">
<div className="flex flex-col  h-[300px] w-[350px] bg-black">
<div className="h-[60%] w-full object-cover">
    <img src={img}/>

</div>
</div>
        </div>
      </div>
      {/* Main */}
    </div>
  );
};

export default ViewAllRooms;
