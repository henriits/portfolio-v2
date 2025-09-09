import React from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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
        <GlassCard className="w-full p-10 text-white space-y-8">
          <div className="flex flex-wrap justify-center gap-8">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                className="flex flex-col items-center space-y-2 cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    icon={contact.icon}
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
                  {contact.name}
                </motion.span>
              </motion.a>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Contact;
