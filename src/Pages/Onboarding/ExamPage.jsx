import React from "react";
import ExamPageWeb from "./ExamPageWeb";
import ExamPageMobile from "./ExamPageMobile";

function ExamPage() {
  return (
    <div>
      <div className="webView">
        <ExamPageWeb />
      </div>
      <div className="mobileView">
        <ExamPageMobile />
      </div>
    </div>
  );
}


export default ExamPage;