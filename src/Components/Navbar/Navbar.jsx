import React from "react";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdVideoCall } from "react-icons/md";
import { TbFrame } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ setSidebar }) => {
  return (
    <div className="flex justify-between border-b-slate-700 solid rounded-lg px-2 mb-1">
      <div className="inline-flex items-center px-1 py-2 ">
        <div className="nav-hamburger cursor-pointer">
          <RxHamburgerMenu
            size={"24px"}
            onClick={() => setSidebar((prev) => (prev === true ? false : true))}
          />
        </div>
        <div className="nav-logo inline-flex items-center px-4 py-2 space-x-2">
          <Link to={"/"}>
            {" "}
            <img
              src="https://cdn.pixabay.com/photo/2021/09/11/18/21/youtube-6616310_1280.png"
              width="54px"
              alt=""
              className="youtube_logo"
            />
          </Link>

          <span className="youtube_text text-2xl text-red-500 font-bold">
            Youtube
          </span>
        </div>
      </div>

      <div className="search inline-flex items-center  py-2">
        {" "}
        <form className="flex items-center nav-middle">
          <FaSearch className="text-black logo_search" />
          <input
            type="search"
            placeholder="Search..."
            className="ml-0 rounded-md py-1 px-4 outline-none bg-slate-200"
          />
        </form>
      </div>
      <div className="nav-right flex items-center px-4 py-2 m-1 space-x-3 justify-between navbar-right">
        <MdVideoCall
          size={"20px"}
          className="menu_icon cursor-pointer text-gray-800"
        />
        <TbFrame
          size={"20px"}
          className="menu_icon cursor-pointer text-gray-800"
        />
        <IoMdNotifications
          size={"20px"}
          className="menu_icon cursor-pointer text-gray-800"
        />
        <FaUser
          size={"20px"}
          className="user_icon cursor-pointer text-gray-800"
        />
      </div>
    </div>
  );
};

export default Navbar;
