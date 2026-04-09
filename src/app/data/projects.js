/**
 * Central project data.
 * - `live`  is optional — omit if the project isn't deployed.
 * - `code`  is optional — omit if the repo is private / not yet linked.
 * - `featured` marks the hero card on the homepage (first featured entry wins).
 *
 * Add new projects here; both the homepage preview and /projects page update automatically.
 */
export const PROJECTS = [
  {
    title: "Dialurbano Property",
    desc: "Full-stack property listing platform with admin panel, blogs, enquiry form, filters, property details, and user enquiry tracking.",
    stack: ["Next.js", "React-Bootstrap", "Node.js", "PostgreSQL", "JWT"],
    image: "/projects/property.png",
    live: "https://www.duproperty.in/",
    type: "Full-Stack",
    featured: true,
  },
  {
    title: "ID Card Generator",
    desc: "ID Card Generator is a web application that allows users to generate ID cards for their organization.",
    stack: ["Next.js", "NeonDB", "PostgreSQL", "JWT", "Next Auth"],
    image: "/projects/id-card-generator.png",
    live: "https://id-card-gen-pro.vercel.app/",
    code: "https://github.com/CruzeCoder-19/IdCardGen-Pro",
    type: "Full-Stack",
  },
  {
    title: "InvoiceDo",
    desc: "Production-ready SaaS invoice generator with PDF export, dashboard analytics, and multi-provider authentication.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    image: "/projects/InvoiceDo.png",
    live: "https://invoicedo.netlify.app/",
    code: "https://github.com/CruzeCoder-19/invoiceflow",
    type: "Full-Stack",
  },
];

/** Projects shown on the homepage (featured first + next non-featured). */
export const HOMEPAGE_PROJECTS = [
  ...(PROJECTS.filter((p) => p.featured)),
  ...PROJECTS.filter((p) => !p.featured).slice(0, 2),
];
