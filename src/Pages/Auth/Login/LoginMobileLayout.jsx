import React from "react";
import "./Login.css";
import SocialMediaSignIn from "./SocialMediaSignIn";
import LoginForm from "./Loginform";

function LoginMobileLayout() {
  return (
    <div>
      <div className="headbar shadow-[1px_0px_12px_rgba(0,0,0,0.17)]">
        <img
          src="src\assets\access_II_edu-removebg-preview 2.svg"
          alt="Access2Edu Logo"
          className="pr-4"
        />
        <h1 className="text-[#563A68] text-base">Access2Edu</h1>
      </div>

      <div className="intro">
        <div className="headingText">
          <h1 className="text-2xl font-extrabold">Welcome Back </h1>
          <img src="src\assets\waving.svg" alt="waving hand" />
        </div>
        <p className="text-xl text-[#3D3D3D]">
          Sign in to your learning journey!
        </p>
      </div>

      <SocialMediaSignIn />
      <LoginForm />
    </div>
  );
}

export default LoginMobileLayout;
