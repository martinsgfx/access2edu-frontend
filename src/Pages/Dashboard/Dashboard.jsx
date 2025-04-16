import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeaderWeb from "../../components/DashboardHeaderWeb";


import Sidebar from "../../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex h-screen ">
      <Sidebar /> 
      <main className="flex-1 bg-[#fffbeb] ">
        <DashboardHeaderWeb />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
