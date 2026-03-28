"use client";
import { motion } from "framer-motion";
import { BsEnvelopeFill } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

export default function FloatingContact() {
  function scrollToContact(e) {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.div
      className="floating-contact-wrapper"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
    >
      <motion.a
        href="#contact"
        className="floating-contact-btn email"
        aria-label="Quick Email Contact"
        title="Contact via Email"
        onClick={scrollToContact}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <BsEnvelopeFill size={22} />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/manabendra-bisoyi-cruzedev/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact-btn linkedin"
        aria-label="LinkedIn Profile"
        title="Open LinkedIn"
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <SiLinkedin size={22} />
      </motion.a>
    </motion.div>
  );
}
