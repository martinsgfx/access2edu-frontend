import { LogOut } from "lucide-react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function VideoRecord() {
  const [activeSubject, setActiveSubject] = useState("Mathematics");
  const [expandedSubject, setExpandedSubject] = useState("Mathematics");
  const [videoProgress, setVideoProgress] = useState(50);
  const [videoTime, setVideoTime] = useState("15:11");

  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      progress: 75,
      topics: [
        { id: 101, name: "Intro. to probability", completed: true },
        { id: 102, name: "Stat. models", completed: true },
        { id: 103, name: "Principles of binomial law", completed: false },
        { id: 104, name: "Principles of normal law", completed: false },
      ],
    },
    {
      id: 2,
      name: "Eng. Language",
      progress: 60,
      topics: [
        { id: 201, name: "Parts of speech", completed: true },
        { id: 202, name: "Sentence structure", completed: false },
        { id: 203, name: "Essay writing", completed: false },
        { id: 204, name: "Comprehension", completed: false },
      ],
    },
    {
      id: 3,
      name: "Physics",
      progress: 40,
      topics: [
        { id: 301, name: "Mechanics", completed: true },
        { id: 302, name: "Waves", completed: false },
        { id: 303, name: "Electricity", completed: false },
        { id: 304, name: "Modern physics", completed: false },
      ],
    },
    {
      id: 4,
      name: "Chemistry",
      progress: 25,
      topics: [
        { id: 401, name: "Atomic structure", completed: true },
        { id: 402, name: "Chemical bonding", completed: false },
        { id: 403, name: "Organic chemistry", completed: false },
        { id: 404, name: "Acids and bases", completed: false },
      ],
    },
    {
      id: 5,
      name: "Biology",
      progress: 50,
      topics: [
        { id: 501, name: "Cell biology", completed: true },
        { id: 502, name: "Genetics", completed: false },
        { id: 503, name: "Ecology", completed: false },
        { id: 504, name: "Human anatomy", completed: false },
      ],
    },
    {
      id: 6,
      name: "Civic Edu.",
      progress: 30,
      topics: [
        { id: 601, name: "Democracy", completed: true },
        { id: 602, name: "Human rights", completed: false },
        { id: 603, name: "Citizenship", completed: false },
        { id: 604, name: "National values", completed: false },
      ],
    },
    {
      id: 7,
      name: "Computer",
      progress: 15,
      topics: [
        { id: 701, name: "Basic computing", completed: true },
        { id: 702, name: "Programming", completed: false },
        { id: 703, name: "Databases", completed: false },
        { id: 704, name: "Web development", completed: false },
      ],
    },
  ];

  const toggleSubject = (subjectName) => {
    if (expandedSubject === subjectName) {
      setExpandedSubject(null);
    } else {
      setExpandedSubject(subjectName);
      setActiveSubject(subjectName);
    }
  };

  // Component for circular progress bar
  const CircularProgress = ({ progress }) => {
    const radius = 10;
    const strokeWidth = 3;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="inline-flex items-center justify-center w-6 h-6">
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
      </div>
    );
  };

  return (
    <div className="md:p-15 p-6">
      <h1 className="text-3xl font-bold mb-6">Your Subject</h1>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-purple-200 rounded-full mb-6">
        <div
          className="h-full bg-[#785491] rounded-full"
          style={{ width: "65%" }}
        ></div>
      </div>

      {/* Download Button */}
      <button className="flex items-center bg-[#ffeeb4] text-black px-4 py-2 rounded mb-6">
        <span className="mr-2">Download all Records</span>
        <LogOut />
      </button>

      <div className="flex flex-col md:flex-row gap-6">

        {/* Subject List with Dropdowns */}
        <div className="w-full md:w-1/3 space-y-1 bg-[#f5f5f5] p-2 rounded-2xl">
          {subjects.map((subject) => (
            <div key={subject.id} className="mb-1">

              {/* Subject Header */}
              <button
                className={`flex items-center justify-between w-full p-4 rounded-lg ${
                  activeSubject === subject.name
                    ? "bg-[#e7def0]"
                    : "bg-[#e7def0]"
                }`}
                onClick={() => toggleSubject(subject.name)}
              >
                <div className="flex items-center">
                  <CircularProgress progress={subject.progress} />
                  <span className="font-medium ml-3">{subject.name}</span>
                </div>

                <div
                  className={`w-4 h-4 flex items-center transform ${
                    expandedSubject === subject.name ? "rotate-180" : ""
                  }`}
                >
                  <KeyboardArrowDownIcon />
                </div>
              </button>

              {/* Subject Topics (Dropdown) */}
              {expandedSubject === subject.name && (
                <div className="bg-[#f3eff8] rounded-b-lg overflow-hidden">
                  {subject.topics.map((topic) => (
                    <div
                      key={topic.id}
                      className="flex items-center justify-between p-4 hover:bg-[#e7def0] cursor-pointer"
                    >
                      <span className="text-gray-700">{topic.name}</span>
                      <div
                        className={`w-4 h-4 rounded-full ${
                          topic.completed
                            ? "bg-green-500"
                            : "border border-gray-300"
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Video Player */}
        <div className="w-full md:w-2/3">
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
            <div className="relative pb-9/16">
              <div className="bg-gray-800 w-full h-80 relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Mathematics video lesson"
                  className="w-full h-full object-cover"
                />
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                  <div className="flex justify-between text-white text-sm mb-1">
                    <span>{videoTime}</span>
                    <span>{videoTime}</span>
                  </div>
                  <div className="w-full h-1 bg-gray-500 rounded">
                    <div
                      className="h-full bg-red-500 rounded"
                      style={{ width: `${videoProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-between">
            <button className="border border-gray-300 px-6 py-2 rounded-lg">
              Lesson notes
            </button>
            <button className="bg-[#563a68] text-white px-8 py-2 rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoRecord;
