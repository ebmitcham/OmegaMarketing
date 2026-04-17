import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for small businesses",
    price: { monthly: 499, annual: 399 },
    features: [
      "5-Page Custom Website",
      "Mobile Responsive Design",
      "Basic On-Page SEO Setup",
      "Contact Form Integration",
      "1 Month Free Support",
      "Google Analytics Setup",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    subtitle: "For businesses ready to scale",
    price: { monthly: 1249, annual: 999 },
    features: [
      "Up to 15-Page Custom Website",
      "Advanced UI/UX Design",
      "Full SEO Optimization",
      "CMS Integration",
      "3 Months Managed Maintenance",
      "Monthly SEO Reports",
      "Speed & Performance Optimization",
      "Priority Support",
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Elite",
    subtitle: "For serious market leaders",
    price: { monthly: 2499, annual: 1999 },
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "Full SEO Management (Ongoing)",
      "Content Strategy & Creation",
      "Link Building Campaigns",
      "Conversion Rate Optimization",
      "Dedicated Account Manager",
      "Weekly Performance Reports",
      "Emergency Support (4hr SLA)",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useReveal();

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative py-20 md:py-28" style={{ background: "#0d0d0d" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal text-center mb-12 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div style={{ width: 32, height: 1, background: "#C9A84C" }} />
            <span style={{ fontFamily: "DM Sans", fontSize: "0.75rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase" }}>Pricing</span>
            <div style={{ width: 32, height: 1, background: "#C9A84C" }} />
          </div>
          <h2 id="pricing-heading" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Transparent Pricing,{" "}
            <span style={{ color: "#C9A84C" }}>No Surprises</span>
          </h2>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: 480, margin: "0 auto 2rem" }}>
            Investment-grade digital services at packages built for real ROI.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4">
            <span style={{ fontFamily: "DM Sans", fontSize: "0.85rem", color: annual ? "rgba(255,255,255,0.4)" : "#fff" }}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle annual billing"
              style={{ width: 48, height: 26, background: annual ? "#C9A84C" : "rgba(255,255,255,0.1)", borderRadius: 13, transition: "background 0.3s", position: "relative", border: "none", cursor: "pointer" }}
            >
              <span style={{ position: "absolute", top: 3, left: annual ? 25 : 3, width: 20, height: 20, background: annual ? "#0a0a0a" : "#fff", borderRadius: "50%", transition: "left 0.3s" }} />
            </button>
            <span style={{ fontFamily: "DM Sans", fontSize: "0.85rem", color: annual ? "#fff" : "rgba(255,255,255,0.4)" }}>
              Annual <span style={{ color: "#C9A84C", fontSize: "0.75rem" }}>Save 20%</span>
            </span>
          </div>
        </div>

        {/* Cards — stacked mobile, 3-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={plan.name} className="reveal relative" style={{ transitionDelay: `${i * 0.12}s` }}>
              {plan.badge && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#C9A84C", color: "#0a0a0a", fontFamily: "DM Sans", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 16px", borderRadius: "2px", whiteSpace: "nowrap", zIndex: 2 }}>
                  {plan.badge}
                </div>
              )}
              <div className="h-full flex flex-col p-7 md:p-8 rounded-sm" style={{ background: plan.highlight ? "linear-gradient(160deg, #1a1300, #111111)" : "#111111", border: plan.highlight ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(201,168,76,0.12)", boxShadow: plan.highlight ? "0 0 60px rgba(201,168,76,0.08)" : "none" }}>
                <div style={{ marginBottom: "1.25rem" }}>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{plan.name}</h3>
                  <p style={{ fontFamily: "DM Sans", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", marginTop: "0.25rem" }}>{plan.subtitle}</p>
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.25rem" }}>
                    <span style={{ fontFamily: "DM Sans", fontSize: "1rem", color: "#C9A84C", marginTop: "0.5rem" }}>$</span>
                    <span style={{ fontFamily: "Playfair Display, serif", fontSize: "2.8rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                      {(annual ? plan.price.annual : plan.price.monthly).toLocaleString()}
                    </span>
                  </div>
                  <span style={{ fontFamily: "DM Sans", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>/month</span>
                </div>

                <div className="divider-gold mb-5" />

                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3" style={{ fontFamily: "DM Sans", fontSize: "0.88rem", color: "rgba(255,255,255,0.65)" }}>
                      <span style={{ color: "#C9A84C", fontSize: "0.55rem", marginTop: "0.45rem", flexShrink: 0 }}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={plan.highlight ? "btn-gold px-6 py-3.5 text-sm rounded w-full" : "btn-outline-gold px-6 py-3.5 text-sm rounded w-full"}
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label={`${plan.cta} — ${plan.name} plan`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-8" style={{ transitionDelay: "0.4s" }}>
          <p style={{ fontFamily: "DM Sans", fontSize: "0.88rem", color: "rgba(255,255,255,0.4)" }}>
            Need a custom enterprise plan?{" "}
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} style={{ color: "#C9A84C", cursor: "pointer" }}>
              Contact us for a tailored quote →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
