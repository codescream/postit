import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between py-5 px-10 h-fit">
      <Link to={"/"}>
        <img src="/imgs/logo.png" alt="logo" width={90} />
      </Link>
      <button className="cursor-pointer">Logout</button>
    </div>
  );
};

export default Header;
