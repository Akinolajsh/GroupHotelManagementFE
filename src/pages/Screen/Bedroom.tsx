import React from 'react'
import roomPix from "../../assets/b.jpg"
import roomPix1 from "../../assets/bedroom.jpg"

const Bedroom = () => {
  return (
    <div className='flex w-[100%] h-[400px] '>
<img src={roomPix} className="w-[50%] hover:cursor-pointer relative top-0" />
<div className='bg-[red] w-[500px] absolute bottom-5'>
EM
</div>
<img src={roomPix1} className="w-[50%] hover:cursor-pointer" />
    </div>
  )
}

export default Bedroom