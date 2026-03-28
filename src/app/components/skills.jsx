"use client";
import { motion } from "framer-motion";
import { FaServer, FaDatabase } from "react-icons/fa";
import {
  SiJsonwebtokens, SiGithub, SiPostman,
  SiTypescript, SiTailwindcss,
  SiExpress, SiPrisma,
  SiSupabase, SiVercel,
} from "react-icons/si";

const SECTIONS = [
  {
    title: "Frontend",
    subtitle: "Responsive, accessible UIs.",
    items: [
      { name: "React.js",           iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",           level: "Advanced" },
      { name: "Next.js",            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",         level: "Advanced" },
      { name: "React-Bootstrap",    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",   level: "Advanced" },
      { name: "JavaScript (ES6+)",  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Advanced" },
      { name: "HTML5",              iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",           level: "Advanced" },
      { name: "CSS3",               iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",             level: "Intermediate" },
      { name: "TypeScript",         Icon: SiTypescript,  color: "#3178C6", level: "Intermediate" },
      { name: "Tailwind CSS",       Icon: SiTailwindcss, color: "#06B6D4", level: "Intermediate" },
    ],
  },
  {
    title: "Backend",
    subtitle: "API design, auth & server logic.",
    items: [
      { name: "Node.js",            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",         level: "Intermediate" },
      { name: "Next.js API Routes", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",         level: "Intermediate" },
      { name: "REST APIs",          Icon: FaServer,       color: "#6366f1",                   level: "Intermediate" },
      { name: "Auth (JWT/Cookies)", Icon: SiJsonwebtokens, color: "#FB015B",                   level: "Intermediate" },
      { name: "Express",            Icon: SiExpress,       color: "var(--color-text-primary)", level: "Intermediate" },
      { name: "Prisma",             Icon: SiPrisma,        color: "#4F46E5",                   level: "Intermediate" },
    ],
  },
  {
    title: "Database & Tools",
    subtitle: "Data modelling, debugging & collab.",
    items: [
      { name: "PostgreSQL",         iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: "Intermediate" },
      { name: "SQL Optimization",   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: "Beginner" },
      { name: "GitHub",             Icon: SiGithub,   color: "var(--color-text-primary)", level: "Advanced" },
      { name: "Postman",            Icon: SiPostman,  color: "#FF6C37",                   level: "Intermediate" },
      { name: "Neon DB",            Icon: FaDatabase, color: "#00E5CC",                   level: "Intermediate" },
      { name: "Supabase",           Icon: SiSupabase, color: "#3ECF8E",                   level: "Intermediate" },
      { name: "VS Code",            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",          level: "Advanced" },
      { name: "Vercel",             Icon: SiVercel,   color: "var(--color-text-primary)", level: "Intermediate" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const chipVariants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function SkillChip({ name, iconUrl, Icon, color, level }) {
  return (
    <motion.div
      className="skill-chip"
      variants={chipVariants}
      whileHover={{ scale: 1.06, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {iconUrl ? (
        <img src={iconUrl} alt={name} className="skill-chip-icon" loading="lazy" />
      ) : (
        <Icon size={22} style={{ flexShrink: 0, color: color ?? "var(--color-text-secondary)" }} />
      )}
      <span className="skill-chip-name">{name}</span>
      <span className="skill-chip-level">{level}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mb-5" aria-labelledby="skills-title">
      <div className="text-center mb-4">
        <h2 id="skills-title" className="h3 fw-bold">Skills</h2>
        <p style={{ color: "var(--color-text-secondary)" }} className="mb-0">
          Frontend, backend and database skills I use every day on DialUrban.
        </p>
      </div>

      <div className="row g-3">
        {SECTIONS.map((sec, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 shadow-sm skill-card premium-skill-card">
              <div className="card-body">
                <h3 className="h6 mb-1" style={{ color: "var(--color-text-primary)" }}>
                  <span className="skill-category-dot" />
                  {sec.title}
                </h3>
                <p className="mb-3" style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
                  {sec.subtitle}
                </p>
                <motion.div
                  className="d-flex flex-column gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {sec.items.map((it, i) => (
                    <SkillChip key={i} {...it} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
