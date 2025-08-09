import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Delivered beyond expectations with clean code and delightful animations.",
    name: "Client A",
  },
  {
    quote: "Professional, communicative, and pixel-perfect UI.",
    name: "Client B",
  },
  {
    quote: "Understands UX deeply and optimizes for performance.",
    name: "Client C",
  },
];

const Testimonials = () => {
  return (
    <section className="section container-px">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Testimonials
        </h2>
        <span className="text-sm opacity-70">Optional</span>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="card p-5"
          >
            <p className="opacity-80">“{t.quote}”</p>
            <footer className="mt-4 text-sm opacity-70">— {t.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
