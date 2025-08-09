import React from "react";
import { motion } from "motion/react";
import {
  Code,
  Cpu,
  Server,
  Wrench,
  Atom,
  Waves,
  LayoutGrid,
  Database,
} from "lucide-react";

const groups = [
  {
    label: "Frontend",
    items: [
      { icon: <Atom size={16} />, name: "React", level: 90, note: "3+ years" },
      {
        icon: <Waves size={16} />,
        name: "Framer/GSAP",
        level: 88,
        note: "motion",
      },
      {
        icon: <LayoutGrid size={16} />,
        name: "Tailwind",
        level: 92,
        note: "design systems",
      },
      {
        icon: <Code size={16} />,
        name: "TypeScript",
        level: 80,
        note: "typed UIs",
      },
    ],
  },
  {
    label: "Backend",
    items: [
      {
        icon: <Server size={16} />,
        name: "Node & Express",
        level: 78,
        note: "REST",
      },
      {
        icon: <Database size={16} />,
        name: "MongoDB",
        level: 76,
        note: "Atlas",
      },
    ],
  },
  {
    label: "Blockchain",
    items: [
      {
        icon: <Cpu size={16} />,
        name: "Solidity",
        level: 70,
        note: "contracts",
      },
      {
        icon: <Cpu size={16} />,
        name: "Ethers/Wagmi",
        level: 75,
        note: "web3",
      },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        icon: <Wrench size={16} />,
        name: "Redux Toolkit",
        level: 85,
        note: "state",
      },
      {
        icon: <Wrench size={16} />,
        name: "Vite/Next",
        level: 82,
        note: "build",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section container-px">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Skills
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {groups.map((group, gi) => (
            <div key={group.label} className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider opacity-70">
                {group.label}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {group.items.map((s, idx) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: gi * 0.05 + idx * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="card p-4 hover:-translate-y-0.5 transition-transform"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-md bg-white/10 flex items-center justify-center">
                          {s.icon}
                        </span>
                        <div>
                          <p className="text-sm font-medium">{s.name}</p>
                          <p className="text-xs opacity-60">{s.note}</p>
                        </div>
                      </div>
                      <span className="text-xs opacity-60">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
