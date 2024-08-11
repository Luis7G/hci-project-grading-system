import React from "react";
import ArrowActive from "../assets/images/arrow-active.png";
import ArrowNOActive from "../assets/images/arrow-NO-active.png";

function SidebarItem({ icon, text, active, onClick }) {
  const baseClasses =
    "flex gap-5 justify-between items-center p-2.5 mt-10 rounded-lg cursor-pointer";
  const activeClasses = active ? "text-white bg-indigo-600" : "bg-white";

  return (
    <div className={`${baseClasses} ${activeClasses}`} onClick={onClick}>
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch aspect-[0.85] w-[26px]"
      />
      <span className="grow shrink self-stretch my-auto text-lg">{text}</span>
      <img
        loading="lazy"
        src={active ? ArrowActive : ArrowNOActive}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
    </div>
  );
}

export default SidebarItem;
