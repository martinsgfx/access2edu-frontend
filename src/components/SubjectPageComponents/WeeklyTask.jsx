import { useState } from "react";

function WeeklyTask() {
  const [activeTab, setActiveTab] = useState("Assigments");

  const tasks = [
    {
      id: 1,
      subject: "English Language",
      date: "20 Jan 2025, 1:30 PM",
      duration: "48 hr 12 m",
    },
    {
      id: 2,
      subject: "English Language",
      date: "20 Jan 2025, 1:30 PM",
      duration: "48 hr 12 m",
    },
    {
      id: 3,
      subject: "English Language",
      date: "20 Jan 2025, 1:30 PM",
      duration: "48 hr 12 m",
    },
  ];

  return (
    <div className="md:p-6 p-3 md:w-1/2">
      <h1 className="text-2xl font-bold mb-4">Weekly Task</h1>

      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-6">
          {["Assigments", "Results", "Schedules"].map((tab) => (
            <button
              key={tab}
              className={`pb-1 ${
                activeTab === tab
                  ? "text-black font-medium border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="text-gray-500 bg-[#f5f5f5] p-2 px-4 rounded-2xl font-medium">
          See all
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-6 rounded-xl flex justify-between items-center bg-[#f3eff8]"
          >
            <div className="flex gap-8">
              <div>
                <h3 className="font-bold md:text-lg text-sm mb-4">{task.subject}</h3>
                <p className="text-gray-600 md:text-xl text-sm">{task.date}</p>
              </div>

              <div className="grid items-center">
                <p className="text-sm text-gray-500 mb-4">Duration</p>
                <p className="text-sm">{task.duration}</p>
              </div>
            </div>

            <div className="flex items-center">
              <button className="border bg-[#f5f5f5] border-gray-300 rounded-full px-4 py-2 text-sm">
                View Question
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyTask;
