import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function SelectClassesMobile() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [stage, setStage] = useState(1);
  const [jssCompleted, setJssCompleted] = useState(false);
  const navigate = useNavigate();

  const handleClassSelect = (e) => {
    const value = e.target.value;
    setSelectedClass(value);
    setSelectedLevel("");
    setSelectedDepartment("");
    setError("");
    setStage(1);
    setJssCompleted(false);
    if (value) {
      setProgress(25);
    } else {
      setProgress(0);
    }
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setError("");
    if (selectedClass === "JSS") {
      setProgress(100);
      setJssCompleted(true);
    }
  };

  const handleDepartmentSelect = (dept) => {
    setSelectedDepartment(dept);
    setError("");
  };

  const handleProceed = () => {
    if (progress === 100) {
      // Navigate to the next page when progress is 100
      navigate("/onboarding");
    } else if (stage === 1) {
      if (!selectedLevel) {
        setError("Please select a class level to continue.");
        return;
      }
      if (selectedClass === "SSS") {
        setProgress(50);
        setStage(2);
      } else if (selectedClass === "JSS" && jssCompleted) {
        setProgress(100);
      }
    } else if (stage === 2) {
      if (!selectedDepartment) {
        setError("Please select a department to continue.");
        return;
      }
      setProgress(100);
    }
  };

  const handleBack = () => {
    if (stage === 2) {
      setStage(1);
      setProgress(25);
      setError("");
    }
  };

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

      <div className="grid p-6">
        <span
          className="text-sm text-gray-600 cursor-pointer justify-self-end pb-10 pt-6 flex pl-4 pr-4 gap-2"
          onClick={() => navigate("/onboarding")}
        >
          Skip <ArrowForwardIcon />
        </span>

        <div className="w-full mb-6 flex justify-between items-center pl-10 pr-10">
          <div className="relative w-full h-6 pl-3 pr-3">
            <div className="absolute inset-0 bg-[#BCA0D2] h-3 rounded-full"></div>
            <div
              className="absolute top-0 h-3 bg-[#785491] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className="absolute top-1 transform -translate-y-1/2 translate-x-[-50%] w-8 h-8 flex items-center justify-center text-xs font-bold bg-[#785491] text-white rounded-full transition-all duration-300"
              style={{ left: `${progress}%` }}
            >
              {progress === 0 ? "0" : progress}
            </div>
          </div>
        </div>

        <h1 className="text-3xl text-center font-bold pb-10 mt-10  ">
          Select Your Class
        </h1>

        {stage === 1 && (
          <>
            <div className="relative w-full mb-6 mt-6">
              <select
                className="border w-full border-[#563A68] bg-[#F5F5F5] px-4 py-4 appearance-none rounded-md text-[#563A68] mb-6"
                value={selectedClass}
                onChange={handleClassSelect}
              >
                <option value="">Select class</option>
                <option value="JSS">Junior Secondary School (JSS)</option>
                <option value="SSS">Senior Secondary School (SSS)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 bottom-5 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div
              className={`w-full text-center px-4 py-3 rounded bg-[#dee9ba] text-green-600`}
            >
              <span className="flex font-medium gap-2 items-center">
                <img src="/notificationIconGreen.svg" alt="" /> Select your
                class to proceed
              </span>
            </div>

            {(selectedClass === "SSS" || selectedClass === "JSS") && (
              <div className="w-full mt-6 space-y-4">
                {(selectedClass === "SSS"
                  ? ["SS 1", "SS 2", "SS 3"]
                  : ["JSS 1", "JSS 2", "JSS 3"]
                ).map((level, index) => (
                  <label
                    key={level}
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full font-bold text-[#785491]">
                        {index + 1}
                      </div>
                      <span>{level}</span>
                    </div>
                    <input
                      className="accent-[#785491]"
                      type="radio"
                      name="level"
                      checked={selectedLevel === level}
                      onChange={() => handleLevelSelect(level)}
                    />
                  </label>
                ))}
              </div>
            )}
          </>
        )}

        {stage === 2 && selectedClass === "SSS" && (
          <>
            <div className="w-full mb-4">
              <select
                disabled
                className="w-full border border-gray-300 px-4 py-2 rounded text-[#785491] font-semibold bg-[#BCA0D2] cursor-not-allowed"
              >
                <option>
                  {selectedClass} ({selectedLevel})
                </option>
              </select>
            </div>

            <div className="w-full mt-2 space-y-4">
              {["Humanities", "Commercial", "Science"].map((dept) => (
                <label
                  key={dept}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span>{dept}</span>
                  </div>
                  <input
                    type="radio"
                    name="department"
                    checked={selectedDepartment === dept}
                    onChange={() => handleDepartmentSelect(dept)}
                    className="accent-[#563A68]"
                  />
                </label>
              ))}
            </div>
          </>
        )}

        <div className="flex gap-4 w-full mt-6">
          {stage === 2 && selectedClass === "SSS" && (
            <button
              onClick={handleBack}
              className="w-full bg-[#785491] text-white py-3 rounded-lg font-semibold  transition"
            >
              Go Back
            </button>
          )}
          {selectedClass && (
            <button
              onClick={handleProceed}
              className="w-full bg-[#785491] text-white py-3 rounded-lg font-semibold transition"
            >
              {progress === 100 ? "Finish" : "Let's Go"}
            </button>
          )}
        </div>

        {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
}

export default SelectClassesMobile;


