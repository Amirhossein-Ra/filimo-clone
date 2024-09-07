import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../Redux/Movies/MoviesSlice";
import { Link } from "react-router-dom";

const Movies = () => {
  const { Movies } = useSelector((state) => state.Movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovie());
  }, []);
  return (
    <div className="w-full flex flex-col gap-y-4">
      <Link
        to="/Movies/create"
        className="w-[5%] text-white bg-green-400 p-3 rounded-md mt-[50px] z-[100] "
      >
        Create
      </Link>
      <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
        {Movies?.map((elem) => {
          return (
            <div
              key={elem.id}
              className="w-[40%] flex flex-col justify-center items-center gap-y-6 py-10"
            >
              <div className="w-[50%] flex justify-center items-center">
                <img className="w-1/2" src={elem.image} />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-4">
                <Link
                  to={`/Movies/${elem.id}`}
                  className="text-white font-bold "
                >
                  {elem.title}
                </Link>
                <h1 className="text-white font-bold ">
                  کارگردان : {elem.diractor}
                </h1>
                <h1 className="text-white font-bold ">{elem.gener}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
