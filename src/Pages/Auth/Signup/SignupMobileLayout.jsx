import React from "react";
import SignupForm from "./SignupForm";
import "./Signup.css";

function SignupMobileLayout() {
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

      {/* Intro Section */}
      <div className="intro">
        <div className="headingText">
          <h1 className="text-2xl font-extrabold">Create your Account </h1>
        </div>
        <p className="text-xl text-[#3D3D3D]">
          Start your learning journey today!
        </p>
      </div>

      <SignupForm />

    </div>

    
  );
}

export default SignupMobileLayout;
