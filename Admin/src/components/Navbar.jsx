import {
  FaHome,
  FaUser,
  FaBox,
  FaUsers,
  FaClipboardList,
  FaElementor,
  FaChartBar,
  FaClipboard,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaHardDrive } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex flex-col gap-2">
        <Link to={"/"} className="flex gap-1 items-center hover:text-white">
          <FaHome className="text-2xl" />
          <p className="hidden md:inline">Home</p>
        </Link>
        <Link to={"/profile"} className="flex gap-1 items-center hover:text-white">
          <FaUser className="text-2xl" />
          <p className="hidden md:inline">Profile</p>
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <Link to={"/parcels"} className="flex gap-1 items-center hover:text-white">
          <FaBox className="text-2xl" />
          <p className="hidden md:inline">Parcels</p>
        </Link>
        <Link to={"/users"} className="flex gap-1 items-center hover:text-white">
          <FaUsers className="text-2xl" />
          <p className="hidden md:inline">Users</p>
        </Link>
        <Link to={"/orders"} className="flex gap-1 items-center hover:text-white">
          <FaClipboardList className="text-2xl" />
          <p className="hidden md:inline">Orders</p>
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <Link to={"/elements"} className="flex gap-1 items-center hover:text-white">
            <FaElementor className="text-2xl"/>
            <p className="hidden md:inline">Elements</p>
        </Link>
        <Link to={"settings"} className="flex gap-1 items-center hover:text-white">
            <IoMdSettings className="text-2xl" />
            <p className="hidden md:inline">Settings</p>
        </Link>
        <Link to={"/backups"} className="flex gap-1 items-center hover:text-white">
            <FaHardDrive className="text-2xl" />
            <p className="hidden md:inline">Backups</p>
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <Link to={"/charts"} className="flex gap-1 items-center hover:text-white">
          <FaChartBar className="text-2xl" />
          <p className="hidden md:inline">Charts</p>
        </Link>
        <Link to={"/logs"} className="flex gap-1 items-center hover:text-white">
          <FaClipboard className="text-2xl" />
          <p className="hidden md:inline">All Logs</p>
        </Link>
        <Link to={"/calendar"} className="flex gap-1 items-center hover:text-white">
          <FaCalendarAlt className="text-2xl" />
          <p className="hidden md:inline">Calendar</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
