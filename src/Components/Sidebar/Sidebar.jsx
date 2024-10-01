import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { FcAutomotive } from "react-icons/fc";
import { MdSportsBaseball } from "react-icons/md";
import { AiFillEnvironment } from "react-icons/ai";
import { MdBiotech } from "react-icons/md";
import { LuMusic4 } from "react-icons/lu";
import { FaBloggerB } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import "./Sidebar.css";
const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className=" flex flex-col px-1 -mt-3 text-xl cursor-pointer">
        <div
          className="sidebar-parent flex items-center px-2 py-2 space-x-1 cusor-pointer sub "
          onClick={() => setCategory(0)}
        >
          <IoHomeOutline
            className={`${category === 0 ? "active" : "inactive"}`}
          />
          <p className="font-bold">Home</p>
        </div>
        <div
          className="sidebar-parent flex items-center px-2 py-2 ml-0 space-x-1"
          onClick={() => setCategory(20)}
        >
          <IoGameController
            className={`${category === 20 ? "active" : "inactive"}`}
          />
          <p className="font-bold">Gaming</p>
        </div>
        <div
          className="sidebar-parent flex items-center  px-2 py-2 ml-0 space-x-1"
          onClick={() => setCategory(2)}
        >
          <FcAutomotive
            className={`${category === 2 ? "active" : "inactive"}`}
          />
          <p className="font-bold">Automobiles</p>
        </div>
        <div
          className="sidebar-parent flex items-center  px-2 py-2 ml-0 space-x-1"
          onClick={() => setCategory(17)}
        >
          <MdSportsBaseball
            className={`${category === 17 ? "active" : "inactive"}`}
          />
          <p className="font-bold">Sports</p>
        </div>
        <div
          className="sidebar-parent flex items-center  px-2 py-2 ml-0 space-x-1"
          onClick={() => setCategory(24)}
        >
          <AiFillEnvironment
            className={`${category === 24 ? "active" : "inactive"}`}
          />
          <p className="font-bold">Entertainment</p>
        </div>
        <div
          className="sidebar-parent flex items-center  px-2 py-2 ml-0 space-x-1"
          onClick={() => setCategory(28)}
        >
          <MdBiotech className={`${category === 28 ? "active" : "inactive"}`} />
          <p className="font-bold">Technology</p>
        </div>
        <div
          className="sidebar-parent flex items-center  px-2 py-2 ml-0 space-x-1"
          onClick={() => setCategory(10)}
        >
          <LuMusic4 className={`${category === 10 ? "active" : "inactive"}`} />
          <p className="font-bold">Music</p>
        </div>
        <div
          className="sidebar-parent flex items-center  px-2 py-2 ml-0 space-x-1"
          onClick={() => setCategory(22)}
        >
          <FaBloggerB
            className={`${category === 22 ? "active" : "inactive"}`}
          />
          <p className="font-bold">Blogs</p>
        </div>
        <div
          className="sidebar-parent flex items-center  px-2 py-2 ml-0 space-x-1"
          onClick={() => setCategory(25)}
        >
          <TiNews className={`${category === 25 ? "active" : "inactive"}`} />
          <p className="font-bold">News</p>
        </div>
        <div>
          <hr className="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
