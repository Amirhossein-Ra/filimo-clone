import { MdOutlineSmartDisplay } from "react-icons/md";
const Series2Info = ({ singleSeries }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start  gap-y-[50px]">
      <div className="w-[100%] px-[10%] flex flex-row justify-between items-start">
        <div className="w-[140px] sm:w-[220px] h-[100px]">
          <img className="w-full" src={singleSeries.ImageTitle} />
        </div>
        <div className="w-[40%] gap-y-5 flex flex-col justify-center items-end sm:gap-y-7">
          <h1 className="text-[20px] text-[#ffff] sm:text-[23px] font-bold ">
            {singleSeries.title}
          </h1>
          <h3 className="text-[#A1A1A1] text-[14px] font-bold ">
            کارگردان: {singleSeries.dirctor}
          </h3>
          <div className="w-auto flex flex-row justify-center items-center">
            <span className="bg-[#575757]  w-[70px] flex justify-center items-center text-white rounded-xl">
              {singleSeries.gener}
            </span>
          </div>
          <p className="text-[13px] text-white line-clamp-2 sm:line-clamp-none sm:text-[17px]">
            {singleSeries.summary}
          </p>
          <button className="w-[90%] sm:w-[45%] bg-green-500 flex gap-x-2 justify-center items-center py-2 text-white">
            خرید اشتراک و تماشا
            <MdOutlineSmartDisplay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Series2Info;
