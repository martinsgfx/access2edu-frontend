// Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ current }) => {
  const navigate = useNavigate();
  const menu = [
    { key: "edit-profile", label: "Edit Profile", icon: "🗂" },
    { key: "password", label: "Password", icon: "🔒" },
    { key: "notification", label: "Notification", icon: "🔔" },
    { key: "guardian", label: "Guardian", icon: "👨‍👩‍👧" },
  ];

  return (
    <div className="settings-sidebar">
      {menu.map((item) => (
        <button
          key={item.key}
          className={`sidebar-btn ${current === item.key ? "active" : ""}`}
          onClick={() => navigate(`/settings/${item.key}`)}
        >
          <span className="icon">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;