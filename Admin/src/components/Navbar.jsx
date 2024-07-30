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
      <ul className="mb-6">
        <Link to={"/"}>
          <li>
            <FaHome />
            Home
          </li>
        </Link>
        <Link to={"/profile"}>
          <li>
            <FaUser />
            Profile
          </li>
        </Link>
      </ul>

      <ul className="mb-6">
        <Link to={"/parcels"}>
          <li>
            <FaBox />
            Parcels
          </li>
        </Link>
        <Link to={"/users"}>
          <li>
            <FaUsers />
            Users
          </li>
        </Link>
        <Link to={"/orders"}>
          <li>
            <FaClipboardList />
            Orders
          </li>
        </Link>
      </ul>
      <ul className="mb-6">
        <Link to={"/elements"}>
          <li>
            <FaElementor />
            Elements
          </li>
        </Link>
        <Link to={"settings"}>
          <li>
            <IoMdSettings />
            Settings
          </li>
        </Link>
        <Link to={"/backups"}>
          <li>
            <FaHardDrive />
            Backups
          </li>
        </Link>
      </ul>
      <ul className="mb-6">
        <Link to={"/charts"}>
          <li>
            <FaChartBar />
            Charts
          </li>
        </Link>
        <Link to={"/logs"}>
          <li>
            <FaClipboard />
            All Logs
          </li>
        </Link>
        <Link to={"/calendar"}>
          <li>
            <FaCalendarAlt />
            Calendar
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
