import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

const GoldenKey = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size * 0.571} viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* bow */}
    <circle cx="12" cy="16" r="9" stroke="#C9A84C" strokeWidth="2" fill="none"/>
    {/* inner circle */}
    <circle cx="12" cy="16" r="3.5" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
    {/* shaft */}
    <line x1="21" y1="16" x2="50" y2="16" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    {/* teeth */}
    <line x1="36" y1="16" x2="36" y2="11" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="43" y1="16" x2="43" y2="12" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="49" y1="16" x2="49" y2="21" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ height: "72px", padding: "0 1.25rem" }}>
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2 group cursor-pointer min-w-0"
          aria-label="Omega Marketing Group — Home"
        >
          {/* Golden key icon */}
          <div
            style={{
              width: 38,
              height: 38,
              border: "1.5px solid #C9A84C",
              borderRadius: "50%",
              background: "rgba(201,168,76,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <GoldenKey size={22} />
          </div>
          <div>
            <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1rem", color: "#fff", lineHeight: 1.1 }}>
              Omega Marketing
            </div>
            <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Group
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="btn-gold px-5 py-2.5 text-sm rounded"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block transition-all duration-300"
              style={{
                width: 24,
                height: 1.5,
                background: "#C9A84C",
                transformOrigin: "center",
                transform:
                  menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4px, 4px)" : i === 1 ? "scaleX(0)" : "rotate(-45deg) translate(4px,-4px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "500px" : "0px",
          background: "rgba(10,10,10,0.98)",
          borderTop: menuOpen ? "1px solid rgba(201,168,76,0.15)" : "none",
        }}
      >
        <nav className="px-6 py-6 flex flex-col gap-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-base py-1"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); setMenuOpen(false); }}
            className="btn-gold px-5 py-3 text-sm rounded text-center mt-2"
          >
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
