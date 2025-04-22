import { KeyboardArrowDown } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

const CircularProgressBar = ({ percentage, color, title }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative md:w-60 w-50 md:h-60 h-50">
        {/* Background circle */}
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke={color === "yellow" ? "#fff5d1" : "#e7def0"}
            strokeWidth="20"
            fill="none"
          />
          {/* Progress circle with transition */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke={color === "yellow" ? "#fedb65" : "#785491"}
            strokeWidth="20"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
            style={{ transition: "stroke-dashoffset 0.8s ease-in-out" }}
          />
        </svg>

        {/* Percentage text in the center */}
        <div className="absolute inset-0 flex flex-col items-center p-6 justify-center">
          <span className="text-3xl font-bold">
            {Math.round(animatedPercentage)}%
          </span>
          <span className="text-sm">{title}</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center mt-6 space-x-8">
        <div className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full ${
              color === "yellow" ? "bg-[#FFF5D1]" : "bg-[#e7def0]"
            }`}
          ></div>
          <span className="ml-2">Goals</span>
        </div>
        <div className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full ${
              color === "yellow" ? "bg-[#fedb65]" : "bg-[#785491]"
            }`}
          ></div>
          <span className="ml-2">Progress</span>
        </div>
      </div>
    </div>
  );
};

function PerformanceCard() {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [performanceData, setPerformanceData] = useState({
    January: { goals: 45, score: 71 },
    February: { goals: 62, score: 58 },
    March: { goals: 75, score: 80 },
    April: { goals: 30, score: 45 },
    May: { goals: 50, score: 65 },
    June: { goals: 85, score: 72 },
  });

  // Function to update progress (could be connected to API)
  const updateProgress = (month, type, newValue) => {
    setPerformanceData((prevData) => ({
      ...prevData,
      [month]: {
        ...prevData[month],
        [type]: Math.min(100, Math.max(0, newValue)), // Ensure value is between 0-100
      },
    }));
  };

  // Current data based on selected month
  const currentData = performanceData[selectedMonth];

  // Demo function to simulate progress updates
  const simulateProgressUpdate = () => {
    // Random increment between -10 and +15
    const randomIncrement = Math.floor(Math.random() * 25) - 10;
    updateProgress(selectedMonth, "goals", currentData.goals + randomIncrement);

    // Also update score with different random increment
    const scoreIncrement = Math.floor(Math.random() * 25) - 10;
    updateProgress(selectedMonth, "score", currentData.score + scoreIncrement);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Performance</h1>

        {/* Month selector */}
        <div className="relative">
          <select
            className="appearance-none bg-gray-100 py-2 px-4 pr-8 rounded-lg text-xl text-gray-500 font-medium"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {Object.keys(performanceData).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <KeyboardArrowDown />
          </div>
        </div>
      </div>

      <div className="bg-white md:p-8 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="text-center mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-6">Monthly Goals!</h2>
            <CircularProgressBar
              percentage={currentData.goals}
              color="yellow"
              title="Monthly Goal"
            />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold  mb-6">You score looks good!</h2>
            <CircularProgressBar
              percentage={currentData.score}
              color="purple"
              title="Monthly Goal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceCard;
