import { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { RiTicketLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../Redux/Movies/MoviesSlice";
const ScrollBar = () => {
  const { Movies } = useSelector((state) => state.Movies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovie());
  }, []);
  return (
    <div className="w-full h-[700px] bg-gradient-to-b from-black to-[#481010] flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center py-[50px] gap-y-6">
        <div className="w-full flex justify-center items-center sm:mr-[80px]">
          <h1 className="w-full text-white text-[18px] sm:text-[24px] font-bold flex justify-center items-center">
            سینما آنلاین فیلیمو
          </h1>
        </div>
        <div className="w-full flex sm:flex-row flex-col sm:justify-around justify-center items-center gap-y-4">
          <div className="flex flex-row justify-center items-center gap-x-3 sm:gap-x-2">
            <h1 className="text-white font-bold  sm:text-[16px]">
              {" "}
              فیلم‌های روز سینمای ایران
            </h1>
            <span className="w-[20px] h-[20px] rounded-[50%] bg-green-400 text-green-700 flex justify-center items-center">
              <FaCheck />
            </span>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-3 sm:gap-x-2">
            <h1 className="text-white font-bold text-[16px]">
              {" "}
              ۸ ساعت زمان برای مشاهده فیلم در هر کجا
            </h1>
            <span className="w-[20px] h-[20px] rounded-[50%] bg-green-400 text-green-700 flex justify-center items-center">
              <FaCheck />
            </span>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-3 sm:gap-x-2">
            <h1 className="text-white font-bold text-[16px]">
              {" "}
              خرید یک بلیت برای تماشا همراه با همه خانواده
            </h1>
            <span className="w-[20px] h-[20px] rounded-[50%] bg-green-400 text-green-700 flex justify-center items-center">
              <FaCheck />
            </span>
          </div>
        </div>
        <div className="w-[75%] h-[450px] flex flex-col justify-start gap-y-3   sm:grid sm:grid-cols-2 sm:gap-y-10 sm:justify-center items-center overflow-y-scroll">
          {Movies?.map((elem) => {
            return (
              <div className="w-[90%] sm:h-[150px] lg:h-[250px] rounded-lg bg-[rgba(255,255,255,0.1)] flex flex-row justify-between items-start border-[1px] border-[rgba(255,255,255,0.4)]">
                <div className="w-[80px] h-6 rounded-xl bg-black flex flex-row justify-around items-center">
                  <span className="text-white text-[13px] font-bold">
                    اکران انلاین
                  </span>
                  <RiTicketLine className="text-white" />
                </div>
                <div className="w-[65%] h-[100%]  flex flex-row justify-around items-center gap-x-4">
                  <div className="w-1/2 h-[90%]  rounded-lg flex flex-col justify-evenly items-end ">
                    <h1 className="text-white font-bold sm:text-[12px] lg:text-[16px]">
                      {elem.title}
                    </h1>
                    <h4 className="text-gray-400 font-bold sm:text-[13px] lg:text-[16px]">
                      کارگردان: {elem.diractor}
                    </h4>
                    <span className="w-[40px] py-2 rounded-[40%] bg-[#00000033] text-white flex justify-center items-center sm:text-[10px] lg:text-[13px]">
                      {elem.gener}
                    </span>
                    <div className="w-[60px] sm:h-[30px]  lg:h-[40px] bg-inherit border-[1px] border-white text-white flex justify-center items-center rounded-md">
                      خرید بلیت
                    </div>
                  </div>
                  <div className="w-1/2 h-[90%]  ">
                    <img
                      className="w-full h-full rounded-lg"
                      src={elem.image}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollBar;
