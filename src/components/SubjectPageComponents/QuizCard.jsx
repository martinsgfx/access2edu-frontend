import React, { useState } from "react";

function QuizCard() {
  const [completion, setCompletion] = useState(45);

  // Calculate circle properties
  const radius = 40;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (completion / 100) * circumference;

  return (
    <div className="bg-[#ffeeb4] p-6 rounded-3xl">
      <div className="flex gap-4 mb-4">
        <div className="bg-[#d9d9d9] rounded-full w-8 h-8"></div>
        <h3 className="font-bold text-2xl">Quiz</h3>
      </div>

      <div className="flex items-center justify-between w-full gap-4 mb-4">
        <p className="font-semibold">General quiz for all subject </p>

        {/* Progress Circle */}
        <div className="relative inline-flex items-center justify-center">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90"
          >
            <circle
              stroke="#e2e2f0"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="#8246af"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference + " " + circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-xl font-bold">{completion}%</span>
            <span className="text-xs">Quiz</span>
          </div>
        </div>

        {/* Complete Button */}
        <button className="bg-white text-black px-6 py-3 rounded-full border border-gray-300 font-medium">
          Complete Quiz
        </button>
      </div>

      <p><span className="font-bold text-green-500">10%</span> Assessment </p>
    </div>
  );
}

export default QuizCard;
