import Link from "next/link";
import { BsDownload, BsAward, BsArrowLeft } from "react-icons/bs";
import { CERTIFICATES } from "../data/certifications";

export const metadata = {
  title: "All Certifications – Manabendra Bisoyi | Full-Stack Developer",
  description:
    "View all professional certifications earned by Manabendra Bisoyi, covering JavaScript, PostgreSQL, and more.",
};

function CertCard({ cert }) {
  return (
    <article className="card h-100 shadow-sm certification-card" aria-label={cert.title}>
      <div className="cert-thumb">
        <img src={cert.thumb} alt={`${cert.title} certificate preview`} loading="lazy" />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        {/* Issuer pill */}
        <div className="mb-2">
          <span className="cert-issuer-pill">
            <BsAward size={11} /> {cert.issuer}
          </span>
        </div>

        <h2 className="h6 card-title mb-3" style={{ color: "var(--color-text-primary)" }}>
          {cert.title}
        </h2>

        <div className="d-flex gap-2 mt-auto flex-wrap">
          <a
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
              borderRadius: "var(--radius-md)",
            }}
          >
            View
          </a>
          <a
            href={cert.file}
            download
            className="btn cert-download-btn btn-sm d-inline-flex align-items-center"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            <BsDownload className="me-1" /> Download
          </a>
        </div>
      </div>
    </article>
  );
}

export default function AllCertificationsPage() {
  return (
    <main className="container py-5">
      {/* Breadcrumb */}
      <Link href="/#certs" className="all-page-back-link mb-4 d-inline-flex align-items-center gap-2">
        <BsArrowLeft size={15} /> Back to Portfolio
      </Link>

      {/* Page header */}
      <div className="text-center mb-5">
        <h1 className="h2 fw-bold">All Certifications</h1>
        <p style={{ color: "var(--color-text-secondary)" }} className="mb-0">
          Verified credentials from industry-recognized courses and platforms.
        </p>
      </div>

      {/* Responsive grid — 1 col → 2 col → 3 col */}
      <div className="row g-4">
        {CERTIFICATES.map((cert) => (
          <div className="col-12 col-sm-6 col-lg-4" key={cert.title}>
            <CertCard cert={cert} />
          </div>
        ))}
      </div>
    </main>
  );
}
