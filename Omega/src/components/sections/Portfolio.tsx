import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";

const categories = ["All", "Web Design", "SEO", "Management"];

const projects = [
  {
    title: "LuxeStay Hotels",
    category: "Web Design",
    tags: ["UI/UX", "React", "Booking System"],
    result: "+240% online bookings",
    description: "Full redesign and rebuild of a boutique hotel chain's booking platform.",
    gradient: "linear-gradient(135deg, #1a1200, #2a1e00)",
  },
  {
    title: "Vertex Legal Group",
    category: "SEO",
    tags: ["Technical SEO", "Content", "Local SEO"],
    result: "#1 rank in 14 keywords",
    description: "Comprehensive SEO overhaul for a multi-location law firm.",
    gradient: "linear-gradient(135deg, #0a1a0a, #001800)",
  },
  {
    title: "Peak Performance Gym",
    category: "Web Design",
    tags: ["Web Design", "Membership Portal", "CMS"],
    result: "+180% lead generation",
    description: "Brand-forward website with integrated membership management.",
    gradient: "linear-gradient(135deg, #1a0a00, #2a1000)",
  },
  {
    title: "Coastal Commerce Co.",
    category: "Management",
    tags: ["Monthly Management", "Analytics", "Updates"],
    result: "99.98% uptime — 18 months",
    description: "Ongoing website management for a regional e-commerce brand.",
    gradient: "linear-gradient(135deg, #001a1a, #001515)",
  },
  {
    title: "NovaTech Solutions",
    category: "SEO",
    tags: ["National SEO", "Link Building", "Audit"],
    result: "3.8× organic traffic in 6mo",
    description: "Full SEO management campaign for a B2B SaaS company.",
    gradient: "linear-gradient(135deg, #0d0018, #110020)",
  },
  {
    title: "Meridian Real Estate",
    category: "Web Design",
    tags: ["Property Portal", "SEO", "CRM Integration"],
    result: "+320% inbound inquiries",
    description: "High-performance property listing site with CRM integration.",
    gradient: "linear-gradient(135deg, #1a1500, #221c00)",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const ref = useReveal();

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="relative py-20 md:py-28" style={{ background: "#0a0a0a" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal mb-10 md:mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: 32, height: 1, background: "#C9A84C" }} />
              <span style={{ fontFamily: "DM Sans", fontSize: "0.75rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Work</span>
            </div>
            <h2 id="portfolio-heading" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff" }}>
              Proven Results,{" "}
              <span style={{ color: "#C9A84C" }}>Real Impact</span>
            </h2>
          </div>

          {/* Filters — scrollable on mobile */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-2 text-sm rounded transition-all duration-200"
                style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, background: active === cat ? "#C9A84C" : "transparent", color: active === cat ? "#0a0a0a" : "rgba(255,255,255,0.5)", border: active === cat ? "1px solid #C9A84C" : "1px solid rgba(255,255,255,0.1)" }}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((project, i) => (
            <article key={project.title} className="reveal rounded-sm overflow-hidden" style={{ transitionDelay: `${i * 0.08}s`, border: "1px solid rgba(201,168,76,0.12)" }}>
              <div style={{ height: 160, background: project.gradient, position: "relative" }}>
                <div style={{ position: "absolute", top: "1rem", left: "1rem", fontFamily: "Playfair Display, serif", fontSize: "2.8rem", fontWeight: 700, color: "rgba(201,168,76,0.15)", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: "4px", padding: "4px 10px", fontFamily: "DM Sans, sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#C9A84C" }}>
                  {project.result}
                </div>
              </div>
              <div className="p-5 md:p-6" style={{ background: "#111111" }}>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "DM Sans", fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px", padding: "2px 7px", letterSpacing: "0.04em", textTransform: "uppercase" }}>{t}</span>
                  ))}
                </div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>{project.title}</h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.84rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
