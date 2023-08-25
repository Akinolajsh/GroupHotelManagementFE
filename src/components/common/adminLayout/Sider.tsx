import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsFolder } from "react-icons/bs";
import { HiOutlineCalendar } from "react-icons/hi";
import { LiaFacebookMessenger } from "react-icons/lia";
import { CgLogOut } from "react-icons/cg";
import logox from "../../../assets/best.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeToggleFalse,
  changeToggleTrue,
  logOutUser,
} from "../../../global/GlobalState";
import pix from "../../../assets/b.jpg";
import { Link } from "react-router-dom";
import { useTanAdminOne } from "../../../hooks/CustomHooks";

{
  /*
Blog/info sysytem


hotel/rentals/management system
* two screens(
    admin progress of the business
    how much have we made
    bookings

    user screen
    air bnb template
)

project management system
monday.com
slack

*/
}

const Sider = () => {
  const dispatch = useDispatch();
  const adminID = useSelector((state: any) => state.hotelApp);
  const toggle = useSelector((state: any) => state.toggle);
  console.log(adminID);
    const { admin } = useTanAdminOne(adminID)

  return (
    <div>
      {toggle ? (
        <div className="h-[100vh] w-[65px] fixed bg-[#007F00] text-white pt-[10px]">
          <div
            className="
              flex
              flex-col
              w-full 
              h-[90px]
              hover:bg-[grey]
              items-center
              justify-between
              px-[5px]
              hover:cursor-pointer 
              transition-all 
              duration-300 
              hover:rounded-md
              "
          >
            <div
              className="
                  my-[5px] 
                  h-[40px] 
                  w-[40px] 
                  flex 
                  items-center 
                  justify-center 
                  rounded 
                  bg-[white] 
                  "
            >
              <img src={admin?.companyPics} alt="" className="w-[35px] " />
            </div>
            {toggle ? (
              <HiChevronDoubleRight
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleFalse());
                }}
              />
            ) : (
              <HiChevronDoubleRight
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleTrue());
                }}
              />
            )}
          </div>

          <div
            className="flex w-[64.5px]
              h-[50px]
              hover:bg-[grey] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[40px] items-center hover:rounded-md"
          >
            <LuLayoutDashboard className="text-[23px]" />
          </div>
          <div
            className="flex w-[64.5px]
              h-[50px]
              hover:bg-[grey] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <BsFolder className="text-[23px]" />
          </div>
          <div
            className="flex w-[64.5px]
              h-[50px]
              hover:bg-[grey] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <HiOutlineCalendar className="text-[25px]" />
          </div>
          <div
            className="flex w-[64.5px]
              h-[50px]
              hover:bg-[grey] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <LiaFacebookMessenger className="text-[27px]" />
          </div>
          <hr className="mt-[200px]" />
          <div
            className="flex w-[64.5px]
              h-[50px]
               hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <div
              className="h-[40px] flex items-center  mb-[5px] w-[25px] rounded
              hover:bg-[grey] hover:cursor-pointer transition-all duration-300"
              onClick={() => {
                dispatch(logOutUser());
              }}
            >
              <CgLogOut className="text-[25px]" />
            </div>
          </div>
          <hr />
          <div className="flex ml-[20px] items-center mt-[10px]">
            <img
              className="h-[25px] w-[25px] object-cover border-[1.5px] rounded-[50%] "
              src={admin?.companyPics}
            />

            <div className="flex flex-col ml-[10px] justify-center"></div>
          </div>
        </div>
      ) : (
        <div className="h-[100vh] w-[200px] fixed bg-[#007F00] text-white pt-[10px]">
          <div
            className="
      flex
      w-full 
      h-[50px]
      hover:bg-[#726353]
      items-center
      justify-between
      px-[5px]
      hover:cursor-pointer 
      transition-all 
      duration-300 
      hover:rounded-md"
          >
            <div
              className="
          my-[5px] 
          h-[40px] 
          w-[40px] 
          flex 
          items-center 
          justify-center 
          rounded 
          bg-[white] 
          ml-[10px]"
            >
              <img src={admin?.companyPics} alt="" className="w-[35px] " />
            </div>
            <div className="text-[13px]">{admin?.companyName}</div>
            {toggle ? (
              <HiChevronDoubleLeft
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleFalse());
                }}
              />
            ) : (
              <HiChevronDoubleLeft
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleTrue());
                }}
              />
            )}
          </div>

         <Link to="/admin">
         <div
            className="flex w-full
      h-[50px]
      hover:bg-[#726353] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[40px] items-center hover:rounded-md"
          >
            <LuLayoutDashboard className="text-[23px]" />
            <p className="ml-[15px]">Dashboard</p>
          </div>
         </Link>
      <Link to="/admin/create">
      <div
            className="flex w-full
      h-[50px]
      hover:bg-[#726353] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <BsFolder className="text-[23px]" />
            <p className="ml-[15px]">Add Room </p>
          </div>
      </Link>

        <Link to="/admin/view">
        <div
            className="flex w-full
      h-[50px]
      hover:bg-[#726353] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <HiOutlineCalendar className="text-[25px]" />
            <p className="ml-[15px]">view Room</p>
          </div>
        </Link>
        <Link to="/admin/book">
          <div
            className="flex w-full
      h-[50px]
      hover:bg-[#726353] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <LiaFacebookMessenger className="text-[25px]" />
            <p className="ml-[15px]">Booked Rooms</p>
          </div>
        </Link>
          <hr className="mt-[200px]" />
          <div
            className="flex w-full
      h-[50px]
       hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center "
          >
            <div
              className="h-[50px] flex items-center justify-center mb-[5px] w-[40px] rounded
      hover:bg-[#726353] hover:cursor-pointer transition-all duration-300"
              onClick={() => {
                dispatch(logOutUser());
              }}
            >
              <CgLogOut className="text-[25px]" />
            </div>
            <span className="ml-[15px]">Log out</span>
          </div>
          <hr />
          <div className="flex items-center mt-[10px]">
            <img
              className="h-[40px] w-[40px] object-cover border-[1.5px] rounded-[50%] ml-[10px] "
              src={admin?.companyPics}
            />

            <div className="flex flex-col ml-[10px] justify-center">
              <div className="text-[14px]">{admin?.companyName}</div>
              <div className="text-[10px]">{admin?.companyEmail}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sider;

// import {AiOutlineSearch} from "react-icons/ai"
// import {BsDatabaseDash} from "react-icons/bs"
// const Sider = () => {
//   return (

//     <div className="fixed ">
//         {/* search */}
//         <div className=" w-[200px] h-[30px] border mt-[20px] flex  justify-center items-center ml-[20px] ">
//             <input className="italic text-[12px] text-[white] w-[150px] h-[30px] outline-none bg-transparent "
//              placeholder="Search"
//             type="search" />
//             <AiOutlineSearch className="text-[white] text-[15px]   "/>
//         </div>
//         {/* search end */}
//         {/* dashboard */}
//         <div className="">
//             <div className="text-[white] text-[15px] flex items-center gap-[10px] mt-[15px] ml-[20px] w-[200px] h-[30px] border-[1px] border-[white] " >
//                 <BsDatabaseDash className="text-[white] text-[15px] "/>
//             <span> DashBord</span>
//             </div>
//             <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
//                 <BsDatabaseDash className="text-[white] text-[15px] "/>
//             <span> Ui Elements</span>
//             </div>
//             <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
//                 <BsDatabaseDash className="text-[white] text-[15px] "/>
//             <span> DashBord</span>
//             </div>
//             <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
//                 <BsDatabaseDash className="text-[white] text-[15px] "/>
//             <span> DashBord</span>
//             </div>
//             <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
//                 <BsDatabaseDash className="text-[white] text-[15px] "/>
//             <span> DashBord</span>
//             </div>
//             <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
//                 <BsDatabaseDash className="text-[white] text-[15px] "/>
//             <span> DashBord</span>
//             </div>
//             <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
//                 <BsDatabaseDash className="text-[white] text-[15px] "/>
//             <span> DashBord</span>
//             </div>
//             <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
//                 <BsDatabaseDash className="text-[white] text-[15px] "/>
//             <span> DashBord</span>
//             </div>
//             <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
//                 <BsDatabaseDash className="text-[white] text-[15px] "/>
//             <span> DashBord</span>
//             </div>
//             <div className="text-[white] ml-[20px] text-[15px] flex items-center gap-[10px] mt-[15px]  w-[200px] h-[30px] border-[1px] border-[white] " >
//                 <BsDatabaseDash className="text-[white] text-[15px] "/>
//             <span> DashBord</span>
//             </div>

//         </div>
//         {/*end Dashbord */}
//         {/* buttonholder */}
//     <div className="mt-[80px] flex justify-center">
//     <button className="text-[#024637] bg-white text-[15px] font-semibold p-[10px] rounded">Log Out</button>
//     </div>
//         {/* end buttonholder */}
//     </div>
//   )
// }

// export default Sider
