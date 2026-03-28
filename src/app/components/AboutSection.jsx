"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { target: 1,  suffix: "+", label: "Year Experience" },
  { target: 3,  suffix: "+", label: "Projects Built" },
  { target: 2,  suffix: "",  label: "Certifications" },
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

      <div className="row g-4 align-items-center">
        {/* Left: bio text */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="about-card p-4 p-md-5 h-100">
            <p className="about-text mb-3">
              Hi, I&apos;m a Junior Software Developer at Triptales, working on DialUrban,
              a platform with Property, Job and Matrimony modules. I build both the
              frontend and the backend — creating responsive UIs with Next.js and
              React-Bootstrap, and developing secure API routes that connect to a
              PostgreSQL database.
            </p>
            <p className="about-text mb-0">
              I enjoy solving real problems through clean and scalable code. I love
              learning new tools, improving UI design, and making development fast
              and enjoyable.
            </p>
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
              Junior Software Developer · Triptales
            </div>
            <div className="d-flex gap-2 justify-content-center flex-wrap">
              {STATS.map((s) => (
                <AnimatedCounter key={s.label} {...s} active={inView} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
