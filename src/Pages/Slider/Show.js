import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Delete from "./delete";

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState([]);
  const fetchSlider = async () => {
    const res = await axios.get(
      `https://661150b095fdb62f24eceae1.mockapi.io/Slider/${id}`
    );
    setShow(res.data);
  };
  useEffect(() => {
    fetchSlider();
  }, []);

  return (
    <div className="w-full justify-center items-center flex flex-col bg-[#2b2b2b] p-10">
      <div className="w-1/2 ">
        <img className="w-full" src={show.image} alt={show.alt} />
      </div>
      <div className="w-1/2 mt-5 flex flex-row justify-between">
        <Link
          to={`/Slider/edit/${show.id}`}
          className="bg-yellow-600 p-4 rounded-md"
        >
          Edit
        </Link>
        <Delete id={id} />
      </div>
    </div>
  );
};

export default Show;
