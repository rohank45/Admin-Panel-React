import React from "react";
import { BsBell } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content font-nunito">
        <div className="flex-1 hidden px-2 mx-2 lg:flex">
          <span className="text-lg font-bold cursor-pointer uppercase">
            Admin Panel
          </span>
        </div>
        <div className="flex-none">
          <button className="btn btn-square text-2xl">
            <BsBell />
          </button>
        </div>
        <div className="flex-none">
          <button className="btn btn-square text-2xl">
            <IoSettingsOutline />
          </button>
        </div>
        <div className="flex-none">
          <div className="avatar">
            <div className="rounded-full w-10 h-10 m-1 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="user picc"
              />
            </div>
          </div>
        </div>
      </div>

      <Sidebar />
    </>
  );
};

export default Navbar;
