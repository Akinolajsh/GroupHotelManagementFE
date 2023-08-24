import roomImg from "../../assets/room.avif";

const CreateRoom = () => {
  return (
    <div className="w-full h-[650px] bg-[#024637] flex justify-center items-center">
     {/* MAIN */}
     <div
        className="h-[630px] w-[500px] bg-white rounded justify-between flex flex-col"
        style={{
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
        {/* UPLOAD SETUP */}
        <div className="h-[40%] flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col">
            <img src={roomImg} />
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
            />
          </div>
        </div>
        {/* UPLOAD SETUP */}

        {/* INPUTS SETUP */}
        <div className=" h-[50%] py-2 flex items-start flex-col ">
          {/* ROOM TYPE */}
          <div className="flex justify-between items-center px-2 text-[15px] font-bold text-[#024637]  w-[90%]">
            <div>Room Type: </div>
            <div className="my-2 w-[300px] mx-2 border-[1px] border-[#024637] rounded-[5px] bg-purple-700 h-[40px] ">
              <input
                placeholder="Presidential Beachfront Villa"
                className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
              />
            </div>
          </div>
          {/* ROOM TYPE */}

          {/* ROOM SIZE */}
          <div className="flex justify-between items-center px-2 text-[15px] font-bold text-[#024637] w-[90%]">
            <div>Room Size:</div>
            <div className="my-2 w-[300px] mx-2 border-[1px] border-[#024637] rounded-[5px] bg-purple-700 h-[40px] ">
              <input
                placeholder="60 m"
                className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
              />
            </div>
          </div>
          {/* ROOM SIZE */}

          {/* BED SIZE */}
          <div className="flex justify-between items-center px-2 text-[15px] font-bold text-[#024637] w-[90%]">
            <div>Bed Size:</div>
            <div className="my-2 w-[300px] mx-2 border-[1px] border-[#024637] rounded-[5px] bg-purple-700 h-[40px] ">
              <input
                placeholder="2 kings"
                className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
              />
            </div>
          </div>
          {/* BED SIZE */}

          {/* AMOUNT */}
          <div className="flex justify-between items-center px-2 text-[15px] font-bold text-[#024637] w-[90%]">
            <div>Amount: </div>
            <div className="my-2 w-[300px] mx-2 border-[1px] border-[#024637] rounded-[5px] bg-purple-700 h-[40px] ">
              <input
                placeholder="₦20,000.00"
                className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
              />
            </div>
          </div>
          {/* AMOUNT */}

          {/* DESCRIPTION */}
          <div className="flex justify-between items-center px-2 text-[15px] font-bold text-[#024637] w-[90%]">
            Description:
            <div className="my-2 w-[300px] mx-2 border-[1px] border-[#024637] rounded-[5px] bg-purple-700 h-[60px] ">
              <textarea
                placeholder=""
                className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px] resize-none pt-2"
              />
            </div>
          </div>
          {/* DESCRIPTION */}
        </div>
        {/* INPUTS SETUP */}
      </div>
     {/* MAIN */}
    </div>
  );
};

export default CreateRoom;
