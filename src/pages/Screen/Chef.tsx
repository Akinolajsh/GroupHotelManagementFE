import chefPix from "../../assets/chef-removebg-preview.png";

const Chef = () => {
  const data: any = [
    {
      title: "stimulate your senses",
      subtitle: "a harmony of flavours",
      text: "A favorite haunt for savvy locals and refined travelers, the Moon Safari boasts diverse options for dining and cocktails.",
    },
    {
      title: "stimulate your senses",
      subtitle: "a harmony of flavours",
      text: "A favorite haunt for savvy locals and refined travelers, the Moon Safari boasts diverse options for dining and cocktails.",
    },
    {
      title: "stimulate your senses",
      subtitle: "a harmony of flavours",
      text: "A favorite haunt for savvy locals and refined travelers, the Moon Safari boasts diverse options for dining and cocktails.",
    },
    {
      title: "stimulate your senses",
      subtitle: "a harmony of flavours",
      text: "A favorite haunt for savvy locals and refined travelers, the Moon Safari boasts diverse options for dining and cocktails.",
    },
  ];

  return (
    <div className="min-h-[500px] w-full flex justify-center items-center bg-[#edeff2]">
      {/* MAIN */}

      <div className="h-full w-[90%] flex justify-center items-center mt-9 meduim:hidden">
        <div className="w-[55%] h-[75%]  flex flex-wrap ">
       {
        data?.map((props:any)=>(
            <div className="flex h-[150px] w-[245px]  justify-between  flex-col py-4  mx-5">
            <div className="uppercase text-[#a39d9d] text-[12px] mb-3">
              {props.title}
            </div>
            <div className="uppercase text-[14px] mb-3">{props.subtitle}</div>
            <div className="text-[12px]">{props.text}</div>
          </div>
        ))
       }
        </div>
        <div className="w-[55%] h-[85%] ">
          <img src={chefPix} className="h-[600px] meduim:hidden" />
        </div>
      </div>

      <div className="h-full w-[90%] meduim:flex justify-center hidden">
        <div className="w-[75%] h-[100%]  flex flex-wrap justify-center items-center  ml-[120px]">
       {
        data?.map((props:any)=>(
            <div className="flex h-[150px] w-[245px]  justify-center  flex-col py-4  mx-5 items-center  ">
            <div className="uppercase text-[#a39d9d] text-[12px] mb-3">
              {props.title}
            </div>
            <div className="uppercase text-[14px] mb-3">{props.subtitle}</div>
            <div className="text-[12px]">{props.text}</div>
          </div>
        ))
       }
        </div>
        <div className="w-[55%] h-[85%] ">
          <img src={chefPix} className="h-[600px] meduim:hidden" />
        </div>
      </div>

      {/* MAIN */}
    </div>
  );
};

export default Chef;
