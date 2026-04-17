import { useReveal } from "../../hooks/useReveal";

const posts = [
  {
    category: "SEO",
    title: "The 2025 SEO Playbook: What Actually Moves Rankings",
    excerpt: "Google's algorithm has evolved. Here's what still works, what doesn't, and the strategies we use to dominate SERPs for our clients.",
    date: "Mar 28, 2025",
    readTime: "8 min read",
    gradient: "linear-gradient(135deg, #1a1200, #2a1800)",
    slug: "2025-seo-playbook",
  },
  {
    category: "Web Design",
    title: "Why Your Website Is Killing Your Conversion Rate",
    excerpt: "Most businesses lose 70% of their potential customers to avoidable design mistakes. Here's how to fix the biggest offenders.",
    date: "Mar 12, 2025",
    readTime: "6 min read",
    gradient: "linear-gradient(135deg, #001a10, #001808)",
    slug: "website-conversion-rate-mistakes",
  },
  {
    category: "Strategy",
    title: "Local SEO vs National SEO: Which Does Your Business Need?",
    excerpt: "The wrong SEO strategy wastes time and budget. This guide breaks down how to choose — and what to expect from each approach.",
    date: "Feb 22, 2025",
    readTime: "5 min read",
    gradient: "linear-gradient(135deg, #0d0018, #0a0012)",
    slug: "local-seo-vs-national-seo",
  },
];

export default function Blog() {
  const ref = useReveal();

  return (
    <section id="blog" aria-labelledby="blog-heading" className="relative py-20 md:py-28" style={{ background: "#0d0d0d" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal mb-12 md:mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: 32, height: 1, background: "#C9A84C" }} />
              <span style={{ fontFamily: "DM Sans", fontSize: "0.75rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase" }}>Insights</span>
            </div>
            <h2 id="blog-heading" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff" }}>
              Knowledge That{" "}
              <span style={{ color: "#C9A84C" }}>Drives Growth</span>
            </h2>
          </div>
          <a href="#" style={{ fontFamily: "DM Sans", fontSize: "0.85rem", color: "#C9A84C", display: "flex", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap", flexShrink: 0 }}>
            View All Articles →
          </a>
        </div>

        {/* Grid — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <a
                href={`/blog/${post.slug}`}
                className="block rounded-sm overflow-hidden h-full"
                style={{ border: "1px solid rgba(201,168,76,0.12)", textDecoration: "none", transition: "border-color 0.25s, transform 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ height: 150, background: post.gradient, position: "relative" }}>
                  <span style={{ position: "absolute", top: "1rem", left: "1rem", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "2px", padding: "3px 10px", fontFamily: "DM Sans", fontSize: "0.68rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex flex-col" style={{ background: "#111111" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span style={{ fontFamily: "DM Sans", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)" }}>{post.date}</span>
                    <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.4rem" }}>●</span>
                    <span style={{ fontFamily: "DM Sans", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)" }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 600, color: "#fff", lineHeight: 1.4, marginBottom: "0.65rem" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.84rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, flex: 1 }}>
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2" style={{ color: "#C9A84C", fontFamily: "DM Sans", fontSize: "0.82rem", fontWeight: 600 }}>
                    Read Article →
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
