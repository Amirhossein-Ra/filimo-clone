import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeries } from "../../../Redux/Series/SeriesSlice";

import SeriesImage from "./SeriesImage";
import SeriesInfo from "./SeriesInfo";

const Series1 = () => {
  const [active, setActive] = useState(1);
  const { Series } = useSelector((state) => state.Series);
  const [singleSeries, setSingleSeries] = useState({
    id: 1,
    poster:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTI4olQFFs1sjnxLKjUXGgeFNanPPmCFi_a_vJfVtECBxgVHz3o",
    posteralt: "oscar",
    title: "اسکار",
    dirctor: "مهران مدیری",
    gener: "رییلیتی شو",
    summary:
      "اسکار، محصول ویستا مدیا یک رئالیتی شوی چالش محور است که مهمانان آن همگی از بازیگران و  افراد مشهور هستند. در این رئالیتی...",
    ImageTitle:
      "https://static.cdn.asset.filimo.com/flmt/mov_logo_142032_381.png?width=400&quality=85&secret=rF6-vLzIh5uZAlpgNKSqOQ",
    episodes: [
      {
        image:
          "https://static.cdn.asset.filimo.com/flmt/mov_142033_72421.jpg?width=220&quality=85&secret=qJ5TcZ8YIuLdXpcKZuGaKA",
        title: "قسمت اول",
      },
      {
        image:
          "https://static.cdn.asset.filimo.com/flmt/mov_144017_72682.jpg?width=220&quality=85&secret=hUZ2xvBsI_3Bg_5a8Suv3A",
        title: "قسمت دوم",
      },
      {
        image:
          "https://static.cdn.asset.filimo.com/flmt/mov_144159_106140.jpg?width=220&quality=85&secret=K7x9mX-PXhbp3boWCn_Csg",
        title: "قسمت سوم",
      },
      {
        image:
          "https://static.cdn.asset.filimo.com/flmt/mov_144285_150730.jpg?width=220&quality=85&secret=t-TsevBdJv8AxH-T3houoA",
        title: "قسمت چهارم",
      },
    ],
  });

  const reversedSeries = [...Series].reverse();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSeries());
  }, []);
  const activeClicked = (id) => {
    setActive(id);
    const data = Series.find((task) => task.id === id);
    setSingleSeries(data);
  };

  const Episode = [...singleSeries.episodes].reverse();
  return (
    <div className="w-full flex flex-col justify-center items-end sm:mr-[50px]  mt-10 gap-y-6">
      <div className="w-[100%] flex flex-col items-end justify-center px-[10%] gap-x-6">
        <SeriesImage
          active={active}
          reversedSeries={reversedSeries}
          activeClicked={activeClicked}
        />
      </div>

      <div className="w-full h-auto flex justify-end items-center flex-col mt-8 sm:mt-0">
        <SeriesInfo Episode={Episode} singleSeries={singleSeries} />
      </div>
    </div>
  );
};

export default Series1;
