"use client";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Certifications from "./components/certifications";
import ProfileMeta from "./components/ProfileMeta";
import Skills from "./components/skills";
import Projects from "./components/project";
import Experience from "./components/experience";
import ContactUs from "./components/contactus";
import FloatingContact from "./components/FloatingContact";
import ResumeDownload from "./components/ResumeDownload";

export default function Home() {
  return (
    <main className="container py-5">
      {/* First two sections get explicit page-load entrance; the rest use whileInView inside components */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <AboutSection />
      </motion.div>

      <Skills />
      <ProfileMeta />
      <Experience />
      <Certifications />
      <Projects />
      <ResumeDownload />
      <ContactUs />
      <FloatingContact />
    </main>
  );
}
