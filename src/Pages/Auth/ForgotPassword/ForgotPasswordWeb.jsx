import React from "react";
import ForgotPasswordWebForm from "./ForgotPasswordWebForm";

function ForgotPasswordWeb() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#fff5d1] rounded-2xl p-10">
        <img
          src="src/assets/Accesstoedu Logo.png"
          alt="Logo"
          className="access2eduLogo"
        />
        <ForgotPasswordWebForm />
      </div>
    </div>
  );
}

export default ForgotPasswordWeb;
