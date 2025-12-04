import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome, HiUser, HiCog } from "react-icons/hi";

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      <div
        className={`
          fixed  left-0 h-full bg-white shadow-lg
          transition-all duration-300 z-60
          ${collapsed ? "md:w-20" : "md:w-64"}
          ${mobileOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <ul className="mt-5 space-y-2">
          <li>
            <NavLink
              to="/"
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100"
              onClick={()=>setMobileOpen(false)}
            >
              <HiHome className="text-xl" />
              {!collapsed && <span>Home</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile"
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100"
            >
              <HiUser className="text-xl" />
              {!collapsed && <span>Profile</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100"
            >
              <HiCog className="text-xl" />
              {!collapsed && <span>Settings</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;


