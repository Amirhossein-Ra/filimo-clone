import { FaCheck } from "react-icons/fa6";

const Ending = () => {
  return (
    <div className="w-full sm:h-[350px] sm:py-[100px] h-[410px] flex flex-col justify-center items-center bg-gradient-to-r from-[rgb(0,0,0)] to-[rgb(9,49,15)] sm:gap-y-[50px] gap-y-6">
      <div className="w-full text-white text-[66px] font-bold flex justify-center items-center">
        <h1>فیلیمو</h1>
      </div>
      <div className="w-full text-white text-[26px] font-bold flex sm:flex-row flex-col justify-center items-center gap-y-4">
        <div className="w-full flex flex-row justify-center items-center ">
          <p className="w-[50%] sm:w-[53%] text-[15px] sm:text-[16px]">
            هزاران فیلم و سریال خارجی (دوبله و زیرنویس)
          </p>
          <span className="w-[15px] h-[15px] rounded-[50%] bg-green-200 text-green-700 flex justify-center items-center text-[12px]">
            <FaCheck />
          </span>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <p className="w-[50%] sm:w-[53%] text-[15px] sm:text-[16px]">
            هزاران فیلم و سریال خارجی (دوبله و زیرنویس)
          </p>
          <span className="w-[15px] h-[15px] rounded-[50%] bg-green-200 text-green-700 flex justify-center items-center text-[12px]">
            <FaCheck />
          </span>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <p className="w-[50%] sm:w-[53%] text-[15px] sm:text-[16px]">
            هزاران فیلم و سریال خارجی (دوبله و زیرنویس)
          </p>
          <span className="w-[15px] h-[15px] rounded-[50%] bg-green-200 text-green-700 flex justify-center items-center text-[12px]">
            <FaCheck />
          </span>
        </div>
      </div>
      <div className="w-full text-white text-[26px] font-bold flex justify-center items-center">
        <button className="w-[25%] sm:w-[15%] text-[14px] sm:text-[20px] bg-[#1cb561] py-3 rounded-lg hover:bg-[rgb(28,102,61)] duration-300">
          خرید اشتراک و تماشا
        </button>
      </div>
    </div>
  );
};

export default Ending;
