import { Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import Show from "./Show";
import Create from "./create";
import Edit from "./Edit";

const RootMovies = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />}></Route>
      <Route path="/:id" element={<Show />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
    </Routes>
  );
};

export default RootMovies;
