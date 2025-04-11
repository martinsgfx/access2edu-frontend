import React from "react";
import "./Login.css";

function SocialMediaSignIn() {
  return (
    <div className="otherSignIn grid gap-3 p-6">

        {/* Google Sign-in Button */}
      <button className="google">
        <img  src="src/assets/devicon_google.svg" alt="Google Icon" />
        <p className="font-semibold">Sign in with Google</p>
      </button>

        {/* Apple Sign-in Button */}
      <button className="apple">
        <img  src="src\assets\ic_outline-apple.svg" alt="Apple Icon" />
        <p className="font-semibold">Sign in with Apple</p>
      </button>

        {/* Microsoft Sign-in Button */}
        <button className="apple">
        <img src="src\assets\logos_microsoft-icon.svg" alt="Microsoft Icon" />
        <p className="font-semibold">Sign in with Microsoft</p>
      </button>

      {/* Divider with text */}
      <div className="flex items-center w-full my-2 mt-8">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-500">Or Sign in with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    
    </div>
  );
}

export default SocialMediaSignIn;
