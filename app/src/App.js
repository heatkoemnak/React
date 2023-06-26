import "./App.css";
import logo from "./asset/anti_logo.png";

function App() {
  return (
    <div className="App">
      <nav
        className=" flex w-full justify-between bg-green-100 shadow-lg shadow-gray-300/50 
      sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-4 2xl:px-14 2xl:py-2"
      >
        <div className="flex items-center w-2/6 space-x-4 text-black cursor-pointer">
          <div className="flex items-center space-x-4  ">
            <img src={logo} alt="" width={100} />
          </div>
          <div className="flex items-center space-x-4 w-1000  text-black cursor-pointer">
            <ul className="hidden md:flex items-center space-x-4 text-black cursor-pointer ">
              <li className="hover:text-green-300">Home</li>
              <li className="hover:text-green-300">Contact</li>
              <li className="hover:text-green-300">Team</li>
              <li className="hover:text-green-300">About</li>
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
          <h2 className="hidden md:flex items-center space-x-4 text-black cursor-pointer">
            Shop
          </h2>
          <div>Cart</div>
          <h2 className="hover:text-green-300">Sign In</h2>
        </div>
      </nav>
      <div class="flex justify-center">
        <div class="basis-2/4">Sell</div>
        <div class="basis-1/4">02</div>
        <div class="basis-1/4">03</div>
      </div>
      <div>
        <div class="flex items-center space-x-2 text-base">
          <h4 class="font-semibold text-slate-900">Contributors</h4>
          <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
            204
          </span>
        </div>
        <div class="mt-3 flex -space-x-2 overflow-hidden">
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="mt-3 text-sm font-medium">
          <a href="#" class="text-blue-500">
            + 198 others
          </a>
        </div>
      </div>
      <div class="py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex  sm:space-y-0 sm:space-x-6">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Woman's Face"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">Erin Lindford</p>
            <p class="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
