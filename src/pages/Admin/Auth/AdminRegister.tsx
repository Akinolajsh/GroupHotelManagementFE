import img from "../../../assets/4536104.jpg"
import img2 from "../../../assets/dummy-prod-1.jpg"
import * as yup from "yup"
import {useForm} from "react-hook-form" 
import {yupResolver} from "@hookform/resolvers/yup" 
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { registerAdmin } from "../../../api/AdminApi"
const AdminReg = () => {

  const navigate = useNavigate()

  const [avatar,setAvatar] = useState<string>(img2)
  const [image,setImage] = useState<string>("")

  const onHandleImage = ((el:any)=>{
    const  localImage = el.target.files[0]
    const  saveImage = URL.createObjectURL(localImage)

    setAvatar(saveImage)
    setImage(localImage)
  })

  const model = yup.object({
    companyName : yup.string().required(),
    companyEmail : yup.string().required(),
    companyAddress : yup.string().required(),
    companyPhoneNo : yup.string().required(),
    passWord : yup.string().required(),
  })

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(model)
  })

  const onSubmit = handleSubmit((data:any)=>{
    const {companyName,companyEmail,companyAddress,companyPhoneNo,passWord} = data
    const formData = new FormData()
    formData.append("companyName",companyName)
    formData.append("companyEmail",companyEmail)
    formData.append("companyAddress",companyAddress)
    formData.append("companyPhoneNo",companyPhoneNo)
    formData.append("passWord",passWord)
    formData.append("image",image)

    registerAdmin(formData).then(()=>{
      navigate("/admin-sign-in")
    })

  })
  return (
    <div className="
    w-full
    h-[100vh]
    flex
    justify-center
    items-center
    bg-[#D6DBD5]
    ">
      <div className="
      w-[70%]
      h-[95%]
      flex
      ">
        {/* left */}
        <form className="
        h-[100%]
        w-[50%]
        border-[#1B2E35]
        z-10
        rounded-[30px]
        flex
        flex-col
        justify-center
        items-center
        "
        onSubmit={onSubmit}
        >
          <div className="
          text-[25px]
          text-[#1B2E35]
          font-[500]
          ">Welcome to the community..!</div>
        <div className="
        text-[20px]
        text-[#1B2E35]
        font-[500]
        ">Register as an Admin</div>
        <div className="
        flex
        flex-col
        mt-[7px]
        mb-[7px]
        ">

<div className="
          flex
          flex-col
          justify-center
          items-center
          mb-[15px]
          ">
            <img className="
            w-[100px]
            h-[100px]
            rounded-[50%]
            border-[1px]
            border-[#1B2E35]
            object-cover 
            "
            src={avatar}
            />
            <label className="
            py-[3px]
            px-[8px]
            mt-[5px]
            rounded-[5px]
            text-[white]
            bg-[#024637]
            "
            htmlFor="image"
            >Upload Image</label>
            <input className="
            hidden
            "
            type="file"
            onChange={onHandleImage}
            id="image"
            accept="image/png, image/jpg, image/jpeg"
            />
          </div>

          <label className="
          text-[13px]
          font-[500]
          text-[#1B2E35]
          ">companyName</label>
          <input className="
          w-[280px]
          h-[35px]
          border-[1px]
          bg-[#D6DBD5]
          border-[#1B2E35]
          rounded-[5px]
          outline-[#1B2E35]
          outline-[1px]
          pl-[10px]
          placeholder:text-[13px]
          placeholder:text-[#1B2E35]
          text-[13px]
          "
          placeholder="e.g. Hughes Hotels"
          {...register("companyName")}
          />
         {
          errors.companyName?.message &&  <label className="
          text-[11px]
          text-[red]
          font-[500]
          ">please fill this field</label>
         }
        </div>
        <div className="
        flex
        flex-col
        mt-[7px]
        mb-[7px]
        ">
          <label className="
          text-[13px]
          font-[500]
          text-[#1B2E35]
          ">companyEmail</label>
          <input className="
          w-[280px]
          h-[35px]
          border-[1px]
          border-[#1B2E35]
          rounded-[5px]
          outline-[#1B2E35]
          outline-[1px]
          pl-[10px]
          placeholder:text-[13px]
          placeholder:text-[#1B2E35]
          bg-[#D6DBD5]
          text-[13px]
          "
          placeholder="e.g. hugheshotels@gmail.com"
          {...register("companyEmail")}
          />
         {
          errors.companyEmail?.message &&  <label className="
          text-[11px]
          text-[red]
          font-[500]
          ">please fill this field</label>
         }
        </div>
        <div className="
        flex
        flex-col
        mt-[7px]
        mb-[7px]
        ">
          <label className="
          text-[13px]
          font-[500]
          text-[#1B2E35]
          ">companyAddress</label>
          <input className="
          w-[280px]
          h-[35px]
          border-[1px]
          border-[#1B2E35]
          rounded-[5px]
          outline-[#1B2E35]
          outline-[1px]
          pl-[10px]
          placeholder:text-[13px]
          placeholder:text-[#1B2E35]
          bg-[#D6DBD5]
          text-[13px]
          "
          placeholder="e.g. 122 Block park."
          {...register("companyAddress")}
          />
         {
          errors.companyAddress?.message &&  <label className="
          text-[11px]
          text-[red]
          font-[500]
          ">please fill this field</label>
         }
        </div>
        <div className="
        flex
        flex-col
        mt-[7px]
        mb-[7px]
        ">
          <label className="
          text-[13px]
          font-[500]
          text-[#1B2E35]
          ">companyPhoneNo</label>
          <input className="
          w-[280px]
          h-[35px]
          border-[1px]
          border-[#1B2E35]
          rounded-[5px]
          outline-[#1B2E35]
          outline-[1px]
          pl-[10px]
          placeholder:text-[13px]
          placeholder:text-[#1B2E35]
          bg-[#D6DBD5]
          text-[13px]
          "
          placeholder="e.g. +234 9091472997"
          {...register("companyPhoneNo")}
          />
         {
          errors.companyPhoneNo?.message &&  <label className="
          text-[11px]
          text-[red]
          font-[500]
          ">please fill this field</label>
         }
        </div>
        <div className="
        flex
        flex-col
        mt-[7px]
        mb-[7px]
        ">
          <label className="
          text-[13px]
          font-[500]
          text-[#1B2E35]
          ">passWord</label>
          <input className="
          w-[280px]
          h-[35px]
          border-[1px]
          border-[#1B2E35]
          rounded-[5px]
          outline-[#1B2E35]
          outline-[1px]
          pl-[10px]
          placeholder:text-[13px]
          placeholder:text-[#1B2E35]
          bg-[#D6DBD5]
          text-[13px]
          "
          placeholder="e.g. companyPassWord$$%%"
          {...register("passWord")}
          />
         {
          errors.passWord?.message &&  <label className="
          text-[11px]
          text-[red]
          font-[500]
          ">please fill this field</label>
         }
        </div>
        <button className="
         w-[280px]
         h-[35px]
         bg-[#024637]
         rounded-[5px]
         text-white
         text-[13px]
         mt-[10px]
         hover:scale-[1.02]
         hover:cursor-pointer
         hover:transition-all
         duration-300
        ">Register</button>
        <hr className="
        w-[290px]
        border-[1px]
        border-[#024637]
        mt-[15px]
        "/>
        <div className="
        flex
        mt-[10px]
        ">
          <div className="
          text-[13px]
          font-[500]
          text-[#024637]
          ">Already have an account?</div>
          <Link to="/admin-sign-in">
          <div className="
                    text-[13px]
                    font-[500]
                    text-[#060a09]
                    ml-[5px]
          ">Sign-in.</div>
          </Link>
        </div>
        </form>
        {/* left ends */}

        {/* Right */}
        <div className="
        w-[50%]
        h-[100%]
        flex
        items-center
        ">
          <div className="
          z-10
          w-[90%]
          h-[70%]
          border-l-0
          border-[#1B2E35]
          border-[1px]
          rounded-tr-[10%]
          rounded-br-[50%]
          flex
          items-center
          ">
          <div className="
          w-[95%]
          h-[80%]
          bg-[#1B2E35]
          rounded-tr-[10%]
          rounded-br-[50%]
          flex
          justify-center
          items-center
          ">
            <img src={img} className="
            w-[320px]
            h-[320px]
            rounded-tr-[10%]
            rounded-br-[50%]
          object-cover
            "/>
            <div className="
            w-[100px]
            h-[100px]
            border-[1px]
            border-[#1B2E35]
            absolute
            top-10
            left-20
            rounded-br-[0%]
            rounded-bl-[100%]
            "></div>
          </div>
          </div>
        
          <div className="
          w-[150px]
          h-[150px]
          rounded-[50%]
          border-[1px]
          bg-[#D6DBD5]
          absolute
          border-[#385A64]
          bottom-[50px]
          right-[50px]
          ">
            <div className="
            w-[60px]
            h-[60px]
            border-[1px]
            relative
            border-[#385A64]
            bg-[#385A64]
            top-[80px]
            left-[10px]
            rounded-br-[0%]
            rounded-bl-[100%]
            "/>
            <div className="
            w-[80px]
            h-[80px]
            relative
            bottom-[70px]
            bg-[#D6DBD5]
            left-[80px]
            rounded-tl-[0%]
            rounded-tr-[100%]
            "/>
            <div className="
            w-[80px]
            h-[80px]
            relative
            bottom-[155px]
            bg-[white]
            left-[85px]
            rounded-tl-[0%]
            rounded-tr-[100%]
            "/>
          </div>
          {/* <div className="
            w-[60px]
            h-[60px]
            absolute
            bottom-[20px]
            border-[#131010]
            border-[1px]
            left-[380px]
            rounded-tl-[0%]
            rounded-tr-[100%]
            "/> */}
            {/* <div className="
            w-[300px]
            h-[300px]
            rounded-[50%]
            border-[1px]
            bg-[#D6DBD5]
            absolute
            border-[#385A64]
            bottom-[100px]
            left-[130px]
            "/> */}
            {/* <div className="
            w-[300px]
            h-[300px]
            border-[1px]
            bg-[#D6DBD5]
            absolute
            border-[#385A64]
            bottom-[420px]
            right-[100px]
            "/> */}
        </div>
        {/* Right ends */}
      </div>
    </div>
  )
}

export default AdminReg