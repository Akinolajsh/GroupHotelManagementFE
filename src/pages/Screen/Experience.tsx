import pix from ".././../assets/react.svg"

const Experience = () => {

const data:any=[
    {
        img: "pix",
        title: "a harmony of flavours",
        text: "A favorite haunt for savvy locals and refined travelers alike, the Moon Safari boasts diverse options for dining and cocktails.",
    },
    {
        img: "pix",
        title: "a harmony of flavours",
        text: "A favorite haunt for savvy locals and refined travelers alike, the Moon Safari boasts diverse options3.",
    },
    {
        img: "pix",
        title: "a harmony of flavours",
        text: "A favorite haunt for savvy locals and refined travelers alike, the Moon Safari boasts diverse .",
    },
    {
        img: "pix",
        title: "a harmony of flavours",
        text: "A favorite haunt for savvy locals and refined travelers alike, the Moon Safari boasts diverse options .",
    },
]


  return (
    <div className="min-h-[500px] w-full flex justify-center items-center  ">
   {/* MAIN */}

   <div className="h-full w-[90%] flex justify-between items-center flex-col ">
    
{/* WRITE-UP  */}

<div className="w-[500px] h-[45%] justify-center items-center flex  uppercase flex-col">
          <div className="text-[14px] text-[silver] mb-2">
            an exciting experience
          </div>

          <div className="text-[20px] mb-10">
            more than a good night's sleep
          </div>
        </div>

{/* WRITE-UP  */}

<div className=" w-full h-[55%] flex justify-center items-center text-center flex-wrap">
{
    data?.map((props:any)=>(
        <div className="w-[287px] justify-between items-center flex flex-col h-[150px] mx-2 my-2">

<img src={pix} />

<div className="uppercase text-[silver]">
{props.title}
</div>
<div className="text-[13px]">
{props.text}
</div>
</div>
    ))
}
</div>
      </div>
   {/* MAIN */}
    </div>
  );
};

export default Experience;
