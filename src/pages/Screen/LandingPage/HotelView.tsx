import hotelViewPix from "../../../assets/new.jpeg"
import ButtonProps from "../../../components/static/ButtonProps"

const HotelView = () => {
  return (
    <div className='w-full h-[500px]  '  style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${hotelViewPix})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        WebkitBackgroundSize:"cover",
      }}>
        <div className="opacity-[0.4] h-full w-full bg-slate-900 flex justify-center items-center">
<div className="z-99 text-white flex items-center justify-end w-[90%] h-full  text-[18px] font-light">
<div className="flex flex-col justify-between items-start  h-[300px] w-[300px]">
  
<div className="uppercase flex justify-start">BE PREPARED FOR A NEW EXPERIENCE</div>
<div>
Moon Safari offers its guests and residences many services including a butler on every floor, baby-sitting and concierges, as well as a meeting room and a conference room.</div>
<ButtonProps h="h-[30px] " w="w-[200px]" text="View Rooms" bg="bg-[#0d2e27]"/>
</div>
</div>
        </div>
    </div>
  )
}

export default HotelView