import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaPen,
  FaHome,
  FaUser,
  FaList,
  FaComment,
  FaCog,
  FaAd,
  FaUsers,
  FaUserCircle,
  FaNewspaper,
  FaEdit,
} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import React from "react";
import { RiAdminFill } from "react-icons/ri";

const Dashboard = () => {

    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="min-h-screen ]">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-3 bg-[#F1BA88] text-white  hover:bg-gray-700 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div
          className={`bg-[#60B5FF]  p-5 w-64 space-y-4 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="space-y-2">
            {/* Admin Route */}

            <li>
              <NavLink
                to="/dashboard/admin"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg text-white hover:bg-[#F1BA88] transition ${isActive ? "bg-[#F1BA88]" : ""}`
                }
              >
                <RiAdminFill />
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/edit"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg text-white hover:bg-[#F1BA88] transition ${isActive ? "bg-[#F1BA88]" : ""}`
                }
              >
                <FaEdit />
                Edit
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="w-3/4 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
