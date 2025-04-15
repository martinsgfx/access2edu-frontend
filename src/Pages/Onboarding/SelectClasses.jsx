import React from "react";
import SelectClassesWeb from "./SelectClassesWeb";
import SelectClassesMobile from "./SelectClassesMobile";


function SelectClasses() {
  return (
    <div>
      <div className="webView">
        <SelectClassesWeb />
      </div>
      <div className="mobileView">
        <SelectClassesMobile />
      </div>
    </div>
  );
}

export default SelectClasses;
