const GoldenKey = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size * 0.571} viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="16" r="9" stroke="#C9A84C" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="16" r="3.5" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
    <line x1="21" y1="16" x2="50" y2="16" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="36" y1="16" x2="36" y2="11" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="43" y1="16" x2="43" y2="12" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="49" y1="16" x2="49" y2="21" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#070707", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: 38, height: 38, border: "1.5px solid #C9A84C", borderRadius: "50%", background: "rgba(201,168,76,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <GoldenKey size={22} />
              </div>
              <div>
                <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1rem", color: "#fff", lineHeight: 1.1 }}>Omega Marketing</div>
                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.18em", textTransform: "uppercase" }}>Group</div>
              </div>
            </div>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.87rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, maxWidth: 320, marginBottom: "1.5rem" }}>
              Premium website design, construction, management, and SEO services for businesses that demand results.
            </p>
            <div className="flex gap-3">
              {[
                { label: "LinkedIn", short: "in" },
                { label: "Twitter/X", short: "X" },
                { label: "Facebook", short: "fb" },
              ].map((s) => (
                <a key={s.short} href="#" aria-label={s.label} style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans", fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", transition: "border-color 0.2s, color 0.2s", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C"; (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services footer navigation">
            <h4 style={{ fontFamily: "DM Sans", fontSize: "0.72rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>Services</h4>
            <ul className="flex flex-col gap-2.5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Website Design", "Website Construction", "Website Management", "SEO Optimization", "SEO Management"].map((s) => (
                <li key={s}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("#services"); }} style={{ fontFamily: "DM Sans", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company footer navigation">
            <h4 style={{ fontFamily: "DM Sans", fontSize: "0.72rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>Company</h4>
            <ul className="flex flex-col gap-2.5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "About", href: "#about" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Pricing", href: "#pricing" },
                { label: "Blog", href: "#blog" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={(e) => { e.preventDefault(); scrollTo(item.href); }} style={{ fontFamily: "DM Sans", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="divider-gold mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "DM Sans", fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
            © {year} Omega Marketing Group. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" style={{ fontFamily: "DM Sans", fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
