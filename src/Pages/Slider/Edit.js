import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Update from "./Update";

const Edit = () => {
  const { id } = useParams();
  const [newSlider, setNewSlider] = useState([]);
  const fetchNewSlider = async () => {
    const res = await axios.get(
      `https://661150b095fdb62f24eceae1.mockapi.io/Slider/${id}`
    );
    setNewSlider(res.data);
  };
  useEffect(() => {
    fetchNewSlider();
  }, []);
  return (
    <div className="w-full h-full">
      {newSlider && <Update NewSlider={newSlider} />}
    </div>
  );
};

export default Edit;
