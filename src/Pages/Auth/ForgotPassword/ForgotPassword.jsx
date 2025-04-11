import React from "react";
import ForgotPasswordMobile from "./ForgotPasswordMobile";
import ForgotPasswordWeb from "./ForgotPasswordWeb";

function ForgotPassword() {
  return (
    <div>
      <div className="webView">
        <ForgotPasswordWeb />
      </div>

      <div className="mobileView">
        <ForgotPasswordMobile />
      </div>
    </div>
  );
}

export default ForgotPassword;
