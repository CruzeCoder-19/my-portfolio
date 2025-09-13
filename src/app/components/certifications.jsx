// src/components/Certifications.jsx
"use client";

import React from "react";
import { BsDownload } from "react-icons/bs";

export default function Certifications() {
  const certificates = [
    {
      title: "JavaScript Algorithms and Data Structures",
      file: "/certificates/js-algo-cert.pdf",
      thumb: "/certificates/js-algo-thumb.png", // a small screenshot/thumbnail of the certificate
    },
    {
      title: "PostgreSQL for Developers",
      file: "/certificates/postgres-cert.pdf",
      thumb: "/certificates/postgres-thumb.png",
    },
  ];

  return (
    <section id="certifications" className="mb-5">
      <h2 className="h4 mb-3">Certifications</h2>
      <div className="row g-3">
        {certificates.map((cert, i) => (
          <div className="col-md-6" key={i}>
            <div className="card h-100 shadow-sm">
              {/* Thumbnail Preview */}
              <a href={cert.file} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.thumb}
                  alt={cert.title}
                  className="card-img-top"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{cert.title}</h5>
                <div className="d-flex justify-content-between">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm"
                  >
                    View
                  </a>
                  <a
                    href={cert.file}
                    download
                    className="btn btn-dark btn-sm d-flex align-items-center"
                  >
                    <BsDownload className="me-1" /> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
