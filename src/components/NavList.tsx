const NavList = () => {
  return (
    <div>
      <ul className="flex text-xl cursor-pointer text-vDarkBlue md:text-dGrayishBlue  font-bold flex-col gap-6 md:gap-10 md:flex-row md:justify-evenly md:text-sm md:font-normal">
        <li className="group w-full relative">
          <p className="hover:text-vDarkBlue">Collections</p>
          <hr className="hidden  group-hover:md:block animate__animated animate__pulse absolute mt-11 w-full border-2 border-Orange  " />
        </li>
        <li className="group w-full relative">
          <p className="hover:text-vDarkBlue">Men</p>
          <hr className="hidden group-hover:md:block animate__animated animate__pulse absolute mt-11 w-full border-2 border-Orange  " />
        </li>
        <li className="group w-full relative">
          <p className="hover:text-vDarkBlue">Women</p>
          <hr className="hidden group-hover:md:block animate__animated animate__pulse absolute mt-11 w-full border-2 border-Orange  " />
        </li>
        <li className="group w-full relative">
          <p className="hover:text-vDarkBlue">About</p>
          <hr className="hidden group-hover:md:block animate__animated animate__pulse absolute mt-11 w-full border-2 border-Orange  " />
        </li>
        <li className="group w-full relative">
          <p className="hover:text-vDarkBlue">Contact</p>
          <hr className="hidden group-hover:md:block animate__animated animate__pulse absolute mt-11 w-full border-2 border-Orange  " />
        </li>
      </ul>
    </div>
  );
};

export default NavList;
