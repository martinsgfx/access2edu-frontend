import React from "react";
import SubjectProgressCards from "../../components/SubjectPageComponents/SubjectProgressCards";
import QuizCard from "../../components/SubjectPageComponents/QuizCard";
import GroupCard from "../../components/SubjectPageComponents/GroupCard";
import WeeklyTask from "../../components/SubjectPageComponents/WeeklyTask";

function SubjectsPage() {
  return (
    <div className="p-15">
      <h1 className="text-3xl font-bold mb-6">My Subjects</h1>
      <SubjectProgressCards />
      <div className="flex  mt-6 mb-6 gap-4">
        <div className="basis-[50%]">
          <QuizCard />
        </div>
        <div className="basis-[50%]">
          <GroupCard />
        </div>
      </div>
      <div>
        <WeeklyTask />
      </div>
    </div>
  );
}

export default SubjectsPage;
