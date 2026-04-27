import React from "react";
import { motion } from "motion/react";
import { Code2, ExternalLink } from "lucide-react";
import apiAccio2 from "../assets/api-accio-2.png";
import linkshortner from "../assets/link-shortner.png";

const Projects = () => {
  const ProjectDetails = [
    {
      title: "API Accio",
      desc: "A Full-stack SaaS tool that converts natural language prompts into JSON data and generate  API endpoints using Gen AI",
      tags: ["NextJS", "Gemini API", "Supabse", "Tailwind"],
      link: "https://api-accio-v2.vercel.app/",
      gitLink: "https://github.com/snehithvarma86/api-accio-v2",
      img: apiAccio2,
    },
    {
      title: "URL Shortener",
      desc: "A URL shortener with a user-friendly interface and a reliable backend, enabling easy creation and management of short links.",
      tags: ["React", "Express", "PostgreSQL", "JWT"],
      link: "https://link-shortner-frontend-murex.vercel.app/",
      gitLink: "https://github.com/snehithvarma86/LinkShortner-Frontend",
      img: linkshortner,
    },
  ];

  return (
    <section id="work" className="space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-headline font-extrabold tracking-tight">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="h-px bg-outline-variant/30 grow mx-8 hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ProjectDetails.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:bg-surface-bright transition-all duration-500"
          >
            <div className="aspect-video overflow-hidden relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-headline font-bold">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-on-surface-variant">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink
                      size={20}
                      className="hover:text-primary cursor-pointer transition-colors"
                    />
                  </a>
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2
                      size={20}
                      className="hover:text-primary cursor-pointer transition-colors"
                    />
                  </a>
                </div>
              </div>
              <p className="text-on-surface-variant">{project.desc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2 py-1 bg-surface-container rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
