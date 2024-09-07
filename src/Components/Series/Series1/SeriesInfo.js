import SwiperSeries from "../Swiper";
const SeriesInfo = ({ singleSeries, Episode }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-end items-end  gap-y-[50px]">
      <div className="w-[100%] px-[10%] flex flex-row justify-between items-start">
        <div className="w-[130px] sm:w-[220px] h-[10px] sm:h-[100px]">
          <img className="w-full" src={singleSeries.ImageTitle} />
        </div>
        <div className="w-[40%] gap-y-3 flex flex-col justify-center items-end sm:gap-y-7">
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
          <p className="text-[14px] w-full  line-clamp-2 sm:line-clamp-none text-white sm:text-[17px]">
            {singleSeries.summary}
          </p>
        </div>
      </div>
      <div className="w-[90%] h-auto">
        <SwiperSeries singleSeries={Episode} />
      </div>
    </div>
  );
};

export default SeriesInfo;
