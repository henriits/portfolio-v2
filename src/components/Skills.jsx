import React, { useRef } from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";

// Skill data
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

const SkillGroup = ({ group, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay }}
      className="flex items-center justify-center min-h-screen snap-start"
    >
      <GlassCard className="w-full max-w-3xl p-8 text-white space-y-6 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-300 drop-shadow text-center mb-8">
          {group.category}
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {group.items.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center space-y-2 text-center cursor-pointer"
              initial="rest"
              whileHover="hover"
              whileTap="hover"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon
                  icon={item.icon}
                  width="40"
                  height="40"
                  className="text-white"
                />
              </motion.div>
              <motion.span
                variants={{
                  rest: { opacity: 0, y: -10 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-base text-gray-200 drop-shadow"
              >
                {item.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="relative w-full h-full overflow-y-auto scrollbar-custom snap-y snap-mandatory">
      <div className="flex flex-col items-center justify-center">
        {skills.map((group, index) => (
          <SkillGroup key={index} group={group} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
