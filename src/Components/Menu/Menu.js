import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./item";
import Login from "./Login/Login";
import { useSelector } from "react-redux";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const fetchMenu = async () => {
    const res = await axios.get("https://amirhossein-ra.github.io/Db/db.json");
    setMenu(res.data.menu);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  const ClickLink = () => {
    if (isAuthenticated === false) {
      alert("لطفا وارد شوید");
    }
  };
  const isAuthenticated = useSelector((state) => state.Login.isAuthenticated);
  return (
    <div className="w-full h-[50px] flex fex-row justify-around items-center bg-black fixed top-0 z-[200]">
      <div className="sm:w-1/3 w-full flex flex-row sm:justify-center justify-around items-center gap-x-3 ">
        <Link
          onClick={ClickLink}
          to="/manage"
          className="text-white bg-yellow-600 rounded-md p-2"
        >
          Manage
        </Link>
        <Link to="/" className="text-white bg-yellow-600 rounded-md p-2">
          Home
        </Link>
        {isAuthenticated ? (
          <div className="text-white bg-green-600 rounded-md sm:py-2 sm:px-2 sm:text-[14px] sm:p-0 lg:p-2  lg:px-5">
            شما وارد شدید
          </div>
        ) : (
          <Login />
        )}
      </div>
      <div className="sm:w-1/3  hidden sm:inline">
        <Item menu={menu} />
      </div>
    </div>
  );
};

export default Menu;
