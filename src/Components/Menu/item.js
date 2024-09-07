const Item = ({ menu }) => {
  return (
    <ul className="w-full h-[100px] flex fex-row justify-center items-center ">
      {menu?.map((elem) => {
        return (
          <li key={menu.id} className="px-1 list-none sm::px-5 ">
            <a
              className="text-white hover:text-yellow-600 duration-300 cursor-pointer"
              href={elem.Link}
            >
              {elem.title}
            </a>
          </li>
        );
      })}
      <div className="logo sm:w-[30%] lg:w-[15%] border-l-[1px] px-2">
        <img
          src="https://www.filimo.com/assets/web/ui/img-ugnSfCQdq1MdoMws3NbA/filimo/fa-filimo-dark-logo.svg"
          alt=""
        />
      </div>
    </ul>
  );
};

export default Item;
