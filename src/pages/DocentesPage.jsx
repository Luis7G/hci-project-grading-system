import React from "react";
import Sidebar from "../components/Sidebar";
import MainContentTeacher from "../components/MainContentDocentes";

function TeachersPage() {
  return (
    <div className="overflow-hidden bg-slate-50">
      <div className="flex gap-3 max-md:flex-col">
        <Sidebar />
        <MainContentTeacher />
      </div>
    </div>
  );
}

export default TeachersPage;
