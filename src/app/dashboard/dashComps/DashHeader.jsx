import Link from "next/link";
import React from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa"; // Example user icon
import { CgSidebarOpen } from "react-icons/cg";
import { LuBellRing } from "react-icons/lu";

const DashHeader = ({ openDropdown, toggleDropdown }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-3 px-24 border-b shadow-sm">
      {/* Breadcrumb Navigation */}
      <div className="hidden lg:flex items-center space-x-2 text-dashAshText mb-2 md:mb-0">
        <CgSidebarOpen className="text-2xl" />
        <span>Breadcrumb</span>
        <span>
          <IoMdArrowDropright />
        </span>
        <span>Breadcrumb</span>
        <span>
          <IoMdArrowDropright />
        </span>
        <span className="">Breadcrumb</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center border rounded-full p-2 shadow-sm mt-12 lg:mt-0 mb-2 md:mb-0">
        <input
          type="text"
          placeholder="Jump to or search"
          className="outline-none text-sm px-2"
        />
        <span className="text-dashCaviarTitleText text-xs ml-2 border py-[2px] px-2 rounded-full bg-slate-100">
          ⌘K
        </span>
      </div>

      {/* Icons and User Profile */}
      <div className="flex items-center space-x-6">
        <LuBellRing size={20} className="text-dashAshText" />
        <FiSettings size={20} className="text-dashAshText" />

        {/* User Dropdown */}
        <div className="relative000000">
          <button
            onClick={() => toggleDropdown("headerBtn")}
            className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded-full border"
          >
            <FaUserCircle className="text-2xl" />
            <span className="hidden md:block">Rayhan</span>{" "}
            {/* Hide on small screens */}
            <IoMdArrowDropdown size={20} />
          </button>
          {openDropdown === "headerBtn" && (
            <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-lg p-2 space-y-2">
              <li>
                <Link
                  href="/account-setting"
                  className="block text-gray-600 hover:bg-gray-100 p-2 rounded-lg"
                >
                  Account Setting
                </Link>
              </li>
              <li className="block text-gray-600 hover:bg-gray-100 p-2 rounded-lg">
                Log out
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
