import React, { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { KeyboardArrowDown } from "@mui/icons-material";

function Result() {
  const [selectedClass, setSelectedClass] = useState("Class");
  const [selectedTerm, setSelectedTerm] = useState("Term");

  return (
    <div className="p-16">
      <div className="bg-[#f3eff8] p-6 rounded-xl ">
        <h1 className="text-2xl font-bold mb-4">Results</h1>
        <hr className="mb-6" />

        <div className="flex flex-col  md:flex-row md:justify-between md:items-start gap-6">
          {/* Left: Message */}
          <div className="basis-[70%]">
            <div className="bg-green-100 text-green-700 p-4 rounded-md flex items-center gap-3">
              <span className="text-xl">
                {" "}
                <ErrorIcon />{" "}
              </span>
              <p className="text-sm font-medium">No result to show for now</p>
            </div>
          </div>

          {/* Right: Dropdowns & Button */}
          <div className="flex basis-[30%] flex-col gap-4 w-full md:w-1/3">
            <div className="relative">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="appearance-none border border-[#563a68] text-[#563a68] font-semibold py-3 px-4 w-full rounded-md "
              >
                <option>JSS1</option>
                <option>JSS2</option>
                <option>JSS3</option>
                <option>SSS1</option>
                <option>SSS2</option>
                <option>SSS3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <KeyboardArrowDown />
              </div>
            </div>

            <div className="relative">
              <select
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
                className="appearance-none border border-[#563a68] text-[#563a68] font-semibold py-3 px-4 w-full rounded-md "
              >
                <option>Term</option>
                <option>First Term</option>
                <option>Second Term</option>
                <option>Third Term</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <KeyboardArrowDown />
              </div>
            </div>

            <button className="bg-[#bca0d2] hover:text-white text-[#563a68] font-semibold py-3 rounded-md hover:bg-[#563a68] transition">
              View Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
