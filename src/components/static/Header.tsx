import ButtonProps from "./ButtonProps";
import logoPix from "../../assets/images-removebg-preview.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
        <Link to="/user-sign-in" className="medium-hidden">
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
  );
};

export default Header;
