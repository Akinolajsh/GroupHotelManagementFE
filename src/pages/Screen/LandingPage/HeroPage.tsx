import heroPix from "../../../assets/hero.avif";
import logo from "../../../assets/images-removebg-preview.png";
import ButtonProps from "../../../components/static/ButtonProps";
const HeroPage = () => {
  return (
    <div
      className="h-[550px]"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${heroPix})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="opacity-[0.8] h-full w-full bg-slate-900 flex justify-center items-center">
        {/* MAIN */}
        <div className="text-white  flex justify-center items-center flex-col w-[600px] h-[400px] ">
          <div className="">
            <img src={logo} className="h-[150px]"/>
          </div>

          <div className="text-[25px]">WELCOME TO THE MOON SAFARI HOTEL</div>
          <div className="italic mb-[50px]">THE ESSENCE OF SHEER LUXURY</div>

          <div className="w-[320px] flex justify-between items-center text-[12px] b">
            <ButtonProps
              text="OUR ROOMS"
              h="h-[40px] w
           w-[150px] "
              bg="bg-[transparent]"
              border="border-[1px] "
              col="text-[white]"
            />
            <ButtonProps
              text="BOOK NOW"
              h="h-[40px] w
           w-[150px]"
              col="text-[black] "
              bg="bg-green-400"
            />
          </div>
        </div>
        {/* MAIN */}
      </div>
    </div>
  );
};

export default HeroPage;
