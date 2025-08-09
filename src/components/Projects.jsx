import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Blockchain dApp",
    description:
      "A decentralized application with wallet connect, contract interactions, and live on testnet.",
    tech: ["Solidity", "Ethers.js", "Wagmi", "Next.js"],
    live: "https://example.com",
    code: "https://github.com/example",
    image:
      "https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "MERN SaaS App",
    description:
      "Subscription-based analytics dashboard with role-based access and charts.",
    tech: ["MongoDB", "Express", "React", "Node"],
    live: "https://example.com",
    code: "https://github.com/example",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Portfolio Templates",
    description:
      "A collection of premium, minimal portfolio templates with Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://example.com",
    code: "https://github.com/example",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
  },
];

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20, rotateX: -3, transformOrigin: "top center" },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: Math.min(i * 0.04, 0.2),
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="section container-px">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Selected Projects
        </h2>
        <a href="#contact" className="text-sm opacity-70 hover:opacity-100">
          Get in touch →
        </a>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="project-card group overflow-hidden rounded-3xl border border-white/10 glass"
          >
            <div className="relative overflow-hidden">
              <img
                loading="lazy"
                src={p.image}
                alt={p.title}
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm opacity-75 line-clamp-2">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  View Live
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  View Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
