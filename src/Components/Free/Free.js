import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFree } from "../../Redux/Free/FreeSlice";
import SwiperFree from "./Swiper";

const Free = () => {
  const dispatch = useDispatch();
  const { FreeMovies } = useSelector((state) => state.Free);
  useEffect(() => {
    dispatch(fetchFree());
  }, []);
  return (
    <div className="w-full h-[420px]  bg-[rgb(23,23,23)] flex justify-center items-center ">
      <div className="w-full h-full px-[50px] flex flex-col justify-center items-end gap-y-6">
        <h1 className="text-white text-[23px] font-bold">فیلم های رایگان</h1>
        <div style={{ direction: "rtl" }} className="w-[90%]  flex flex-row">
          <SwiperFree FreeMovies={FreeMovies} />
        </div>
      </div>
    </div>
  );
};

export default Free;
