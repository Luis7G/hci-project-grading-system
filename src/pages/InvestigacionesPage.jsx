import React from "react";
import Sidebar from "../components/Sidebar";
import MainContentInvestigaciones from "../components/MainContentInvestigaciones";

function TeachersPage() {
  return (
    <div className="overflow-hidden bg-slate-50">
      <div className="flex gap-3 max-md:flex-col">
        <Sidebar />
        <MainContentInvestigaciones />
      </div>
    </div>
  );
}

export default TeachersPage;
