import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginStudent } from "../../../services/studentServices"; // Import loginStudent
import "./Login.css";
import SocialMediaWebSignIn from "./SocialMediaWebSignIn";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function WebLoginForm() {

  const navigate = useNavigate(); // Initialize useNavigate
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!formData.email || !formData.password) {
      setError(
        !formData.email ? "Email is required" : "Password is required"
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Used loginStudent from studentServices
      const response = await loginStudent(formData);

      // Handle success response
      if (response.status === 200) {
        const { token } = response.data; 

        // Store the token
        if (keepMeSignedIn) {
          localStorage.setItem("authToken", token);
        } else {
          sessionStorage.setItem("authToken", token);
        }

        // Redirect or show success message
        alert("Login successful!");
        console.log("Logged in as:", formData.email);
      }
    } catch (err) {
      // Handle error response
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }

    navigate("/dashboard"); 
  };

  return (
    <div className="pb-10">
      <form onSubmit={handleSubmit} className="grid gap-5 p-6" action="">
        {/* Email */}
        <div className="grid gap-2">
          <input
            className="email p-4"
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

        {error && <p className="text-red-400">{error}</p>}

        {/* Forgot Password */}
        <div className="flex justify-between pt-5 pb-5">
          <div className="flex items-center gap-2">
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