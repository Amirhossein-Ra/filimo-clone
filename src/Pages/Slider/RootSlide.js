import { Route, Routes } from "react-router-dom";
import Slider from "./Slider";
import Show from "./Show";
import Delete from "./delete";
import Create from "./Create";
import Edit from "./Edit";

const RootSlider = () => {
  return (
    <Routes>
      <Route path="/" element={<Slider />}></Route>
      <Route path="/:id" element={<Show />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
    </Routes>
  );
};

export default RootSlider;
