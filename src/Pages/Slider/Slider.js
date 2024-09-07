import { useDispatch, useSelector } from "react-redux";
import { fetchSlide } from "../../Redux/Slider/SliderSlice";
import { useEffect } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const Slider = () => {
  const { Slides } = useSelector((state) => state.Slider);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlide());
  }, []);
  return (
    <div className="w-full h-full bg-[#2b2b2b] flex flex-col gap-y-4">
      <Link
        to="/Slider/create"
        className="w-[5%] flex justify-center items-center text-white bg-yellow-600 p-2 rounded-sm mt-[50px] z-[500]"
      >
        Create
      </Link>
      <div className="w-full h-full flex flex-row justify-between items-center flex-wrap ">
        {Slides?.map((elem) => {
          return <Item data={elem} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
