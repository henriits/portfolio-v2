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
    <GlassCard className="w-full p-4 md:p-6 text-white space-y-4">
      <img
        src={project.image || "/images/placeholder.png"}
        alt={project.title}
        className="rounded-lg w-full h-40 md:h-48 object-cover bg-gray-800"
      />
      <h3 className="text-xl md:text-2xl font-semibold">{project.title}</h3>
      <p className="text-sm md:text-base text-gray-300">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
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
      <div className="flex space-x-6 pt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-sm md:text-lg"
        >
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline text-sm md:text-lg"
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
    <section className="fixed inset-0 flex flex-col items-center justify-center px-4 py-8 z-30 w-screen h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
        My Work
      </h2>
      <div className="w-full max-w-5xl space-y-10 overflow-y-auto max-h-[80vh] scrollbar-custom px-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
