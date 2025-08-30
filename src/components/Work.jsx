import React from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const iconMap = {
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  tailwindcss:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  framer:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
};

const projects = [
  {
    title: "Habit Tracker",
    description:
      "The Habit Tracker App is a Vue.js application designed to help users track their daily habits.",
    image:
      "https://ucarecdn.com/22212306-252e-46bb-83b0-8bc45d77b69c/habittracker.png",
    tech: ["javascript", "vite", "vue"],
    github: "https://github.com/henriits/habit_tracker_vue",
    live: "",
  },
  {
    title: "Discord Bot",
    description:
      "A simple bot that congratulates users on completing a sprint.",
    image:
      "https://ucarecdn.com/d5643832-70d0-4f47-a189-b241a9800964/discordBot.png",
    tech: ["typescript", "postgresql", "express", "nodejs"],
    github: "https://github.com/henriits/discordBot",
    live: "",
  },
  {
    title: "Budget Planner",
    description:
      "This Vue.js application provides a comprehensive financial dashboard with dark mode and multi-currency support.",
    image:
      "https://ucarecdn.com/60f5b7dc-25e6-4730-bccb-55f00de07421/expensetracker.png",
    tech: ["typescript", "vue"],
    github: "https://github.com/henriits/budget_planner_vue_ts",
    live: "https://henriits.github.io/budget_planner_vue_ts/",
  },
  {
    title: "Portfolio",
    description:
      "A dynamic developer portfolio built with Next.js 14+, featuring a hidden admin dashboard for content management.",
    image:
      "https://ucarecdn.com/c298718f-369b-426e-af47-cfbdcb828d1e/portfolio.png",
    tech: [
      "javascript",
      "react",
      "nextjs",
      "tailwindcss",
      "typescript",
      "framer",
      "postgresql",
    ],
    github: "https://github.com/henriits/developer_portfolio_nextjs",
    live: "https://www.henritsarents.online/",
  },
  {
    title: "Task Manager",
    description:
      "Simple application with calendar views (day, week, month) to manage upcoming tasks.",
    image:
      "https://ucarecdn.com/a9f16532-0096-45ee-8410-ed083ffb509d/taskmanager.png",
    tech: ["vite", "react", "typescript", "tailwindcss"],
    github: "https://github.com/henriits/task-manager",
    live: "https://henriits.github.io/task-manager/",
  },
  {
    title: "Event Planner",
    description:
      "A React + TypeScript app to track events and countdowns in a calendar format.",
    image:
      "https://ucarecdn.com/2ea019d1-5e43-4a9f-9680-d3799957157d/eventplanner.png",
    tech: ["typescript", "react", "tailwindcss"],
    github: "https://github.com/henriits/date_counter",
    live: "https://date-counter-pi.vercel.app/",
  },
  {
    title: "Music Player",
    description:
      "A simple audio player built with React and Zustand, featuring TypeScript for maintainability.",
    image:
      "https://ucarecdn.com/2281a412-40cd-4a79-96f5-2f401285a5ff/musicplayer.png",
    tech: ["react", "typescript", "css3"],
    github: "https://github.com/henriits/music-player",
    live: "https://music-player-topaz-five.vercel.app/",
  },
  {
    title: "Discord Clone",
    description: "Real-time chat application built with React and WebSockets.",
    image:
      "https://ucarecdn.com/8c43280b-81c0-445c-8fb2-56cc7230be7f/discordclone.png",
    tech: ["react", "javascript", "css3"],
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

        <div className="absolute bottom-6 right-6 left-6 flex justify-between items-center flex-wrap gap-y-3">
          <div className="flex flex-wrap gap-4 text-3xl text-white">
            {project.tech.map((key, i) => {
              const src = iconMap[key];
              if (!src) return null;

              return (
                <div
                  key={i}
                  title={key}
                  className="p-2 bg-white/10 rounded-md text-2xl text-white"
                >
                  <img
                    src={src}
                    alt={key}
                    width={34}
                    height={34}
                    className="text-white"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-3">
            <div className="flex items-center gap-2 p-2 bg-white/10 rounded-md">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-base"
              >
                <FaGithub size={34} className="text-blue-400" />
              </a>
            </div>
            {project.live && (
              <div className="flex items-center gap-2 p-2 bg-white/10 rounded-md">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline text-base"
                >
                  <BiLinkExternal size={34} className="text-green-400" />
                </a>
              </div>
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
