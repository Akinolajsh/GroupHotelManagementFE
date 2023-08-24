import hotelViewPix from "../../../assets/hotelView.jpg"

const HotelView = () => {
  return (
    <div className='w-full h-[500px] object-fit  '  style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${hotelViewPix})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
    </div>
  )
}

export default HotelView