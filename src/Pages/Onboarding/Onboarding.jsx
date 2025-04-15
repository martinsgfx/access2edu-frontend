import React from "react";
import OnboardingWeb from "./OnboardingWeb";
import OnboardingMobile from "./OnboardingMobile";

function Onboarding() {
  return (
    <div>
      <div className="webView">
        <OnboardingWeb />
      </div>
      <div className="mobileView">
        <OnboardingMobile />
      </div>
    </div>
  );
}

export default Onboarding;
