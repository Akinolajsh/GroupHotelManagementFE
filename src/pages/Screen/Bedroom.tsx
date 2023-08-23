
import roomPix from "../../assets/b.jpg"
import roomPix1 from "../../assets/bedroom.jpg"
import { Link } from 'react-router-dom'

const Bedroom = () => {
  return (
    <div className='flex w-[100%] h-[400px] relative hover:cursor-pointer'>

    <img src={roomPix} className="w-[50%] hover:cursor-pointer  " />
<Link to="/description">
<div className='text-white font-semibold w-[500px] absolute bottom-1 left-6 uppercase flex justify-center'>
empire state two bedroom residence
</div>
</Link>

<img src={roomPix1} className="w-[50%] hover:cursor-pointer" />
<Link to="/description">
<div className='text-white font-semibold w-[500px] absolute bottom-1 right-6 uppercase flex justify-center'>
presidential beachfront villa
</div>
</Link>

    </div>
  )
}

export default Bedroom