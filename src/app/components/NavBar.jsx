"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsSun, BsMoon, BsList, BsX, BsDownload } from "react-icons/bs";
import useDarkMode from "./useDarkMode";

const NAV_LINKS = [
  { label: "About",          id: "about" },
  { label: "Skills",         id: "skills" },
  { label: "Experience",     id: "experience" },
  { label: "Certifications", id: "certs" },
  { label: "Projects",       id: "projects" },
  { label: "Resume",         id: "resume" },
  { label: "Contact",        id: "contact" },
];

export default function NavBar() {
  const [isDark, toggleDarkMode] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-60px 0px -35% 0px" }
    );
    sections.forEach((s) => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 992) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function scrollTo(id) {
    setMenuOpen(false); // start exit animation (220ms duration)
    // Wait for the AnimatePresence exit animation to finish before scrolling.
    // The exit transition is 0.22s — we add a small buffer (250ms total) so the
    // overflow:hidden container is fully gone and cannot interfere with smooth scroll.
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 250);
  }

  return (
    <nav
      className="navbar-glass"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 24px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      {/* Brand */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          background: "none", border: "none", cursor: "pointer",
          fontWeight: 700, fontSize: "1.15rem",
          color: "var(--color-brand-primary)", padding: 0, letterSpacing: "-0.3px",
        }}
      >
        Manabendra
      </button>

      {/* Desktop links */}
      <div className="d-none d-lg-flex" style={{ alignItems: "center", gap: 2 }}>
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`nav-link-item${activeSection === id ? " active" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Right controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <a
          href="/Manabendra_2026.docx"
          download
          className="d-none d-lg-inline-flex"
          style={{
            alignItems: "center", gap: 6,
            background: "linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent))",
            color: "#fff", borderRadius: "var(--radius-pill)",
            padding: "6px 14px", fontSize: "0.85rem",
            fontWeight: 600, textDecoration: "none",
          }}
        >
          <BsDownload size={13} /> Resume
        </a>

        <button className="nav-dark-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {isDark ? <BsSun size={16} /> : <BsMoon size={16} />}
        </button>

        <button
          className="nav-hamburger d-lg-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <BsX size={20} /> : <BsList size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`nav-link-item${activeSection === id ? " active" : ""}`}
              >
                {label}
              </button>
            ))}
            <a
              href="/Manabendra_2025.pdf"
              download
              style={{
                display: "flex", alignItems: "center", gap: 6, marginTop: 12,
                padding: "10px 12px",
                background: "linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent))",
                color: "#fff", borderRadius: "var(--radius-pill)",
                fontSize: "0.9rem", fontWeight: 600, textDecoration: "none",
                width: "fit-content",
              }}
            >
              <BsDownload size={14} /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
