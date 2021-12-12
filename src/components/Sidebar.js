import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import { FiMail, FiSearch } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { VscFeedback, VscReport } from "react-icons/vsc";
import { GrMoney } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { IoAnalyticsOutline, IoSettingsOutline } from "react-icons/io5";
import NewJoinTable from "./NewJoinTable";
import LatestTransaction from "./LatestTransaction";
import TotalUsers from "./TotalUsers";

const Sidebar = () => {
  return (
    <div className="flex mobile:flex-col font-nunito">
      <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Dashboard
        </h2>

        <div className="relative mt-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch />
          </span>

          <input
            type="text"
            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Search"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <Link
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
              to="#"
            >
              <MdOutlineSpaceDashboard />

              <span className="mx-4 font-medium">Home</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <AiOutlineUser />

              <span className="mx-4 font-medium">Accounts</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <IoAnalyticsOutline />
              <span className="mx-4 font-medium">Analytics</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <SiSimpleanalytics />

              <span className="mx-4 font-medium">Sales</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <IoSettingsOutline />

              <span className="mx-4 font-medium">Settings</span>
            </Link>

            <hr className="my-3 border-gray-200 dark:border-gray-600" />

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <AiOutlineShop />

              <span className="mx-4 font-medium">Products</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <GrMoney />

              <span className="mx-4 font-medium">Transactions</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <VscReport />

              <span className="mx-4 font-medium">Reports</span>
            </Link>

            <hr className="my-3 border-gray-200 dark:border-gray-600" />

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <FiMail />

              <span className="mx-4 font-medium">Mails</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <VscFeedback />

              <span className="mx-4 font-medium">Feedback</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <TiMessages />

              <span className="mx-4 font-medium">Messages</span>
            </Link>
          </nav>

          <hr className="my-3 border-gray-200 dark:border-gray-600" />

          <div className="flex items-center px-4 -mx-2">
            <img
              className="object-cover mx-2 rounded-full h-9 w-9"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
              Admin Rohan k
            </h4>
          </div>
        </div>
      </div>

      <div className="mobile:flex-col gap-10 m-auto">
        <Header />

        <div className="flex justify-center gap-10 mobile:flex-col mx-auto mt-36 mb-10">
          <NewJoinTable />
          <LatestTransaction />
        </div>

        <TotalUsers />
      </div>
    </div>
  );
};

export default Sidebar;
