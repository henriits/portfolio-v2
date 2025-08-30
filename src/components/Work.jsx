import React from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Habit Tracker",
    description:
      "The Habit Tracker App is a Vue.js application designed to help users track their daily habits. Users can view and manage their habits for specific dates, mark habits as completed, and track their progress over time.",
    image:
      "https://ucarecdn.com/22212306-252e-46bb-83b0-8bc45d77b69c/habittracker.png",
    tech: ["logos:javascript", "logos:vite", "logos:vue"],
    github: "https://github.com/henriits/habit_tracker_vue",
    live: "",
  },
  {
    title: "Discord Bot",
    description:
      "A simple bot that congratulates users on completing a sprint.",
    image:
      "https://ucarecdn.com/d5643832-70d0-4f47-a189-b241a9800964/discordBot.png",
    tech: [
      "logos:typescript",
      "logos:postgresql",
      "logos:express",
      "logos:nodejs",
    ],
    github: "https://github.com/henriits/discordBot",
    live: "",
  },
  {
    title: "Budget Planner",
    description:
      "This Vue.js application provides a comprehensive financial dashboard that allows users to track their transactions, view balances, and analyze their income and expenses through interactive charts. It features a dark mode toggle and supports multiple currencies.",
    image:
      "https://ucarecdn.com/60f5b7dc-25e6-4730-bccb-55f00de07421/expensetracker.png",
    tech: ["logos:typescript", "logos:vue"],
    github: "https://github.com/henriits/budget_planner_vue_ts",
    live: "https://henriits.github.io/budget_planner_vue_ts/",
  },
  {
    title: "Portfolio",
    description:
      "A dynamic developer portfolio built with Next.js 14+, featuring a hidden admin dashboard for content management. This full-stack application allows developers to showcase their work while maintaining full control over their content through secure CRUD operations using Server Actions.",
    image:
      "https://ucarecdn.com/c298718f-369b-426e-af47-cfbdcb828d1e/portfolio.png",
    tech: [
      "logos:javascript",
      "logos:react",
      "logos:nextjs",
      "logos:tailwindcss",
      "logos:typescript",
      "logos:framer",
      "logos:postgresql",
    ],
    github: "https://github.com/henriits/developer_portfolio_nextjs",
    live: "https://www.henritsarents.online/",
  },
  {
    title: "Task Manager",
    description:
      "Simple application allows users to overview the tasks that are nearby in future, includes calendar view with (day, week, month).",
    image:
      "https://ucarecdn.com/a9f16532-0096-45ee-8410-ed083ffb509d/taskmanager.png",
    tech: [
      "logos:vite",
      "logos:react",
      "logos:typescript",
      "logos:tailwindcss",
    ],
    github: "https://github.com/henriits/task-manager",
    live: "https://henriits.github.io/task-manager/",
  },
  {
    title: "Event Planner",
    description:
      "This project is a simple event planner application built with React, TypeScript, and Vite. It allows users to input events with start and end dates, view them in a calendar format, and see the time left until the events start.",
    image:
      "https://ucarecdn.com/2ea019d1-5e43-4a9f-9680-d3799957157d/eventplanner.png",
    tech: ["logos:typescript", "logos:react", "logos:tailwindcss"],
    github: "https://github.com/henriits/date_counter",
    live: "https://date-counter-pi.vercel.app/",
  },
  {
    title: "Music Player",
    description:
      "A simple audio player built with React and Zustand for state management. This application allows users to play, pause, skip, and manage their favorite songs, providing a smooth and enjoyable audio experience. The project is developed using TypeScript for type safety and better maintainability.",
    image:
      "https://ucarecdn.com/2281a412-40cd-4a79-96f5-2f401285a5ff/musicplayer.png",
    tech: ["logos:react", "logos:typescript", "logos:css3"],
    github: "https://github.com/henriits/music-player",
    live: "https://music-player-topaz-five.vercel.app/",
  },
  {
    title: "Discord Clone",
    description: "Real-time chat application built with React and WebSockets.",
    image:
      "https://ucarecdn.com/8c43280b-81c0-445c-8fb2-56cc7230be7f/discordclone.png",
    tech: ["logos:react", "logos:javascript", "logos:css3"],
    github: "https://github.com/henriits/mini-discord-clone",
    live: "",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-screen flex items-center justify-center"
    >
      <GlassCard className="relative w-full max-w-3xl p-6 text-white flex flex-col min-h-[500px] lg:min-h-[600px] h-auto">
        <div className="flex-grow space-y-4 overflow-auto pb-24">
          <img
            src={project.image || "/images/placeholder.png"}
            alt={project.title}
            className="rounded-lg w-full h-64 object-cover bg-gray-800"
          />
          <h3 className="text-2xl font-semibold text-center">
            {project.title}
          </h3>
          <p className="text-base text-gray-300 text-left">
            {project.description}
          </p>
        </div>

        {/* Bottom-right pinned section with split layout */}
        <div className="absolute bottom-6 right-6 left-6 flex justify-between items-center flex-wrap">
          {/* Tech icons on the left */}
          <div className="flex gap-2 pt-2">
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

          {/* Links on the right */}
          <div className="flex gap-4 pt-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-base"
            >
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline text-base"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section className="fixed inset-0 overflow-y-auto scrollbar-custom z-30">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg pt-8">
        My Work
      </h2>
      <div className="flex flex-col items-center gap-12 px-4 pb-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
