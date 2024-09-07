import { Link } from "react-router-dom";

const Manage = () => {
  return (
    <div className="w-full h-[100vh] manage flex flex-row justify-between items-center flex-wrap gap-y-6 ">
      <div className="slider w-[40%] h-[100px] bg-yellow-600 flex justify-center items-center">
        <Link to="/Slider" className="text-white">
          Slider Crud
        </Link>
      </div>
      <div className="slider w-[40%] h-[100px] bg-yellow-600 flex justify-center items-center">
        <Link to="/Movies" className="text-white">
          Movies Crud
        </Link>
      </div>
    </div>
  );
};

export default Manage;
