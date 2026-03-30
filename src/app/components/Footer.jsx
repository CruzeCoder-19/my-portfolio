"use client";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsEnvelope, BsArrowUp } from "react-icons/bs";

const NAV_LINKS = [
  { label: "About",          id: "about" },
  { label: "Skills",         id: "skills" },
  { label: "Experience",     id: "experience" },
  { label: "Certifications", id: "certs" },
  { label: "Projects",       id: "projects" },
  { label: "Resume",         id: "resume" },
  { label: "Contact",        id: "contact" },
];

const SOCIALS = [
  { Icon: BsGithub,   href: "https://github.com/CruzeCoder-19",                            label: "GitHub" },
  { Icon: BsLinkedin, href: "https://www.linkedin.com/in/manabendra-bisoyi-cruzedev/",     label: "LinkedIn" },
  { Icon: BsEnvelope, href: "#contact",                                                    label: "Email" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Row 1: Brand + social icons */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 mb-4">
          <div>
            <div className="fw-bold mb-1" style={{ fontSize: "1.05rem", color: "var(--color-brand-primary)" }}>
              Manabendra Bisoyi
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              Fullstack Developer · Next.js · PostgreSQL
            </div>
          </div>

          <div className="d-flex gap-2">
            {SOCIALS.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="footer-social-btn"
                aria-label={label}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                onClick={href === "#contact" ? (e) => { e.preventDefault(); scrollTo("contact"); } : undefined}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Row 2: Quick nav */}
        <div className="d-flex flex-wrap gap-3 justify-content-center mb-4 pb-4"
          style={{ borderBottom: "1px solid var(--color-border)" }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              className="footer-nav-link"
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Row 3: Copyright + back to top */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <small style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} Manabendra Bisoyi. Built with Next.js &amp; React-Bootstrap.
          </small>

          <motion.button
            className="footer-back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsArrowUp size={13} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
