"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSend = async () => {
    setStatus({ type: "", msg: "" });
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", msg: "Please fill all fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", msg: "Please enter a valid email." });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ type: "error", msg: data?.error || "Failed to send. Try again." });
        return;
      }
      setStatus({ type: "success", msg: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStatus({ type: "", msg: "" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="mb-0 contact-section" aria-labelledby="contact-title">
      <div className="text-center mb-4">
        <h2 id="contact-title" className="h3 fw-bold">Let&apos;s Work Together</h2>
        <p style={{ color: "var(--color-text-secondary)" }} className="mt-2">
          Have a project, job opportunity, or idea? Drop a message and I&apos;ll get back to you.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-7">
          <div className="card shadow-lg border-0 contact-card" style={{ overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              {status.type === "success" ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  className="contact-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="contact-success-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32">
                      <polyline points="5,16 13,24 27,8"
                        style={{ strokeDasharray: 100, strokeDashoffset: 100, animation: "drawCheck 0.6s ease forwards 0.2s" }} />
                    </svg>
                  </div>
                  <p className="contact-success-text">Message Sent!</p>
                  <p className="contact-success-sub">I&apos;ll get back to you as soon as possible.</p>
                  <button className="contact-reset-btn" onClick={handleReset}>
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* ── Form state ── */
                <motion.form
                  key="form"
                  className="p-4 p-md-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                >
                  {/* Name */}
                  <div className="mb-4">
                    <div className="float-field">
                      <input
                        type="text"
                        id="contact-name"
                        className="contact-input"
                        placeholder=" "
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="name"
                      />
                      <label htmlFor="contact-name">Your Name</label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <div className="float-field">
                      <input
                        type="email"
                        id="contact-email"
                        className="contact-input"
                        placeholder=" "
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="email"
                      />
                      <label htmlFor="contact-email">Your Email</label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <div className="float-field">
                      <textarea
                        id="contact-message"
                        className="contact-input"
                        rows="4"
                        placeholder=" "
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        disabled={loading}
                        style={{ resize: "vertical" }}
                      />
                      <label htmlFor="contact-message">Message</label>
                    </div>
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {status.type === "error" && (
                      <motion.div
                        className="mb-3 small text-danger"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        {status.msg}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    className="btn contact-btn w-100"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
