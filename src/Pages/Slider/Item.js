import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <div className="w-[40%] mt-10" key={data.id}>
      <Link to={`/Slider/${data.id}`}>
        <img className="w-full" src={data.image} alt={data.alt} />
      </Link>
    </div>
  );
};

export default Item;
