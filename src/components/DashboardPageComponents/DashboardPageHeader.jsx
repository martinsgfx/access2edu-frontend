import { ArrowRight } from "lucide-react";
import React from "react";

function DashboardPageHeader() {
  return (
    <div className="bg-[#d6bce0] rounded-xl md:p-6 md:mb-6 p-3 mb-3">
      <h2 className="text-2xl  font-semibold  md:pb-4 pb-2 text-[#181818]">Stanley Emma</h2>
      <p className="text-sm text-[#464646]">Welcome back</p>
      <a
        href="#"
        className="text-sm flex gap-2 text-[#785491] underline mt-12 "
      >
        Go back to the courses <ArrowRight/>
      </a>
    </div>
  );
}

export default DashboardPageHeader;
