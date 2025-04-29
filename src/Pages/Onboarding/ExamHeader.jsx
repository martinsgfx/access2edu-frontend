import React from "react";

function ExamHeader({ duration, currentTime }) {
  return (
    <div className="text-center  text-[#3d3d3d] mb-6 ">
      <h1 className="text-5xl font-bold pb-4 mt-10">Assessments</h1>
      <p className="text-[#3d3d3d] mt-2 text-2xl  mx-auto">
        This assessment will evaluate both your technical and soft skills to <br />
        create a comprehensive profile.
      </p>
      <div className="m-6 ml-12 flex justify-between">
        <p className="text-2xl">
          <strong>Duration:</strong> {duration}
        </p>
        <p className="text-2xl text-red-600">
          <strong>Time:</strong> {currentTime}
        </p>
      </div>
    </div>
  );
}

export default ExamHeader;
