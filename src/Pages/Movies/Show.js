import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Delete from "./delete";

const Show = () => {
  const [show, setShow] = useState([]);
  const { id } = useParams();
  const fetchMovie = async () => {
    const res = await axios.get(
      `https://661150b095fdb62f24eceae1.mockapi.io/Movies/${id}`
    );
    setShow(res.data);
  };
  useEffect(() => {
    fetchMovie();
    console.log(show);
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 flex flex-col justify-center items-center gap-y-10 mt-[100px]">
        <div className="w-1/2 ">
          <img className="w-full" src={show.image} />
        </div>
        <h1 className="text-white font-bold ">{show.title}</h1>
        <h1 className="text-white font-bold ">{show.diractor}:کارگردان</h1>
        <h1 className="text-white font-bold ">{show.gener}</h1>
        <div className="flex flex-row justify-center items-center gap-x-3">
          <Link
            to={`/Movies/edit/${show.id}`}
            className="w-[100px] p-2 rounded-lg bg-yellow-600 flex justify-center items-center"
          >
            Edit
          </Link>
          <Delete id={show.id} />
        </div>
      </div>
    </div>
  );
};

export default Show;
