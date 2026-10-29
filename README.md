# Aviation Knowledge Base (`avrepo`)

[![Deploy Aviation Knowledge Base](https://github.com/gsacharya/avrepo/actions/workflows/deploy.yml/badge.svg)](https://github.com/gsacharya/avrepo/actions/workflows/deploy.yml)

A high-performance, lightweight aviation technical documentation knowledge base built with [VitePress](https://vitepress.dev/) and configured for root domain hosting at [avrepo.gsacharya.com](https://avrepo.gsacharya.com).

---

## 🗂️ Repository Architecture & Routing

All routes are hosted at the root (`/`) of `avrepo.gsacharya.com`.

```
avrepo/
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Actions CI/CD to build & deploy static output
├── .vitepress/
│   └── config.mts                      # VitePress configuration (base: '/avrepo/', MiniSearch)
├── fleet/
│   └── nepal-civil-register.md         # Fixed-wing & rotor-wing registers (9N-*, MSN, engines)
├── human-factors/
│   └── decision-making.md              # Aeronautical Decision Making (DECIDE, FOR-DEC, PAVE, TEM)
├── public/
│   └── airplane-icon.svg               # Site icon and favicon asset
├── regulations/
│   └── icao-annexes.md                 # ICAO Annexes 1–19 & CAAN (NCAR/FOR/PELR) compliance
├── safety-taxonomies/
│   └── adrep-hfacs.md                  # ICAO ADREP occurrence categories & HFACS matrix
├── .gitignore
├── index.md                            # Operational landing page & search dashboard
├── package.json
└── README.md
```

---

## 🔍 Client-Side Full-Text Search

The documentation stack uses built-in client-side **MiniSearch** with specialized tokenizers configured for aviation identifiers:

- **Tail Registrations**: Hyphenated registrations like `9N-AMW`, `9N-AKB`, `9N-AJD` are tokenized as both complete terms and alphanumeric sub-tokens.
- **ICAO Airport & Type Codes**: Designators such as `VNKT`, `VNPK`, `VNLK`, `AT75`, `DHC6`, `A320`, `AS50`, `B407`.
- **Taxonomies & Methodologies**: `CFIT`, `LOC-I`, `RE`, `HFACS`, `DECIDE`, `FOR-DEC`, `PAVE`, `IMSAFE`, `SMS`.

Trigger search anywhere on the site with `Ctrl + K` (Windows/Linux) or `Cmd + K` (macOS).

---

## 🚀 Local Development & Build

### Prerequisites
- Node.js 18+ (tested on Node.js 22)
- npm 9+

### Commands

```bash
# Install dependencies
npm install

# Start local development server (with hot module replacement)
npm run docs:dev

# Build static output
npm run docs:build

# Preview production build locally
npm run docs:preview
```

The production output is generated in `.vitepress/dist/` with all links and asset references rooted at `/`.

---

## 🌐 Deployment to avrepo.gsacharya.com

The included `.github/workflows/deploy.yml` workflow automatically builds the documentation on every push to the `main` branch:

1. Checks out repository and restores npm cache.
2. Runs `npm run docs:build` generating optimized HTML, CSS, and JS.
3. Automatically deploys the static files to GitHub Pages configured with custom domain `avrepo.gsacharya.com`.
