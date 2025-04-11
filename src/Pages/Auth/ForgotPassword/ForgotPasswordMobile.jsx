import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";

function ForgotPasswordMobile() {
  return (
    <div>
      {/* Header */}
      <div className="headbar shadow-[1px_0px_12px_rgba(0,0,0,0.17)]">
        <img
          src="src\assets\access_II_edu-removebg-preview 2.svg"
          alt="Access2Edu Logo"
          className="pr-4"
        />
        <h1 className="text-[#563A68] text-base">Access2Edu</h1>
      </div>

      {/* Main Content */}

      <div className="grid grid-rows-[20%_80%] h-screen">
        <div className="justify-self-end self-start flex gap-3 pt-8 mr-5 ">
          <p>Need Help</p>
          <img src="public\questionOutline.svg" alt="question mark" />
        </div>

        <div className="self-end ">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordMobile;
