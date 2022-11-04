import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex fixed left-0 z-10 right-0 top-0 justify-between items-center bg-white h-[70px]">
      <div className="ml-[64px]">
        <h1>LOGO</h1>
      </div>
      <div className="flex items-center h-full">
        <div className="mr-[40px] relative cursor-pointer">
          <IoNotifications className="text-gray text-[1.4rem]" />
          <div className="bg-primary text-white text-xs absolute -top-[0.3rem] -right-[0.3rem] w-4 h-4 flex items-center justify-center rounded-full">
            1
          </div>
        </div>
        <div className="flex items-center rounded-bl-[30px] pr-[60px] pl-[65px] bg-blue h-full">
          <p className="mr-[12px] text-white text-[]">Личный кабинет</p>
          <div className="h-[32px] w-[32px] bg-white rounded-full flex items-center justify-center">
            <FaUserAlt className="text-blue" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
