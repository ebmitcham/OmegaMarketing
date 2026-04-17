import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Timelines depend on scope. A standard 5–10 page website typically takes 3–5 weeks from kickoff to launch. Larger projects with custom functionality can take 6–12 weeks. We'll give you a precise timeline after your discovery call.",
  },
  {
    q: "How soon will I see results from SEO?",
    a: "SEO is a medium-to-long-term investment. Most clients see meaningful ranking improvements within 60–90 days, with significant organic traffic growth by months 4–6. We don't promise overnight results — we promise sustainable ones.",
  },
  {
    q: "Do you work with businesses outside the US?",
    a: "Yes. We work with clients globally. Our team is distributed and we accommodate different time zones for calls and communications.",
  },
  {
    q: "What's included in website management?",
    a: "Our management plans cover software/plugin updates, content updates, performance monitoring, uptime tracking, security patches, monthly analytics reports, and dedicated support via email or Slack.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade at any time and we'll apply a prorated credit toward your new plan. Many clients start on Starter and move to Growth as their business scales.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "Our project work (web design, construction) is one-time with fixed pricing. Ongoing services (SEO management, website management) are on month-to-month contracts — no lock-in required.",
  },
  {
    q: "What makes Omega different from other agencies?",
    a: "We're specialists, not generalists. We focus exclusively on web and SEO. Every client gets a dedicated point of contact, transparent reporting, and strategies tailored to their specific market — not recycled templates.",
  },
];

// FAQ structured data for Google rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useReveal();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-20 md:py-28" style={{ background: "#0a0a0a" }}>
      {/* FAQ Schema injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div style={{ width: 32, height: 1, background: "#C9A84C" }} />
            <span style={{ fontFamily: "DM Sans", fontSize: "0.75rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase" }}>FAQ</span>
            <div style={{ width: 32, height: 1, background: "#C9A84C" }} />
          </div>
          <h2 id="faq-heading" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff" }}>
            Questions?{" "}
            <span style={{ color: "#C9A84C" }}>We've Got Answers.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal rounded-sm overflow-hidden"
              style={{ transitionDelay: `${i * 0.06}s`, border: open === i ? "1px solid rgba(201,168,76,0.35)" : "1px solid rgba(201,168,76,0.1)", background: open === i ? "#141414" : "#111111", transition: "border-color 0.3s, background 0.3s" }}
            >
              <button
                className="w-full text-left flex items-center justify-between gap-4 p-5 md:p-6"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.93rem", fontWeight: 600, color: open === i ? "#fff" : "rgba(255,255,255,0.75)" }}>
                  {faq.q}
                </span>
                <span style={{ color: "#C9A84C", fontSize: "1.3rem", flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", fontWeight: 300, lineHeight: 1 }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? "300px" : "0px", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, padding: "0 1.25rem 1.25rem" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
