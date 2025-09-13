"use client";

import { BsBriefcase, BsCalendarEvent, BsGeoAlt } from "react-icons/bs";

const EXPERIENCES = [
  {
    role: "Junior Software Developer",
    company: "Triptales Commercial Pvt. Ltd (DialUrban)",
    location: "Bhubaneswar, India",
    period: "2024 – Present",
    stack: [
      "React",
      "Next.js",
      "Bootstrap",
      "Node.js",
      "PostgreSQL",
      "JMeter",
      "PageSpeed Insights",
    ],
    bullets: [
      "Designed and implemented dynamic user interfaces with React and Bootstrap, improving UX and page responsiveness.",
      "Built backend APIs with Node.js and PostgreSQL for reliable data handling and faster responses.",
      "Optimized performance using Apache JMeter and PageSpeed Insights to diagnose and remove bottlenecks.",
      "Worked with cross-functional teams to troubleshoot and fix issues, increasing stability and functionality.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-5" aria-labelledby="experience-title">
      <h2 id="experience-title" className="h4 mb-3">Experience</h2>

      <div className="exp-wrap">
        <div className="d-flex flex-column gap-3">
          {EXPERIENCES.map((exp, i) => (
            <article
              key={i}
              className="card border-0 shadow-sm exp-card"
              style={{
                paddingLeft: 28,
                borderRadius: 14,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              
              <div className="card-body">
                {/* Header badges */}
                <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                  <span className="badge text-bg-primary d-inline-flex align-items-center gap-1">
                    <BsBriefcase aria-hidden="true" />
                    {exp.role}
                  </span>
                  <span className="badge bg-light text-dark border d-inline-flex align-items-center gap-1">
                    {exp.company}
                  </span>
                </div>

                {/* Meta */}
                <div className="text-secondary small d-flex flex-wrap gap-3 mb-3">
                  <span className="d-inline-flex align-items-center gap-1">
                    <BsCalendarEvent aria-hidden="true" />
                    {exp.period}
                  </span>
                  <span className="d-inline-flex align-items-center gap-1">
                    <BsGeoAlt aria-hidden="true" />
                    {exp.location}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="mb-3 ps-3">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="mb-1">
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech stack badges: make text visible */}
                <div className="d-flex flex-wrap gap-2">
                  {exp.stack.map((t, idx) => (
                    <span
                      key={idx}
                      className="badge rounded-pill bg-light text-dark border"
                      style={{ fontWeight: 500 }}
                      title={t}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
