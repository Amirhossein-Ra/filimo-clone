import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = ({ newMovie }) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [diractor, setDiractor] = useState("");
  const [gener, setGener] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    setImage(newMovie.image);
  }, []);
  const clickHandler = (e) => {
    e.preventDefault();
    const UpdateSlider = async () => {
      try {
        const res = await axios.put(
          `https://661150b095fdb62f24eceae1.mockapi.io/Movies/${newMovie.id}`,
          {
            image,
            title,
            diractor,
            gener,
          }
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    UpdateSlider();
    Swal.fire({
      title: "Good job!",
      text: "You Update Your Movie",
      icon: "success",
    });
    Navigate("/Movies");
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
              Title:
            </label>
            <input
              className="w-[50%] border-black border-[2px] ml-2"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <label className="text-white" htmlFor="text">
              Diractor:
            </label>
            <input
              className="w-[50%] border-black border-[2px] ml-2"
              type="text"
              value={diractor}
              onChange={(e) => setDiractor(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <label className="text-white" htmlFor="text">
              Gener:
            </label>
            <input
              className="w-[50%] border-black border-[2px] ml-2"
              type="text"
              value={gener}
              onChange={(e) => setGener(e.target.value)}
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
