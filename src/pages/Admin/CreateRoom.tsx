const CreateRoom = () => {
  return (
    <div className="w-full h-[650px] bg-[#024637] flex justify-center items-center">
      <div
        className="h-[630px] w-[500px] bg-white rounded"
        style={{
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
        <div className="h-[50%] flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col">
            <img src="" />
            <label
              className="w-[120px] h-[30px] hover:bg-green-400 rounded-[5px] flex justify-center items-center text-[15px] font-[700] hover:text-white hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all border-[1px] border-[green] text-[#024637]" 
              htmlFor="image"
            >
              Upload Room
            </label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
