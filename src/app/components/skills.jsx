// src/components/Skills.jsx
"use client";

import { SiReact, SiNextdotjs, SiBootstrap, SiJavascript, SiHtml5, SiCss3,
         SiNodedotjs, SiPostgresql, SiGithub, SiPostman, SiJsonwebtokens } from "react-icons/si";
import { FaServer } from "react-icons/fa";

/* Brand colors (from Simple Icons) */
const BRAND_COLORS = {
  "React.js": "#61DAFB",
  "Next.js": "#000000",            // Next.js is black by brand
  "React-Bootstrap": "#7952B3",
  "JavaScript (ES6+)": "#F7DF1E",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Node.js": "#339933",
  "Next.js (API Routes)": "#000000",
  "REST APIs": "#0EA5E9",          // custom accent
  "Auth (JWT, Cookies)": "#000000",// JWT brand is black
  PostgreSQL: "#336791",
  "SQL Optimization": "#336791",
  GitHub: "#181717",
  Postman: "#FF6C37",
};

/* Sections config */
const SECTIONS = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React-Bootstrap", Icon: SiBootstrap },
      { name: "JavaScript (ES6+)", Icon: SiJavascript },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss3 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Next.js (API Routes)", Icon: SiNextdotjs },
      { name: "REST APIs", Icon: FaServer },
      { name: "Auth (JWT, Cookies)", Icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Database & Tools",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "SQL Optimization", Icon: SiPostgresql },
      { name: "GitHub", Icon: SiGithub },
      { name: "Postman", Icon: SiPostman },
    ],
  },
];

/* hex -> rgba with given alpha (for soft badge backgrounds) */
function hexToRgba(hex, alpha = 0.12) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function Logo({ name, Icon }) {
  const color = BRAND_COLORS[name] || "#111827";
  return (
    <div
      className="skill-logo d-inline-flex align-items-center gap-2 border rounded-pill px-3 py-2 me-2 mb-2 bg-white"
      title={name}
      aria-label={name}
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
      }}
    >
      <span
        className="d-inline-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: 28,
          height: 28,
          background: hexToRgba(color, 0.12),
          transition: "background-color 0.25s ease",
        }}
      >
        <Icon size={18} color={color} aria-hidden="true" />
      </span>
      <span className="small">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
   <section id="skills" className="mb-5" aria-labelledby="skills-title">
  <h2 id="skills-title" className="h4 mb-3">Skills</h2>
  <div className="row g-3">
    {SECTIONS.map((sec, idx) => (
      <div className="col-md-4" key={idx}>
        <div
          className="card h-100 shadow-sm skill-card"
          style={{ transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
        >
          <div className="card-body">
            <h3 className="h6 mb-3">{sec.title}</h3>
            <div>
              {sec.items.map((it, i) => (
                <Logo key={i} name={it.name} Icon={it.Icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
   </section>
  );
}
