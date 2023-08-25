import roomImg from "../../assets/room.avif"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createRoom } from "../../api/AdminRoomAPI";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateRoom = () => {

  const navigate= useNavigate()

  const adminID= useSelector((state:any)=> state.hotelApp)
  // console.log("first", adminID)

  const [avatar, setAvatar] = useState<string>(roomImg);
  const [image, setImage] = useState<string>("");

  const onHandleImage = (e: any) => {
    const localImage = e.target.files[0];
    const saveImage = URL.createObjectURL(localImage);

    setImage(localImage);
    setAvatar(saveImage);
  };

  const model = yup.object({
    roomSize: yup.string().required(),
    bedSize: yup.string().required(),
    Guest: yup.string().required(),
    roomType: yup.string().required(),
    description: yup.string().required(),
    amount: yup.number().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  // const onCreate = handleSubmit(async (data: any) => {
  //   const { roomSize, bedSize, Guest, roomType, description, amount } = data;

  //   console.log("check",data)
  //   const formData = new FormData();

  //   formData.append("roomSize", roomSize);
  //   formData.append("bedSize", bedSize);
  //   formData.append("Guest", Guest);
  //   formData.append("roomType", roomType);
  //   formData.append("description", description);
  //   formData.append("amount", amount);
  //   formData.append("image ", image);

  //  createRoom(formData).then((res)=>{
  //   console.log("ressss", res)
  //   navigate("/")
  //  })
  // });
  const onHandleSubmit = handleSubmit( (data: any,) => {
    const { roomSize, bedSize, Guest,roomType,description,amount } = data

console.log(data)

    const formData = new FormData()

    formData.append("roomSize", roomSize)
    formData.append("bedSize", bedSize)
    formData.append("Guest", Guest)
    formData.append("roomType", roomType)
    formData.append("description", description)
    formData.append("amount", amount)
    formData.append("image", image)

    createRoom(formData, adminID).then((res) => {
      console.log("jshdj",adminID)
      navigate("/")
    })

})
 

  return (
    <div className="w-full h-[650px] bg-[#024637] flex justify-center items-center">
      {/* MAIN */}
      <form
        onSubmit={onHandleSubmit}
        className="h-[630px] w-[500px] bg-white rounded justify-between flex flex-col"
        style={{
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      
      >
        {/* UPLOAD SETUP */}
        <div className=" flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col">
            <img src={avatar} className=" w-[450px] h-[240px] object-cover mt-1 rounded"/>
            <label
              className="w-[120px] h-[30px] rounded-[5px] flex justify-center items-center text-[15px] font-[700] hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all border-[1px] bg-[#024637] text-white mt-3 "
              htmlFor="image"
            >
              Upload Room
            </label>
            <input
              type="file"
              accept="image/png | image/jpeg image/jpg"
              className="hidden mb-4"
              id="image"
              onChange={onHandleImage}
            />
          </div>
        </div>
        {/* UPLOAD SETUP */}

        {/* INPUTS SETUP */}
        <div className=" h-[55%] py-2 flex items-start flex-col relative  mb-2 ">
          {/* ROOM TYPE */}
          <div className="flex justify-between items-center px-2 text-[15px] font-bold text-[#024637]  w-[90%]">
            <div>Room Type: </div>
            <div className="my-2 w-[300px] mx-2 border-[1px] border-[#024637] rounded-[5px] bg-purple-700 h-[40px] ">
              <input
                placeholder="Presidential Beachfront Villa"
                className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
                {...register("roomType")}
              />
            </div>
          { errors?.roomType?.message &&  <div className="text-[10px] text-[#024637]  absolute top-14 right-20 mb-1">
             Room Type Error
            </div>}
          </div>
          {/* ROOM TYPE */}

          {/* ROOM SIZE */}
          <div className="flex justify-between items-center px-2 text-[15px] font-bold text-[#024637] w-[90%] relative">
            <div>Room Size:</div>
            <div className="my-2 w-[300px] mx-2 border-[1px] border-[#024637] rounded-[5px] bg-purple-700 h-[40px] ">
              <input
                placeholder="60 m"
                className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
                {...register("roomSize")}
              />
            </div>
          { errors?.roomSize?.message && <div className="text-[10px] text-[#024637]  absolute top-12 right-7 mb-1">
             Room Size Error
            </div>}
          </div>
          {/* ROOM SIZE */}

          {/* BED SIZE */}
          <div className="flex justify-between items-center px-2 text-[15px] font-bold text-[#024637] w-[90%] relative">
            <div>Bed Size:</div>
            <div className="my-2 w-[300px] mx-2 border-[1px] border-[#024637] rounded-[5px] bg-purple-700 h-[40px] ">
              <input
                placeholder="2 kings"
                className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
                {...register("bedSize")}
              />
            </div>
          {errors?.bedSize?.message &&   <div className="text-[10px] text-[#024637]  absolute top-12 right-7 mb-1">
             Bed Size Error
            </div>}
          </div>
          {/* BED SIZE */}

          {/* AMOUNT */}
          <div className="flex justify-between items-center px-2 text-[15px] font-bold text-[#024637] w-[90%] relative">
            <div>Amount: </div>
            <div className="my-2 w-[300px] mx-2 border-[1px] border-[#024637] rounded-[5px] bg-purple-700 h-[40px] ">
              <input
                placeholder="₦20,000.00"
                className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
                {...register("amount")}
              />
            </div>
           {errors?.amount?.message &&  <div className="text-[10px] text-[#024637]  absolute top-12 right-7 mb-1">
             Amount Error
            </div>}
          </div>
          {/* AMOUNT */}

          {/* DESCRIPTION */}
          <div className="flex justify-between items-center px-2 text-[15px] font-bold text-[#024637] w-[90%] relative">
            Description:
            <div className="my-2 w-[300px] mx-2 border-[1px] border-[#024637] rounded-[5px] bg-purple-700 h-[60px] ">
              <textarea
                placeholder=""
                className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px] resize-none pt-2"
                {...register("description")}
              />
            </div>
            {errors?.description?.message && (
              <div className="text-[10px] text-[#024637]  absolute bottom-[-10px] right-7 mb-1">
              Description Error
              </div>
            )}
          </div>
          {/* DESCRIPTION */}
          <button
          className="w-[100px] h-[30px] flex justify-center items-center bg-[#024637] my-[20px] font-bold text-[15px] rounded hover:scale-[1.009] hover:cursor-pointer duration-300 transition-all overflow-hidden absolute bottom-[-25px] right-5 text-white"
          type="submit"
        >
          Get Started 
        </button>
        </div>
        {/* INPUTS SETUP */}
      </form>
      {/* MAIN */}
    </div>
  );
};

export default CreateRoom;



// const CreateRoom = () => {
//   return (
//     <div className="
//     w-full
//     h-[100vh]
//     flex
//     justify-center
//     items-center
//     ">
//       <div className="
//       w-[50%]
//       h-[90%]
//       bg-[blue]
//       flex
//       flex-col
//       justify-center
//       items-center
//       ">
//         <div className="
//         flex
//         flex-col
//         justify-center
//         items-center
//         ">
//           <img className="
//           w-[150px]
//           h-[150px]
//           border-[1px]
//           border-[black]
//           "/>
//           <label></label>
//           <input/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CreateRoom