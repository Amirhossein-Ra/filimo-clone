import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Delete = ({ id }) => {
  const navigate = useNavigate();
  const onClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        axios.delete(
          `https://661150b095fdb62f24eceae1.mockapi.io/Slider/${id}`
        );
      } else {
      }
    });
    navigate("/Slider");
  };
  return (
    <div>
      <button onClick={onClick} className="bg-yellow-600 p-4 rounded-md">
        Delete
      </button>
    </div>
  );
};

export default Delete;
