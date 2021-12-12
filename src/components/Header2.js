import React from "react";
import { BsArrowUp } from "react-icons/bs";

const Header2 = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center py-20 mx-auto h-48 font-nunito">
      <div className="card shadow-2xl lg:card-side w-80 border bg-gradient-to-r from-indigo-200 to-blue-100">
        <div className="card-body">
          <p className="text-3xl capitalize">Total Products</p>
          <div className="flex items-center gap-5 py-3">
            <span className="text-2xl font-bold">1,005</span>
            <div className="flex">
              <span>+24</span>
              <BsArrowUp className="text-green-600 text-xl" />
            </div>
          </div>
          <span className="text-gray-500 text-sm lowercase">
            Compared to last month
          </span>
        </div>
      </div>

      <div className="card shadow-2xl lg:card-side w-80 border bg-gradient-to-r from-green-200 to-green-100">
        <div className="card-body">
          <p className="text-3xl capitalize">Total Users</p>
          <div className="flex items-center gap-5 py-3">
            <span className="text-2xl font-bold">202</span>
            <div className="flex">
              <span>+2</span>
              <BsArrowUp className="text-green-600 text-xl" />
            </div>
          </div>
          <span className="text-gray-500 text-sm lowercase">
            Compared to last month
          </span>
        </div>
      </div>

      <div className="card shadow-2xl lg:card-side w-80 border bg-gradient-to-r from-red-200 to-red-100">
        <div className="card-body">
          <p className="text-3xl capitalize">Total Transactions</p>
          <div className="flex items-center gap-5 py-3">
            <span className="text-2xl font-bold">10</span>
            <div className="flex">
              <span>+2</span>
              <BsArrowUp className="text-green-600 text-xl" />
            </div>
          </div>
          <span className="text-gray-500 text-sm lowercase">
            Compared to last month
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header2;
