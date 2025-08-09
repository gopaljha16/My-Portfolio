import React, { useState } from "react";
import { motion } from "motion/react";

const initial = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Valid email required";
    if (form.message.trim().length < 10)
      next.message = "Please write at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setTimeout(() => {
      setSent(true);
      setForm(initial);
    }, 400);
  };

  return (
    <section id="contact" className="section container-px">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Let’s work together
          </h2>
          <p className="mt-3 opacity-80 max-w-xl">
            Have a project in mind or want to collaborate? Send a message and
            I’ll get back within 24–48 hours.
          </p>
          <div className="mt-6 flex gap-3 text-sm">
            <a href="mailto:you@example.com" className="btn btn-ghost">
              you@example.com
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card p-6 space-y-4"
        >
          {sent && (
            <div className="rounded-xl bg-emerald-500/10 border border-emerald-300/20 text-emerald-300 px-4 py-3 text-sm">
              Message sent! I’ll reply soon.
            </div>
          )}
          <div>
            <label className="text-sm opacity-70">Name</label>
            <input
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400/40"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-400">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="text-sm opacity-70">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400/40"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="text-sm opacity-70">Message</label>
            <textarea
              rows="4"
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400/40"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me a little about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
