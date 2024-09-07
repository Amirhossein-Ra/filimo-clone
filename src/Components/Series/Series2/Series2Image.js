const Series2Image = ({ active, reversedSeries, activeClicked }) => {
  return (
    <div className="w-full h-auto flex justify-end items-center flex-row gap-x-2 sm:gap-x-[50px]">
      {reversedSeries?.map((elem) => {
        return (
          <div className="sm:h-auto w-[165px]  relative" key={elem.id}>
            <img
              onClick={() => activeClicked(elem.id)}
              alt={elem.posteralt}
              className={
                active === elem.id
                  ? "w-full rounded-md cursor-pointer brightness-50 hover:brightness-100 duration-300 border-[1px] border-white"
                  : "w-full rounded-md cursor-pointer brightness-50 hover:brightness-100 duration-300 "
              }
              src={elem.poster}
            />
            <div className="flex flex-row absolute top-[85%] left-[25%] gap-x-1">
              <img src="https://www.filimo.com/assets/web/ui/img-ugnSfCQdq1MdoMws3NbA/campaigns/welcome-new/exclusive-fa.svg" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Series2Image;
