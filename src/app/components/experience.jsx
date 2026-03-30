"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown, BsCalendar3, BsBriefcase } from "react-icons/bs";

const BULLETS = [
  "Developing the DialUrban platform (Property, Matrimony, Jobs).",
  "Building responsive UIs using Next.js and React-Bootstrap.",
  "Creating secure backend APIs with Next.js server routes.",
  "Managing PostgreSQL databases and optimizing SQL queries.",
  "Implementing authentication, dashboards, and profile systems.",
  "Handling features end-to-end: UI → API → Database.",
];

export default function Experience() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="experience" className="mb-5" aria-labelledby="experience-title">
      <div className="text-center mb-4">
        <h2 id="experience-title" className="h3 fw-bold">Experience</h2>
        <p style={{ color: "var(--color-text-secondary)" }} className="mb-0">
          Crafting full-stack solutions at Triptales Commercial Pvt Ltd.
        </p>
      </div>

      <div className="exp-wrap ps-4">
        <div className="exp-dot" />

        <motion.div
          className="exp-card p-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Header row */}
          <div className="d-flex align-items-start gap-3 mb-3">
            <div className="exp-company-badge flex-shrink-0">DU</div>
            <div className="flex-grow-1">
              <h5 className="fw-bold mb-0" style={{ color: "var(--color-text-primary)" }}>
                Junior Software Developer
              </h5>
              <div className="d-flex flex-wrap gap-3 mt-1">
                <span style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)" }}
                  className="d-flex align-items-center gap-1">
                  <BsBriefcase size={13} /> Dialurban
                </span>
                <span style={{ fontSize: "0.88rem", color: "var(--color-text-muted)" }}
                  className="d-flex align-items-center gap-1">
                  <BsCalendar3 size={12} /> 2024 – Present
                </span>
              </div>
            </div>

            {/* Expand toggle */}
            <button
              className="exp-toggle-btn flex-shrink-0"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                style={{ display: "inline-flex" }}
              >
                <BsChevronDown size={16} />
              </motion.span>
              {expanded ? "Collapse" : "Expand"}
            </button>
          </div>

          {/* Expandable bullets */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                key="bullets"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden", paddingLeft: "1.25rem", margin: 0 }}
              >
                {BULLETS.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="exp-card"
                    style={{
                      background: "none", border: "none", borderRadius: 0,
                      boxShadow: "none", padding: "3px 0",
                      fontSize: "0.93rem", color: "var(--color-text-secondary)",
                      transform: "none",
                    }}
                  >
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
