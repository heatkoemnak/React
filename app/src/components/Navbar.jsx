import logo from "../asset/anti_logo.png";
import "../App.css";
import "../../src/";
import Menu from "./Menu";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

function Navbar() {
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
          <ul className="hidden md:flex font-smaller items-center space-x-4 text-black cursor-pointer ">
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
            <Menu />
          </ul>
        </div>
      </div>
      {/* <div className="flex  items-center w-3/6 space-x-2 text-black cursor-pointer w-first-line:4/5">
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
      </div> */}

      <div class="flex items-center w-3/6 ">
        <label
          for="search-dropdown"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <Dropdown label="All Categories" className="bg-black w-20">
          <Dropdown.Item className="text-gray-500">Dashboard</Dropdown.Item>
          <Dropdown.Item className="text-gray-500">Settings</Dropdown.Item>
          <Dropdown.Item className="text-gray-500">Earnings</Dropdown.Item>
          <Dropdown.Item className="text-gray-500">Sign out</Dropdown.Item>
        </Dropdown>

        <div class="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos, Design Templates..."
            required
          />
          <button
            type="submit"
            class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-3 text-black cursor-pointer ">
        <Link className="flex mx-2 hover:text-green-300" to="/sell">
          <svg
            className="w-4 h-4 text-orange-400 dark:text-white"
            ariaHidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
          </svg>
          Sell
        </Link>
        <Link className="hover:text-green-300" to="/shop">
          Shop
        </Link>
        <Link className="hover:text-green-300" to="/cart">
          Cart
        </Link>

        <Link className="hover:text-green-300" to="/signup">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-100/50 dark:shadow-lg dark:shadow-lime-100/80 font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
