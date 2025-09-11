import React from "react";
import { GlassCard } from "../components/ui/GlassCard";

const About = () => {
  return (
    <section className="fixed inset-0 overflow-y-auto scrollbar-custom  flex items-center justify-center bg-cover bg-center pt-36 ">
      <div className=" max-w-6xl">
        <GlassCard className="text-white p-6 ">
          <h2 className=" text-blue-300 text-2xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg text-center">
            Crafting Interfaces with Purpose & Passion
          </h2>
          <br />
          <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow ">
            I'm{" "}
            <span className="text-blue-400 font-semibold">Henri Tsarents</span>,
            a front-end developer who discovered coding in <strong>2022</strong>{" "}
            through a Python course at{" "}
            <span className="text-blue-400 font-semibold">
              Software Development Academy
            </span>
            . What began as curiosity quickly evolved into a passion for
            building digital experiences.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow">
            In <strong>2023</strong>, I enrolled in{" "}
            <span className="text-blue-400 font-semibold">
              Turing College’s Web Development program
            </span>
            , where I immersed myself in{" "}
            <span className="text-blue-400 font-semibold">
              full-stack development
            </span>
            . I gained hands-on experience with modern technologies across the
            stack—working with{" "}
            <span className="font-semibold">front-end frameworks</span>,{" "}
            <span className="font-semibold">back-end systems</span>, and{" "}
            <span className="font-semibold">databases</span> to build scalable,
            responsive applications.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow">
            Today, I specialize in{" "}
            <span className="text-purple-400 font-semibold">React</span>,{" "}
            <span className="text-indigo-300 font-semibold">Tailwind CSS</span>,
            and <span className="text-pink-300 font-semibold">Motion</span>,
            crafting sleek, animated interfaces that are both intuitive and
            performance-driven.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow">
            Beyond the screen, I’m a traveler, photographer, hands-on
            creator—and a gym enthusiast. Whether I’m lifting weights or lifting
            ideas into code, I thrive on progress, creativity, and discipline.
          </p>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow">
            I approach development with curiosity and precision, transforming
            concepts into engaging, responsive experiences that users love.
          </p>

          <p className="text-lg md:text-xl text-blue-300 font-medium drop-shadow p-4 text-center">
            Let’s connect and build something extraordinary.
          </p>
        </GlassCard>
      </div>
    </section>
  );
};

export default About;
