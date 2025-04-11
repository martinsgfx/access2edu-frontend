import React from "react";
import ResetPasswordWebLayout from "./ResetPasswordWebLayout";
import ResetPasswordMobileLayout from "./ReserPasswordMobileLayout";
import "../Login/Login.css";

function ResetPassword() {
  return (
    <div>
      <div className="webView">
        <ResetPasswordWebLayout />
      </div>
      <div className="mobileView">
        <ResetPasswordMobileLayout />
      </div>
    </div>
  );
}

export default ResetPassword;
