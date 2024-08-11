import React from "react";
import Sidebar from "../components/Sidebar";
import MainContentMaterias from "../components/MainContentMaterias";

function TeachersPage() {
  return (
    <div className="overflow-hidden bg-slate-50">
      <div className="flex gap-3 max-md:flex-col">
        <Sidebar />
        <MainContentMaterias />
      </div>
    </div>
  );
}

export default TeachersPage;
