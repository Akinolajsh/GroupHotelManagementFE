import regPix from "../assets/premium_photo-1675745329954-9639d3b74bbf.avif";
import logo from "../assets/react.svg"

const AdminRegister = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#D6DBD5]">
      <div className="flex h-[600px] w-[800px] bg-white justify-center items-center">
        <div className="w-[45%] h-[90%] flex flex-col justify-between  bg-slate-400 mr-2 ">
            <div className="w-[100px] flex items-center "> <img src={logo} className="mr-2"/> <div className="text-[18px] font-semibold">Suite</div></div>
        </div>
        <div className="w-[45%] h-[90%] bg-green-600 overflow-hidden rounded-[20px] ">
          <img src={regPix} className="rounded-[10px]"/>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
