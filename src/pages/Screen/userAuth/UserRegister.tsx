import { useForm } from "react-hook-form"
import img from "../../../assets/dummy-prod-1.jpg"
import img2 from "../../../assets/pexels-anh-nguyen-16946947.jpg"
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"
import {Link, useNavigate} from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { registerUser } from "../../../api/AuthApi"


const UserRegister = () => {
  const navigate = useNavigate()

  const [avatar, setAvatar] = useState<string>(img)
  const [image, setImage] = useState<string>("")


  const onHandleImage = (el:any)=>{
    const localImage = el.target.files[0]
    const saveImage = URL.createObjectURL(localImage)

    setAvatar(saveImage)
    setImage(localImage)
  }

  const model = yup.object({
    fullName:yup.string().required(),
    email:yup.string().required(),
    phoneNumber:yup.number().required(),
    password:yup.string().required(),
    confirm:yup.string().oneOf([yup.ref("password")])
  })

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(model)
  })

  const onSubmit = handleSubmit(async(data:any)=>{
    const {fullName, email, password, phoneNumber} = data
    const formData = new FormData()
    
    formData.append("fullName",fullName)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("phoneNumber",phoneNumber)
    formData.append("image",image)
    
    registerUser(formData).then(()=>{
      navigate("/user-sign-in")
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
      w-[1100px]
      h-[85%]
      bg-white
      flex
      rounded-[20px]
      ">
        {/* left */}
       <form className="
       w-[50%]
       h-full
       rounded-l-[20px]
       flex
       justify-center
       items-center
       "
       onSubmit={onSubmit}
       >
        <div className="
        w-[80%]
        h-[95%]
        flex
        flex-col
        justify-center
        items-center
        ">
          <div className="
          w-full
          h-[30px]
          font-[500]
          ">LanDBnB</div>
          <div className="
          text-[20px]
          font-[500]
          ">Create an account</div>
          <div className="
          text-[13px]
          font-[500]
          mb-[5px]
          ">Let's get you started on with a 30% discount</div>
          <div className="
          flex
          flex-col
          items-center
          justify-center

          ">
            <img className="
            w-[100px]
            h-[100px]
            rounded-[50%]
            border-[1px]
            border-[#024637]
            object-cover
            "
            src={avatar}
            />
            <label className="
            py-[6px]
            px-[15px]
            bg-[#024637]
            rounded-[5px]
            text-white
            text-[12px]
            mt-[10px]
            mb-[10px]
            hover:scale-[1.02]
            hover:cursor-pointer
            hover:transition-all
            duration-300
            "
            htmlFor="image"
            >Upload Image</label>
            <input className="
            hidden
            "
            id="image"
            accept="image/png, image/jpg, image/jpeg"
            type="file"
            onChange={onHandleImage}
            />
          </div>
          <div className="
          flex
          flex-col
          mt-[10px]
          mb-[10px]
          ">
          
            <input className="
            w-[320px]
            h-[35px]
            bg-[#F5F5F5]
            rounded-[7px]
            outline-[1px]
            outline-[#024637]
            pl-[10px] 
            placeholder:text-[14px]
            "
            placeholder="Eg.Williams Daniel"
            { ...register("fullName") }
            />
            {
              errors.fullName?.message && <label className="
              text-[10px]
              text-[red]
              ">please fill this field</label>
            }
          </div>
          <div className="
          flex
          flex-col
          mt-[10px]
          mb-[10px]
          ">
            <input className="
            w-[320px]
            h-[35px]
            bg-[#F5F5F5]
            outline-[1px]
            outline-[#024637]
            rounded-[7px]
            pl-[10px] 
            placeholder:text-[14px]
            "
            { ...register("email") }
            placeholder="Eg. test@gmail.com"
            />
            {
              errors.email?.message && <label className="
              text-[10px]
              text-[red]
              ">please fill this field</label>
            }
          </div>
          <div className="
          flex
          flex-col
          mt-[10px]
          mb-[10px]
          ">
            
            <input className="
            w-[320px]
            h-[35px]
            bg-[#F5F5F5]
            rounded-[7px]
            pl-[10px] 
            placeholder:text-[14px]
            "
            placeholder="Eg. +234 9091465699"
            { ...register("phoneNumber") }
            />
            {
              errors.phoneNumber?.message && <label className="
              text-[10px]
              text-[red]
              ">please fill this field</label>
            }
          </div>
          <div className="
          flex
          flex-col
          mt-[10px]
          mb-[10px]
          ">
            
            <input className="
            w-[320px]
            h-[35px]
            bg-[#F5F5F5]
            rounded-[7px]
            pl-[10px] 
            placeholder:text-[14px]
            "
            placeholder="Eg. myPassword$$%%"
            { ...register("password") }
            />
           {
            errors.password?.message &&  <label className="
            text-[10px]
            text-[red]
            ">please fill this field</label>
           }
          </div>
          <div className="
          flex
          flex-col
          mt-[10px]
          mb-[10px]
          ">
            <input className="
            w-[320px]
            h-[35px]
            bg-[#F5F5F5]
            rounded-[7px]
            pl-[10px] 
            placeholder:text-[14px]
            "
            placeholder="Eg. myPassword$$%%"
            { ...register("confirm") }
            />
            {
              errors.confirm?.message && <label className="
              text-[10px]
              text-[red]
              ">please fill this field</label>
            }
          </div>
          <button className="
          w-[280px]
          h-[35px]
          bg-[#024637]
          rounded-[5px]
          text-white
          text-[12px]
          mt-[10px]
          hover:scale-[1.02]
          hover:cursor-pointer
          hover:transition-all
          duration-300
          "
          type="submit"
          >Register</button>
          <hr className="
          w-[290px]
          border-[1px]
          border-[#024637]
          mt-3
          "/>
          <div  className="
          flex
          mt-[10px]
          ">
            <div className="
            text-[13px]
            text-[#465a56]
            font-[500]
            ">Have an account?</div>
            <Link to="/user-sign-in">
            <div className="
            ml-[5px]
            text-[13px]
            font-[500]
            text-[#024637]
            ">Sign-in.</div></Link>
          </div>
        </div>
       </form>
        {/* left  ends */}

        {/* Right */}
        <div className="
        w-[50%]
        h-full
        rounded-r-[20px]
        flex
        justify-center
        items-center
        ">
          <div className="
          w-[85%]
          h-[85%]
          flex
          justify-center
          items-center
          flex-col
          rounded-[20px]
          ">
            <div className="
            w-[250px]
            h-[75px]
            bg-[white]
            absolute
            top-[106.5px]
            right-[350px]
            rounded-br-[20px]
            flex
            justify-center
            items-center
            ">
              <div className="
                w-[220px]
                h-[55px]
                bg-[white]
                border-[1px]
                border-[#024637]
                rounded-[30px]
                flex
                justify-center
                items-center
                text-[15px]
                text-[#024637]
              "> personal use</div>
            </div>
            <div className="
            w-[150px]
            h-[30px]
            bg-[white]
            absolute
            top-[180px]
            right-[520px]
            rounded-br-[20px]
            "></div>
            <img src={img2} className="
            object-cover
            rounded-[20px]
            w-[100%]
          h-[100%]
            "/>
            <Link to="/user-register">
            <div className="
            w-[100px]
            h-[100px]
            bg-transparent
            absolute
            border-[white]
            border-[1px]
            bottom-[120px]
            right-[480px]
            rounded-[20px]
            flex
            justify-center
            items-center
            "><BsArrowLeft className="
            text-[white]
            text-[30px]
            "/></div>
            </Link>
              <div className="
              w-[190px]
              h-[90px]
              bg-white
              absolute
              bottom-[100px]
              right-[130px]
              rounded-tl-[20px]
              flex
              justify-center
              items-center
              ">
                <Link to="/user-sign-in">
                <div className="
                w-[170px]
                h-[70px]
                border-[1px]
                bg-[#0f231f]
                rounded-[20px]
                flex
                justify-center
                items-center
                "><BsArrowRight className="
                text-[white]
                text-[30px]
                "/></div>
                </Link>
              </div>
          </div>
        </div>
        {/* Right  ends */}
      </div>
    </div>
  )
}

export default UserRegister