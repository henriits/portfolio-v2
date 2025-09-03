import React from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { Icon } from "@iconify/react";

const contacts = [
  {
    name: "GitHub",
    icon: "mdi:github",
    url: "https://github.com/henriits",
  },
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    url: "https://www.linkedin.com/in/henri-tsarents/",
  },
  {
    name: "Instagram",
    icon: "mdi:instagram",
    url: "https://instagram.com/henriits",
  },
  {
    name: "Facebook",
    icon: "mdi:facebook",
    url: "https://facebook.com/henritsarents",
  },
];

const Contact = () => {
  return (
    <section className="fixed inset-0 flex items-center justify-center px-6 py-12 bg-cover bg-center z-30 w-screen h-screen">
      <div className="flex flex-col items-center w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg text-center mb-8">
          Contact Me
        </h2>
        <GlassCard className="w-full p-10 text-white space-y-8">
          <div className="flex flex-wrap justify-center gap-8">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
              >
                <Icon
                  icon={contact.icon}
                  width="40"
                  height="40"
                  className="text-white"
                />
                <span className="text-sm md:text-base text-gray-200 drop-shadow">
                  {contact.name}
                </span>
              </a>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Contact;
