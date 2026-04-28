/**
 * Central certifications data.
 * - `file`  — path to the PDF under /public (e.g. "/certificates/my-cert.pdf")
 * - `thumb` — path to a manually-generated PNG/WebP thumbnail next to the PDF
 *
 * Drop the PDF + thumbnail into public/certificates/ then add an entry here.
 * Both the homepage preview and /certifications page update automatically.
 */
export const CERTIFICATES = [
  {
    title: "Claude Code In Action",
    issuer: "Anthropic",
    file: "/certificates/CCA.pdf",
    thumb: "/certificates/CCA.png",
  },
  {
    title: "Full Stack Development",
    issuer: "My Captain",
    file: "/certificates/Fullstack.pdf",
    thumb: "/certificates/Fullstack.png",
  },
  {
    title: "HCL GUVI Certification",
    issuer: "GUVI",
    file: "/certificates/HCL GUVI Certification.png",
    thumb: "/certificates/GUVI.png",
  },
  {
    title: "Web Development",
    issuer: "My Captain",
    file: "/certificates/Web Development.pdf",
    thumb: "/certificates/Web Development.png",
  },
  {
    title: "Java Programming",
    issuer: "My Captain",
    file: "/certificates/Java.pdf",
    thumb: "/certificates/Java.png",
  },
  {
    title: "Python Programming",
    issuer: "My Captain",
    file: "/certificates/Python.pdf",
    thumb: "/certificates/Python.png",
  },
];

/** Certs shown on the homepage (first 2). */
export const HOMEPAGE_CERTS = CERTIFICATES.slice(0, 2);
