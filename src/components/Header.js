import { SearchIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Header = () => {
  const [dropDownVisible, setDropDownVisible] = useState(false);

  return (
    <div className="h-12 bg-gray-50 flex items-center justify-between">
      <div className="mx-5 h-full flex items-center space-x-1 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          viewBox="-25.65 -42.75 222.3 256.5"
        >
          <g transform="translate(-85.4 -85.4)">
            <circle r="85.5" cy="170.9" cx="170.9" fill="#ff4500" />
            <path
              d="M227.9 170.9c0-6.9-5.6-12.5-12.5-12.5-3.4 0-6.4 1.3-8.6 3.5-8.5-6.1-20.3-10.1-33.3-10.6l5.7-26.7 18.5 3.9c.2 4.7 4.1 8.5 8.9 8.5 4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9c-3.5 0-6.5 2-7.9 5l-20.7-4.4c-.6-.1-1.2 0-1.7.3s-.8.8-1 1.4l-6.3 29.8c-13.3.4-25.2 4.3-33.8 10.6-2.2-2.1-5.3-3.5-8.6-3.5-6.9 0-12.5 5.6-12.5 12.5 0 5.1 3 9.4 7.4 11.4-.2 1.2-.3 2.5-.3 3.8 0 19.2 22.3 34.7 49.9 34.7 27.6 0 49.9-15.5 49.9-34.7 0-1.3-.1-2.5-.3-3.7 4.1-2 7.2-6.4 7.2-11.5zm-85.5 8.9c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-4 8.9-8.9 8.9-8.9-4-8.9-8.9zm49.7 23.5c-6.1 6.1-17.7 6.5-21.1 6.5-3.4 0-15.1-.5-21.1-6.5-.9-.9-.9-2.4 0-3.3.9-.9 2.4-.9 3.3 0 3.8 3.8 12 5.2 17.9 5.2 5.9 0 14-1.4 17.9-5.2.9-.9 2.4-.9 3.3 0 .7 1 .7 2.4-.2 3.3zm-1.6-14.6c-4.9 0-8.9-4-8.9-8.9s4-8.9 8.9-8.9 8.9 4 8.9 8.9-4 8.9-8.9 8.9z"
              fill="#fff"
            />
          </g>
        </svg>
        <div className="hidden md:inline">
          <svg
            viewBox="0 0 57 18"
            xmlns="http://www.w3.org/2000/svg"
            height="15"
          >
            <g fill="#1c1c1c">
              <path d="M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"></path>
              <circle fill="#FF4500" cx="47.26" cy="3.44" r="2.12"></circle>
              <path d="M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"></path>
              <path d="M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
              <path d="M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
              <path d="M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"></path>
              <path d="M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className=" flex items-center  border  rounded-sm relative bg-gray-100 flex-grow max-w-3xl ">
        <SearchIcon className="pl-4 h-7 text-gray-400 absolute" />
        <input
          className="flex flex-grow bg-gray-100 p-2 text-gray-700 pl-20 hover:bg-white focus:bg-white "
          placeholder="Search Reddit"
          type="text"
        />
      </div>
      <div className="flex space-x-3 p-4">
        <button className="btn hover:bg-blue-50 text-blue-500 border-blue-500">
          Log In
        </button>
        <button className="btn bg-blue-500 text-white  hover:bg-blue-400">
          Sign Up
        </button>
        <div
          onClick={() => {
            setDropDownVisible(!dropDownVisible);
          }}
          className="px-2 rounded-sm md:px-4 flex items-center text-gray-400 border border-gray-50 hover:border-gray-300 transition-all cursor-pointer"
        >
          <UserIcon className="h-5" />
          <ChevronDownIcon className="h-4 -ml-1" />
        </div>
      </div>
      <div
        className={`flex right-0   ${
          dropDownVisible
            ? "top-9 opacity-1"
            : "w-0 opacity-0 overflow-hidden top-14"
        } absolute  flex-col bg-gray-50 text-sm font-medium select-none duration-200 z-50`}
      >
        <h4 className="p-2 text-xs text-gray-400">VIEW OPTIONS</h4>
        <a className="link">Dark Mode</a>
        <h4 className="p-2 text-xs text-gray-400">MORE STUFF</h4>
        <a className="link">Coins</a>
        <a className="link">Premium</a>
        <a className="link">Powerups</a>
        <a className="link">Talk</a>
        <a className="link">Predictions</a>
        <a className="link">Help Center</a>
        <a className="link border-t">Log In / Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
