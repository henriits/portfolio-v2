import React from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Python", icon: "logos:python" },
      { name: "SQL", icon: "logos:postgresql" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Vue.js", icon: "logos:vue" },
      { name: "Zustand", icon: "devicon:zustand" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Django", icon: "logos:django" },
      { name: "Flask", icon: "mdi:flask" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "mdi:github" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "AWS", icon: "logos:aws" },
      { name: "CI/CD", icon: "logos:github-actions" },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Vitest", icon: "logos:vitest" },
      { name: "Playwright", icon: "logos:playwright" },
      { name: "TDD", icon: "mdi:test-tube" },
    ],
  },
  {
    category: "Design & UI",
    items: [
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Motion", icon: "mdi:motion" },
      { name: "Figma", icon: "logos:figma" },
      { name: "CSS Grid", icon: "mdi:grid-large" },
      { name: "Flexbox", icon: "mdi:view-grid" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", icon: "mdi:lightbulb-on-outline" },
      { name: "Attention to Detail", icon: "mdi:eye-outline" },
      { name: "Teamwork", icon: "mdi:account-group-outline" },
      { name: "Communication", icon: "mdi:message-outline" },
      { name: "Deadline-Oriented", icon: "mdi:calendar-clock" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center px-6 py-16 z-30 w-screen h-screen">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg text-center mb-12">
        Skills
      </h2>
      <div className="max-w-5xl w-full space-y-10 overflow-y-auto max-h-[70vh] scrollbar-custom px-2">
        {skills.map((group, index) => (
          <GlassCard key={index} className="p-6 text-white space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-300 drop-shadow text-center pb-6">
              {group.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {group.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center justify-center space-y-2 text-center cursor-pointer"
                  initial="rest"
                  whileHover="hover"
                  whileTap="hover"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon
                      icon={item.icon}
                      width="40"
                      height="40"
                      className="mx-auto text-white"
                    />
                  </motion.div>
                  <motion.span
                    variants={{
                      rest: { opacity: 0, y: -10 },
                      hover: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm md:text-base text-gray-200 drop-shadow pb-6"
                  >
                    {item.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
