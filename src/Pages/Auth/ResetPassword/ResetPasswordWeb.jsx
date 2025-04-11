import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function ResetPasswordWeb() {
  const [password, setPassword] = useState(""); // Password Value
  const [passwordError, setPasswordError] = useState(""); // Password Error
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm Password Value
  const [confirmPasswordError, setConfirmPasswordError] = useState(""); // Confirm Password Error
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    const isValid = value.length >= 6 && /\d/.test(value);
    if (!isValid) {
      setPasswordError(
        "Password must be at least 6 characters including a number"
      );
    } else {
      setPasswordError("");
    }
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
    setConfirmPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!password || !confirmPassword) {
      setFormMessage(() => {
        return (
          <div>
            <p className="text-red-400 bg-red-100 p-4 text-center font-medium">
              Please fill in all fields
            </p>
          </div>
        );
      });
    } else if (password === confirmPassword) {
      setFormMessage(() => {
        return (
          <p className="text-green-700 bg-green-100 p-4 text-center font-medium">
            Password changed successfully!
          </p>
        );
      });
    } else {
      setFormMessage(() => {
        return (
          <p className="text-red-400 bg-red-100 p-4 text-center font-medium">
            Passwords do not match
          </p>
        );
      });
    }
  };

  return (
    <div className="grid p-4 w-full">
      <h1 className="font-bold text-center text-2xl p-6 pb-1">
        Reset Password
      </h1>
      <p className="text-center">Please enter your new password</p>

      <form onSubmit={handleSubmit} className="grid gap-3 mt-5 mb-3">
        {formMessage && (
          <p className="mt-2 text-sm text-red-500">{formMessage}</p>
        )}

        {/* Enter Password  */}
        <div className="grid gap-2 w-full">
          <label htmlFor="password">Password</label>
          <div className="passwordWrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="p-4 border-1 pwordSpace border-[#7c7c7c] rounded-md"
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="eyeIcon"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="grid gap-2 w-full">
          <label htmlFor="password">Confirm Password</label>
          <div className="passwordWrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confimPassword"
              placeholder="Confirm Password"
              className="p-4 border-1 pwordSpace border-[#7c7c7c] rounded-md"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <span
              className="eyeIcon"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
          {confirmPasswordError && (
            <p className="text-red-500 text-sm">{confirmPasswordError}</p>
          )}
        </div>

        {/* Button */}
        <button
          className="bg-[#BCA0D2] mt-5 p-4 rounded-lg hover:bg-[#785491] text-[#000000] hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="p-4 pl-0 flex justify-center">
        Go back to{" "}
        <span className="text-[#785491] font-semibold pl-2">
          <a href="/Login"> Log In</a>
        </span>
      </p>
    </div>
  );
}

export default ResetPasswordWeb;
