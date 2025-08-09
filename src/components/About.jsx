import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="section container-px">
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="mt-3 opacity-80 leading-relaxed max-w-2xl">
            I build sleek, accessible, and scalable web apps. My focus is on
            delightful UI, smooth interactions, and performance. I’ve shipped
            products across MERN and Web3 ecosystems.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="card p-5"
        >
          <p className="text-sm opacity-70">Core Skills</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>React, Next.js, TypeScript</li>
            <li>GSAP, Framer Motion, Three.js basics</li>
            <li>Redux Toolkit, Zustand</li>
            <li>Node, Express, MongoDB</li>
            <li>Solidity, Ethers.js, Wagmi</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
