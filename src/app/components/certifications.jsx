"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsDownload, BsAward } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { HOMEPAGE_CERTS } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certs" className="mb-5 certs-section" aria-labelledby="certs-title">
      <div className="text-center mb-4">
        <h2 id="certs-title" className="h3 fw-bold">Certifications</h2>
        <p style={{ color: "var(--color-text-secondary)" }} className="mb-0">
          Verified skills from industry-recognized courses.
        </p>
      </div>

      <motion.div
        className="row g-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      >
        {HOMEPAGE_CERTS.map((cert) => (
          <motion.div
            className="col-md-6"
            key={cert.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
            }}
          >
            <motion.article
              className="card h-100 shadow-sm certification-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              aria-label={cert.title}
            >
              <div className="cert-thumb">
                <img src={cert.thumb} alt={`${cert.title} preview`} loading="lazy" />
              </div>

              <div className="card-body d-flex flex-column justify-content-between">
                {/* Issuer pill */}
                <div className="mb-2">
                  <span className="cert-issuer-pill">
                    <BsAward size={11} /> {cert.issuer}
                  </span>
                </div>

                <h3 className="h6 card-title mb-3" style={{ color: "var(--color-text-primary)" }}>
                  {cert.title}
                </h3>

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
            </motion.article>
          </motion.div>
        ))}
      </motion.div>

      {/* View All CTA */}
      <div className="d-flex justify-content-end mt-4">
        <Link href="/certifications" className="view-all-btn">
          View All Certifications <FaArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
}
