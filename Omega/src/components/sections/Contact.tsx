import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "4px",
    padding: "0.85rem 1rem",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.9rem",
    color: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
    WebkitAppearance: "none",
  };

  const labelBase: React.CSSProperties = {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "0.45rem",
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-20 md:py-28" style={{ background: "#0d0d0d" }}>
      <div className="absolute pointer-events-none" style={{ top: "20%", left: "50%", transform: "translateX(-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <div className="reveal flex items-center gap-3 mb-5">
              <div style={{ width: 32, height: 1, background: "#C9A84C" }} />
              <span style={{ fontFamily: "DM Sans", fontSize: "0.75rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase" }}>Contact</span>
            </div>
            <h2 id="contact-heading" className="reveal" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem", transitionDelay: "0.1s" }}>
              Let's Build Something{" "}
              <span style={{ color: "#C9A84C" }}>Exceptional</span>
            </h2>
            <p className="reveal" style={{ fontFamily: "DM Sans", fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "2rem", transitionDelay: "0.15s" }}>
              Ready to dominate your market online? Fill out the form and a strategist will be in touch within 24 hours.
            </p>

            <div className="reveal flex flex-col gap-5" style={{ transitionDelay: "0.2s" }}>
              {[
                { label: "Email", value: "hello@omegamarketinggroup.com" },
                { label: "Phone", value: "+1 (888) 000-0000" },
                { label: "Hours", value: "Mon–Fri, 9am–6pm EST" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#C9A84C", fontSize: "0.55rem" }}>◆</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "DM Sans", fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.1rem" }}>{item.label}</div>
                    <div style={{ fontFamily: "DM Sans", fontSize: "0.9rem", color: "rgba(255,255,255,0.75)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center p-10 rounded-sm" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.3)", minHeight: 320 }}>
                <div style={{ fontSize: "2.5rem", color: "#C9A84C", marginBottom: "1rem" }}>✓</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>Message Received</h3>
                <p style={{ fontFamily: "DM Sans", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                  Thanks for reaching out. A member of our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-sm" style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.15)" }} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelBase} htmlFor="name">Full Name *</label>
                    <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" style={inputBase} onFocus={(e) => (e.target.style.borderColor = "#C9A84C")} onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")} />
                  </div>
                  <div>
                    <label style={labelBase} htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" style={inputBase} onFocus={(e) => (e.target.style.borderColor = "#C9A84C")} onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")} />
                  </div>
                </div>

                <div className="mb-4">
                  <label style={labelBase} htmlFor="company">Company</label>
                  <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Your Company Name" style={inputBase} onFocus={(e) => (e.target.style.borderColor = "#C9A84C")} onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelBase} htmlFor="service">Service *</label>
                    <select id="service" name="service" required value={form.service} onChange={handleChange} style={{ ...inputBase, cursor: "pointer" }} onFocus={(e) => (e.target.style.borderColor = "#C9A84C")} onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}>
                      <option value="" style={{ background: "#111" }}>Select a service</option>
                      <option value="web-design" style={{ background: "#111" }}>Website Design</option>
                      <option value="web-build" style={{ background: "#111" }}>Website Construction</option>
                      <option value="web-management" style={{ background: "#111" }}>Website Management</option>
                      <option value="seo-opt" style={{ background: "#111" }}>SEO Optimization</option>
                      <option value="seo-mgmt" style={{ background: "#111" }}>SEO Management</option>
                      <option value="full" style={{ background: "#111" }}>Full Package</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelBase} htmlFor="budget">Monthly Budget</label>
                    <select id="budget" name="budget" value={form.budget} onChange={handleChange} style={{ ...inputBase, cursor: "pointer" }} onFocus={(e) => (e.target.style.borderColor = "#C9A84C")} onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}>
                      <option value="" style={{ background: "#111" }}>Select range</option>
                      <option value="under1k" style={{ background: "#111" }}>Under $1,000</option>
                      <option value="1k-3k" style={{ background: "#111" }}>$1,000–$3,000</option>
                      <option value="3k-7k" style={{ background: "#111" }}>$3,000–$7,000</option>
                      <option value="7k+" style={{ background: "#111" }}>$7,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label style={labelBase} htmlFor="message">Message *</label>
                  <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your project and goals..." style={{ ...inputBase, resize: "vertical" }} onFocus={(e) => (e.target.style.borderColor = "#C9A84C")} onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")} />
                </div>

                <button type="submit" disabled={loading} className="btn-gold w-full py-4 text-sm rounded" style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
