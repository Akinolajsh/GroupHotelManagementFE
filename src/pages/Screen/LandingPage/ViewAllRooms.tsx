import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ButtonProps from "../../../components/static/ButtonProps";
// import { useSelector } from "react-redux";
import { useTanRoom } from "../../../hooks/CustomHooks";
import { Link } from "react-router-dom";

const ViewAllRooms = () => {

    const { room} = useTanRoom()
    // const userID = useSelector((state: any) => state.hotelApp)

  return (
    <div className="w-full  flex justify-center items-center ">
      {/* Main */}
      <div className=" w-full flex justify-center  flex-col items-center  ">
        <div className="w-full h-[100px] border-b-[1px] border-t-[1px] border-[silver]  flex justify-center items-center flex-col mb-7">
          <div className="text-[20px]">ROOMS ARCHIVE</div>
          <div className="flex justify-center items-center gap-1 mt- text-[12px] text-[#828080] ">
            <div>HOME</div>
            <MdKeyboardDoubleArrowRight />
            <div>HOME</div>
          </div>
        </div>
        <div className="w-[90%]  flex-wrap flex justify-center items-center">

{
    room?.map((props : any)=>(
        <div key={props?._id}>
            <div className="flex flex-col  h-[300px] w-[370px]  m-[15px] ">
    <img src={props?.roomPics}  className="h-[70%] w-full bg-red-500 object-cover"/>
 <div className="flex  flex-col items-start">
 <div className="flex mt-2 mb-1 gap-2 ">
        <div>{props?.roomType}</div>
        <div>{props.bedSize}</div>
    </div>
    <div className=" mb-3 flex gap-1">
        <div>₦</div>
        <div>{props?.amount}</div>
    </div>
<Link to="/description">
<ButtonProps h="h-[30px]" w="w-[120px]" bg="bg-[#024637]" text="View more" col="text-[white] text-[15px]"/>
</Link>
    {/* <button className="bg-slate-400 w-[120px] h-[30px]  rounded mt-3">
        View more
    </button> */}
 </div>

</div>
        </div>
    ))
}

        </div>
      </div>
      {/* Main */}
    </div>
  );
};

export default ViewAllRooms;
