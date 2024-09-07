import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = ({ NewSlider }) => {
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    setImage(NewSlider.image);
    setAlt(NewSlider.alt);
  }, []);
  const clickHandler = (e) => {
    e.preventDefault();
    const UpdateSlider = async () => {
      try {
        const res = await axios.put(
          `https://661150b095fdb62f24eceae1.mockapi.io/Slider/${NewSlider.id}`,
          {
            image,
            alt,
          }
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    UpdateSlider();
    Swal.fire({
      title: "Good job!",
      text: "You Update Your Slide",
      icon: "success",
    });
    Navigate("/Slider");
  };

  return (
    <div className="w-full h-full">
      <form
        onSubmit={(e) => {
          clickHandler(e);
        }}
        className="bg-[#2b2b2b] py-[100px]"
      >
        <div className="w-full flex flex-col justify-center items-center gap-y-10 ">
          <div className="w-full flex flex-col justify-center items-center ">
            <label className="text-white" htmlFor="text">
              Image:
            </label>
            <input
              className="w-[50%] border-black border-[2px] ml-2"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <label className="text-white" htmlFor="text">
              Alt:
            </label>
            <input
              className="w-[50%] border-black border-[2px] ml-2"
              type="text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
            />
          </div>
          <button
            className="text-white bg-yellow-600 p-4 rounded-md"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
