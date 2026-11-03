# Aman Sharma — Developer Portfolio
### Complete Architecture, Technology Stack, Component Engineering & Development Changelog

- **Developer:** Aman Sharma
- **Degree & Institution:** B.Tech Computer Science & Engineering, BSA College of Engineering and Technology, Mathura
- **Core Stack:** Next.js 16 (Turbopack) + React 19 + TypeScript + Tailwind CSS
- **GitHub Repository:** [github.com/amanpandat1156-gif/portfolio](https://github.com/amanpandat1156-gif/portfolio)
- **Deployment Platform:** Vercel (Continuous Deployment)
- **PDF Version:** Available locally at [`Portfolio_Documentation_Aman_Sharma.pdf`](./Portfolio_Documentation_Aman_Sharma.pdf)

---

## 1. Project Overview & Vision (Project Parichay)

This project is a high-performance, dark-aesthetic, Sci-Fi HUD inspired developer portfolio engineered to showcase **Aman Sharma's** technical depth as a Full Stack Software Developer.

### Core Philosophy & Objectives
Rather than relying on generic website templates, this portfolio is custom-engineered to deliver a **high-tech cyberpunk / terminal HUD experience**. It integrates fluid micro-interactions, HTML5 Canvas particle physics, ambient audio landscapes, and decoupled, data-driven content schemas. It acts as both a recruiter-ready project showcase and a living demonstration of cutting-edge React 19 & Next.js 16 App Router engineering.

### Key Architectural Highlights
1. **Ultra-Fast Turbopack Performance:** Built with Next.js 16.4.4 App Router; pre-rendered statically (SSG) for sub-second delivery via global edge CDN.
2. **Sci-Fi HUD & Liquid Glassmorphism:** Futuristic UI with custom SVG corner brackets, glow borders, interactive dock navigation, and 3D logo flips.
3. **Deep Space Particle Simulation:** Custom HTML5 Canvas 2D starfield rendering responsive multi-layer star coordinates with subtle mouse parallax.
4. **Zero-Server Contact Gateway:** Web3Forms API pipeline direct to `amanpandat1156@gmail.com` with anti-spam honeypot and clean transmission state handling.

### Featured Projects in Portfolio
- **VidTube (Backend Architecture):** Production-ready video sharing backend with JWT refresh tokens, Multer file handling, Cloudinary media CDN, and complex MongoDB aggregation pipelines for watch history and subscriptions.
- **CyberSafe India (Civic Tech):** National-focused cyber resilience and reporting portal utilizing Gemini AI for automated report triage, victim assistance, and real-time incident status dashboards.

---

## 2. Technology Stack & Libraries Used (Kya Kya Use Hua Hai)

| Category | Tool / Library | Version | Implementation & Technical Role |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.4.4` | Next-gen Turbopack bundler, Static Site Generation (SSG), React Server Components, 0 security vulnerabilities. |
| **UI Runtime** | React & React-DOM | `19.3.1` | React 19 concurrent features, transition hooks, optimized DOM tree updates. |
| **Type System** | TypeScript | `5.7.3` | Strict static typing across all data models (projects, skills, socials) and props. |
| **Styling Engine** | Tailwind CSS | `3.4.17` | Utility-first styling, responsive grid layouts, custom glow filters, glassmorphic HUD. |
| **Animation Engine** | GSAP (GreenSock) | `3.15.0` | High-performance timeline tweens, smooth mobile menu slide-in transitions. |
| **Motion Physics** | Framer Motion | `12.4.7` | Spring-physics dock magnifications, smooth scroll reveals, and interactive hovers. |
| **Iconography** | Lucide & React Icons | `0.475 / 5.7` | Lightweight SVG icons for UI controls, brand logos (GitHub, X, LinkedIn, LeetCode). |
| **Particle FX** | HTML5 2D Canvas | Native Web API | Optimized 60 FPS `requestAnimationFrame` rendering for interactive starfield canvas. |
| **Ambient Audio** | HTML5 Web Audio | Native Web API | Navbar lo-fi audio player with play/pause state and animated audio visualizer bars. |
| **Contact API** | Web3Forms Gateway API | REST API | Async client-side form submission to `amanpandat1156@gmail.com` with anti-spam and direct email link fallback. |
| **Deployment & CI** | Git, GitHub & Vercel | Cloud CI/CD | Continuous deployment on `git push origin master`, edge network caching, HTTPS. |

---

## 3. System Architecture & Engineering (Kese Ye Project Bna Hai)

The portfolio follows clean software engineering principles: strict separation of data schemas, isolated UI components, and declarative layout orchestration.

### Directory Organization
```
src/
├── app/                      # Next.js App Router (Layouts, Global Styles & Metadata)
│   ├── layout.tsx            # SEO title, OpenGraph cards, Twitter metadata, viewport config
│   ├── page.tsx              # Root page composer importing and ordering all section modules
│   ├── globals.css           # Custom HUD color tokens, liquid glass rules, scrollbar styling
│   └── icon.svg              # Custom vector favicon (Stylized "A" in brand colors)
├── components/               # Modular UI Component Tree
│   ├── canvas/               # StarfieldCanvas.tsx (Interactive 2D space particle background)
│   ├── common/               # CornerBrackets.tsx, SectionHeader.tsx, HandDrawnCirclePhoto.tsx
│   ├── navbar/               # Navbar.tsx, MusicPlayer.tsx (Ambient audio toggle & equalizer)
│   ├── layout/               # NavLogo.tsx (3D flip card logo), MobileMenu.tsx (GSAP mobile drawer)
│   └── sections/             # HeroSection.tsx, AboutSection.tsx, ProjectsSection.tsx,
│                             # SkillsSection.tsx, ContactSection.tsx, Footer.tsx
└── data/                     # Decoupled Type-Safe Data Schemas
    ├── personal.ts           # Bio lines, titles, avatar path, "OPEN TO WORK" status
    ├── projects.ts           # VidTube & CyberSafe India project models, features & repo links
    ├── skills.ts             # Web Frameworks, Backend & Systems, and Dev Tools categorization
    └── socials.ts            # GitHub, X (@PandatAman1156), LinkedIn, and Contact endpoints
```

### Core Component Breakdown
1. **Canvas Particle Field (`StarfieldCanvas`):** Uses an HTML5 `<canvas>` element to continuously render 150+ stars with distinct depths, velocities, and responsive mouse parallax for subtle immersion.
2. **Liquid Glass Navbar & 3D Logo (`Navbar`, `NavLogo`, `MusicPlayer`):** Floating glassmorphism container (`backdrop-blur-md`) with stylized "A" egg logo that flips in 3D on hover/touch, paired with an ambient lo-fi audio player.
3. **Interactive Hero Section (`HeroSection`):** Features typewriter role transitions, circular brush-bordered avatar, and a floating quick-access social dock (GitHub, X, LinkedIn, Email) with spring hover physics.
4. **HUD Projects & Skills Grids (`ProjectsSection`, `SkillsSection`):** Card UI enclosed with sci-fi corner brackets, categorical tech tags, and real project feature bullets. Skills split into 3 columns with official SVG Devicons.
5. **Dual-Mode Contact System (`ContactSection`):** Asynchronous AJAX `fetch()` request dispatched to `https://formsubmit.co/ajax/amanpandat1156@gmail.com`. If network errors occur, it automatically falls back to a pre-filled `mailto:` client.

---

## 4. Development Milestones & Changelog (Kya Kya Humne Kiya Hai)

1. **Reference Design & HUD Theme Implementation:** Engineered full cyberpunk dark theme with glowing cyan/purple HUD aesthetics and responsive layouts.
2. **Liquid Glass Navbar, 3D Interactive Logo & Audio Dock:** Added stylized 3D card-flip "A" logo and ambient audio player with live animated equalizer sound bars.
3. **GSAP Mobile Drawer & Layout Refinements:** Redesigned mobile navigation into a single-panel GSAP animated drawer; compacted project cards to 2-column layout.
4. **Codebase Pruning & Quality Cleanup:** Removed unneeded dummy sections (hackathons, non-functional AI chatbot) to keep focus on production-grade strengths.
5. **Critical Next.js 16 & React 19 Upgrade:** Upgraded Next.js from `15.1.7` to `16.4.4` and React to `19.3.1`, eliminating all reported security vulnerabilities (`0 vulnerabilities` via `npm audit`).
6. **SEO Metadata, Custom Vector Favicon & OpenGraph Cards:** Created custom `icon.svg` favicon; configured metadata in `layout.tsx` for "Aman Sharma | Portfolio" with BSA College details.
7. **Contact Form Integration:** Wired contact form to `amanpandat1156@gmail.com` with submission state feedback and instant mailto fallback.
8. **Verified X (Twitter) Profile Integration & Fix:** Audited and resolved the 404 issue on X by linking the verified active profile `https://x.com/PandatAman1156`.
9. **Git Security Scanning & GitHub Public Release:** Audited secrets, verified `.gitignore`, preserved complete commit history, and published to `github.com/amanpandat1156-gif/portfolio`.

---

## 5. Developer Quickstart & Maintenance Guide

### Local Development Commands
```bash
# Clone the repository
git clone https://github.com/amanpandat1156-gif/portfolio.git
cd portfolio

# Install dependencies (Next.js 16 & React 19)
npm install

# Start development server on http://localhost:3000
npm run dev

# Run production build and type-checking
npm run build
```

### How to Edit Content in 30 Seconds
To update portfolio content, simply edit the files inside `src/data/`:
- **`projects.ts`**: Add or modify showcased projects, descriptions, and links.
- **`skills.ts`**: Update tech skills, categorizations, and icons.
- **`personal.ts`**: Edit bio lines, greetings, or job availability status.
- **`socials.ts`**: Update social profile links (GitHub, X, LinkedIn, Email).

### Deployment
Since the repository is integrated with Vercel CI/CD, every push to the `master` branch triggers an automatic build and zero-downtime deployment:
```bash
git add .
git commit -m "Update portfolio projects and bio"
git push origin master
```
