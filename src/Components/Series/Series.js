/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";

import Series1 from "./Series1/Series1";
import Series2 from "./Series2/Series2";

const Series = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="w-full h-[830px] flex flex-col justify-center items-end">
      <div className="w-full px-[14%] flex justify-end items-center sm:gap-x-1 gap-x-3">
        <div className=" bg-black text-white flex flex-row justify-around items-center sm:w-[20%] w-[30%] py-1 rounded-3xl">
          <button
            onClick={() => setIsActive(false)}
            className={
              isActive
                ? "w-[45%] rounded-2xl flex justify-center items-center bg-inherit"
                : "w-[45%] rounded-2xl flex justify-center items-center bg-[#9999]"
            }
          >
            فیلم
          </button>
          <button
            onClick={() => setIsActive(true)}
            className={
              isActive
                ? "w-[45%] rounded-2xl flex justify-center items-center bg-[#9999]"
                : "w-[45%] rounded-2xl flex justify-center items-center bg-inherit"
            }
          >
            سریال
          </button>
        </div>
        <h1 className="text-[#ffff] text-[17px] sm:text-[23px] font-bold ">
          محبوب ترین های فیلیمو
        </h1>
      </div>

      {isActive ? <Series1 /> : <Series2 />}
    </div>
  );
};

export default Series;
