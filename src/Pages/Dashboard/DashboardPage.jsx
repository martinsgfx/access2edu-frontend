import React from "react";
import ClassCard from "../../components/DashboardPageComponents/ClassCard";
import DashboardPageHeader from "../../components/DashboardPageComponents/DashboardPageHeader"
import PerformanceCard from "../../components/DashboardPageComponents/PerformanceCard";
import TeacherCard from "../../components/DashboardPageComponents/TeacherCard";
import Calendar from "../../components/DashboardPageComponents/Calendar";
import ActivityList from "../../components/DashboardPageComponents/ActivityList";
import SubjectProgress from "../../components/DashboardPageComponents/SubjectProgress"

function DashboardPage() {
  

  return (
    <div className="md:p-15 p-8">
      {/* Name Bar */}
      <DashboardPageHeader />   

      <div className="md:flex grid md:mt-8 mt-8 w-full gap-16 ">
        <section  className="md:basis-[60%]">
          <ClassCard />
          <PerformanceCard />
          <TeacherCard />
        </section>
        <section className="md:basis-[40%] bg-[#e7def0] rounded-3xl md:p-8 p-4">
          <Calendar />
          <ActivityList />
          <SubjectProgress />
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
