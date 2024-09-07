import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const Create = () => {
  const [Image, setImage] = useState("");
  const [alt, setAlt] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const createPost = () => {
      try {
        fetch("https://661150b095fdb62f24eceae1.mockapi.io/Slider", {
          method: "POST",
          body: JSON.stringify({
            id: uuidv4(),
            image: Image,
            alt: alt,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        Swal.fire({
          title: "Good job!",
          text: "You Create A New Slide",
          icon: "success",
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    createPost();
    navigate("/Slider");
  };
  return (
    <div className="w-full h-[100vh]">
      <form onSubmit={handleSubmit} className="bg-[#2b2b2b] py-[100px]">
        <div className="w-full flex flex-col justify-center items-center gap-y-10 ">
          <div className="w-full flex flex-col justify-center items-center ">
            <label className="text-white" htmlFor="text">
              Image:
            </label>
            <input
              className="w-[50%] border-black border-[2px] ml-2"
              type="text"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <label className="text-white" htmlFor="text">
              Alt:
            </label>
            <input
              className="w-[50%] border-black border-[2px] ml-2"
              type="text"
              onChange={(e) => {
                setAlt(e.target.value);
              }}
            />
          </div>
          <button
            className="text-white bg-yellow-600 p-4 rounded-md"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
