// src/components/ProfileMeta.jsx
import { BsMortarboard } from "react-icons/bs";

// Default data lives here
const DEFAULT_INTERESTS = [
  "Artificial Intelligence",
  "Scalable Web Applications",
  "Learning New Frameworks",
];

const DEFAULT_EDUCATION = [
  { degree: "Bachelor Of Technology", school: "Odisha University Of Technology and Research" },
  { degree: "Higher Secondary", school: "D.A.V. Public School, Kalinganagar" },
];

export default function ProfileMeta({
  interests = DEFAULT_INTERESTS,
  education = DEFAULT_EDUCATION,
  leftTitle = "Interests",
  rightTitle = "Education",
}) {
  return (
    <section id="profile-meta" className="mb-5">
      <div
        className="profile-meta-card text-white rounded-3 p-4"
        style={{ backgroundColor: "#3286e0d8" }} // custom background color
      >
        <div className="row g-4 align-items-start">
          <div className="col-md-6">
            <h2 className="h5 mb-3">{leftTitle}</h2>
            <ul className="mb-0 ps-3">
              {interests.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="col-md-6">
            <h2 className="h5 mb-3">{rightTitle}</h2>
            <ul className="list-unstyled mb-0">
              {education.map((e, i) => (
                <li key={i} className="d-flex mb-3">
                  <BsMortarboard className="me-2 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <div className="fw-semibold">{e.degree}</div>
                    <div className="small opacity-75">{e.school}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
