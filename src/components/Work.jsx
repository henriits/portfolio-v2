import React from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "Habit Tracker",
    description: "Track daily habits with visual progress and reminders.",
    image: "",
    tech: ["logos:react", "logos:typescript", "logos:tailwindcss"],
    github: "https://example.com",
    live: "https://example.com",
  },
  {
    title: "Discord Bot",
    description: "Custom bot for moderation, music, and automation.",
    imagage: "",
    tech: ["logos:nodejs", "logos:javascript"],
    github: "https://example.com",
    live: "https://example.com",
  },
  {
    title: "Budget Planner",
    description: "Plan monthly budgets with charts and expense tracking.",
    image: "",
    tech: ["logos:vue", "logos:typescript", "logos:vite"],
    github: "https://example.com",
    live: "https://example.com",
  },
  {
    title: "Discord Bot",
    description: "Custom bot for moderation, music, and automation.",
    imagage: "",
    tech: ["logos:nodejs", "logos:javascript"],
    github: "https://example.com",
    live: "https://example.com",
  },
  {
    title: "Budget Planner",
    description: "Plan monthly budgets with charts and expense tracking.",
    image: "",
    tech: ["logos:vue", "logos:typescript", "logos:vite"],
    github: "https://example.com",
    live: "https://example.com",
  },
];

const Work = () => {
  return (
    <section className="h-screen w-full overflow-y-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <GlassCard
            key={index}
            className="p-4 hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-2 mb-4">
              {project.tech.map((icon, i) => (
                <Icon
                  key={i}
                  icon={icon}
                  width="24"
                  height="24"
                  className="text-white"
                />
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Live
                </a>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Work;
