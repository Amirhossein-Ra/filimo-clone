import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Update from "./Update";

const Edit = () => {
  const { id } = useParams();
  const [newMovie, setNewMovie] = useState([]);
  const fetchNewMovie = async () => {
    const res = await axios.get(
      `https://661150b095fdb62f24eceae1.mockapi.io/Movies/${id}`
    );
    setNewMovie(res.data);
  };
  useEffect(() => {
    fetchNewMovie();
  }, []);
  return (
    <div className="w-full h-full  ">
      {newMovie && <Update newMovie={newMovie} />}
    </div>
  );
};

export default Edit;
