import React from "react";
import "./Login.css";
import LoginWebLayout from "./LoginWebLayout";
import LoginMobileLayout from "./LoginMobileLayout";

function Login() {
  return (
    <div>
      <div className="webView">
        <LoginWebLayout />
      </div>
      <div className="mobileView">
        <LoginMobileLayout />
      </div>
    </div>
  );
}

export default Login;
