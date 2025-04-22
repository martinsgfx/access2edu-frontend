import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserEdit, FaLock, FaBell, FaUserFriends } from "react-icons/fa";

const SidebarTabs = () => {
  return (
    <div className="profile-tabs">
      <NavLink
        to="/dashboard/settings"
        className={({ isActive }) => (isActive ? "tab active" : "tab")}
      >
        <FaUserEdit /> Edit Profile
      </NavLink>
      <NavLink
        to="/dashboard/password"
        className={({ isActive }) => (isActive ? "tab active" : "tab")}
      >
        <FaLock /> Password
      </NavLink>
      <NavLink
        to="/dashboard/notification"
        className={({ isActive }) => (isActive ? "tab active" : "tab")}
      >
        <FaBell /> Notification
      </NavLink>
      <NavLink
        to="/dashboard/guardian"
        className={({ isActive }) => (isActive ? "tab active" : "tab")}
      >
        <FaUserFriends /> Guardian
      </NavLink>
    </div>
  );
};

export default SidebarTabs;
