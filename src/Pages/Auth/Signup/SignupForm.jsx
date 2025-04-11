import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Signup.css";

function SignupForm() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    gName: "",
    password: "",
    confirmPassword: "",
  }); // Form Data

  const [email, setEmail] = useState(""); // Email Value
  const [emailError, setEmailError] = useState(""); // Email Error
  const [password, setPassword] = useState(""); // Password Value
  const [passwordError, setPasswordError] = useState(""); // Password Error
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm Password Value
  const [confirmPasswordError, setConfirmPasswordError] = useState(""); // Confirm Password Error
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!isValid) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

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
    if (!formData.fName || !formData.lName || !email || !formData.gName ||  !password || !confirmPassword) {
      setFormMessage( () => {
        return (
          <div >
            <p className="text-red-400 text-center font-medium" >Please fill in all fields</p>
          </div>
        )
      });
  
    } else if (emailError || error || confirmError) {
      setFormMessage("Please fix the errors before submitting.");
    } else {
      setFormMessage("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}  action="" className="grid gap-3 p-6">
      {/* First Name */}
      <div className="grid gap-2">
        <label htmlFor="fName">Firstname</label>
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder="Firstname"
          className="p-4 border-1 border-[#7c7c7c] rounded-md"
          value={formData.fName}
          onChange={handleChange}
        />
      </div>

      {/* Last Name */}
      <div className="grid gap-2">
        <label htmlFor="lName">Surname </label>
        <input
          type="text"
          name="lName"
          id="lName"
          placeholder="Surname"
          className="p-4 border-1 border-[#7c7c7c] rounded-md"
          value={formData.lName}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div className="grid gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          className="p-4 border-1 border-[#7c7c7c] rounded-md"
          value={email}
          onChange={validateEmail}
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
      </div>

      {/* Parent/Guardian Name */}
      <div className="grid gap-2">
        <label htmlFor="GName">Parent/Guardian Name</label>
        <input
          type="text"
          name="gName"
          id="gName"
          placeholder="Parent/Guardian Name"
          className="p-4 border-1 border-[#7c7c7c] rounded-md"
          value={formData.gName}
          onChange={handleChange}
        />
      </div>

      {/* Password */}
      <div className="grid gap-2">
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
      <div className="grid gap-2">
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
        className="bg-[#BCA0D2] mt-10 p-4 rounded-lg hover:bg-[#785491] text-[#000000] hover:text-white"
        type="submit"        
      >
        Submit
      </button>
      {formMessage && <p className="mt-2 text-sm text-red-500">{formMessage}</p>}


      <p className="p-4 pl-0 flex justify-center">
          Already have an account {" "}
          <span className="text-[#785491] font-semibold pl-2">
            <a href="/Login"> Log In</a>
          </span>
        </p>
    </form>
  );
}

export default SignupForm;
