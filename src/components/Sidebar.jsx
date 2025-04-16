import React from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Subject as SubjectIcon,
  EventAvailable as EventAvailableIcon,
  VideocamOutlined as VideocamOutlinedIcon,
  EditNoteOutlined as EditNoteOutlinedIcon,
  AccountBalanceWalletOutlined as AccountBalanceWalletOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
} from "@mui/icons-material";

const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    icon: Home,
    color: "#F5F5F5",
    href: "/dashboard",
  },
  {
    name: "Subjects",
    icon: SubjectIcon,
    color: "#F5F5F5",
    href: "/dashboard/subjects-page",
  },
  {
    name: "Time Table",
    icon: EventAvailableIcon,
    color: "#F5F5F5",
    href: "/dashboard/timetable-page",
  },
  {
    name: "Video Record",
    icon: VideocamOutlinedIcon,
    color: "#F5F5F5",
    href: "/dashboard/video-record-page",
  },
  {
    name: "Result",
    icon: EditNoteOutlinedIcon,
    color: "#F5F5F5",
    href: "/dashboard/result-page",
  },
  {
    name: "Fee",
    icon: AccountBalanceWalletOutlinedIcon,
    color: "#F5F5F5",
    href: "/dashboard/fees-page",
  },
  {
    name: "Settings",
    icon: SettingsOutlinedIcon,
    color: "#F5F5F5",
    href: "/dashboard/settings-page",
  },
];

function Sidebar() {
  return (
    //Sidebar
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 w-80 `}
    >
      {/* Access2edu Logo  */}
      <div className="h-full bg-[#785491]  flex-col">
        <div className="bg-[#e7def0] p-10">
          <img
            src="/ACCESS2EDU-LOGO.svg"
            alt="Access2eduLogo"
            width={88}
            className="flex justify-self-center"
          />
        </div>

        {/* Navbars */}
        <nav className="mt-8 flex-grow w-full">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <div className="flex pl-20 p-4 text-sm font-medium rounded-lg text-[#b7b7b7] hover:bg-[#9e7abb] hover:text-[#f5f5f5] active:text-[#f5f5f5] transition-colors mb-2 active:border-r-8 active:border-[#f5f5f5]">
                <item.icon size={20} style={{ minWidth: "20px" }} />

                <motion.span
                  className="ml-4 whitespace-nowrap hover:text-[#f5f5f5] active:text-[#f5f5f5]"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  {item.name}
                </motion.span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
