import ButtonProps from "./ButtonProps";
import logoPix from "../../assets/images-removebg-preview.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../global/GlobalState";

const Header = () => {

const dispatch= useDispatch();

  const [show, setShow] = useState<boolean>(false);

  const onShow = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", onShow);

  return (
    <div>
      {show ? (
        <div className="h-[70px] w-full flex justify-center items-center bg-[#024637]  text-white fixed z-20">
          <div className="h-[70px] w-[90%] flex justify-between items-center ">
            {/* LOGO */}
            <div className="font-bold text-[16px] flex justify-center items-center">
              <img src={logoPix} className="h-[67px]" /> MOON SAFARI
            </div>
            {/* LOGO */}

            {/* NAV */}
            <div className="flex gap-3 font-bold text-[12px] meduim:hidden">
              <div className="hover:cursor-pointer">HOME</div>
              <div className="hover:cursor-pointer">ACCOMODATIONS</div>
              <div className="hover: cursor-pointer">ABOUT</div>
              <div className="hover:cursor-pointer">CONTACT</div>
            </div>
            {/* NAV */}

            {/* BUTTON */}
            <Link to="/general" className="medium-hidden">
              <ButtonProps
                h="h-[40px]"
                w="w-[120px]"
                text="BOOK NOW"
                bg="bg-green-400"
              />
            </Link>
            {/* BUTTON */}
          </div>
        </div>
      ) : (
        <div className="h-[70px] w-full flex justify-center items-center bg-white ">
          <div className="h-[70px] w-[90%] flex justify-between items-center ">
            {/* LOGO */}
            <div className="font-bold text-[16px] flex justify-center items-center">
              <img src={logoPix} className="h-[67px]" /> MOON SAFARI
            </div>
            {/* LOGO */}

            {/* NAV */}
            <div className="flex gap-3 font-bold text-[12px] meduim:hidden">
              <div>HOME</div>
              <div>ACCOMODATIONS</div>
              <div>ABOUT</div>
              <div>CONTACT</div>
            </div>
            {/* NAV */}

            {/* BUTTON */}
            <Link to="/general">
              <ButtonProps
                h="h-[40px]"
                w="w-[120px]"
                text="BOOK NOW"
                bg="bg-green-400"
              />
            </Link>
            <div
            onClick={()=>{
              dispatch(logOutUser())
            }}
            >
              <ButtonProps
                h="h-[40px]"
                w="w-[120px]"
                text="Logout"
                bg="bg-green-400"
                

              />
            </div>
            {/* BUTTON */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
