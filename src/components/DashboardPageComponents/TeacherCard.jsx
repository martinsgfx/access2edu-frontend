import { KeyboardArrowDown } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import { Avatar } from "@mui/material";
import React from "react";

function TeacherCard() {
  return (
    <div className="mt-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Linked Teacher</h1>
        <div className="flex gap 2 px-4 items-center bg-[#f5f5f5] rounded-xl text-[#989898] py-2">
          <p>See all</p>
          <KeyboardArrowDown />
        </div>
      </div>


        {/* Linked Teachers Card */}
      <div className="flex justify-between bg-white rounded-3xl p-6 mb-6">
        <div className="flex gap-4">
          <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} />
          <div>
            <h3 className="mb-2 font-bold">James Martins</h3>
            <p>English Language</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <EmailIcon sx={{ fontSize: 24 }} />
          <NotificationsIcon sx={{ fontSize: 24 }} />
        </div>
      </div>

      <div className="flex justify-between bg-white rounded-3xl p-6 mb-6">
        <div className="flex gap-4">
          <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} />
          <div>
            <h3 className="mb-2 font-bold">James Martins</h3>
            <p>English Language</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <EmailIcon sx={{ fontSize: 24 }} />
          <NotificationsIcon sx={{ fontSize: 24 }} />
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
