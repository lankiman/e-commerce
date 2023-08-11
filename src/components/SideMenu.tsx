import icon_close from "../assets/icon-close.svg";
import NavList from "./NavList";

interface Props {
  navStat: () => void;
}

const SideMenu = ({ navStat }: Props) => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        <button className="w-fit" onClick={navStat}>
          <img src={icon_close} alt="" />
        </button>
        <NavList />
      </div>
    </div>
  );
};

export default SideMenu;
