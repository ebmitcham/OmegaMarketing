# Omega Marketing Group

Marketing website for **Omega Marketing Group** — website design, construction, management, SEO optimization & management.

## 🚀 Deploy to GitHub Pages (automatic)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push any commit to `main` — it auto-builds and deploys

Live at: `https://your-username.github.io/your-repo-name/`

> **Custom domain?** Add a `CNAME` file to the `public/` folder containing your domain (e.g. `www.omegamarketinggroup.com`), then configure DNS.

## 🛠 Local Development

```bash
# Install dependencies (requires Bun — https://bun.sh)
bun install

# Start dev server
bun run dev

# Production build
bun run build

# Preview production build
bun run preview
```

## Stack

- **React 19** + **TypeScript**
- **Vite 6** — build tool
- **Tailwind CSS v4** — styling
- **Google Fonts** — Playfair Display + DM Sans

## Project Structure

```
src/
  components/
    sections/     # Hero, Services, About, Portfolio, Pricing, Blog, FAQ, Contact
    Navbar.tsx
    Footer.tsx
    SEOHead.tsx
  hooks/
    useReveal.ts  # Scroll-reveal intersection observer
  pages/
    Index.tsx
  styles.css      # Global styles + Tailwind theme
public/
  greek-key.jpg   # Background texture
  favicon.svg
.github/
  workflows/
    deploy.yml    # Auto-deploy to GitHub Pages on push to main
```
