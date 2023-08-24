import { BsChevronDoubleRight } from "react-icons/bs";
import room from "../../../assets/hero1.avif";
const ViewRooms = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-between">
      <div className=" border-[1px] border-[silver] mt-5 flex justify-center flex-col items-center h-[100px] p-7 w-[100%] ">
        <div className="text-[25px] text-[#313137] font-light text-600  ">
          ROOMS ARCHIVE
        </div>
        <div className="flex justify-center items-center gap-[1px] text-[10px] text-[#BCB1C7] ">
          <span>Home </span>
          <BsChevronDoubleRight className=" text-[8px] mt-[1px] " />
          <span>Rooms</span>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center  w-[90%] mt-[30px]">
        <div className="justify-between  flex flex-col w-[350px] h-[350px]">
          <img
            src={room}
            alt=""
            className="justify-between  flex flex-col w-[350px] h-[200px]"
          />
          <span className="text-[12px] font-light  ">
            PRESIDENTIAL BEACHFRONT VILLA
          </span>
          <div className="">
            <span className="text-[#024637] text-[15px] font-semibold">
              $210.00
            </span>
            <span className="text-[13px] font-light">per night</span>
          </div>
          <div className="text-[12px] bg-[#024637] flex justify-center items-center rounded text-[white] w-[200px] h-[20px] ">
            <button>Veiw Room Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRooms;
