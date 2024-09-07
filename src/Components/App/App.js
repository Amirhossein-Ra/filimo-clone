import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "../Menu/Menu";
import Home from "../../Pages/Home/Home";
import Manage from "../../Pages/Mange";
import RootSlider from "../../Pages/Slider/RootSlide";
import RootMovies from "../../Pages/Movies/RootMovies";
import Login from "../../Pages/Login/Login";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.Login.isAuthenticated);

  return (
    <div className="App w-full h-auto bg-[#2b2b2b]">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/manage"
            element={isAuthenticated ? <Manage /> : <Navigate to="/" />}
          ></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Slider/*" element={<RootSlider />}></Route>
          <Route path="/Movies/*" element={<RootMovies />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
