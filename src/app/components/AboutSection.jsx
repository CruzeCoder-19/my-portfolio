"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BsGeoAlt, BsLightningCharge, BsWrench } from "react-icons/bs";

const STATS = [
  { target: 2,  suffix: "+", label: "Year Experience" },
  { target: 30,  suffix: "+", label: "Projects Built" },
  { target: 5,  suffix: "",  label: "Certifications" },
];

function AnimatedCounter({ target, suffix, label, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.ceil(start));
    }, 30);
    return () => clearInterval(interval);
  }, [active, target]);

  return (
    <div className="about-stat">
      <div className="about-stat-number">{count}{suffix}</div>
      <div className="about-stat-label">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="mb-5" aria-labelledby="about-title" ref={ref}>
      <div className="text-center mb-4">
        <h2 id="about-title" className="h3 fw-bold">About Me</h2>
        <p style={{ color: "var(--color-text-secondary)" }} className="mb-0">
          A short introduction to who I am and what I do.
        </p>
      </div>

      <div className="row g-4 align-items-start">
        {/* Left: bio text */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="about-card p-4 p-md-5 h-100">
            <p className="about-text mb-3">
              Hi, I&apos;m Manabendra — a Full-Stack Developer with 2+ years of experience
              building production-ready web applications using Next.js, TypeScript, Node.js,
              and PostgreSQL.
            </p>
            <p className="about-text mb-3">
              I&apos;ve shipped 30+ projects end-to-end — from a live property listing
              platform with admin panel and enquiry tracking, to a SaaS invoice generator
              with PDF export and multi-provider auth, to custom dashboards and ID management
              systems. Every project I take on is built the same way: clean architecture,
              type-safe APIs, secure authentication, and code that&apos;s easy to maintain
              six months later.
            </p>
            <p className="fw-bold mb-2 mt-2" style={{ color: "var(--color-text-primary)" }}>
              What I bring to the table:
            </p>
            <ul className="about-bullet-list mb-3">
              <li className="about-bullet-item mb-2">
                <span><strong style={{ color: "var(--color-text-primary)" }}>End-to-end ownership</strong>
                <span className="about-text"> — UI, API, database, auth, deployment. One developer, fewer handoffs, faster shipping.</span></span>
              </li>
              <li className="about-bullet-item mb-2">
                <span><strong style={{ color: "var(--color-text-primary)" }}>Modern stack expertise</strong>
                <span className="about-text"> — Next.js (App Router), React, TypeScript, Prisma, PostgreSQL, Tailwind CSS, NextAuth.</span></span>
              </li>
              <li className="about-bullet-item">
                <span><strong style={{ color: "var(--color-text-primary)" }}>Engineering that lasts</strong>
                <span className="about-text"> — secure REST APIs, optimized SQL queries, proper auth flows, and dashboards that actually scale.</span></span>
              </li>
            </ul>
            <div className="about-exploring">
              <span className="about-exploring-label">Currently exploring:</span>
              <span className="about-exploring-tags">
                <span className="about-exploring-tag">AWS Solutions Architect</span>
                <span className="about-exploring-tag">System Design</span>
                <span className="about-exploring-tag">Advanced PostgreSQL</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: avatar card + stats */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <div className="about-avatar-card">
            <div className="about-avatar-circle">MB</div>
            <div className="fw-bold mb-1" style={{ color: "var(--color-text-primary)" }}>
              Manabendra Bisoyi
            </div>
            <div className="mb-3" style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
              Full-Stack Developer · Triptales
            </div>
            <div className="d-flex gap-2 justify-content-center flex-wrap">
              {STATS.map((s) => (
                <AnimatedCounter key={s.label} {...s} active={inView} />
              ))}
            </div>
          </div>

          {/* Availability status card */}
          <div className="about-availability-card mt-3">
            <div className="avail-row mb-2">
              <span className="avail-pulse-dot" />
              <span className="fw-bold" style={{ color: "var(--color-text-primary)" }}>
                Available for Freelance
              </span>
            </div>
            <div className="avail-row mb-2">
              <BsGeoAlt size={14} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
              <span>Bhubaneswar, India · Remote-friendly</span>
            </div>
            <div className="avail-row mb-2">
              <BsLightningCharge size={14} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
              <span>Avg response: under 24 hours</span>
            </div>
            <div className="avail-row">
              <BsWrench size={14} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
              <span>Currently building: SaaS &amp; E-commerce platforms</span>
            </div>
          </div>

          {/* CTA card */}
          <div className="about-cta-card mt-3">
            <div className="about-cta-heading mb-2">
              Let&apos;s build something together
            </div>
            <p className="about-cta-text mb-3">
              Open to freelance projects and full-time opportunities — MVPs, SaaS
              products, admin dashboards, or custom backends.
            </p>
            <a href="#contact" className="about-cta-button">
              Let&apos;s Talk →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
