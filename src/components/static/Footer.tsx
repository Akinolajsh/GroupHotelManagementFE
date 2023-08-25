import logoPix from "../../assets/images-removebg-preview.png";
import swimPix from "../../assets/snocker.webp";
import tennisPix from "../../assets/swim.jpg";
import snookerPix from "../../assets/tennis.webp";
import { FaGreaterThan,FaInstagram,FaSnapchat } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGithub,AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#222222]  w-[w-full] flex justify-center items-center py-[60px]">
      {/* MAIN */}
      <div className="w-[90%] h-[80%] flex justify-between ">
        {/* first */}
        <div className="flex flex-col justify-between   w-[400px] h-[180px] ">
          <div className="uppercase flex justify-start items-center text-white text-[20px] mb-5">
            <img src={logoPix} className="mr-2 h-[80px]" /> moon safari
          </div>
          <div className="text-[12px] text-slate-100">
            <div className="mb-6">
              Moon Safari offers its guests and residences many services
              including a butler on every floor, baby-sitting and concierges, as
              well as a meeting room and a conference room.
            </div>
            Designed by architectural mastermind John Doe, Moon Safari is where
            style, space and architectural designs create the perfect hotel
            lifestyle.
          </div>
        </div>
        {/* first */}

        {/* second */}
        <div className=" ">
          <div className=" py-2">
            <div className=" mb-2 uppercase text-[13px] text-[#646464] hover:cursor-pointer ">
              upcoming events
            </div>
            <div className="flex justify-between   w-[300px]  gap-2 ">
              <div className="h-[80px] w-[75%]  object-cover">
                <img src={swimPix} className="h-full w-full" />
              </div>
              <div className="">
                <div className="capitalize  text-[12px] text-white font-bold hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all flex ">
                  Leeward Coast Dolphin and Snorkel Half-Day Cruise
                </div>
                <div className="text-[10px] text-[#bfb6b6]">Aug 25, 2023</div>
              </div>
            </div>
          </div>
          <div className=" py-2">
            <div className="flex justify-between   w-[300px]  gap-2 ">
              <div className="h-[80px] w-[75%]  object-cover">
                <img src={tennisPix} className="h-full w-full" />
              </div>
              <div className="">
                <div className="capitalize  text-[12px] text-white font-bold hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all flex ">
                  Leeward Coast Dolphin and Snorkel Half-Day Cruise
                </div>
                <div className="text-[10px] text-[#bfb6b6]">Aug 25, 2023</div>
              </div>
            </div>
          </div>
          <div className=" py-2">
            <div className="flex justify-between   w-[300px]  gap-2 ">
              <div className="h-[80px] w-[75%]  object-cover">
                <img src={snookerPix} className="h-full w-full" />
              </div>
              <div className="">
                <div className="capitalize  text-[12px] text-white font-bold hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all flex ">
                  Leeward Coast Dolphin and Snorkel Half-Day Cruise
                </div>
                <div className="text-[10px] text-[#bfb6b6]">Aug 25, 2023</div>
              </div>
            </div>
          </div>
        </div>
        {/* second */}

        {/* third */}
        <div className="flex flex-col mr-[100px] ">
          <div className=" mb-5 uppercase text-[13px] text-[#646464] hover:cursor-pointer ">
            USEFUL LINKS
          </div>
          <div className="capitalize text-white w-[200px] flex  flex-col justify-center  text-[12px] gap-2 ">
            <div className="flex  items-center w-[150px] hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all">
              <FaGreaterThan className="mr-2 text-[8px] text-[#5e5b5b]" /> about
            </div>
            <div className="flex  items-center w-[150px] hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all">
              <FaGreaterThan className="mr-2 text-[8px] text-[#5e5b5b]" />{" "}
              dining
            </div>
            <div className="flex  items-center w-[150px] hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all">
              <FaGreaterThan className="mr-2 text-[8px] text-[#5e5b5b]" />{" "}
              wellness & spa
            </div>
            <div className="flex  items-center w-[150px] hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all">
              <FaGreaterThan className="mr-2 text-[8px] text-[#5e5b5b]" /> blog
            </div>
            <div className="flex  items-center w-[150px] hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all">
              <FaGreaterThan className="mr-2 text-[8px] text-[#5e5b5b]" /> info
              & directions
            </div>
          </div>
          <div>
            <div className=" mt-12 uppercase text-[13px] text-[#646464] hover:cursor-pointer ">follow us</div>
            <div className="gap-3 flex mt-3 text-white"><FaInstagram className="hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all"/> <FaSnapchat className="hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all"/><FcGoogle className="hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all"/> <AiOutlineWhatsApp className="hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all"/> <AiOutlineGithub className="hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all"/> <FiTwitter className="hover:text-[#a8eba8] hover:cursor-pointer duration-300 transition-all"/></div>
          </div>
        </div>
        {/* third */}
      </div>
      {/* MAIN */}
    </div>
  );
};

export default Footer;
