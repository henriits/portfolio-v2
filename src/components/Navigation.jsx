import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";

const navItems = [
  { label: "Hero", href: "/hero", icon: "mdi:home" },
  { label: "About", href: "/about", icon: "mdi:account" },
  { label: "Experience", href: "/experience", icon: "mdi:briefcase" },
  { label: "Skills", href: "/skills", icon: "mdi:star-circle" },
  { label: "Work", href: "/work", icon: "mdi:code-tags" },
  { label: "Contact", href: "/contact", icon: "mdi:email" },
];

const Navigation = () => {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <GlassCard className="px-6 py-3 rounded-full border border-white/10">
        <ul className="flex gap-4 items-center justify-center">
          {navItems.map(({ href, icon, label }) => (
            <li key={href}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/20"
                  }`
                }
                aria-label={label}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Icon icon={icon} width="24" height="24" />
                </motion.div>
              </NavLink>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
};

export default Navigation;
