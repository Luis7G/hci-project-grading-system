import React from "react";
import Sidebar from "../components/Sidebar";
import MainContentHome from "../components/MainContentInicio";

function HomePage() {
  return (
    <div className="overflow-hidden bg-slate-50">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <MainContentHome />
      </div>
    </div>
  );
}

export default HomePage;
