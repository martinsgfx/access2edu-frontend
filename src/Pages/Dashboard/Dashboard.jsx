import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import NotificationBar from "../../components/NotificationBar";
import Sidebar from "../../components/Sidebar";

import { MenuIcon, Search } from "lucide-react";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth < 768
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close sidebar when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex h-screen overflow-hidden ">
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      {/* Mobile sidebar (slides in) */}
      <div
        ref={sidebarRef}
        className={`fixed md:hidden z-30 inset-y-0 left-0 w-80  text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col bg-[#fffbeb] ">
        <header className="fixed flex justify-between top-0 z-10 h-[96px]  md:w-[calc(100%-20rem)] w-full items-center bg-[#FFF5D1] md:p-5 md:pl-10 md:pr-10 p-5 pl-5 pr-5 shadow-[1px_0px_12px_rgba(0,0,0,0.17)]">
          <div className="flex gap-4">
            {/* Harmburger Menu */}
            <button
              onClick={toggleSidebar}
              className="md:hidden mr-4 text-gray-800"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>


            {/* Search Bar */}
            <div className="relative md:w-full w-1/2">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                className="bg-cream-50 border border-[#785491] text-gray-900 text-lg rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#e7def0]"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

          </div>

          <NotificationBar />
        </header>

        {/* Overlay when mobile sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed md:hidden inset-0 bg-neutral-500/80 z-20 transition"
            onClick={toggleSidebar}
          />
        )}

        <main className=" mt-24 overflow-y-auto h-[calc(100vh-6rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
