import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { MapPin, Briefcase, Clock } from "lucide-react";

const Hero = () => {
  const phrases = useMemo(
    () => [
      "Full Stack Developer",
      "Building Scalable MERN Apps",
      "Blockchain dApps",
      "Modern UI/UX",
    ],
    []
  );
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = deleting ? 40 : 70;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases]);

  const timeZone = useMemo(() => {
    try {
      const fmt = new Intl.DateTimeFormat([], {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      return `IST (UTC+5:30) • ${fmt.format(new Date())}`;
    } catch {
      return "IST (UTC+5:30)";
    }
  }, []);

  return (
    <section id="home" className="section container-px">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span className="gradient-text">Gopal</span> —
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg opacity-80 max-w-xl"
          >
            I craft modern, performant products across the stack — MERN apps,
            blockchain dApps, and premium UI/UX with smooth motion.
          </motion.p>

          <div className="mt-4 h-8 text-lg sm:text-xl font-medium tracking-tight">
            <span className="opacity-70">I focus on</span>
            <span className="ml-2 typewriter gradient-text">{text}</span>
            <span className="type-caret">|</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="btn btn-primary hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="btn btn-ghost hover:-translate-y-0.5 hover:shadow-xl"
            >
              Contact
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {["React", "GSAP", "Framer Motion", "Tailwind", "MERN", "Web3"].map(
              (tech) => (
                <li key={tech} className="badge">
                  {tech}
                </li>
              )
            )}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:block justify-self-end"
        >
          <div className="relative w-full max-w-sm aspect-square">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 blur-2xl" />
            <div className="relative h-full w-full rounded-[2rem] p-[2px] border-animated">
              <div className="card h-full w-full rounded-[2rem] flex items-center justify-center pulse-glow">
                <div className="text-center p-6 space-y-3">
                  <p className="text-sm opacity-80 flex items-center justify-center gap-2">
                    <Briefcase size={16} /> Available for freelance
                  </p>
                  <p className="text-2xl font-semibold flex items-center justify-center gap-2">
                    <MapPin size={18} /> Based in India
                  </p>
                  <p className="text-xs opacity-70 flex items-center justify-center gap-2">
                    <Clock size={14} /> {timeZone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
