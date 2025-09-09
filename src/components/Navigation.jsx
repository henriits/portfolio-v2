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
      <GlassCard className="pt-7 pb-2  px-7 rounded-full border border-white/10">
        <ul className="flex gap-4 items-center justify-center">
          {navItems.map(({ href, icon, label }) => (
            <motion.li
              key={href}
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              className="group"
            >
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `p-2 flex flex-col justify-center items-center w-14 h-14 rounded-full transition-colors ${
                    isActive ? "text-blue-400" : "text-white"
                  }`
                }
                aria-label={label}
              >
                {({ isActive }) => (
                  <>
                    <motion.div
                      animate={{ scale: isActive ? 1.4 : 1 }}
                      whileHover={{ scale: 1.4 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="flex items-center justify-center"
                    >
                      <Icon icon={icon} width="24" height="24" />
                    </motion.div>
                    <motion.span
                      variants={{
                        rest: { opacity: 0, y: 6 },
                        hover: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-[22px] text-gray-200 mt-px leading-none"
                    >
                      {label}
                    </motion.span>
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
};

export default Navigation;
