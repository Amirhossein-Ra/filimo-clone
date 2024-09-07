import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Loggin/LogginSlice";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 flex flex-col justify-center items-center"
      >
        <div className="w-full flex flex-col justify-center items-center gap-y-10">
          <div className="w-full flex flex-col">
            <label className="text-white">Email:</label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full"
            />
          </div>

          <div className="w-full flex flex-col">
            <label className="text-white">Password:</label>
            <div className="flex flex-row justify-center items-center gap-x-2">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full"
              />
            </div>
          </div>
          <button type="submit" className="w-[120px] py-2 bg-gray-400">
            {" "}
            ارسال{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
