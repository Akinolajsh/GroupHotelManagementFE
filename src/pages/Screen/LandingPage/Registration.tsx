import { Link } from "react-router-dom"
import pix from "../../../assets/logos-removebg-preview.png"
// import { useSelector } from "react-redux";

const Registration = () => {


    // const toggle = useSelector((state: any) => state.toggle);
  return (

    // container
    <div className="flex justify-center items-center w-full h-[100vh] bg-[#D6DBD5]">
      {/* main */}
      <div className="flex flex-col justify-center items-center w-[500px]">
        {/* Title */}
        <div className="text-[#024637]  text-[40px] font-bold mb-5 ">HotelConnect</div>
        {/* image */}
            <img src={pix} className="w-[300px] h-[200px ]"/>
            {/*  */}
            <div className="flex mt-[30px]">

            <Link to="/user-sign-in">
              <div className="w-[200px] h-[40px] flex justify-center items-center rounded-md mx-2 font-[600] bg-green-500 hover:cursor-pointer text-slate-800 hover:bg-[#007F00] hover: duration-[300ms] transition-all hover:text-white">Sign In As a User</div>
            </Link>
            {/* </div> */}
            <Link to="/admin-sign-in">
              <div className="w-[200px] h-[40px] flex justify-center items-center rounded-md mx-2 font-[600] bg-green-500 hover:cursor-pointer text-slate-800 hover:bg-[#007F00] hover: duration-[300ms] transition-all hover:text-white">Sign In As an Admin</div>
            </Link>
            </div>

      </div>
    </div>
  )
}

export default Registration