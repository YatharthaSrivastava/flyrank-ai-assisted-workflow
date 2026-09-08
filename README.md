# FlyRank.ai 🚀 - The Autopilot for Organic & AI Search Growth

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-blue.svg)](https://www.typescriptlang.org/)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)
[![Official Website](https://img.shields.io/badge/website-flyrank.ai-00E599.svg)](https://flyrank.ai)

**FlyRank.ai** is the all-in-one AI search growth platform. It helps brands dominate Google organic search and become the trusted, cited answer across AI engines including **ChatGPT, Perplexity, Claude, and Google AI Overviews**.

---

## 📋 Table of Contents
- [Company Mission & Value Proposition](#-company-mission--value-proposition)
- [The 6 Platform Modules](#-the-6-platform-modules)
- [System Architecture](#-system-architecture)
- [Prerequisites](#-prerequisites)
- [Installation & Quickstart](#-installation--quickstart)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [AI Assistant Guidelines (CLAUDE.md)](#-ai-assistant-guidelines-claudemd)
- [Conventional Commits](#-conventional-commits)
- [License & Enterprise Support](#-license--enterprise-support)

---

## 🌐 Company Mission & Value Proposition

Search has evolved: over 100 million users now search using AI assistants rather than traditional search engines alone. **FlyRank.ai** provides an automated, agentic engine that unifies **SEO (Search Engine Optimization)**, **AEO (Answer Engine Optimization)**, and **GEO (Generative Engine Optimization)** into a single managed platform.

---

## ⚡ The 6 Platform Modules

| Module | Purpose & Capabilities |
| :--- | :--- |
| **1. FlyRank Engine** | Agentic multi-modal content creation (Copy Agent, SEO Agent, Visual Agent) reviewed by senior editors before publishing. |
| **2. FlyRank Visibility** | AEO & GEO engine deploying schema markup and structured data so AI assistants cite and recommend your brand first. |
| **3. FlyRank Refresh** | Continuous automated page audits, real-time content refresh, and on-page technical SEO to maintain indexation. |
| **4. FlyRank Reach** | Localization and cultural adaptation across 30+ languages to feel native in global markets. |
| **5. FlyRank Command** | Unified analytics cockpit tracking organic traffic, AI referrals, citations, keyword rankings, and content pipeline. |
| **6. FlyRank Social** | Multi-channel agentic social distribution (LinkedIn thought leadership, TikTok, Instagram). |

---

## 🏗 System Architecture

```text
                     ┌─────────────────────────────────────────┐
                     │            FlyRank Command              │
                     │  (Unified Dashboard, Signals & Growth)  │
                     └────────────────────┬────────────────────┘
                                          │
                     ┌────────────────────┴────────────────────┐
                     ▼                                         ▼
      ┌──────────────────────────────┐          ┌──────────────────────────────┐
      │       FlyRank Engine         │          │     FlyRank Visibility       │
      │ ├── Copy & SEO Agents        │          │ ├── AEO & GEO Optimization   │
      │ ├── Visual Generation        │          │ ├── Schema & Structured Data │
      │ └── Senior Human Review      │          │ └── AI Citation Tracking     │
      └──────────────┬───────────────┘          └──────────────┬───────────────┘
                     │                                         │
                     ├────────────────────┬────────────────────┤
                     ▼                    ▼                    ▼
      ┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐
      │   FlyRank Refresh    │ │    FlyRank Reach     │ │    FlyRank Social    │
      │ Continuous Page Audit│ │  30+ Language Local- │ │ Organic Social Reach │
      │ & On-Page Sync       │ │  ization on Autopilot│ │ (LinkedIn / TikTok)  │
      └──────────────────────┘ └──────────────────────┘ └──────────────────────┘
                                          │
                                          ▼
                     ┌─────────────────────────────────────────┐
                     │          Search & AI Surfaces           │
                     │ Google · ChatGPT · Perplexity · Claude  │
                     └─────────────────────────────────────────┘
```

---

## ⚙️ Prerequisites

- **Node.js:** `>= 20.0.0` (LTS recommended)
- **npm:** `>= 10.0.0` (or `pnpm` / `yarn`)
- **Git:** `>= 2.30.0`

---

## 🚀 Installation & Quickstart

1. **Clone the repository:**
   ```bash
   git clone https://github.com/flyrank-ai/flyrank.git
   cd flyrank/assign1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start in development mode:**
   ```bash
   npm run dev
   ```

4. **Build production bundle:**
   ```bash
   npm run build
   ```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the FlyRank growth engine in watch mode |
| `npm run build` | Compiles TypeScript sources into `/dist` |
| `npm start` | Executes the compiled production bundle |
| `npm test` | Runs the test suite via Vitest |
| `npm run typecheck` | Validates TypeScript types across the codebase |
| `npm run format` | Formats all source files using Prettier |
| `npm run lint` | Runs static analysis checks with ESLint |

---

## 📂 Project Structure

```text
assign1/
├── src/
│   └── index.ts          # Core FlyRank.ai AEO/GEO Visibility and Agentic Engine
├── .gitignore            # Production Git ignore patterns
├── CLAUDE.md             # AI engineering context and platform standards
├── LICENSE               # MIT Open-Source License
├── package.json          # Project manifest and scripts
├── tsconfig.json         # TypeScript compiler configuration
└── README.md             # Platform documentation (this file)
```

---

## 🤖 AI Assistant Guidelines (CLAUDE.md)

This repository is optimized for AI-assisted software engineering. Detailed architecture rules, coding standards, and verification guidelines are maintained in [`CLAUDE.md`](./CLAUDE.md).

---

## 🤝 Conventional Commits

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```text
<type>(<scope>): <subject>

# Examples:
feat(visibility): implement AI citation score calculator for Perplexity & Claude
feat(engine): add multi-agent review pipeline for content generation
docs(readme): update platform architecture to include the 6 core modules
```

---

## 📄 License & Enterprise Support

Distributed under the [MIT License](./LICENSE). Copyright © 2026 FlyRank.ai.  
For audits, enterprise plans, and case studies, visit [https://flyrank.ai](https://flyrank.ai).
