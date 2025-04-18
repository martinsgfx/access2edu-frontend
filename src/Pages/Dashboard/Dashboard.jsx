import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeaderWeb from "../../components/DashboardHeaderWeb";

import Sidebar from "../../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden ">
      <aside>
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col bg-[#fffbeb] ">
        <header className="fixed top-0  z-10 w-[calc(100%-20rem)]">
          <DashboardHeaderWeb />
        </header>
        <main className=" mt-24 overflow-y-auto h-[calc(100vh-6rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
