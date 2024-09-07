import { useEffect } from "react";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlatform } from "../../Redux/PlatForm/PlatformSlice";
const Platform = () => {
  const { Platforms } = useSelector((state) => state.Platform);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlatform());
  }, []);
  return (
    <div className="w-full h-[557px] flex sm:flex-row flex-col justify-center items-center sm:py-[64px] sm:px-[100px] bg-[rgb(23,23,23)] sm:gap-x-8 gap-y-24">
      <div className="sm:w-[40%] w-[50%] sm:h-full h-[10%] mt-5 sm:mt-0">
        <img
          className="w-full"
          src="https://th.bing.com/th/id/OIP.IwGaPfykK8SiD5ax36W6tgHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain"
          alt="filimo-platform"
        />
      </div>
      <div className="flex flex-col justify-end items-end w-[90%] sm:w-[40%] h-full mt-5 sm:mt-0">
        <div className="flex flex-col justify-start items-end h-full w-full gap-y-3">
          <h1 className="sm:text-[16px] lg:text-[26px] text-[#ffff] font-bold">
            تماشای فیلیمو با همه دستگاه‌ها
          </h1>
          <p className="sm:text-[12px] text-[#ffff] lg:text-[15px]">
            می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل،
            تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
          </p>
          <div className="flex flex-col w-full justify-end items-end sm:gap-y-0 sm:mt-2  lg:gap-y-3">
            {Platforms?.map((elem) => {
              return (
                <div className="flex flex-row justify-start items-center sm:mt-2 lg:mt-4 gap-x-3">
                  <div className="flex flex-col justify-center items-end gap-y-2">
                    <h3 className="text-[#ffff] sm:text-[12px]  lg:text-[17px] font-bold ">
                      {elem.title}
                    </h3>
                    <span className="text-[#999] sm:text-[9px] lg:text-[11px]">
                      {elem.types?.map((item) => {
                        return <span>{item.name}-</span>;
                      })}
                    </span>
                  </div>
                  <img src={elem.icon} />
                </div>
              );
            })}
          </div>

          <button className="w-[138px] h-[39px] px-[10px] py-[16px] bg-green-500 rounded-lg flex justify-center items-center text-white mt-3 font-bold gap-x-1">
            خرید اشتراک و تماشا
            <MdOutlineSmartDisplay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Platform;
