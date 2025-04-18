import React from "react";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Login.css";
import SocialMediaWebSignIn from "./SocialMediaWebSignIn";

function WebLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError(() => {
        return (
          <p className="text-red-400">
            {!formData.email ? "Email is required" : "Password is required"}
          </p>
        );
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Logged in as ${formData.email}`);
    }, 1500);

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate storing token
      const token = "fake-auth-token";
      if (keepMeSignedIn) {
        localStorage.setItem("authToken", token);
      } else {
        sessionStorage.setItem("authToken", token);
      }
      console.log("Form submitted! Auth token saved.");
    }
  };

  return (
    <div className="pb-10">
      <form onSubmit={handleSubmit} className="grid gap-5 p-6" action="">
        {/* Email */}
        <div className="grid gap-2">
          {/* <label htmlFor="email" className="text-bold">
            Email
          </label> */}
          <input
            className="email  p-4"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}

        <div className="grid gap-2">
          {/* <label htmlFor="password" className="text-bold">
            Password
          </label> */}

          <div className="passwordWrapper">
            <input
              className="password pwordSpace p-4"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className="eyeIcon"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
        </div>

        {error && <p>{error}</p>}

        {/* Forgot Password */}

        <div className="flex justify-between pt-5 pb-5">
          {/* Checkbox */}

          <div className="flex items-center gap-2 ">
            <input
              type="checkbox"
              name="keepSignedIn"
              id="keepMeSignedIn"
              checked={keepMeSignedIn}
              onChange={(e) => setKeepMeSignedIn(e.target.checked)}
              className="w-4 h-4 accent-green-600"
            />
            <label htmlFor="keepSignedIn" className="text-sm text-gray-700">
              Keep me signed in
            </label>
          </div>
          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-right text-[#563A68] hover:text-[#aa66d4]"
            >
              Forgot Password
            </a>
          </div>
        </div>

        {/* Button */}
        <button
          className="bg-[#BCA0D2] p-4 rounded-lg hover:bg-[#785491] text-[#000000] hover:text-white"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>        
      </form>
      <div className="otherSignIn grid gap-3 p-6">
          {/* Divider with text */}
          <div className="flex items-center w-full my-2 mt-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500">Or Sign in with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <SocialMediaWebSignIn />
        </div>

        <p className="p-4 pl-0 flex gap-1 justify-center">
          Not a Student yet?{" "}
          <span className="text-[#785491] font-semibold">
            <a href="/Signup">Sign Up</a>
          </span>
        </p>
    </div>
  );
}

export default WebLoginForm;
