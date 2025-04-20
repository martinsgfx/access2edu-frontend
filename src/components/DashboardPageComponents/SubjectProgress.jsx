import React, { useState} from 'react';

function SubjectProgress() {
    // demo subjects
    const [subjects, setSubjects] = useState([
      { name: "Eng", progress: 68 },
      { name: "Maths", progress: 48 },
      { name: "Physics", progress: 26 },
      { name: "Computer", progress: 84 },
      { name: "Biology", progress: 8 }
    ]);
    
    return (
      <div className="bg-gray-50 rounded-3xl p-8 max-w-md  mt-12 shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-10">Your subjects</h2>
        
        <div className="space-y-6">
          {subjects.map((subject, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="w-1/4 text-lg font-medium">{subject.name}</div>
              <div className="w-1/2 bg-purple-100 rounded-full h-3 relative">
                <div 
                  className="bg-[#785491] h-3 rounded-full"
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
              <div className="w-1/4 text-right text-lg font-medium">{subject.progress}%</div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center mt-8 space-x-8">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-100 rounded-full mr-2"></div>
            <span>Your goal</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#785491] rounded-full mr-2"></div>
            <span>Progress</span>
          </div>
        </div>
      </div>
    );
  }

export default SubjectProgress;