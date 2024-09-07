const Animation = () => {
  return (
    <div className="w-full h-[400px] py-[50px] flex sm:flex-row flex-col justify-center items-center bg-gradient-to-bl to-black from-[#060633] sm:gap-x-[3%] gap-y-5">
      <div className="w-[90%] sm:w-1/3 flex flex-col justify-center sm:items-end items-center gap-y-4">
        <h1 className="w-[80%] text-white font-bold text-[23px]  flex justify-center items-end">
          دنیایی متنوع از فیلم و کارتون‌های کودکانه
        </h1>
        <p className="sm:w-full lg:w-[80%] text-gray-400 flex justify-center items-end">
          ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای
          امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به
          بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد
        </p>
        <div className="flex flex-row justify-center items-center gap-x-3">
          <button className="flex flex-row justify-center items-center bg-white text-black p-2  rounded-lg">
            فیلیمو کودک بساز
          </button>
          <button className="flex flex-row justify-center items-center bg-white text-black p-2 rounded-lg">
            تماشای فیلم کودک
          </button>
        </div>
      </div>
      <div className="sm:w-[26%] w-[41%]">
        <img
          className="w-full"
          src="https://th.bing.com/th/id/OIP.jaNwJaPdUZoqTRJ03tmWpgHaHa?rs=1&pid=ImgDetMain"
        />
      </div>
    </div>
  );
};

export default Animation;
