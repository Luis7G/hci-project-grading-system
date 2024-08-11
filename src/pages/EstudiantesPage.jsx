import React from "react";
import Sidebar from "../components/Sidebar";
import MainContentEstudiantes from "../components/MainContentEstudiantes";

function TeachersPage() {
  return (
    <div className="overflow-hidden bg-slate-50">
      <div className="flex gap-3 max-md:flex-col">
        <Sidebar />
        <MainContentEstudiantes />
      </div>
    </div>
  );
}

export default TeachersPage;
