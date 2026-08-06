# Ilmeza Foundation — Website

The official website for **Ilmeza Foundation**, a registered not-for-profit working across
Education, Health, Environment, and Legal Awareness. This is a single-page React application
(client-side routing) styled with Tailwind CSS.

> **New to this project? Start with the two most important files:**
> 1. `src/data/siteConfig.ts` — all text, contact details, socials, donation info, and program content.
> 2. `src/data/articles.ts` — the blog / Knowledge Hub articles.
>
> You can update almost all site content by editing those two files — no design/code knowledge needed.

---

## 1. Tech stack

| Purpose            | Tool                          |
| ------------------ | ----------------------------- |
| Framework          | React 18 + TypeScript         |
| Build tool         | Vite                          |
| Styling            | Tailwind CSS                  |
| UI components       | shadcn/ui (in `src/components/ui`) |
| Routing            | react-router-dom              |
| Animations         | framer-motion                 |
| Icons              | lucide-react                  |
| Forms (email)      | Web3Forms (no backend needed) |
| Hosting            | Vercel (`vercel.json` present)|

---

## 2. Running the project

Requires **Node.js 18+** and npm.

```sh
npm install       # install dependencies (first time only)
npm run dev       # start local dev server  ->  http://localhost:8080
npm run build     # create production build in /dist
npm run preview   # preview the production build locally
```

---

## 3. Project structure

```
Ilmeza-foundation/
├─ public/                     # static files served as-is
│  ├─ images/                  # all photos
│  │  └─ gallery/              # cleaned & properly-named program photos used across the site
│  ├─ logo_foundation.png      # brand logo (used in navbar & footer)
│  └─ images/qr_donate.png     # UPI donation QR code
│
├─ src/
│  ├─ data/                    # ⭐ EDIT CONTENT HERE (no design knowledge needed)
│  │  ├─ siteConfig.ts         # contact, socials, donate details, programs, hero, health content
│  │  ├─ articles.ts           # Knowledge Hub blog articles
│  │  └─ legal.ts              # Privacy Policy & Terms text
│  │
│  ├─ pages/                   # one file per page/route
│  │  ├─ Index.tsx             # Home
│  │  ├─ About.tsx             # About Us
│  │  ├─ Programs.tsx          # Our Programs
│  │  ├─ HealthCare.tsx        # Women's Health
│  │  ├─ TreeVolution.tsx      # Tree-Volution
│  │  ├─ Events.tsx            # Events (photo gallery + recaps)
│  │  ├─ JoinUs.tsx            # Join Us (volunteer / intern / member / partner form)
│  │  ├─ KnowledgeHub.tsx      # Blog listing
│  │  ├─ ArticlePage.tsx       # Single article (route: /knowledge-hub/:slug)
│  │  ├─ Publish.tsx           # Submit an article
│  │  ├─ Contact.tsx           # Contact form
│  │  ├─ Donate.tsx            # Donation info + QR
│  │  ├─ PrivacyPolicy.tsx     # /privacy
│  │  └─ Terms.tsx             # /terms
│  │
│  ├─ components/
│  │  ├─ Navbar.tsx            # top navigation + dropdown
│  │  ├─ Footer.tsx            # footer (links, contact, Google map, legal)
│  │  ├─ FadeIn.tsx            # scroll-in animation wrapper
│  │  ├─ LegalDoc.tsx          # shared layout for Privacy/Terms pages
│  │  └─ ui/                   # shadcn/ui primitives (buttons, inputs, etc.)
│  │
│  ├─ hooks/                   # small reusable React hooks
│  ├─ App.tsx                  # ⭐ all routes are registered here
│  ├─ index.css                # ⭐ brand colours & design tokens (see Design System)
│  └─ main.tsx                 # app entry point
│
├─ tailwind.config.ts          # Tailwind + custom colour tokens
├─ vite.config.ts              # build config
└─ vercel.json                 # deployment (SPA routing) config
```

---

## 4. How to edit content (common tasks)

### a) Change contact details, socials, donation info, phone/email
Edit **`src/data/siteConfig.ts`**. Everything is grouped under `brand` (contact, socials, donate)
and `home` / `about` / `healthCare` for page content.

### b) Add a new blog article (Knowledge Hub)
Open **`src/data/articles.ts`** and add one object to the `articles` array. Articles are sorted
**newest first automatically** by `date`, so a new article appears at the top of the Knowledge Hub.

```ts
{
  slug: "my-new-article",                 // unique, used in the URL: /knowledge-hub/my-new-article
  title: "My Article Title",
  category: "Legal Awareness",            // becomes a filter chip automatically
  date: "2026-09-01",                     // YYYY-MM-DD (controls ordering)
  author: "Author Name",
  authorRole: "Advocate, Ilmeza Foundation",           // optional
  authorLinkedin: "https://www.linkedin.com/in/...",   // optional (shows a LinkedIn link)
  readTime: "5 min read",
  cover: "/images/gallery/community-meet.jpg",         // any image from /public
  excerpt: "One or two sentence summary shown on the card.",
  content: [
    { type: "h2", text: "A section heading" },
    { type: "p",  text: "A normal paragraph." },
    { type: "quote", text: "A highlighted pull-quote." },
    { type: "list", items: ["First point", "Second point"] },
    { type: "stats", items: [{ value: "94%", label: "What it measures" }] },
  ],
}
```

### c) Edit Privacy Policy / Terms
Edit **`src/data/legal.ts`** (`privacySections` and `termsSections`).

### d) Add or change a photo
1. Put the image in **`public/images/gallery/`** with a clear name, e.g. `winter-drive-2026.jpg`.
2. Reference it in code as `/images/gallery/winter-drive-2026.jpg`.
   (Anything inside `public/` is served from the site root `/`.)

### e) Add a new page
1. Create `src/pages/MyPage.tsx`.
2. Register its route in **`src/App.tsx`**.
3. (Optional) add a link in `Navbar.tsx` / `Footer.tsx`.

---

## 5. Design system (colours & fonts)

Brand colours are defined once as CSS variables in **`src/index.css`** (the `:root` block) and mapped
to Tailwind names in `tailwind.config.ts`. They come from the Ilmeza logo:

| Token       | Meaning                    | Use in classes            |
| ----------- | -------------------------- | ------------------------- |
| `primary`   | Deep navy (base/headings)  | `text-primary`, `bg-primary` |
| `accent`    | Orchid purple (highlights) | `text-accent`, `bg-accent`   |
| `cyan`      | Bright cyan (on dark bg)   | `text-cyan`, `bg-cyan`       |

To re-theme the whole site, change those variables in `index.css` — every page updates automatically.
Headings use **Montserrat**, body text uses **Inter** (imported at the top of `index.css`).

---

## 6. Forms

The Contact, Join Us, and Publish forms submit via **Web3Forms** (email delivery, no server).
The access key lives in `siteConfig.brand.contact.web3formsKey`. Submissions are emailed to the
address configured in the Web3Forms dashboard.

---

## 7. Deployment

The site is a static SPA. `vercel.json` already routes all paths to `index.html` (needed for
client-side routing). To deploy:

- **Vercel/Netlify:** connect the GitHub repo; build command `npm run build`, output dir `dist`.
- **Any static host:** run `npm run build` and upload the `/dist` folder.

---

## 8. One-time cleanup before handover

Some temporary files should be removed and untracked from git. Run **`cleanup.ps1`** once in
PowerShell (from the project folder), or run the commands inside it manually. See that file for
details. It removes stray Vite temp files and the old unused `WhatsApp Image ...` originals
(the site already uses the renamed copies in `public/images/gallery/`).
