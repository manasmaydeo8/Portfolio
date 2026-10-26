# 🚀 Manas Maydeo — Modern Full-Stack Developer Portfolio

An enterprise-grade, high-performance developer portfolio website built with **React 19**, **Vite**, and a **custom CSS Design System**. Architected for sub-second load times, modular component code-splitting, accessible user experience, and seamless cross-device responsiveness.

- **Live Repository Link**: [https://github.com/manasmaydeo8/portfolio](https://github.com/manasmaydeo8/portfolio)
- **Developer GitHub Profile**: [https://github.com/manasmaydeo8](https://github.com/manasmaydeo8)

---

## 📑 Table of Contents
1. [Core Features & Sections](#-core-features--sections)
2. [Performance & Production Optimization](#-performance--production-optimization)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Local Development & Verification](#-local-development--verification)
6. [Hosting & Deployment Guide](#-hosting--deployment-guide)
   - [Option A: GitHub Pages (Automated CI/CD)](#option-a-github-pages-automated-cicd)
   - [Option B: Vercel](#option-b-vercel)
   - [Option C: Netlify](#option-c-netlify)
7. [Custom Domains & SSL Configuration](#-custom-domains--ssl-configuration)
8. [Cross-Browser & Responsiveness Testing](#-cross-browser--responsiveness-testing)
9. [Challenges Faced & Solutions Implemented](#-challenges-faced--solutions-implemented)

---

## 🌟 Core Features & Sections

| Section | Key Functionalities |
| :--- | :--- |
| **Hero** | Available for opportunities beacon, punchy headline, developer code prompt card, core metrics strip (10+ repos, 99.9% uptime), and instant CTAs. |
| **About Me** | Background story, engineering philosophies (*Micro-Performance, Distributed Scalability, Clean Code*), and quick facts. |
| **Skills** | Filterable by category (*Frontend, Backend, Database/Linux, Tools*), real-time search input, visual proficiency bars, and "Core Stack" badges. |
| **Projects** | Showcase of real repositories ([Eventora](https://github.com/manasmaydeo8/Eventora), [HabitlyTracker](https://github.com/manasmaydeo8/HabitlyTracker), [ShopKart](https://github.com/manasmaydeo8/ShopKart), [Forger](https://github.com/manasmaydeo8/Forger-The-lore-and-Game), [Sprout](https://github.com/manasmaydeo8/Sprout), [Astronomy](https://github.com/manasmaydeo8/Astronomy)). Includes category filtering and architecture detail modals. |
| **Resume** | Interactive switcher between Work Experience and Education/Certifications. Includes 1-click **Download Official Resume** generating a formatted document. |
| **Contact** | 1-click email copy to clipboard with feedback, direct contact details, and a validated message form with status alerts. |
| **Theme Switcher** | Sleek Dark Mode (default) and Light Mode with persistent `localStorage` preference. |

---

## ⚡ Performance & Production Optimization

1. **Component Code-Splitting (`React.lazy` & `Suspense`)**:
   - Critical above-the-fold components (`Navbar`, `Hero`) load instantly in the main bundle.
   - Heavy below-the-fold sections (`About`, `Skills`, `Projects`, `Resume`, `Contact`) are code-split into distinct micro-chunks (`< 10 kB` each), preventing blocking of the main thread.
2. **Skeleton Fallback Shimmer**:
   - Zero layout shift (CLS < 0.01) achieved using animated skeleton pulse loaders during asynchronous chunk fetching.
3. **Lazy-Loaded Media**:
   - Custom `LazyImage` component using native `loading="lazy"`, asynchronous image decoding, skeleton shimmer placeholders, and graceful error handling.
4. **Vite Bundle Optimization (`vite.config.js`)**:
   - Function-based `manualChunks` separation for third-party vendor libraries (`vendor-react`, `vendor-icons`).
   - CSS minification reducing the global design system stylesheet to only **6.46 kB** (2.13 kB gzipped).
   - Entire production build compiled in under **350ms**.

---

## 🛠 Tech Stack

- **Frontend Framework**: React 19 (`react`, `react-dom`)
- **Build Engine & Bundler**: Vite 8 / Rolldown
- **Icons**: Lucide Icons + Handcrafted SVG Brand Icons (GitHub, LinkedIn, Twitter/X)
- **Styling**: Vanilla CSS Design System with CSS Custom Properties & Glassmorphism
- **Typography**: Google Fonts (*Outfit*, *Inter*, *JetBrains Mono*)
- **Deployment**: Vercel (`vercel.json`), Netlify (`netlify.toml`), GitHub Pages (`.github/workflows/deploy.yml`)

---

## 📂 Project Structure

```text
d:/Portfolio
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── avatar.svg              # Developer illustration
│   ├── favicon.svg             # Website favicon
│   ├── project-cloudscale.svg  # High-res SVG mockups
│   ├── project-commerce.svg
│   ├── project-devflow.svg
│   ├── project-fintrack.svg
│   ├── project-pulse.svg
│   └── project-vault.svg
├── src/
│   ├── components/
│   │   ├── About.jsx           # About story & philosophies (lazy-loaded)
│   │   ├── Contact.jsx         # Contact form & details (lazy-loaded)
│   │   ├── Footer.jsx          # Footer & back-to-top button
│   │   ├── Hero.jsx            # Critical LCP hero banner & metrics
│   │   ├── Icons.jsx           # SVG brand icons (zero extra dependencies)
│   │   ├── LazyImage.jsx       # Lazy image loader with shimmer skeleton
│   │   ├── Navbar.jsx          # Sticky glassmorphic navbar & mobile drawer
│   │   ├── ProjectModal.jsx    # Project case study popup
│   │   ├── Projects.jsx        # Project grid & filters (lazy-loaded)
│   │   ├── Resume.jsx          # Resume timeline & certs (lazy-loaded)
│   │   └── Skills.jsx          # Skill meters & search (lazy-loaded)
│   ├── data/
│   │   └── portfolioData.js    # Data store for projects, skills, bio
│   ├── App.css                 # Responsive layout & utility styles
│   ├── App.jsx                 # Root component with Suspense boundaries
│   ├── index.css               # Design system tokens & animations
│   └── main.jsx                # DOM mounting root
├── index.html                  # SEO meta tags, OpenGraph & web fonts
├── netlify.toml                # Netlify deployment & redirect config
├── vercel.json                 # Vercel SPA routing config
├── vite.config.js              # Production chunking & build optimization
└── package.json                # Project dependencies and npm scripts
```

---

## 💻 Local Development & Verification

### Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+` or `v10+`

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Visit `http://localhost:5173/` to preview live changes.

### 3. Generate Production Build
```bash
npm run build
```
Output is compiled directly into the `/dist` directory.

### 4. Verify Production Build Locally
```bash
npm run preview
```
Serves the minified production assets at `http://localhost:4173/`.

---

## 🌐 Hosting & Deployment Guide

### Option A: GitHub Pages (Automated CI/CD)
The repository includes a ready-to-use GitHub Actions workflow located at `.github/workflows/deploy.yml`.

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of production portfolio"
   git remote add origin https://github.com/manasmaydeo8/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. Every push to `main` will automatically build and publish your site at `https://manasmaydeo8.github.io/portfolio/`.

### Option B: Vercel
1. Install Vercel CLI or link through the [Vercel Dashboard](https://vercel.com):
   ```bash
   npm i -g vercel
   vercel
   ```
2. The included `vercel.json` automatically maps SPA routing to `/index.html` and detects Vite.
3. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option C: Netlify
1. Log in to [Netlify](https://app.netlify.com/) and click **Add new site** > **Import an existing project**.
2. Select your GitHub repository (`manasmaydeo8/portfolio`).
3. Netlify will auto-detect the configuration from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy Site**.

---

## 🔒 Custom Domains & SSL Configuration

To connect a custom professional domain (e.g., `manasmaydeo.dev`):

### 1. Configure DNS Records with your Registrar (Namecheap, GoDaddy, Cloudflare, etc.)
- **Root Domain (`@`)**:
  - For Vercel: Add an `A` record pointing to `76.76.21.21`
  - For Netlify: Add an `A` record pointing to `75.2.60.5`
  - For GitHub Pages: Add `A` records pointing to GitHub's IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
- **Subdomain (`www`)**:
  - Add a `CNAME` record with Host `www` pointing to `cname.vercel-dns.com` or your provider's CNAME.

### 2. Automatic SSL Certificates
All three providers (Vercel, Netlify, and GitHub Pages) automatically provision free, auto-renewing **Let's Encrypt SSL/TLS certificates** once DNS propagation completes (typically within 5–30 minutes). Enforce **HTTPS Only** in provider settings.

---

## 📱 Cross-Browser & Responsiveness Testing

- **Browsers Tested**:
  - Google Chrome (Blink)
  - Mozilla Firefox (Gecko)
  - Apple Safari (WebKit)
  - Microsoft Edge (Chromium)
- **Viewport Validations**:
  - **Mobile (< 640px)**: Verified sticky hamburger drawer, stacked metric cards, full-width touch targets.
  - **Tablet (641px - 1024px)**: 2-column adaptive project grid, adjusted typography sizing.
  - **Desktop (1025px+)**: Full interactive hover states, glassmorphism backdrop filters, multi-column layouts.
- **Accessibility (a11y)**:
  - Valid ARIA landmark roles (`<main>`, `<header>`, `<footer>`, `<article>`).
  - Screen-reader labels on icon buttons (`aria-label`).
  - High-contrast text compliance against dark and light backgrounds.

---

## 💡 Challenges Faced & Solutions Implemented

### 1. Vite 8 / Rolldown `manualChunks` Configuration
- **Challenge**: The traditional Rollup object syntax for `output.manualChunks` caused build errors (`TypeError: manualChunks is not a function`) due to updated Rolldown bundler requirements in Vite 8.
- **Solution**: Refactored `manualChunks` into an id-inspection function `manualChunks(id) { ... }` in `vite.config.js`, isolating `react`, `react-dom`, and icons cleanly into separate cached vendor chunks.

### 2. Missing Brand Icon Exports in Package Upgrades
- **Challenge**: Certain brand icons were removed from standard icon libraries causing missing export errors during production builds.
- **Solution**: Created a self-contained, lightweight `Icons.jsx` component providing vector-perfect SVG icons for GitHub, LinkedIn, and Twitter/X, ensuring zero third-party dependency breakage.

### 3. Layout Shifts during Asynchronous Lazy-Loading
- **Challenge**: Lazy-loaded components dynamically popping into view caused sudden content jumps (Cumulative Layout Shift).
- **Solution**: Designed custom CSS shimmer `SectionSkeleton` components matched to the height and margin of each section to hold the layout while chunks download.

---

## 📬 Contact & Links
- **GitHub**: [github.com/manasmaydeo8](https://github.com/manasmaydeo8)
- **Repositories**: [github.com/manasmaydeo8?tab=repositories](https://github.com/manasmaydeo8?tab=repositories)
