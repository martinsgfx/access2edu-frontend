import React from "react";
import ResetPasswordWeb from "./ResetPasswordWeb";

function ResetPasswordWebLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#fff5d1] rounded-2xl p-10 w-1/3">
        <img
          src="src/assets/Accesstoedu Logo.png"
          alt="Logo"
          className="access2eduLogo"
        />
        <ResetPasswordWeb />
      </div>
    </div>
  );
}

export default ResetPasswordWebLayout;
