import { NavLink } from "react-router-dom";
import { useState } from "react";

const sections = ["Hero", "About", "Experience", "Skills", "Work", "Contact"];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-24 bg-white/10 backdrop-blur-md border-r border-white/20 text-white flex-col items-center py-10 z-50">
        {sections.map((section) => (
          <NavLink
            key={section}
            to={`/${section.toLowerCase()}`}
            className={({ isActive }) =>
              `my-4 text-sm font-medium transition ${
                isActive ? "text-blue-400" : "hover:text-blue-300"
              }`
            }
          >
            {section}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
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

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed top-0 left-0 w-3/4 h-full bg-white/10 backdrop-blur-md border-r border-white/20 text-black flex flex-col items-start p-6 z-40">
          {sections.map((section) => (
            <NavLink
              key={section}
              to={`/${section.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `mb-4 text-lg font-semibold transition ${
                  isActive ? "text-blue-400" : "hover:text-blue-300"
                }`
              }
            >
              {section}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
