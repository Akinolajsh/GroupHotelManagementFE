import { useForm } from "react-hook-form"
import img2 from "../../../assets/pexels-anh-nguyen-16946947.jpg"
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"
import { yupResolver } from "@hookform/resolvers/yup"
import {Link, useNavigate} from "react-router-dom"
import *  as yup from "yup"
import { signInUser } from "../../../api/AuthApi"



const UserSignIn = () => {

  const navigate = useNavigate()

  const model = yup.object({
    email:yup.string().required(),
    paassword:yup.string().required()
  })

  const { register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(model)
  })

  const onSubmit = handleSubmit((data:any)=>{
    const {email,password} = data

    signInUser({email,password}).then(()=>{
      navigate("/")
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
       flex-col
       justify-center
       items-center
       "
       onSubmit={onSubmit}
       >
        <div className="
          w-full
          h-[30px]
          ml-[110px]
          mt-[30px]
          font-[500]
          ">LanDBnB</div>
        <div className="
        w-[80%]
        h-[95%]
        flex
        flex-col
        justify-center
        items-center
        ">
          <div className="
          text-[30px]
          font-[500]
          mb-[10px]
          ">Welcome Back</div>
          <div className="
          text-[15px]
          font-[500]
          mb-[5px]
          ">Let's get you started on with a 30% discount</div>
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
            placeholder="Eg. test@gmail.com"
            {...register("email")}
            />
            {
              errors.email?.message && <label className="
              text-[10px]
              text-[red]
              hidden
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
            {...register("paassword")}
            />
            {
              errors.paassword?.message &&          <label className="
              text-[10px]
              text-[red]
              hidden
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
          ">Login</button>
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
            <Link to="/user-register">
            <div className="
            ml-[5px]
            text-[13px]
            font-[500]
            text-[#024637]
            ">Register.</div></Link>
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
            top-[86.5px]
            right-[400px]
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
            bottom-[100px]
            right-[530px]
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
              bottom-[90px]
              right-[150px]
              rounded-tl-[20px]
              flex
              justify-center
              items-center
              ">
                <Link to="/user-register">
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

export default UserSignIn