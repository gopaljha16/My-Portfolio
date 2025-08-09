import React from "react";
import { motion } from "motion/react";

const items = [
  {
    time: "2023 — Present",
    title: "Senior Frontend Engineer",
    org: "Freelance",
    desc: "Building premium UIs for startups and agencies.",
  },
  {
    time: "2021 — 2023",
    title: "Fullstack Developer",
    org: "MERN Projects",
    desc: "Delivered dashboards, SaaS apps, and admin portals.",
  },
  {
    time: "2018 — 2021",
    title: "Education",
    org: "B.Tech",
    desc: "Computer Science & Engineering",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section container-px">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
        Experience & Education
      </h2>
      <div className="mt-6 relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/10" />
        <div className="space-y-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative pl-10 sm:pl-14"
            >
              <div className="absolute left-2 sm:left-4 top-2 h-3 w-3 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 shadow-lg" />
              <p className="text-xs opacity-60">{it.time}</p>
              <h3 className="mt-1 font-semibold">
                {it.title} — <span className="opacity-80">{it.org}</span>
              </h3>
              <p className="text-sm opacity-75 mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
