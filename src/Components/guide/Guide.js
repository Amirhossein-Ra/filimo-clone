import { FaAndroid, FaTv } from "react-icons/fa";

const Guide = () => {
  return (
    <div className="w-full sm:h-[450px] h-[550px] bg-black py-[60px] flex justify-center items-center">
      <div className="w-[90%] flex flex-col sm:flex-row justify-between items-center">
        <div className="sm:w-[40%] w-[60%]">
          <img src="https://th.bing.com/th/id/R.2824a601d23b171ec97d361558ed5b20?rik=a64sL5oXUct8bA&pid=ImgRaw&r=0" />
        </div>
        <div className="w-[90%] sm:w-[45%] flex flex-col sm:justify-end sm:items-end justify-center items-center sm:gap-y-3 gap-y-4">
          <h1 className="text-white text-[18px] sm:text-[23px] font-bold">
            چطور با تلویزیون، فیلیمو تماشا کنم؟
          </h1>
          <p className="text-white text-[11px] sm::text-[16px] font-bold w-[90%]">
            ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را
            فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید
            از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار
            است را انتخاب کنید.
          </p>
          <div className="flex flex-row w-full justify-end items-end gap-x-3">
            <div className="flex flex-col justify-end items-end mt-4 gap-y-3">
              <h1 className="text-[#ffff] text-[17px] font-bold ">تلویزیون</h1>
              <span className="text-[#999] text-[14px]">
                Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV
                devices - Samsung
              </span>
            </div>
            <FaTv size={45} color="white" />
          </div>
          <div className="flex flex-row w-full justify-end items-end gap-x-3">
            <div className="flex flex-col justify-end items-end mt-1 gap-y-1 sm:mt-4 sm:gap-y-3">
              <h1 className="text-[#ffff] text-[17px] font-bold ">
                اندروید تی‌وی
              </h1>
              <span className="text-[#999] text-[11px]">
                NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic
                - humax - matricom
              </span>
            </div>
            <FaAndroid color="white" size={45} />
          </div>
          <button className="w-[250px] h-[39px] py-[10px] px-[16px] bg-[#9999] text-white rounded-xl font-bold mt-4">
            ویدیو های آموزشی تماشا باتلویزیون
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
