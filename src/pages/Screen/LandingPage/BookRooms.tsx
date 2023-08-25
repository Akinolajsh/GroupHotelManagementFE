// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import img from "../../../assets/hotelView.jpg"
import ButtonProps from "../../../components/static/ButtonProps";
import { useTanRoom } from "../../../hooks/CustomHooks";

const BookRooms = () => {
    const { room} = useTanRoom()
  return (
    <div>
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
    <ButtonProps h="h-[30px]" w="w-[120px]" bg="bg-[#024637]" text="Book Room" col="text-[white] text-[15px]"/>
        {/* <button className="bg-slate-400 w-[120px] h-[30px]  rounded mt-3">
            View more
        </button> */}
     </div>
    
    </div>
            </div>
        ))
    }
    </div>

  );
};

export default BookRooms;
