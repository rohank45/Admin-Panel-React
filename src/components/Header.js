import React from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import Header2 from "./Header2";

const Header = () => {
  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center py-10 mx-auto h-48 font-nunito">
        <div className="card shadow-2xl lg:card-side w-80 border bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="card-body">
            <p className="text-3xl capitalize">Total Revenue</p>
            <div className="flex items-center gap-5 py-3">
              <span className="text-2xl font-bold">$2,415</span>
              <div className="flex">
                <span>-11.4</span>
                <BsArrowDown className="text-red-600 text-xl" />
              </div>
            </div>
            <span className="text-gray-500 text-sm lowercase">
              Compared to last month
            </span>
          </div>
        </div>

        <div className="card shadow-2xl lg:card-side w-80 border bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="card-body">
            <p className="text-3xl capitalize">Total Sales</p>
            <div className="flex items-center gap-5 py-3">
              <span className="text-2xl font-bold">$4,415</span>
              <div className="flex">
                <span>-1.4</span>
                <BsArrowDown className="text-red-600 text-xl" />
              </div>
            </div>
            <span className="text-gray-500 text-sm lowercase">
              Compared to last month
            </span>
          </div>
        </div>

        <div className="card shadow-2xl lg:card-side w-80 border bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="card-body">
            <p className="text-3xl capitalize">Total Cost</p>
            <div className="flex items-center gap-5 py-3">
              <span className="text-2xl font-bold">$2,225</span>
              <div className="flex">
                <span>+2.4</span>
                <BsArrowUp className="text-green-600 text-xl" />
              </div>
            </div>
            <span className="text-gray-500 text-sm lowercase">
              Compared to last month
            </span>
          </div>
        </div>
      </div>

      <Header2 />
    </>
  );
};

export default Header;
