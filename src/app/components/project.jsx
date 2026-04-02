"use client";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const PROJECTS = [
  {
    title: "Dialurbano Property",
    desc: "Full-stack property listing platform with admin panel, blogs, enquiry form, filters, property details, and user enquiry tracking.",
    stack: ["Next.js", "React-Bootstrap", "Node.js", "PostgreSQL", "JWT"],
    image: "/projects/property.png",
    live: "https://www.duproperty.in/",
    type: "Full-Stack",
    featured: true,
  },
  {
    title: "ID Card Generator",
    desc: "ID Card Generator is a web application that allows users to generate ID cards for their organization.",
    stack: ["Next.js", "NeonDB", "PostgreSQL", "JWT", "Next Auth"],
    image: "/projects/id-card-generator.png",
    live: "https://id-card-gen-pro.vercel.app/",
    code: "https://github.com/CruzeCoder-19/IdCardGen-Pro",
    type: "Full-Stack",
  },
  {
    title: "Property Listings",
    desc: "Multi-step listing form, filters, and details page for properties.",
    stack: ["React", "Express", "PostgreSQL"],
    image: "/projects/property.jpg",
    live: "#",
    code: "#",
    type: "Full-Stack",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ProjectCard({ p, featured }) {
  return (
    <motion.article
      className={`card h-100 shadow-sm project-card${featured ? " project-card-featured" : ""}`}
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      aria-label={p.title}
    >
      {/* Thumbnail with hover overlay */}
      <div className={`project-thumb${featured ? " ratio ratio-21x9" : " ratio ratio-16x9"}`}>
        <img src={p.image} alt={`${p.title} preview`} loading="lazy" />

        {/* Hover overlay */}
        <div className="project-overlay">
          <p className="project-overlay-desc">{p.desc}</p>
          <div className="d-flex gap-2 justify-content-center">
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{ background: "#fff", color: "#111", fontWeight: 600, borderRadius: "var(--radius-pill)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="me-1" size={11} /> Live
            </a>
            {p.code && (
              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "var(--radius-pill)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <BsGithub className="me-1" size={13} /> Code
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small style={{ color: "var(--color-text-muted)", fontSize: "0.78rem" }}>{p.type}</small>
          {featured && (
            <span style={{
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
              color: "var(--color-brand-primary)", textTransform: "uppercase",
            }}>
              Featured
            </span>
          )}
        </div>

        <h3 className="h6 mb-2" style={{ color: "var(--color-text-primary)" }}>{p.title}</h3>

        <div className="d-flex flex-wrap gap-1 mb-3">
          {p.stack.map((s) => (
            <span key={s} className="badge rounded-pill project-tag">{s}</span>
          ))}
        </div>

        <div className="mt-auto d-flex gap-2">
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn project-live-btn btn-sm d-inline-flex align-items-center"
          >
            <FaExternalLinkAlt className="me-1" size={11} /> Live
          </a>
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm d-inline-flex align-items-center"
              style={{ border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}
            >
              <BsGithub className="me-1" size={13} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className="mb-5" aria-labelledby="projects-title">
      <div className="text-center mb-4">
        <h2 id="projects-title" className="h3 fw-bold">Projects</h2>
        <p style={{ color: "var(--color-text-secondary)" }} className="mb-0">
          A few real-world modules I&apos;ve built using Next.js, Node.js and PostgreSQL.
        </p>
      </div>

      <motion.div
        className="row g-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Featured card — full width */}
        <div className="col-12">
          <ProjectCard p={featured} featured />
        </div>

        {/* Remaining cards */}
        {rest.map((p) => (
          <div className="col-md-6" key={p.title}>
            <ProjectCard p={p} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
