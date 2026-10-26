# 💼 Manas Maydeo — Senior Lead Web Developer Portfolio (12+ Years Experience)

A battle-tested, high-performance web portfolio built with **React 19**, **Vite**, and **Vitest Test Suite**. Built with 12+ years of commercial web development expertise and focused on the core truth of modern web development: **intuitive design, sub-second speed, and reliable engineering is what sells products and converts visitors**.

- **Live Repository Link**: [https://github.com/manasmaydeo8/portfolio](https://github.com/manasmaydeo8/portfolio)
- **Developer GitHub Profile**: [https://github.com/manasmaydeo8](https://github.com/manasmaydeo8)

---

## 📑 Table of Contents
1. [Engineering Philosophy: What Truly Sells](#-engineering-philosophy-what-truly-sells)
2. [Test Engineering & Quality Assurance (`Vitest`)](#-test-engineering--quality-assurance-vitest)
3. [Core Sections & Architecture](#-core-sections--architecture)
4. [Performance & Production Optimization](#-performance--production-optimization)
5. [Tech Stack](#-tech-stack)
6. [Local Development, Testing & Verification](#-local-development-testing--verification)
7. [Hosting & Deployment Guide](#-hosting--deployment-guide)
   - [Option A: GitHub Pages (Automated CI/CD)](#option-a-github-pages-automated-cicd)
   - [Option B: Vercel](#option-b-vercel)
   - [Option C: Netlify](#option-c-netlify)
8. [Custom Domains & SSL Configuration](#-custom-domains--ssl-configuration)
9. [Cross-Browser & Responsiveness Testing](#-cross-browser--responsiveness-testing)
10. [Challenges Faced & Solutions Implemented](#-challenges-faced--solutions-implemented)

---

## 💎 Engineering Philosophy: What Truly Sells

In twelve years of commercial software engineering, one principle consistently proves true: **Good design is obvious. Great design sells.**
- **Friction Kills Conversion**: Slow page loads and layout shifts increase bounce rate exponentially. Sub-second Largest Contentful Paint (LCP) directly preserves revenue.
- **Visual Hierarchy Guides Action**: Clear contrast, cognitive pacing, and accessibility compliance (WCAG 2.1 AA) create an environment of trust.
- **Reliability Protects Brand Equity**: A checkout or booking page with a race condition or unhandled edge case destroys customer confidence immediately.

---

## 🧪 Test Engineering & Quality Assurance (`Vitest`)

Software testing is not an afterthought; it is an active discipline. This project includes an automated **Vitest** test suite verifying data integrity, testing skills, component behavior, and regression boundaries.

### Testing Principles Enforced:
1. **User-Centric Assertions**: Tests written following React Testing Library guidelines—querying by accessible roles rather than internal implementation details.
2. **Deterministic Speed**: Powered by Vitest's lightning-fast native Vite module transform pipeline (100% test execution in `< 200ms`).
3. **Continuous Verification**: Integrated into CI workflows to prevent regressive commits from reaching production.

Run the test suite locally:
```bash
npm run test
```

---

## 🌟 Core Sections & Architecture

| Section | Senior Implementation Detail |
| :--- | :--- |
| **Hero** | Available for opportunities beacon, 12+ years experience credentials, test suite status pass badge, core metrics strip, and high-conversion CTAs. |
| **About Me** | Twelve-year commercial journey, core philosophies (*Design That Sells, Test Engineering, Sub-Second Performance*), and standards. |
| **Skills** | Categorized into *Frontend & Architecture*, *Test Engineering (QA/TDD)*, *Backend & Systems*, and *Web Design & Conversion*. Real-time keyword filter. |
| **Projects** | Real case studies from GitHub ([ShopKart](https://github.com/manasmaydeo8/ShopKart), [Eventora](https://github.com/manasmaydeo8/Eventora), [HabitlyTracker](https://github.com/manasmaydeo8/HabitlyTracker), [Forger](https://github.com/manasmaydeo8/Forger-The-lore-and-Game), [Sprout](https://github.com/manasmaydeo8/Sprout), [Astronomy](https://github.com/manasmaydeo8/Astronomy)) with outcome metrics. |
| **Resume** | Interactive career timeline spanning 12+ years of senior roles, verified credentials, and 1-click **Download Executive CV** action. |
| **Contact** | Validated client inquiry form with status feedback, direct contacts, and 1-click email clipboard copy. |
| **Theme System** | Persistent Dark Mode (default) and Light Mode adhering to modern contrast ratios. |

---

## ⚡ Performance & Production Optimization

1. **Component Code-Splitting (`React.lazy` & `Suspense`)**:
   - `Hero` and `Navbar` are eagerly rendered for instant LCP.
   - `About`, `Skills`, `Projects`, `Resume`, and `Contact` are chunked into micro-bundles (`< 10 kB` each).
2. **Skeleton Fallback Shimmer**:
   - Section skeletons hold the exact dimensions of incoming components to keep Cumulative Layout Shift (CLS) under **0.01**.
3. **Native Media Lazy-Loading**:
   - Custom `LazyImage` wrapper using native `loading="lazy"`, asynchronous decoding, and skeleton shimmers.
4. **Vite Bundle Optimization (`vite.config.js`)**:
   - Function-based `manualChunks` isolating third-party vendor code for maximum edge caching efficiency.
   - Global stylesheet minified to **6.46 kB** (2.13 kB gzipped).

---

## 🛠 Tech Stack

- **Core**: React 19 (`react`, `react-dom`)
- **Testing**: Vitest (`vitest`), `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`
- **Build Engine**: Vite 8 / Rolldown
- **Icons**: Lucide Icons + Handcrafted SVG Brand Icons (GitHub, LinkedIn, Twitter/X)
- **Styling**: Vanilla CSS Design System with CSS Custom Properties & Glassmorphism
- **Typography**: Google Fonts (*Outfit*, *Inter*, *JetBrains Mono*)
- **Deployment**: Vercel (`vercel.json`), Netlify (`netlify.toml`), GitHub Pages (`.github/workflows/deploy.yml`)

---

## 💻 Local Development, Testing & Verification

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Automated Test Suite
```bash
npm run test
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build Production Bundle
```bash
npm run build
```

### 5. Verify Production Build Locally
```bash
npm run preview
```
Visit `http://localhost:4173/` to inspect the production-optimized build.

---

## 🌐 Hosting & Deployment Guide

### Option A: GitHub Pages (Automated CI/CD)
The repository includes a ready-to-use GitHub Actions workflow located at `.github/workflows/deploy.yml`.

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: senior portfolio with 12+ yrs experience, testing suite, and conversion focus"
   git branch -M main
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. Every push to `main` runs tests and builds the site at `https://manasmaydeo8.github.io/portfolio/`.

### Option B: Vercel
1. Install Vercel CLI or link through the [Vercel Dashboard](https://vercel.com):
   ```bash
   npm i -g vercel
   vercel --prod
   ```
2. The included `vercel.json` provides pre-configured SPA routing and Vite output directory settings.

### Option C: Netlify
1. Connect repository in [Netlify Dashboard](https://app.netlify.com/).
2. Netlify auto-detects `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Click **Deploy Site**.

---

## 🔒 Custom Domains & SSL Configuration

To connect a custom domain (e.g., `manasmaydeo.dev`):
1. **DNS Settings**:
   - For Vercel: Add an `A` record pointing to `76.76.21.21`
   - For Netlify: Add an `A` record pointing to `75.2.60.5`
   - For GitHub Pages: Add `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Add a `CNAME` for `www`.
2. **Automatic SSL**:
   - All three providers issue and renew free **Let's Encrypt SSL/TLS certificates** automatically within 10–30 minutes.

---

## 📱 Cross-Browser & Responsiveness Testing

- **Cross-Browser Verification**:
  - Chrome (Blink), Firefox (Gecko), Safari (WebKit), Edge (Chromium).
- **Responsive Viewport Testing**:
  - Mobile (< 640px): Verified sticky mobile navigation drawer, touch targets, and vertical card flow.
  - Tablet (641px - 1024px): Responsive 2-column card grids.
  - Desktop (1025px+): Full glassmorphism, micro-animations, and modal case study dialogs.
- **Accessibility**:
  - Semantic HTML5 landmarks (`<main>`, `<header>`, `<footer>`, `<article>`, `<nav>`).
  - High-contrast text compliance and keyboard-navigable interactive controls.

---

## 💡 Challenges Faced & Solutions Implemented

### 1. Eliminating AI Slop in Favor of Commercial Pragmatism
- **Challenge**: Generic AI-generated templates rely on artificial buzzwords, fake code snippets, and decorative fluff that damage professional credibility.
- **Solution**: Refactored the copy and structure around 12+ years of senior commercial experience, conversion-rate optimization (CRO), and measurable client outcomes—emphasizing that fast, polished web engineering is what genuinely sells.

### 2. Integrating Vitest in Vite 8 Environment
- **Challenge**: Ensuring zero-configuration fast unit testing in Vite without requiring heavy, outdated Babel preprocessors.
- **Solution**: Configured Vitest with `jsdom`, adding unit tests for data integrity and test coverage running in under 200ms.

### 3. Vite 8 / Rolldown `manualChunks` Optimization
- **Challenge**: Vite 8 deprecated object-based `manualChunks` in favor of functional definition.
- **Solution**: Implemented an ID-based chunk filter in `vite.config.js` isolating vendor libraries (`vendor-react`) and icons into separate, long-term cached bundles.
