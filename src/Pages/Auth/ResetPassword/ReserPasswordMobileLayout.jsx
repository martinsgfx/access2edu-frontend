import React from 'react'
import ResetPasswordMobile from './ResetPasswordMobile'

function ResetPasswordMobileLayout() {
    return (
      <div className="grid grid-rows-[20%_80%] h-screen ">
        {/* Header */}
        <div className="flex p-4 items-center self-start bg-[#f9f5f2] shadow-[1px_0px_12px_rgba(0,0,0,0.17)]">
          <img
            src="src\assets\access_II_edu-removebg-preview 2.svg"
            alt="Access2Edu Logo"
            className="pr-4"
          />
          <h1 className="text-[#563A68] text-base">Access2Edu</h1>
        </div>
  
        <div className="self-end">
          <ResetPasswordMobile />
        </div>
      </div>
    );
  }

  export default ResetPasswordMobileLayout;