import React from "react";
import NotificationBar from "./NotificationBar";



function DashboardHeaderWeb() {
  return (
    <div className="flex justify-end  items-center bg-[#FFF5D1]  p-5 pl-10 pr-10 shadow-[1px_0px_12px_rgba(0,0,0,0.17)]">      
      <NotificationBar />
    </div>
  );
}

export default DashboardHeaderWeb;
