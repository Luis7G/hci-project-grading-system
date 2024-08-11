import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import estudiantesActiveIcon from "../assets/images/estudiantes-logo-active.png";
import estudiantesInactiveIcon from "../assets/images/estudiantes-logo-NO-active.png";
import investigacionesActiveIcon from "../assets/images/investigaciones-logo-active.png";
import investigacionesInactiveIcon from "../assets/images/investigaciones-logo-NO-active.png";
import docentesActiveIcon from "../assets/images/docente-logo-active.png";
import docentesInactiveIcon from "../assets/images/docente-logo-NO-active.png";
import materiasActiveIcon from "../assets/images/materias-logo-active.png";
import materiasInactiveIcon from "../assets/images/materias-logo-NO-active.png";
import homeIcon from "../assets/images/home-icon.png"; // Logo para el Sistema Académico

const sidebarItems = [
  {
    id: "estudiantes",
    path: "/estudiantes",
    activeIcon: estudiantesActiveIcon,
    inactiveIcon: estudiantesInactiveIcon,
    text: "Estudiantes",
  },
  {
    id: "investigaciones",
    path: "/investigaciones",
    activeIcon: investigacionesActiveIcon,
    inactiveIcon: investigacionesInactiveIcon,
    text: "Investigaciones",
  },
  {
    id: "docentes",
    path: "/teachers",
    activeIcon: docentesActiveIcon,
    inactiveIcon: docentesInactiveIcon,
    text: "Docentes",
  },
  {
    id: "materias",
    path: "/materias",
    activeIcon: materiasActiveIcon,
    inactiveIcon: materiasInactiveIcon,
    text: "Materias",
  },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = sidebarItems.find((item) => item.path === currentPath);
    if (activeItem) {
      setActiveSection(activeItem.id);
    } else {
      setActiveSection(null); // Ninguna sección activa si no coincide con ninguna ruta
    }
  }, [location]);

  const handleItemClick = (item) => {
    navigate(item.path);
  };

  return (
    <aside className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full max-h-[500px]">
      <nav className="flex flex-col grow text-sm font-medium tracking-normal text-center whitespace-nowrap text-slate-400">
        <div className="flex flex-col px-6 pt-5 w-full bg-white pb-[765px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] max-md:px-5 max-md:pb-24">
          <div className="flex gap-5 justify-between self-center max-w-full text-3xl font-semibold tracking-wide text-black w-[223px]">
            <img
              loading="lazy"
              src={homeIcon}
              alt=""
              className="object-contain shrink-0 my-auto aspect-square w-[47px]"
            />
            <h1>
              Sistema <br /> Académico
            </h1>
          </div>
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={
                activeSection === item.id ? item.activeIcon : item.inactiveIcon
              }
              text={item.text}
              active={activeSection === item.id}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
