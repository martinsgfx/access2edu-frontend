import React from "react";
import WebLoginForm from "./WebLoginForm";
import "./Login.css";





function LoginWebLayout() {
    return (
        <div className="loginContainer">
            <div className="leftLogin p-10">
                <div className="bg-[#fff5d1] grid  p-10 rounded-xl w-full h-auto">
                    <img src="src/assets/Accesstoedu Logo.png" alt="Logo" className="access2eduLogo" />
                    <h1 className="text-3xl font-bold pt-20 pb-5 text-center">Welcome Back</h1>
                    <WebLoginForm />
                </div>
            </div>
            <div className="rightLogin" > 
                <img className="absolute bottom-0 right-0"   src="src\assets\access2edu logo - yellow.png" alt="yellow-logo" />              
            </div>
        </div>
    )
};

export default LoginWebLayout;