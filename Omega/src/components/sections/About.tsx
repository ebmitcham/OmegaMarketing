import { useReveal } from "../../hooks/useReveal";

const values = [
  { title: "Results-Obsessed", description: "We don't measure success by deliverables. We measure it by your growth." },
  { title: "Transparent by Default", description: "No black-box reporting. You always know exactly what we're doing and why." },
  { title: "Long-Term Partners", description: "We build relationships, not just websites. Your success is our reputation." },
  { title: "Data-Driven", description: "Every decision is backed by analytics, research, and industry intelligence." },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-20 md:py-28" style={{ background: "#0d0d0d" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div>
            <div className="reveal flex items-center gap-3 mb-5">
              <div style={{ width: 32, height: 1, background: "#C9A84C" }} />
              <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                About Us
              </span>
            </div>

            <h2 id="about-heading" className="reveal" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: "1.5rem", transitionDelay: "0.1s" }}>
              We're the Agency That{" "}
              <span style={{ color: "#C9A84C" }}>Gets It Done</span>
            </h2>

            <p className="reveal" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: "1.25rem", transitionDelay: "0.2s" }}>
              Omega Marketing Group was founded on a simple premise: most agencies overpromise and underdeliver. We built our company to be the exception.
            </p>
            <p className="reveal" style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: "2rem", transitionDelay: "0.25s" }}>
              We're a specialized team of web designers, developers, and SEO strategists who care deeply about one thing — your bottom line. From boutique businesses to fast-scaling enterprises, we bring enterprise-grade expertise with the attention of a dedicated partner.
            </p>

            <button
              className="reveal btn-outline-gold px-7 py-3 text-sm rounded"
              style={{ transitionDelay: "0.3s" }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Work With Us
            </button>
          </div>

          {/* Right — values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal p-6 rounded-sm"
                style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.12)", transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <div style={{ width: 24, height: 2, background: "#C9A84C", marginBottom: "1rem" }} />
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "0.5rem" }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
