// app/page.jsx
import Certifications from "./components/certifications";
import ProfileMeta from "./components/ProfileMeta";
import Skills from "./components/skills";
import Experience from "./components/experience";
import { BsDownload } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { SiReact, SiNextdotjs, SiPostgresql, SiNodedotjs } from "react-icons/si";

const TECH = [
  { Icon: SiReact, color: "#61DAFB", label: "React.js" },
  { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
  { Icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
  { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
];

function TechIcon({ Icon, color, label }) {
  return (
    <span
      className="hero-tech d-inline-flex align-items-center justify-content-center rounded-circle"
      title={label}
      aria-label={label}
    >
      <Icon size={26} color={color} aria-hidden="true" />
    </span>
  );
};

export default function Home() {
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
       <h1 className="display-5 fw-bold">Manabendra – Fullstack Developer</h1>
       <p className="lead mb-3">React.js • Next.js • PostgreSQL • Node.js</p>

       {/* Icon row */}
       <div className="d-flex justify-content-center gap-5 mb-4 mt-3 flex-wrap">
         {TECH.map((t, i) => (
           <TechIcon key={i} {...t} />
         ))}
       </div>
       {/* <a className="btn btn-dark btn-lg" href="#projects">View Projects</a> */}
     </section>

      <section className="mb-5">
        <h2 className="h4 mb-3">About</h2>
        <p className="text-secondary">
          Hi, I’m a Junior Software Developer at Triptales, working on DialUrban,
           a platform with Property, Job and Matrimony portals. I build both the frontend and the backend — creating
           responsive UIs with Next.js and React-Bootstrap, and developing secure API routes in Next.js that connect
           to a PostgreSQL database. <br />
           <br />I enjoy working on projects that bring real value to people, 
           and I like taking on both frontend and backend challenges. 
           Outside of coding, I’m always exploring new tools and ways to make development faster and more fun.
        </p>
      </section>

      <Skills />
      <ProfileMeta />
      <Experience />
      <Certifications />

    {/* resume download section */}
   <section>
  <a
    className="btn btn-dark btn-lg mb-5 d-inline-flex align-items-center resume-btn"
    href="/Manabendra_2025.pdf"
    download="Manabendra_Bisoyi_Resume.pdf"
    style={{ transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
  >
    <BsDownload className="me-2" />
    Download Resume
  </a>
   </section>


  {/* contact section */}
    <section className="mb-5" aria-labelledby="contact-title">
  <h2 id="contact-title" className="h4 mb-3">Contact</h2>

  <div className="d-flex gap-3 flex-wrap">
    {/* Email */}
    <a
      href="mailto:manabendrabisoyi19@gmail.com"
      className="contact-icon"
      aria-label="Email Manabendra"
      title="Email"
      style={{ backgroundColor: "#111827" }} // dark slate
    >
      <BsEnvelope size={24} aria-hidden="true" />
      <span className="visually-hidden">Email</span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/your-linkedin-username/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
      aria-label="LinkedIn profile"
      title="LinkedIn"
      style={{ backgroundColor: "#0A66C2" }} // LinkedIn blue
    >
      <SiLinkedin size={24} aria-hidden="true" />
      <span className="visually-hidden">LinkedIn</span>
    </a>
  </div>
</section>

    </main>
  );
}
