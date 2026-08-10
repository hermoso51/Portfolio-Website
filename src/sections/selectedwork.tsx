'use client';

import { useState } from "react";

const projects = [
  {
    category: "Full Stack",
    title: "E-Commerce Platform",
    description: "A full-featured storefront with cart, checkout, and an admin dashboard.",
    tags: ["React", "Next.js", "PostgreSQL"],
    image: "https://placehold.co/600x400/0d1117/6366F1?text=Project+1",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    category: "API / Backend",
    title: "Task Automation API",
    description: "A REST API that automates workflows with scheduled jobs and webhooks.",
    tags: ["FastAPI", "Python", "Docker"],
    image: "https://placehold.co/600x400/0d1117/6366F1?text=Project+2",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    category: "Testing",
    title: "E2E Test Suite",
    description: "An automated end-to-end testing framework with visual regression checks.",
    tags: ["Playwright", "TypeScript", "CI/CD"],
    image: "https://placehold.co/600x400/0d1117/6366F1?text=Project+3",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    category: "Web App",
    title: "Analytics Dashboard",
    description: "A real-time dashboard visualizing user engagement with live data streams.",
    tags: ["Next.js", "Node.js", "WebSockets"],
    image: "https://placehold.co/600x400/0d1117/6366F1?text=Project+4",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function SelectedWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-[#09090B] px-6 sm:px-8 lg:px-12 py-24 overflow-hidden">

      {/* Grid background, consistent with Hero */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#09090B_80%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-white font-sekuya text-3xl sm:text-4xl select-none">
            Selected Work
          </h2>
          <p className="text-white/70 text-sm sm:text-base mt-3 max-w-xl mx-auto lg:mx-0 select-none">
            A few projects I've built, from full-stack apps to automated testing tools.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-lg transition-all duration-300 hover:border-[#6366F1]/50 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Glow on hover */}
              <div
                className={`absolute inset-0 rounded-xl bg-[#6366F1]/10 blur-xl transition-opacity duration-300 pointer-events-none ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
                </div>

                <div className="px-4 py-4">
                  <span className="text-[10px] font-mono font-semibold text-[#6366F1] uppercase tracking-wider select-none">
                    {project.category}
                  </span>
                  <h3 className="font-sekuya font-bold text-sm mb-1.5 text-white mt-1 select-none">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-3 select-none">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[#6366F1] bg-[#6366F1]/10 border border-[#6366F1]/20 px-1.5 py-0.5 rounded select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-3 border-t border-white/10">
                    <a
                      href={project.liveUrl}
                      className="text-xs text-white/70 hover:text-white transition-colors duration-300 select-none"
                    >
                      Live ↗
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-xs text-white/70 hover:text-white transition-colors duration-300 select-none"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#111113] border border-[#27272A] text-white font-geist text-sm py-2.5 px-6 rounded-md hover:bg-[#2D3748] hover:border-[#6366F1]/50 transition-all duration-300 select-none">
            View More Projects ↗
          </button>
        </div>

      </div>
    </section>
  );
}