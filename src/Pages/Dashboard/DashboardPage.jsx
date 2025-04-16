import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="p-15">
      {/* Name Bar */}
      <section className="p-6 bg-[#d5c4e3] rounded-2xl flex flex-col content-between">
        <div className="pb-12">
          <h1 className="font-bold text-2xl pb-4">Stanley Emma</h1>
          <p>Welcome Back</p>
        </div>

        <div
          className="flex gap 2 cursor-pointer"
          onClick={() => navigate("/select-classes")}
        >
          <p>Go back to courses</p>{" "}
          <ArrowForwardRoundedIcon style={{ color: "#795492" }} />
        </div>
      </section>

      <div className="flex mt-8 w-full">
        <section  className="basis-[60%]">
          <section>Classes</section>
          <section>Performance</section>
          <section>Linked Teachers</section>
        </section>
        <section className="basis-[40%]">
          <section>Calender</section>
          <section>Activities</section>
          <section>Your Subjects</section>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
