# FlyRank.ai ✈️ - Enterprise Flight Search & Intelligent Ranking Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-blue.svg)](https://www.typescriptlang.org/)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)
[![Organization](https://img.shields.io/badge/org-FlyRank.ai-0A66C2.svg)](https://flyrank.ai)

**FlyRank.ai** is a next-generation travel-technology platform delivering real-time flight intelligence and multi-criteria itinerary ranking. By moving beyond primitive price sorting, FlyRank.ai computes Pareto-optimal travel routes balancing fare, travel duration, layover friction, and environmental carbon impact.

---

## 📋 Table of Contents
- [Company Mission](#-company-mission)
- [System Architecture](#-system-architecture)
- [Core Platform Capabilities](#-core-platform-capabilities)
- [Prerequisites](#-prerequisites)
- [Installation & Quickstart](#-installation--quickstart)
- [Available Scripts](#-available-scripts)
- [Repository Structure](#-repository-structure)
- [AI Development & Coding Standards](#-ai-development--coding-standards)
- [Conventional Commits & Contributing](#-conventional-commits--contributing)
- [License & Enterprise Support](#-license--enterprise-support)

---

## 🌐 Company Mission

At **FlyRank.ai**, our mission is to empower modern travelers and enterprise booking engines with high-throughput, algorithmic decision intelligence for commercial aviation.

---

## 🏗 System Architecture

```text
               ┌──────────────────────────────┐
               │    Client App / B2B API      │
               └──────────────┬───────────────┘
                              │ HTTPS / gRPC
                              ▼
               ┌──────────────────────────────┐
               │   FlyRank.ai API Gateway     │
               └──────────────┬───────────────┘
                              │
               ┌──────────────┴───────────────┐
               ▼                              ▼
┌──────────────────────────────┐ ┌──────────────────────────────┐
│  Flight Ingestion Service    │ │   Dynamic Pricing Stream     │
│  (GDS / Direct Airline APIs) │ │   (Live Fare & Volatility)   │
└──────────────┬───────────────┘ └──────────────┬───────────────┘
               │                                │
               └──────────────┬─────────────────┘
                              ▼
               ┌──────────────────────────────┐
               │  FlyRank.ai Scoring Engine   │
               │  ├── Price Normalization     │
               │  ├── Layover Quality Index   │
               │  └── Carbon Impact (CO2-e)   │
               └──────────────┬───────────────┘
                              ▼
               ┌──────────────────────────────┐
               │  Pareto-Optimal Ranked Feed  │
               └──────────────────────────────┘
```

---

## ✨ Core Platform Capabilities

- **Multi-Objective Optimization Engine:** Custom scoring models weighting cost, journey time, stop convenience, and carbon efficiency.
- **Pareto-Frontier Sorting:** Filters out sub-optimal flights, surfacing only mathematically non-dominated options.
- **Microservice-Ready Architecture:** Designed for low-latency asynchronous processing in distributed Node.js/TypeScript environments.
- **AI-Native Engineering:** First-class integration with AI coding assistants (Claude Code, Cursor, Antigravity) via standardized [`CLAUDE.md`](./CLAUDE.md).

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

4. **Build production distribution:**
   ```bash
   npm run build
   ```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the engine in development mode with hot reload |
| `npm run build` | Compiles TypeScript source files into `/dist` |
| `npm start` | Executes the compiled production bundle |
| `npm test` | Runs the unit and integration test suite via Vitest |
| `npm run typecheck` | Runs `tsc --noEmit` to validate strict typing |
| `npm run format` | Formats all project files using Prettier |
| `npm run lint` | Runs static analysis and ESLint code standards |

---

## 📂 Repository Structure

```text
assign1/
├── src/
│   └── index.ts          # Core FlyRank.ai scoring & ranking algorithm
├── .gitignore            # Git exclusion definitions
├── CLAUDE.md             # AI coding instructions & workspace context
├── LICENSE               # MIT Open-Source License
├── package.json          # Project manifest, dependencies, and scripts
├── tsconfig.json         # TypeScript strict configuration
└── README.md             # Platform documentation and architecture overview
```

---

## 🤖 AI Development & Coding Standards

This repository adheres to strict AI-assisted development protocols. All agents and contributors must follow [`CLAUDE.md`](./CLAUDE.md) for architectural rules, coding styles, and verification flows.

---

## 🤝 Conventional Commits & Contributing

All contributions and automated edits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```text
<type>(<scope>): <subject>

# Example Commit Messages:
feat(ranking): implement Pareto-optimal itinerary filter
fix(ingestion): resolve timezone offset parsing for overnight flights
docs(readme): update FlyRank.ai system architecture diagram
```

---

## 📄 License & Enterprise Support

Distributed under the [MIT License](./LICENSE). Copyright © 2026 FlyRank.ai.
For enterprise licensing, API access, and partnerships, visit [https://flyrank.ai](https://flyrank.ai).
