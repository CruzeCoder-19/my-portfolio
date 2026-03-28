"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiPostgresql, SiNodedotjs } from "react-icons/si";
import { BsGithub, BsLinkedin, BsArrowDown } from "react-icons/bs";

const TECH = [
  { Icon: SiReact,      color: "#61DAFB", label: "React.js" },
  { Icon: SiNextdotjs,  color: "var(--color-text-primary)", label: "Next.js" },
  { Icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
  { Icon: SiNodedotjs,  color: "#339933", label: "Node.js" },
];

const ROLES = [
  "Fullstack Developer",
  "React.js Engineer",
  "Next.js Developer",
  "PostgreSQL Expert",
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < fullWord.length) {
      timeout = setTimeout(() => setDisplayed(fullWord.slice(0, displayed.length + 1)), 55);
    } else if (!isDeleting && displayed.length === fullWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className="mb-5 hero-section text-center" aria-label="Hero Section">
      {/* Ghost background icons */}
      <div className="hero-ghost hero-react"><SiReact /></div>
      <div className="hero-ghost hero-next"><SiNextdotjs /></div>
      <div className="hero-ghost hero-postgres"><SiPostgresql /></div>
      <div className="hero-ghost hero-node"><SiNodedotjs /></div>

      <motion.div
        className="hero-card mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Tech icon row */}
        <motion.div
          variants={itemVariants}
          className="d-flex justify-content-center gap-3 flex-wrap mb-4"
        >
          {TECH.map(({ Icon, color, label }, i) => (
            <span
              key={i}
              className="hero-tech d-inline-flex align-items-center justify-content-center rounded-circle"
              title={label}
              aria-label={label}
            >
              <Icon size={24} color={color} aria-hidden="true" />
            </span>
          ))}
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="fw-bold hero-title mb-1">
          Manabendra
        </motion.h1>

        {/* Typed role */}
        <motion.p variants={itemVariants} className="hero-subtitle mb-1">
          {displayed}
          <span style={{
            display: "inline-block", width: 2, height: "1em",
            background: "var(--color-brand-primary)",
            marginLeft: 2, verticalAlign: "text-bottom",
            animation: "techFloat 1s step-start infinite",
          }} aria-hidden="true" />
        </motion.p>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="hero-tagline mb-4">
          Turning ideas into clean, scalable and user-friendly applications.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="d-flex justify-content-center gap-3 flex-wrap mb-4"
        >
          <motion.button
            className="hero-cta-btn primary"
            onClick={scrollToProjects}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <BsArrowDown size={15} /> View My Work
          </motion.button>
          <motion.a
            className="hero-cta-btn outline"
            href="/Manabendra_2025.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="d-flex justify-content-center gap-3"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            whileHover={{ y: -3, scale: 1.1 }}
            aria-label="GitHub"
          >
            <BsGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            whileHover={{ y: -3, scale: 1.1 }}
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
