import React from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "Habit Tracker",
    description: "Track daily habits with visual progress and reminders.",
    image: "/images/habit-tracker.png",
    tech: ["logos:react", "logos:typescript", "logos:tailwindcss"],
    github: "https://example.com",
    live: "https://example.com",
  },
  {
    title: "Discord Bot",
    description: "Custom bot for moderation, music, and automation.",
    image: "/images/discord-bot.png",
    tech: ["logos:nodejs", "logos:javascript"],
    github: "https://example.com",
    live: "https://example.com",
  },
  {
    title: "Budget Planner",
    description: "Plan monthly budgets with charts and expense tracking.",
    image: "/images/budget-planner.png",
    tech: ["logos:vue", "logos:typescript", "logos:vite"],
    github: "https://example.com",
    live: "https://example.com",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <GlassCard className="w-full max-w-full px-4 md:px-8 lg:px-16">
      <img
        src={project.image || "/images/placeholder.png"}
        alt={project.title}
        className="rounded-lg mb-4 w-full h-40 md:h-48 lg:h-56 object-cover bg-gray-800"
      />
      <h3 className="text-2xl font-semibold text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-4 lg:text-lg">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((icon, i) => (
          <Icon
            key={i}
            icon={icon}
            width="28"
            height="28"
            className="text-white"
          />
        ))}
      </div>
      <div className="flex space-x-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-lg"
        >
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline text-lg"
          >
            Live
          </a>
        )}
      </div>
    </GlassCard>
  );
};

const Work = () => {
  return (
    <section className="h-screen w-full px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        My Work
      </h2>
      <div className=" space-y-10 overflow-y-auto max-h-[70vh] scrollbar-custom px-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
