import { useState } from "react"


const InputScreen = () => {

  // const [image, setImage]= useState<Array>

const getRandomColor=()=>{
  return `#${((1 << 24)*Math.random() | 0).toString(16)}`
}
const onHandleImage= (e:any)=>{

}
  return (

    <div className='w-full h-[100vh] flex flex-wrap items-center flex-col pt-8'>
      
      <div>card</div>
      <input 
      className="hidden" 
      type="file"
      accept="image/png, image/jpg, image/jpeg"
      id="pix"
      multiple
      onChange={onHandleImage}
      />
      <label className="bg-purple-700 text-white py-2 px-8 rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all" htmlFor="pix">Upload Images</label>

      <div className="w-[90%] min-h-[20vh] flex flex-wrap justify-center mt-[20px]">
        <div className="w-[100px] h-[100px] rounded border m-1 flex justify-center items-center" 
        style={{backgroundColor: `${getRandomColor()}`}}
        >
        <img className="w-[90px] h-[90px] rounded object-cover" />
        </div>
      </div>
      <div>form</div>
      <div className="w-[300px] min-h-[200px] border rounded p-4 flex">
      <input className="w-full h-[40px] border pl-2 rounded" 
      placeholder="enter"
      />
      <div className="w-[45px] h-[40px] text-white bg-green-500 flex justify-center items-center hover:cursor-pointer duration-300 transition-all m-1 mb-[5px]">
        +
      </div>
      <div className="w-[45px] h-[40px] text-white bg-red-500 flex justify-center items-center hover:cursor-pointer duration-300 transition-all m-1">
        -
      </div>
      </div>
    </div>
  )
}

export default InputScreen