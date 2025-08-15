import React from "react";
import { GlassCard } from "../components/ui/GlassCard";

const experiences = [
  {
    title: "Student",
    company: "Software Development Academy",
    location: "Remote",
    period: "2023 - 2024",
    description:
      "Attended lectures every weekend for 9 months, covering the theory behind basic programming principles, as well as an introduction to web development, Python, JavaScript, and Django.",
  },
  {
    title: "Student",
    company: "Turing College",
    location: "Remote",
    period: "2024 - 2025",
    description:
      "An intensive, project-based bootcamp that lasted for 14 months, covering topics in both frontend and backend development. It involved collaboration with others, performing project reviews, and resulted in an average score of 89.3 across 16 projects.",
  },
];

const Experience = () => {
  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center px-6 py-12 z-30 w-screen h-screen">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg mb-8 text-center">
        Experience
      </h2>
      <div className="max-w-4xl w-full h-[70vh] overflow-y-auto space-y-8 pr-2 scrollbar-custom">
        {experiences.map((exp, index) => (
          <GlassCard key={index} className="p-6 text-white space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold drop-shadow text-blue-300">
              {exp.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow">
              <strong>Company:</strong>{" "}
              <span className="text-blue-400 font-semibold">{exp.company}</span>
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow">
              <strong>Location:</strong> {exp.location}
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow">
              <strong>Period:</strong> {exp.period}
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow">
              {exp.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Experience;
