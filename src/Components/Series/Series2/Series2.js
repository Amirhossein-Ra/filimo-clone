import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Series2Image from "./Series2Image";
import Series2Info from "./Series2Info";
import { fetchSecondSeries } from "../../../Redux/SecondSeries/SecondSeriesSlice";

const Series2 = () => {
  const [active, setActive] = useState(1);

  const { SecondSeries } = useSelector((state) => state.SecondSeries);
  const [singleSeries, setSingleSeries] = useState({
    id: 1,
    poster:
      "https://static.cdn.asset.filimo.com/flmt/mov_145103_152533.jpg?width=165&quality=85&secret=G95_wAj3uUVsDAveZMBp3w",
    posteralt: "fossil",
    title: "فسیل",
    dirctor: " کریم امینی",
    gener: " کمدی",
    summary:
      "فسیل داستان سه دوست را در پیش از انقلاب ایران روایت می‌کند که عضو یک گروه موسیقی‌ اند و برای کسب شهرت تلاش می‌کنند",
    ImageTitle:
      "https://static.cdn.asset.filimo.com/flmt/mov_logo_145103_558.png?width=400&quality=85&secret=u6x-SbXrQGbat02Zy2QAXw",
  });

  const reversedSeries = [...SecondSeries].reverse();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSecondSeries());
  }, []);
  const activeClicked = (id) => {
    setActive(id);
    const data = SecondSeries.find((task) => task.id === id);
    setSingleSeries(data);
  };

  return (
    <div className="w-full flex flex-col justify-start items-end sm:mr-[50px] mt-10 gap-y-9 ">
      <div className="w-[100%] flex flex-col items-end justify-center px-[10%] gap-y-6">
        <Series2Image
          active={active}
          reversedSeries={reversedSeries}
          activeClicked={activeClicked}
        />
      </div>

      <div className="w-full h-auto flex justify-end items-center flex-col mt-8 pb-[9.9%]">
        <Series2Info singleSeries={singleSeries} />
      </div>
    </div>
  );
};

export default Series2;
