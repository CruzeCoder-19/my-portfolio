"use client";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { SiReact, SiNextdotjs, SiPostgresql, SiNodedotjs } from "react-icons/si";

export default function ResumeDownload() {
  return (
    <section id="resume" className="mb-5 resume-section ghost-tech-wrapper" aria-labelledby="resume-title">
      {/* Ghost floating icons */}
      <div className="ghost-icon ghost-react"><SiReact /></div>
      <div className="ghost-icon ghost-next"><SiNextdotjs /></div>
      <div className="ghost-icon ghost-postgres"><SiPostgresql /></div>
      <div className="ghost-icon ghost-node"><SiNodedotjs /></div>

      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <motion.div
            className="resume-card shadow-sm position-relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="row align-items-center g-3 g-md-4">
              <div className="col-md-8">
                <h2 id="resume-title" className="h3 fw-bold mb-2" style={{ color: "var(--color-text-primary)" }}>
                  Download My Resume
                </h2>
                <p style={{ color: "var(--color-text-secondary)" }} className="mb-2">
                  One-page overview of my experience with Next.js, React.js, Node.js
                  and PostgreSQL, used for building the DialUrban platform.
                </p>
                <small style={{ color: "var(--color-text-muted)" }}>Updated for 2025 · PDF format</small>
              </div>

              <div className="col-md-4 d-flex justify-content-md-end justify-content-start">
                <motion.a
                  className="btn resume-btn-primary d-inline-flex align-items-center justify-content-center w-100 w-md-auto"
                  href="/Manabendra_2026.docx"
                  download="Manabendra_Bisoyi_Resume.docx"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <BsDownload className="me-2" /> Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
