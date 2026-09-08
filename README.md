# FlyRank ✈️ - Flight Search & Ranking Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-blue.svg)](https://www.typescriptlang.org/)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

FlyRank is an intelligent, multi-criteria flight search and ranking engine designed to optimize flight discovery beyond simple pricing. It evaluates itineraries across price, total transit time, layover friction, and carbon efficiency using multi-objective scoring.

---

## 📋 Table of Contents
- [Architecture & Workflow](#-architecture--workflow)
- [Key Features](#-key-features)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [AI Development Guidelines](#-ai-development-guidelines)
- [Contributing & Commits](#-contributing--commits)
- [License](#-license)

---

## 🏗 Architecture & Workflow

```text
[ User / Client Query ]
         │
         ▼
[ API Gateway / Router ]
         │
         ├───▶ [ Flight Feed Ingestion Service ] ──▶ (GDS / Airline APIs)
         │
         ▼
[ Ranking & Scoring Engine ]
         ├── Price Normalization
         ├── Duration & Layover Analysis
         └── Carbon Footprint Calculation
         │
         ▼
[ Pareto-Optimal Ranked Itineraries ]
```

---

## ✨ Key Features

- **Multi-Objective Ranking:** Configurable weights for price, travel duration, number of layovers, and carbon footprint.
- **Pareto-Optimal Filtering:** Identifies dominant flight combinations so users never compromise unnecessarily.
- **Modular TypeScript Core:** Decoupled scoring logic with full type safety and unit test coverage.
- **AI-Agent Ready:** Detailed `CLAUDE.md` context and instructions for AI-assisted development (Claude Code, Cursor, Antigravity).

---

## ⚙️ Prerequisites

- **Node.js:** `>= 20.0.0` (LTS recommended)
- **npm:** `>= 10.0.0` or **pnpm** / **yarn**
- **Git:** `>= 2.30.0`

---

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/flyrank.git
   cd flyrank/assign1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the engine in development mode with live reload |
| `npm run build` | Compiles TypeScript source files into `dist/` |
| `npm start` | Executes the compiled production bundle |
| `npm test` | Runs the test suite via Vitest |
| `npm run typecheck` | Validates TypeScript types across the project |
| `npm run format` | Formats all source files using Prettier |
| `npm run lint` | Runs static analysis checks |

---

## 📂 Project Structure

```text
assign1/
├── src/
│   └── index.ts          # Core flight ranking logic and score calculation
├── .gitignore            # Git exclusion patterns
├── CLAUDE.md             # AI coding guidelines and repository context
├── LICENSE               # MIT License
├── package.json          # Project manifest and scripts
├── tsconfig.json         # TypeScript compiler configuration
└── README.md             # Project documentation (this file)
```

---

## 🤖 AI Development Guidelines

This repository is optimized for AI-assisted workflows. Consult [`CLAUDE.md`](./CLAUDE.md) for detailed guidelines on coding standards, architectural rules, and test verification requirements.

---

## 🤝 Contributing & Commits

All commits must adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification:
```text
<type>(<scope>): <short summary>

# Examples:
feat(scoring): implement multi-objective weighted sorting
fix(api): handle missing layover airport codes gracefully
docs(readme): add architecture workflow diagram
```

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) © 2026 Yathartha.
