import pix from "../../assets/react.svg"
import {BiSolidVideo} from "react-icons/bi" 
import {TbPhotoShare} from "react-icons/tb" 
import {AiOutlineSmile} from "react-icons/ai" 

const Facebook = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center '>
        <div className='w-[600px] h-[180px] flex justify-center items-center flex-col rounded bg-whitesmoke-100 border'>
<div className='flex justify-between items-center w-[90%] h-[50%] border-b-2 bg-red-500'>
<div className=' h-[70px] w-[70px] rounded-[50%] flex justify-center items-center bg-white object-cover' >
    <img src={pix} className="object-cover w-full h-full overflow-hidden "/>
</div>
<input placeholder="What's on your mind, Akinola?" className="bg-slate-200 rounded-[30px] w-[460px] h-[50px] outline-none border-none pl-[10px]" />
</div>
<div className='flex justify-between h-[50%] w-[80%] items-center'>
<div className='w-[100px] flex items-center justify-between '><BiSolidVideo className="font-[bg-green-300]"/>Live Video</div>
<div className='w-[100px] flex items-center justify-between text-[bg-green-300]'><TbPhotoShare/>Photo/Video</div>
<div className='w-[100px] flex items-center justify-between text-[bg-green-300]'><AiOutlineSmile/>Feeling/Activity</div>
</div>
        </div>
        
    </div>
  )
}

export default Facebook