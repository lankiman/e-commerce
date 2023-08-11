import icon_menu from "../assets/icon-menu.svg";
import cart_icon from "../assets/icon-cart.svg";
import profile_image from "../assets/image-avatar.png";
import NavList from "./NavList";
import sneaker_logo from "../assets/logo.svg";

interface Props {
  navClick: () => void;
  cartClick: () => void;
  cartMenu: boolean;
  cartItemsCount: number;
}

const Navigation = ({
  navClick,
  cartClick,
  cartMenu,
  cartItemsCount
}: Props) => {
  return (
    <>
      <div className="p-4 flex gap-10 items-center justify-between w-screen">
        <div className="flex flex-row h-fit w-fit gap-4 items-baseline">
          <div>
            <button onClick={navClick}>
              <img className="md:hidden" src={icon_menu} alt="" />
            </button>
          </div>
          <div className="">
            <img src={sneaker_logo} alt="" />
          </div>
        </div>
        <main className=" items-center justify-between flex md:w-full">
          <div className="hidden md:flex">
            <NavList />
          </div>
          <div className="flex flex-row items-center gap-5 ">
            <div className="flex relative  items-center">
              <img
                onClick={cartClick}
                src={cart_icon}
                className={`h-5 cursor-pointer hover:brightness-50 ${
                  cartMenu ? "brightness-50" : ""
                } ${cartItemsCount ? "brightness-50" : ""}`}
                alt=""
              />
              <span
                className={`absolute mt-0.5 -right-1/2 -top-1/2 bg-Orange w-5 text-center text-GrayishBlue text-xs font-bold h-4 rounded-xl ${
                  cartItemsCount ? "" : "hidden"
                }`}
              >
                {cartItemsCount}
              </span>
            </div>
            <img
              src={profile_image}
              className="w-8 h-8 cursor-pointer md:h-12 md:w-12 hover:border-Orange hover:border-2 rounded-[50%]"
              alt=""
            />
          </div>
        </main>
      </div>
      <hr className="hidden w-screen mt-4 md:block" />
    </>
  );
};

export default Navigation;
