"use client";
import { motion } from "framer-motion";
import { BsMortarboard, BsLightbulb } from "react-icons/bs";

const DEFAULT_INTERESTS = [
  "Artificial Intelligence",
  "Scalable Web Applications",
  "Learning New Frameworks",
];

const DEFAULT_EDUCATION = [
  { degree: "Bachelor Of Technology", school: "Odisha University Of Technology and Research" },
  { degree: "Higher Secondary", school: "D.A.V. Public School, Kalinganagar" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const colVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProfileMeta({
  interests = DEFAULT_INTERESTS,
  education = DEFAULT_EDUCATION,
  leftTitle = "Interests",
  rightTitle = "Education",
}) {
  return (
    <section id="profile-meta" className="mb-5 profile-meta-section">
      <div className="text-center mb-4">
        <h2 className="h3 fw-bold">Interests &amp; Education</h2>
        <p style={{ color: "var(--color-text-secondary)" }} className="mb-0">
          A quick look into my interests and educational background.
        </p>
      </div>

      <motion.div
        className="row g-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Interests */}
        <motion.div className="col-md-6" variants={colVariants}>
          <div className="profile-meta-card-container shadow-sm p-4 h-100">
            <h3 className="h5 fw-semibold mb-3 d-flex align-items-center gap-2">
              <BsLightbulb size={18} color="var(--color-brand-primary)" />
              {leftTitle}
            </h3>
            <ul className="mb-0 ps-3">
              {interests.map((item, i) => (
                <motion.li
                  key={i}
                  className="mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                  whileHover={{ x: 6, color: "var(--color-brand-primary)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div className="col-md-6" variants={colVariants}>
          <div className="profile-meta-card-container shadow-sm p-4 h-100">
            <h3 className="h5 fw-semibold mb-3 d-flex align-items-center gap-2">
              <BsMortarboard size={18} color="var(--color-brand-primary)" />
              {rightTitle}
            </h3>
            <ul className="list-unstyled mb-0">
              {education.map((e, i) => (
                <motion.li
                  key={i}
                  className="d-flex mb-3"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <BsMortarboard
                    className="me-3 flex-shrink-0 mt-1"
                    color="var(--color-brand-primary)"
                    size={18}
                  />
                  <div>
                    <div className="fw-semibold" style={{ color: "var(--color-text-primary)" }}>
                      {e.degree}
                    </div>
                    <div className="small" style={{ color: "var(--color-text-secondary)" }}>
                      {e.school}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
