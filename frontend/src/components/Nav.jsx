import { Link } from "react-router-dom";
import Menu from "./Menu";

const Nav = () => {
  return (
    <div>
      <div className="h-20">
        {/* mobile */}
        <div className="h-full flex px-4 md:px-8 lg:px-16 items-center  justify-between md:gap-8 shadow-md ">
          <div className="">logo</div>
          <div className="md:hidden">
            <Menu />
          </div>

          {/* desktop */}
          <div className="hidden md:flex gap-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="hidden md:flex">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
