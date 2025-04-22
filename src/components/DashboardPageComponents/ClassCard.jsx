import { EventAvailable, KeyboardArrowDown } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { LogOut } from "lucide-react";
import React from "react";

function ClassCard() {
  //Get Date
  const today = new Date();
  const todayFormatted = `${today.getMonth() + 1}/${String(
    today.getDate()
  ).padStart(2, "0")}/${today.getFullYear()}`;

  //Get Time
  const timeFormatted = today
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/\s/g, "");

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Classes</h1>
        <div className="flex gap 2 px-4 items-center bg-[#f5f5f5] rounded-xl text-[#989898] py-2">
          <p>See all</p>
          <KeyboardArrowDown />
        </div>
      </div>
      <div className="rounded-xl p-8 bg-[#e7def0] shadow-sm mb-6">
        <h3 className="font-bold text-[#181818] text-xl pb-4">
          Physics - Unit II
        </h3>
        <div className="flex justify-between items-center pb-4">
          <AvatarGroup total={78}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          {todayFormatted}
        </div>
        <div className="flex justify-between pb-4">
          <div className="flex gap-2 items-center">
            <LogOut />
            <p>10 Files</p>
          </div>
          {timeFormatted}
        </div>
        <div className="flex gap-2">
          <EventAvailable />
          <p>           
            <span className="font-bold">Today: </span> James Martins
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
