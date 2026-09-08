# CLAUDE.md - FlyRank.ai AI Development Guidelines & Workspace Context

This document defines the architecture, conventions, and engineering standards for AI assistants (Claude Code, Cursor, Antigravity) working on the **FlyRank.ai** platform codebase.

---

## 1. Company & Platform Overview

**FlyRank.ai** is a commercial aviation travel-tech company building high-performance flight search, dynamic pricing intelligence, and multi-objective itinerary ranking engines.

### Enterprise Technology Stack
- **Runtime:** Node.js (v20+ LTS recommended)
- **Language:** TypeScript 5.x (ESNext target, strict mode enabled)
- **Frameworks:** Fastify / Express (Backend APIs), Next.js 15+ (Enterprise Web Portal)
- **Validation & Schemas:** Zod
- **Testing:** Vitest / Jest, Supertest
- **Linting & Code Quality:** ESLint (Flat Config) + Prettier

---

## 2. Directory Structure & Conventions

```text
assign1/
├── src/
│   ├── api/            # REST and gRPC API route handlers
│   ├── core/           # FlyRank.ai core ranking algorithms & multi-objective scoring
│   ├── services/       # GDS feeds, dynamic fare streaming, and caching layers
│   ├── types/          # Domain schemas and TypeScript interface models
│   └── utils/          # Math utilities, loggers, and formatters
├── tests/              # Unit, integration, and load test suites
├── .gitignore          # Production Git exclusion rules
├── CLAUDE.md           # AI engineering conventions & repository context
├── LICENSE             # MIT Open-Source License
├── package.json        # Service metadata, dependencies, and npm scripts
└── README.md           # FlyRank.ai platform overview and quickstart
```

---

## 3. Development Commands & Scripts

Always run commands via standard npm scripts:

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts local development server with hot reload |
| `npm run build` | Compiles TypeScript sources to production bundles in `/dist` |
| `npm run start` | Runs the compiled production server |
| `npm test` | Runs the test suite |
| `npm run test:watch`| Runs tests in watch mode |
| `npm run lint` | Performs static analysis with ESLint |
| `npm run format` | Enforces formatting standards via Prettier |
| `npm run typecheck`| Verifies type safety with `tsc --noEmit` |

---

## 4. Coding Standards & Conventions

### TypeScript & Engineering Rules
- **Strict Typing:** Avoid `any`; use `unknown` with runtime Zod parsing for external airline payloads.
- **Async & Concurrency:** Use `async`/`await` for asynchronous I/O; handle promise rejections and timeouts gracefully.
- **Immutability:** Keep scoring calculation functions pure, deterministic, and side-effect free.
- **Error Handling:** Use typed domain errors with descriptive HTTP status codes.

### Conventional Commits
All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat:` Introduces a new feature or algorithmic capability
- `fix:` Fixes an issue or bug
- `docs:` Documentation changes only (`README.md`, `CLAUDE.md`, JSDoc)
- `style:` Formatting, missing semicolons, whitespace adjustments
- `refactor:` Code refactoring without behavioral changes
- `perf:` Performance improvements and latency reductions
- `test:` Adding or updating tests
- `chore:` Maintenance, package updates, tooling config

*Example:* `feat(scoring): implement FlyRank.ai multi-criteria Pareto ranking`

---

## 5. AI Assistant Directives
- **Verification First:** Validate code changes with `npm run typecheck` and `npm test`.
- **Atomic Commits:** Separate feature additions, refactors, and documentation updates into clean conventional commits.
- **Documentation Sync:** Ensure `README.md` and `CLAUDE.md` accurately reflect all codebase evolutions.
