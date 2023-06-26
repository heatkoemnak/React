import logo from "../asset/anti_logo.png";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className=" flex w-full justify-between shadow-lg shadow-gray-300/50 
      sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-4 2xl:px-14 2xl:py-2"
    >
      <div className="flex items-center w-2/6 space-x-4 text-black cursor-pointer">
        <div className="flex items-center space-x-4  ">
          <img src={logo} alt="" width={100} />
        </div>
        <div className="flex items-center space-x-4 w-1000  text-black cursor-pointer">
          <ul className="hidden md:flex items-center space-x-4 text-black cursor-pointer ">
            <Link className="hover:text-green-300" to="/">
              Home
            </Link>
            <Link className="hover:text-green-300" to="/contact">
              Contact
            </Link>
            <Link className="hover:text-green-300" to="/team">
              Team
            </Link>
            <Link className="hover:text-green-300" to="/about">
              About
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex items-center w-3/6 space-x-4 text-black cursor-pointer w-first-line:4/5">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-3xl text-sm focus:outline-none"
        />
        <button className="px-4 text-white bg-purple-600 rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div
        className="
        hidden md:flex items-center space-x-4 text-black cursor-pointer 
        "
      >
        <Link className="hover:text-green-300" to="/shop">
          Shop
        </Link>
        <Link className="hover:text-green-300" to="/cart">
          Cart
        </Link>
        <h2 className="hover:text-green-300">Sign In</h2>
      </div>
    </nav>
  );
}

export default Navbar;
