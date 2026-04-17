import { useReveal } from "../../hooks/useReveal";

const services = [
  {
    icon: "◈",
    title: "Website Design",
    subtitle: "Conversion-First Aesthetics",
    description:
      "We craft bespoke websites that command attention and convert visitors into customers. Every pixel is intentional — from layout strategy to motion design, built around your brand.",
    features: ["Custom UI/UX Design", "Mobile-First Responsive", "Brand-Aligned Visual Identity", "CRO-Optimized Layouts"],
  },
  {
    icon: "⬡",
    title: "Website Construction",
    subtitle: "Built to Perform",
    description:
      "Engineered for speed, security, and scalability. We build on modern stacks with clean, maintainable code that search engines and users both love.",
    features: ["React / Next.js / WordPress", "Core Web Vitals Optimized", "SSL & Security Hardening", "CMS Integration"],
  },
  {
    icon: "◎",
    title: "Website Management",
    subtitle: "Always On, Always Sharp",
    description:
      "Your website is your most critical digital asset. We handle all updates, performance tuning, uptime, and content so you can focus on running your business.",
    features: ["24/7 Uptime Monitoring", "Content Updates & Edits", "Performance Optimization", "Monthly Analytics Reports"],
  },
  {
    icon: "◉",
    title: "SEO Optimization",
    subtitle: "Rank. Dominate. Win.",
    description:
      "Deep technical and on-page SEO that moves the needle. We audit, optimize, and engineer your site to rank for the keywords that matter most to your business.",
    features: ["Full Technical SEO Audit", "On-Page & Schema Markup", "Core Web Vitals Fix", "Keyword Architecture"],
  },
  {
    icon: "⟁",
    title: "SEO Management",
    subtitle: "Sustained Organic Growth",
    description:
      "SEO isn't a one-time fix — it's an ongoing campaign. We manage your organic presence month-over-month with content, backlinks, and real analytics.",
    features: ["Monthly SEO Campaigns", "Link Building Strategy", "Local SEO & GMB", "Competitor Analysis"],
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" aria-labelledby="services-heading" className="relative py-20 md:py-28" style={{ background: "#0a0a0a" }}>
      <div className="divider-gold" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 pt-16">
        {/* Header */}
        <div className="reveal mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 32, height: 1, background: "#C9A84C" }} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              What We Do
            </span>
          </div>
          <h2 id="services-heading" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", maxWidth: 500 }}>
            Services Built for{" "}
            <span style={{ color: "#C9A84C" }}>Serious Growth</span>
          </h2>
        </div>

        {/* Services grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="h-full p-6 md:p-8 rounded-sm relative overflow-hidden transition-all duration-300"
                style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.12)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.border = "1px solid rgba(201,168,76,0.4)";
                  el.style.background = "#141414";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 16px 48px rgba(201,168,76,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.border = "1px solid rgba(201,168,76,0.12)";
                  el.style.background = "#111111";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div className="absolute top-0 right-0" style={{ width: 60, height: 60, background: "linear-gradient(225deg, rgba(201,168,76,0.08), transparent)" }} />

                <div className="mb-5" style={{ fontSize: "1.8rem", color: "#C9A84C", lineHeight: 1 }}>{service.icon}</div>

                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 600, color: "#fff", marginBottom: "0.2rem" }}>
                  {service.title}
                </h3>
                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.9rem" }}>
                  {service.subtitle}
                </div>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  {service.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2" style={{ fontFamily: "DM Sans", fontSize: "0.82rem", color: "rgba(255,255,255,0.65)" }}>
                      <span style={{ color: "#C9A84C", fontSize: "0.55rem", flexShrink: 0 }}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          {/* CTA card */}
          <div className="reveal" style={{ transitionDelay: "0.5s" }}>
            <div className="h-full p-6 md:p-8 rounded-sm flex flex-col justify-between" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))", border: "1px solid rgba(201,168,76,0.3)" }}>
              <div>
                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Custom Solutions</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>Need Something Tailored?</h3>
                <p style={{ fontFamily: "DM Sans", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
                  Every business is unique. Let's talk about a custom digital strategy built specifically for your goals.
                </p>
              </div>
              <button className="btn-gold mt-8 px-6 py-3 text-sm rounded w-full" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
