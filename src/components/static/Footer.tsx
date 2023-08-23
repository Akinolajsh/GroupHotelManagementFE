import logoPix from "../../assets/react.svg";
const Footer = () => {
  return (
    <div className="bg-green-800 h-[400px] w-[w-full] flex justify-center items-center">
      {/* MAIN */}
      <div className="w-[90%] h-[70%] flex justify-between">
        {/* first */}
        <div className="flex flex-col justify-between items-center bg-slate-500 w-[500px]">
          <div className="uppercase flex justify-center items-center text-white text-[20px] bg-black">
            <img src={logoPix} className="mr-2" /> moon safari
          </div>
          <div className="text-[15px]">
            Moon Safari offers its guests and residences many services including
            a butler on every floor, baby-sitting and concierges, as well as a
            meeting room and a conference room.
            <br />
            Designed by architectural mastermind John Doe, Moon Safari is where
            style, space and architectural designs create the perfect hotel
            lifestyle.
          </div>
        </div>
        {/* first */}

        {/* second */}
        <div></div>
        {/* second */}

        {/* third */}
        <div></div>
        {/* third */}
      </div>
      {/* MAIN */}
    </div>
  );
};

export default Footer;
