import React from "react";

function LiveDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" }); // Jan
  const year = date.getFullYear();
  const weekday = date.toLocaleString("default", { weekday: "long" }); // Friday

  const formattedDate = `${day} ${month} ${year}. ${weekday}`;

  return (
    <div className="text-[#f5f5f5] font-light text-[10px]">
      {formattedDate}
    </div>
  );
}

export default LiveDate;