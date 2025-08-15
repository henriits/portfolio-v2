import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GlassCard } from "./ui/GlassCard";

const sections = ["Hero", "About", "Experience", "Skills", "Work", "Contact"];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger for all screen sizes */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex flex-col justify-center items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-md"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white my-1 transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Sidebar Panel */}
      {open && (
        <GlassCard className="fixed top-0 left-0 w-2/4 md:w-1/4 lg:w-1/5 h-full z-40 text-white">
          <div className="flex flex-col justify-start items-start p-18 space-y-6 w-full">
            {sections.map((section) => (
              <NavLink
                key={section}
                to={`/${section.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-semibold transition ${
                    isActive ? "text-blue-400" : "hover:text-blue-300"
                  }`
                }
              >
                {section}
              </NavLink>
            ))}
          </div>
        </GlassCard>
      )}
    </>
  );
};

export default Sidebar;
