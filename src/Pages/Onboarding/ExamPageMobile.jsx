import React, { useState, useEffect } from "react";
import HeaderWeb from "../../components/HeaderWeb";
import ExamHeaderMobile from "./ExamHeaderMobile";
import ExamQuestionsMobile from "./ExamQuestionsMobile"
import { useNavigate } from "react-router-dom";
import questions from "./Questions";


function ExamPageMobile() {
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 mins
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showCorrections, setShowCorrections] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleOptionChange = (questionId, selectedIndex) => {
    setAnswers({ ...answers, [questionId]: selectedIndex });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) newScore++;
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const scorePercent = Math.round((score / questions.length) * 100);
  const currentQuestion = questions[currentPage];

  return (
    <div>
      <HeaderWeb />

      <div className="p-2 pt-0">
        {!submitted ? (
          // Questions
          <div>
            <ExamHeaderMobile
              duration="40 minutes"
              currentTime={formatTime(timeLeft)}
            />
            <ExamQuestionsMobile
              number={currentPage + 1}
              question={currentQuestion}
              selected={answers[currentQuestion.id]}
              onSelect={handleOptionChange}
            />
            <div className="grid gap-4 mt-6 ml-4 mr-4">
              {currentPage > 0 && (
                <button
                  className="bg-gray-200 px-4 py-4 rounded"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Back
                </button>
              )}
              {currentPage < questions.length - 1 ? (
                <button
                  className="bg-[#785491] text-white px-4 py-4 rounded"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Continue
                </button>
              ) : (
                <button
                  className="bg-green-600 text-white px-4 py-4 rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        ) : showCorrections ? (
          //Corrections
          <div className="space-y-8 p-10 mt-4">
            <h2 className="text-3xl font-bold text-center">Corrections</h2>
            {questions.map((q, i) => (
              <div
                key={i}
                className="p-10 border-1 border-[#3d3d3d] rounded-xl bg-[#f5f5f5]"
              >
                <p className="font-semibold mb-4">
                  {i + 1}. {q.text}
                </p>
                {q.options.map((opt, idx) => {
                  const isCorrect = idx === q.correctAnswer;
                  const isSelected = answers[q.id] === idx;
                  return (
                    <div
                      key={idx}
                      className={`p-2 rounded-md mb-4 ${
                        isCorrect
                          ? "bg-green-100"
                          : isSelected
                          ? "bg-red-100"
                          : ""
                      }`}
                    >
                      <span className="font-medium">
                        {String.fromCharCode(65 + idx)}.
                      </span>{" "}
                      {opt}
                      {isCorrect && (
                        <span className="text-green-600 ml-2">
                          ✔ Correct Answer
                        </span>
                      )}
                      {isSelected && !isCorrect && (
                        <span className="text-red-600 ml-2">✘ Your Choice</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
            <div className="text-center w-full mt-6">
              <button
                onClick={() => setShowCorrections(false)}
                className="bg-[#785491] text-white px-6 py-4 rounded-md"
              >
                Back to Results
              </button>
            </div>
          </div>
        ) : (
          //Result Page
          <div className="flex items-center justify-center min-h-screen">
            <div className="grid text-center  w-3xl rounded-2xl text-[#3d3d3d] p-10 bg-[#fcf8ef] shadow-[-1px_-1px_6px_0px_rgba(0,_0,_0,_0.1)]">
              <h2 className="text-3xl font-bold mb-6">Result</h2>
              <div className="bg-[#f5f5f5] w-full p-6 rounded-xl mb-6">
                <p className="text-xl font-semibold mb-4">Total Result</p>
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-full h-full rotate-[-90deg]">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="38"
                      stroke="#eee"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="38"
                      stroke="#7a4fc2"
                      strokeWidth="8"
                      strokeDasharray={2 * Math.PI * 38}
                      strokeDashoffset={
                        (1 - scorePercent / 100) * 2 * Math.PI * 38
                      }
                      fill="none"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-lg font-bold">{scorePercent}%</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Monthly Goal</p>
              </div>

              <div className="bg-[#f5f5f5] w-full p-6 rounded-xl text-left">
                <p className="text-xl font-semibold mb-4">Breakdown</p>
                {questions.map((q, i) => {
                  const userAnswer = answers[q.id];
                  const correct = userAnswer === q.correctAnswer;
                  return (
                    <div key={i} className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{q.id}</span>
                        <span>{correct ? "Passed" : "Failed"} </span>
                      </div>
                      <div className="w-full h-2 bg-purple-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#785491]"
                          style={{ width: correct ? "100%" : "50%" }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid w-full  gap-4">
                <button
                  onClick={() => setShowCorrections(true)}
                  className="border border-gray-500 px-6 py-4 rounded-md"
                >
                  view corrections
                </button>
                <button onClick={() => navigate("/dashboard")} className="bg-[#785491] text-white px-6 py-4 rounded-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExamPageMobile;
