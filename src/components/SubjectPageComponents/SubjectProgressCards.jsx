import { Avatar } from "@mui/material";
import React, { useState } from "react";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";

function SubjectProgressCards() {
  const [activeTab, setActiveTab] = useState("All");

  const courses = [
    {
      id: 1,
      title: "English Lang.",
      instructor: "Mr. John Paul",
      itemCount: 23,
      team: "First team",
      completion: 60,
    },
    {
      id: 2,
      title: "English Lang.",
      instructor: "Mr. John Paul",
      itemCount: 23,
      team: "First team",
      completion: 60,
    },
    {
      id: 3,
      title: "English Lang.",
      instructor: "Mr. John Paul",
      itemCount: 23,
      team: "First team",
      completion: 60,
    },
  ];

  return (
    <div className="mt-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button
            className={`font-medium ${
              activeTab === "All" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>
          <button
            className={`font-medium ${
              activeTab === "Active" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("Active")}
          >
            Active
          </button>
          <button
            className={`font-medium ${
              activeTab === "Completed" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("Completed")}
          >
            Completed
          </button>
        </div>
        <button className="text-gray-500 bg-[#f5f5f5] p-2 px-4 rounded-2xl font-medium">
          See all
        </button>
      </div>

      <div className="flex gap-4 flex-wrap">
        {courses.map((course) => (
          <div key={course.id} className="sm:w-1/2 lg:w-1/4 ">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="bg-[#F5F5F5]  rounded-xl p-6 ">
      <div className="flex gap-4 items-center mb-4">
        <Avatar />
        <div>
          <h3 className="font-bold">{course.title}</h3>
          <p className="text-gray-500 text-sm">{course.instructor}</p>
        </div>
      </div>

      <div className="flex justify-self-center space-x-2 bg-[#dcdcdc] text-[#656565] rounded-full p-2 mb-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full"
          >
            <CreateNewFolderOutlinedIcon />
            <span className="text-sm">{course.itemCount}</span>
          </div>
        ))}
      </div>

      <p className="text-[#785491] font-medium mb-2">{course.team}</p>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-sm font-medium text-gray-500">
              Completed:{" "}
              <span className="text-green-500"> {course.completion}%</span>
            </span>
          </div>
        </div>
        <div className="flex h-2 mb-4 overflow-hidden rounded bg-green-100">
          <div
            style={{ width: `${course.completion}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SubjectProgressCards;
