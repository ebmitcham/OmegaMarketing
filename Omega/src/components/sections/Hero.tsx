import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.35 + 0.05,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="Omega Marketing Group — Premium Website Design & SEO Services"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        minHeight: "100svh",
        background: "#0a0a0a",
        width: "100%",
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "5%",
          width: "min(600px, 100vw)",
          height: "min(600px, 100vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "7rem clamp(1.25rem, 5vw, 3rem) 5rem",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "min(680px, 100%)" }}>
          {/* Eyebrow */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <div style={{ width: 28, height: 1, background: "#C9A84C", flexShrink: 0 }} />
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Premium Digital Marketing
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 7.5vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: "1.25rem",
              wordBreak: "break-word",
            }}
          >
            Dominate Your Market.{" "}
            <span style={{ color: "#C9A84C" }}>Own the Web.</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              marginBottom: "2.25rem",
              maxWidth: "540px",
            }}
          >
            We build high-performance websites and execute precision SEO strategies that turn browsers into buyers. Built for businesses that play to win.
          </p>

          {/* CTA buttons — stack on mobile, row on sm+ */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              width: "100%",
              maxWidth: "420px",
            }}
          >
            <button
              className="btn-gold"
              style={{ padding: "1rem 2rem", fontSize: "0.95rem", borderRadius: "4px", width: "100%", cursor: "pointer" }}
              onClick={scrollToContact}
              aria-label="Get a free strategy call with Omega Marketing Group"
            >
              Get a Free Strategy Call
            </button>
            <button
              className="btn-outline-gold"
              style={{ padding: "1rem 2rem", fontSize: "0.95rem", borderRadius: "4px", width: "100%", cursor: "pointer" }}
              onClick={scrollToServices}
              aria-label="View our website design and SEO services"
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
