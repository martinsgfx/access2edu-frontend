import React from "react";
import AssessmentWeb from "./AssessmentWeb";
import AssessmentMobile from "./AssessmentMobile";

function Assessment() {
  return (
    <div>
      <div className="webView">
        <AssessmentWeb />
      </div>
      <div className="mobileView">
        <AssessmentMobile />
      </div>
    </div>
  );
}

export default Assessment;
