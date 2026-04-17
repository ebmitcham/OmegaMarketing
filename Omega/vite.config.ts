import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // IMPORTANT: This must match your GitHub repo name exactly.
  // If your repo URL is https://github.com/ebmitcham/Marketing-Group
  // then base = "/Marketing-Group/"
  // If you're using a custom domain (e.g. omegamarketinggroup.com), set base = "/"
  base: "/Marketing-Group/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
