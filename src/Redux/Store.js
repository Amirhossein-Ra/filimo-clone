import { configureStore } from "@reduxjs/toolkit";
import SliderSlice from "./Slider/SliderSlice";
import SeriesSlice from "./Series/SeriesSlice";
import PlatformSlice from "./PlatForm/PlatformSlice";
import FreeSlice from "./Free/FreeSlice";
import MoviesSlice from "./Movies/MoviesSlice";
import AccordionSlice from "./Accordion/AccordionSlice";
import LogginSlice from "./Loggin/LogginSlice";
import SecondSeriesSlice from "./SecondSeries/SecondSeriesSlice";

const Store = configureStore({
  reducer: {
    Slider: SliderSlice,
    Series: SeriesSlice,
    Platform: PlatformSlice,
    Free: FreeSlice,
    Movies: MoviesSlice,
    Accordion: AccordionSlice,
    Login: LogginSlice,
    SecondSeries: SecondSeriesSlice,
  },
});

export default Store;
