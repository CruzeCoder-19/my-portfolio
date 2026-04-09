import Link from "next/link";
import { BsGithub, BsArrowLeft } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../data/projects";

export const metadata = {
  title: "All Projects – Manabendra Bisoyi | Full-Stack Developer",
  description:
    "Browse all full-stack projects built by Manabendra Bisoyi using Next.js, Node.js, PostgreSQL and more.",
};

function ProjectCard({ p, featured }) {
  return (
    <article
      className={`card h-100 shadow-sm project-card${featured ? " project-card-featured" : ""}`}
      aria-label={p.title}
    >
      {/* Thumbnail */}
      <div className={`project-thumb${featured ? " ratio ratio-21x9" : " ratio ratio-16x9"}`}>
        <img src={p.image} alt={`${p.title} preview`} loading="lazy" />

        {/* Hover overlay */}
        <div className="project-overlay">
          <p className="project-overlay-desc">{p.desc}</p>
          <div className="d-flex gap-2 justify-content-center flex-wrap">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm"
                style={{
                  background: "#fff",
                  color: "#111",
                  fontWeight: 600,
                  borderRadius: "var(--radius-pill)",
                }}
              >
                <FaExternalLinkAlt className="me-1" size={11} /> Live
              </a>
            )}
            {p.code && (
              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.4)",
                  borderRadius: "var(--radius-pill)",
                }}
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
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "var(--color-brand-primary)",
                textTransform: "uppercase",
              }}
            >
              Featured
            </span>
          )}
        </div>

        <h2 className="h6 mb-2" style={{ color: "var(--color-text-primary)" }}>
          {p.title}
        </h2>

        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: 1.6 }}>
          {p.desc}
        </p>

        <div className="d-flex flex-wrap gap-1 mb-3">
          {p.stack.map((s) => (
            <span key={s} className="badge rounded-pill project-tag">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto d-flex gap-2 flex-wrap">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn project-live-btn btn-sm d-inline-flex align-items-center"
            >
              <FaExternalLinkAlt className="me-1" size={11} /> Live
            </a>
          )}
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm d-inline-flex align-items-center"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text-secondary)",
              }}
            >
              <BsGithub className="me-1" size={13} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function AllProjectsPage() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <main className="container py-5">
      {/* Breadcrumb */}
      <Link href="/#projects" className="all-page-back-link mb-4 d-inline-flex align-items-center gap-2">
        <BsArrowLeft size={15} /> Back to Portfolio
      </Link>

      {/* Page header */}
      <div className="text-center mb-5">
        <h1 className="h2 fw-bold">All Projects</h1>
        <p style={{ color: "var(--color-text-secondary)" }} className="mb-0">
          Every real-world application I&apos;ve built — from full-stack SaaS to property platforms.
        </p>
      </div>

      {/* Featured card — full width */}
      {featured && (
        <div className="mb-4">
          <ProjectCard p={featured} featured />
        </div>
      )}

      {/* Remaining cards — 1 col → 2 col → 3 col */}
      <div className="row g-4">
        {rest.map((p) => (
          <div className="col-12 col-sm-6 col-lg-4" key={p.title}>
            <ProjectCard p={p} />
          </div>
        ))}
      </div>
    </main>
  );
}
