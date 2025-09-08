import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GlassCard } from "./ui/GlassCard";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { name: "Hero", icon: "mdi:home" },
  { name: "About", icon: "mdi:account" },
  { name: "Experience", icon: "mdi:briefcase" },
  { name: "Skills", icon: "mdi:star-circle" },
  { name: "Work", icon: "mdi:code-tags" },
  { name: "Contact", icon: "mdi:email" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
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

      {/* Sidebar Panel with animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-2/4 md:w-1/4 lg:w-1/5 h-full z-40"
          >
            <GlassCard className="h-full text-white">
              <div className="flex flex-col justify-start items-start px-8 py-16 space-y-6 w-full">
                {sections.map(({ name, icon }) => (
                  <NavLink
                    key={name}
                    to={`/${name.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center gap-3 text-lg font-semibold transition-all duration-300 relative ${
                        isActive ? "text-blue-400" : "hover:text-blue-300"
                      }`
                    }
                  >
                    <Icon icon={icon} width="24" height="24" />
                    <span>{name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </NavLink>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
