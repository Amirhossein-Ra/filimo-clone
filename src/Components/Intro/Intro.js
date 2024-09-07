import { FaCheck } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";
const Intro = () => {
  return (
    <div className="w-full h-full absolute top-0 z-50 flex flex-col justify-center items-center gap-y-5">
      <div className="flex flex-col space-y-3 justify-center items-center">
        <h4 className="text-[16px]  text-yellow-600 lg:text-[20px] font-bold">
          با فیلیمو بی‌وقفه فیلم ببین
        </h4>
        <h1 className="text-[#ffff] sm:text-[25px] font-bold lg:text-[35px]">
          کنترل همیشه دست توست
        </h1>
      </div>

      <div className="w-full flex flex-col space-y-3 justify-around items-center sm:flex-row sm:space-x-2 ">
        <h3 className=" font-bold text-[14px] text-[#ffff] lg:text-[20px]  opacity-75">
          می‌تونی یک عضو، مخصوص تماشای کودک بسازی
        </h3>
        <h3 className="text-[14px] text-[#ffff] lg:text-[20px] font-bold opacity-75">
          می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی
        </h3>
        <h3 className="text-[14px] text-[#ffff] lg:text-[20px] font-bold opacity-75">
          می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی
        </h3>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-y-3">
        <div className="h-[25px] w-[280px] flex flex-row justify-center items-center mt-3 mb-2 sm:mb-5 sm:mt-4">
          <button className="w-[50%] py-[12px] flex justify-center items-center gap-x-1 rounded-md bg-[#1cb561] text-[#ffff] text-[13px] sm:w-[80%] sm:py-[18px] sm:text-[18px]">
            خرید اشتراک و تماشا
            <FaCheck />
          </button>
        </div>
        <div className="flex flex-row justify-center items-center ">
          <span className="text-white flex flex-row justify-between items-center gap-x-2 ">
            تخفیف ویژه مشترکین جدید
            <FaGift className="text-white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
