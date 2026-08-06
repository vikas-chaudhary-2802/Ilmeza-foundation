import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { allArticles } from "./src/data/articles";

/**
 * Public site URL — used to build ABSOLUTE og:image / og:url links for social
 * preview cards (WhatsApp, LinkedIn, Facebook require absolute URLs).
 * 👉 If you move to a custom domain, change this ONE line (e.g. "https://ilmeza.com").
 */
const SITE_URL = "https://ilmeza-foundation.vercel.app";

/** Escape text for safe insertion into an HTML attribute. */
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Build a per-article HTML page by swapping the meta tags in the base index.html. */
function buildArticleHtml(baseHtml: string, a: (typeof allArticles)[number]): string {
  const url = `${SITE_URL}/knowledge-hub/${a.slug}`;
  const img = a.cover.startsWith("http") ? a.cover : `${SITE_URL}${a.cover}`;
  const pageTitle = esc(`${a.title} | Ilmeza Foundation`);
  const ogTitle = esc(a.title);
  const desc = esc(a.excerpt);

  return baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${pageTitle}</title>`)
    .replace(/(<meta name="description" content=")[\s\S]*?(")/, `$1${desc}$2`)
    .replace(/(<meta property="og:title" content=")[\s\S]*?(")/, `$1${ogTitle}$2`)
    .replace(/(<meta property="og:description" content=")[\s\S]*?(")/, `$1${desc}$2`)
    .replace(/(<meta property="og:type" content=")[\s\S]*?(")/, `$1article$2`)
    .replace(/(<meta property="og:image" content=")[\s\S]*?(")/, `$1${img}$2`)
    .replace(/(<meta name="twitter:title" content=")[\s\S]*?(")/, `$1${ogTitle}$2`)
    .replace(/(<meta name="twitter:image" content=")[\s\S]*?(")/, `$1${img}$2`)
    .replace(/(<link rel="canonical" href=")[\s\S]*?(")/, `$1${url}$2`)
    .replace("</head>", `  <meta property="og:url" content="${url}" />\n  </head>`);
}

/**
 * Prerender plugin: after the production build, generate a static HTML file for
 * every Knowledge Hub article at dist/knowledge-hub/<slug>/index.html with that
 * article's own title/description/image meta tags. Social crawlers (which do not
 * run JavaScript) then read the correct preview per article. Real users still get
 * the full React single-page app.
 */
function prerenderArticleMeta() {
  return {
    name: "prerender-article-meta",
    apply: "build" as const,
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const indexPath = path.join(dist, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const baseHtml = fs.readFileSync(indexPath, "utf8");
      for (const a of allArticles) {
        const dir = path.join(dist, "knowledge-hub", a.slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "index.html"), buildArticleHtml(baseHtml, a));
      }
      // eslint-disable-next-line no-console
      console.log(`✓ Prerendered social meta for ${allArticles.length} article(s).`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), prerenderArticleMeta()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
