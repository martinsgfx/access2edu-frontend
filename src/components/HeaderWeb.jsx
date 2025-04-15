import React from "react";
import NotificationBar from "./NotificationBar";



function HeaderWeb() {
  return (
    <div className="flex justify-between items-center bg-[#FFF5D1] p-5 pl-10 pr-10 shadow-[1px_0px_12px_rgba(0,0,0,0.17)]">
      <img
        src="src\assets\access_II_edu-removebg-preview 2.svg"
        alt="Logo"
        width="64"
        height="64"
      />
      <NotificationBar />
    </div>
  );
}

export default HeaderWeb;
