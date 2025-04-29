import React from "react";

function ExamHeaderMobile({ duration, currentTime }) {
  return (
    <div className="text-center text-[#3d3d3d] p-10 pl-5 pr-5">
      <h1 className="text-4xl font-bold pb-4">Assessments</h1>
      <p className="text-[#3d3d3d] text-[16px] mt-2 mb-4 ">
        This assessment will evaluate both your technical and soft skills to <br />
        create a comprehensive profile.
      </p>
      <div className="mt-4 text-left ">
        <p className="text-[16px] font-bold pb-4">
          <strong>Duration:</strong> {duration}
        </p>
        <p className="text-[16px] font-bold text-red-500">
          <strong>Time:</strong> {currentTime}
        </p>
      </div>
    </div>
  );
}

export default ExamHeaderMobile;
