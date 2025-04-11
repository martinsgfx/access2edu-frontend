import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPasswordForm() {
  const [step, setStep] = useState("request"); // 'request' | 'otp'
  const [email, setEmail] = useState(""); // User Email
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Otp
  const [alert, setAlert] = useState({
    type: "error",
    message: (
      <div className="flex justify-center justify-self-center items-center gap-3">
        <img src="public/notificationIcon.svg" alt="notification" />
        <p className="text-sm">Follow instructions to set your password</p>
      </div>
    ),
  }); // Alert Message

  const [timer, setTimer] = useState(60); // Otp Timer
  const [canResend, setCanResend] = useState(false); // Resebd Otp Timer
  const navigate = useNavigate();

  const knownEmails = ["user@example.com", "admin@test.com"]; // Dummy emails

  useEffect(() => {
    let countdown;
    if (step === "otp" && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [step, timer]);

  function handleRequestOtp() {
                                                                                                         // Otp request handler
    if (!email.includes("@")) {
      setAlert({ type: "error", message: "Enter a valid email address." });
      return;
    }

    if (!knownEmails.includes(email)) {
                                                                                                              // Invalid Email
      setAlert({
        type: "error",
        message: (
          <div className="flex justify-center justify-self-center items-center gap-3">
            <img src="public/notificationIcon.svg" alt="notification" />
            <p className="text-sm">
              This email is not registered in our system.
            </p>
          </div>
        ),
      });
      return;
    }

    setAlert({
                                                                                                                            // Default alert
      type: "error",
      message: (
        <div className="flex justify-center justify-self-center items-center gap-3">
          <img src="public/notificationIcon.svg" alt="notification" />
          <p className="text-sm">Follow instructions to set your password</p>
        </div>
      ),
    });
    setTimer(60);
    setCanResend(false);
    setStep("otp");
  }

  function handleOtpChange(value, index) {
                                                                                                // Handle change of Otp
    if (/[^0-9]/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  }

  function handleVerify() {
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      setAlert({ type: "error", message: "Please enter the 6-digit code." });
      return;
    }

    const correctOtp = "123456";                                                            // Simulated correct OTP

    if (otpValue !== correctOtp) {
      setAlert({
        type: "error",
        message: (
          <div className="flex justify-center justify-self-center items-center gap-3">
            <img src="public/notificationIcon.svg" alt="notification" />
            <p className="text-sm ">Incorrect OTP. Please try again.</p>
          </div>
        ),
      });                                                                               // Check if Otp is correct if Incorrect throw alert
      return;
    }

    setAlert({
                                                                                       // Check for correct Otp throw correct otp alert
      type: "success",
      message: (
        <div className="flex justify-center justify-self-center items-center gap-3">
          <img src="public/notificationIconGreen.svg" alt="notification" />
          <p className="text-sm text-center">OTP verified. Redirecting...</p>
        </div>
      ),
    });

    setTimeout(() => navigate("/reset-password"), 1500);
  }

  const handleResend = () => {
    if (canResend) {
      setOtp(["", "", "", "", "", ""]);
      setTimer(60);
      setCanResend(false);
      setAlert({
        type: "success",
        message: (
          <div className="flex justify-center justify-self-center items-center gap-3">
            <img src="public/notificationIconGreen.svg" alt="notification" />
            <p className="text-sm text-center">OTP resent successfully.</p>
          </div>
        ),
      });
    }
  };

  function renderAlert() {
    if (alert.message) {
      return (
        <div
          className={`flex justify-center justify-self-center items-center gap-3 p-4  rounded-lg w-fit ${
            alert.type === "error"
              ? "text-red-700 bg-red-100"
              : "text-green-700 bg-green-100"
          }`}
        >
          {alert.message}
        </div>
      );
    }
    return null;
  }

  return (
    <div className="bg-[#F9F5F2] rounded-2xl shadow-[0px_0px_12px_rgba(0,0,0,0.17)]">
      <div className="grid justify-center items-center gap-3 p-4 pb-20 w-full">
        {step === "request" ? (
          <div>
            <h1 className="font-bold text-center text-2xl p-6  ">
              Forgot Password?
            </h1>

            {renderAlert()}

            <p className="text-center p-6 pl-4 pr-4 text-[#525252]">
              Enter your registered email below to recieve password reset
              instructions
            </p>
            <div className="grid gap-2 w-full">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Email Address"
                className=" text-[#7C7C7C] w-ful p-4 border-1 border-[#7C7C7C] rounded-[10px] bg-[#F5F5F5]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex justify-self-end">
              <p className="flex pt-6 pb-6 gap-2 text-[#525252]">
                Remember your password?{" "}
                <a href="/login" className="text-[#563A68] ">
                  Login
                </a>
              </p>
            </div>

            <button
              onClick={handleRequestOtp}
              className="bg-[#BCA0D2] hover:bg-[#785491] text-black font-medium text-base rounded-lg p-4 w-full"
            >
              Request OTP
            </button>
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-center text-2xl p-6">Enter OTP</h1>

            {renderAlert()}

            <p className="text-center p-6 pb-0 text-[#525252]">
              Enter the six (6) digit code sent to your email address
            </p>
            <p className="text-center font-semibold">
              {email.replace(/(.{3}).*(@.*)/, "$1*******$2")}
            </p>
            <div className="flex justify-between gap-0.5 p-6 ">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                  className="w-12 h-12 text-center text-xl border bg-[#f5f5f5] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              ))}
            </div>

            <button
              onClick={handleVerify}
              className="bg-[#785491] hover:bg-[#785491] text-white font-medium text-base rounded-lg p-4 mb-6 w-full"
            >
              Verify
            </button>
            <button
              onClick={handleResend}
              disabled={!canResend}
              className={`w-full rounded-md border ${
                canResend
                  ? "border-[#656565] text-[#3D3D3D] hover:bg-gray-100 p-4"
                  : "border-gray-200 text-gray-400 cursor-not-allowed p-4"
              }`}
            >
              {canResend
                ? "Resend OTP"
                : `Resend OTP in 00:${timer < 10 ? "0" + timer : timer}`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
