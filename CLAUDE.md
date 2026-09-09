# CLAUDE.md - FlyRank.ai AI Assistant Guidelines & Platform Context

This document guides AI assistants (Claude Code, Cursor, Antigravity) working on the **FlyRank.ai** platform codebase.

---

## 1. Platform Overview & Mission

**FlyRank.ai** is the all-in-one platform for organic and AI search growth. It enables brands to rank on Google and become the trusted, cited answer across AI engines (**ChatGPT, Perplexity, Claude, and Google AI Overviews**).

### Core Platform Modules
1. **FlyRank Engine:** Multi-modal content creation by agentic AI (Copy Agent, SEO Agent, Visual Agent) with human editor oversight.
2. **FlyRank Visibility:** AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) with schema & citation tracking.
3. **FlyRank Refresh:** Automated page audits, content updates, and continuous indexation.
4. **FlyRank Reach:** Cultural localization and translation across 30+ languages.
5. **FlyRank Command:** Unified analytics cockpit for traffic, AI mentions, keyword ranks, and pipelines.
6. **FlyRank Social:** Agentic social content distribution for LinkedIn, TikTok, and Instagram.

### Technology Stack
- **Runtime:** Node.js (v20+ LTS recommended)
- **Language:** TypeScript 5.x (Strict mode, ESNext target)
- **Backend Framework:** Fastify / Express (REST & gRPC APIs)
- **Frontend Framework:** Next.js 15+ / Nuxt (Marketing & Platform Portals)
- **Validation:** Zod
- **Testing:** Vitest / Jest, Supertest
- **Code Quality:** ESLint (v9 flat config) + Prettier

---

## 2. Directory Structure & Conventions

```text
assign1/
├── src/
│   ├── engine/         # Multi-agent content generation pipeline (Copy, SEO, Visual)
│   ├── visibility/     # AEO/GEO scoring, schema injection, AI citation tracking
│   ├── refresh/        # Continuous audit and page freshness monitors
│   ├── reach/          # Multilingual localization adaptors
│   ├── command/        # Aggregated analytics and reporting services
│   ├── types/          # Domain TypeScript schemas and Zod validators
│   └── index.ts        # Core FlyRank.ai growth platform entry point
├── tests/              # Unit and integration test suites
├── .gitignore          # Git exclusion rules
├── CLAUDE.md           # AI assistant workspace instructions
├── LICENSE             # MIT Open-Source License
├── package.json        # Service metadata and npm scripts
└── README.md           # Platform documentation and architecture
```

---

## 3. Development Commands & Scripts

All operations must be run using standard npm scripts:

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Runs the FlyRank engine in watch mode |
| `npm run build` | Compiles TypeScript sources to production bundles in `/dist` |
| `npm run start` | Runs the compiled production server |
| `npm test` | Executes the Vitest test suite |
| `npm run test:watch`| Executes Vitest in interactive watch mode |
| `npm run lint` | Runs ESLint for static code analysis |
| `npm run format` | Enforces code formatting via Prettier |
| `npm run typecheck`| Validates static types with `tsc --noEmit` |

---

## 4. Coding Standards & Conventions

### TypeScript & Engineering Rules
- **Strict Typing:** Never use `any`; use `unknown` with runtime Zod schemas for external AI platform responses.
- **Pure Functions:** Maintain business calculations (visibility scores, citation rankers) pure and deterministic.
- **Async & Resilience:** Always handle rate limits, retry policies, and timeout fallbacks for external AI provider APIs.
- **Error Handling:** Use custom domain error classes with standardized telemetry.

### Conventional Commits
All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat:` Introduces a new feature or algorithmic capability
- `fix:` Fixes a defect
- `docs:` Documentation updates (`README.md`, `CLAUDE.md`, JSDoc)
- `style:` Formatting, white-space adjustments
- `refactor:` Code restructuring with no behavioral change
- `perf:` Performance optimizations
- `test:` Adding or updating unit/integration tests
- `chore:` Maintenance, dependency updates, tooling

*Example:* `feat(visibility): implement AEO citation tracking for Claude and Perplexity`

---

## 5. AI Assistant Directives
- **Verification First:** Run `npm run typecheck` and `npm test` before concluding any code edits.
- **Keep Documentation Synchronized:** Always maintain `README.md` and `CLAUDE.md` to reflect architecture changes.

---

## 6. Concrete Project Rules (AI-Assisted Development Drill)

1. **Form Validation & Accessibility Standard:** Every form input must have an explicitly bound accessible label (`<label for="input-id">`), dynamic `aria-invalid` state attributes, and an associated error element linked via `aria-describedby="error-id"`. Validation errors must never rely solely on color (must include clear descriptive text and non-color warning icons with `role="alert"`).
2. **Mandatory Automated Test Coverage:** All newly implemented form controls, validators, and submission state machines must include automated Vitest tests in `tests/` covering: empty field rejection, malformed inputs (RFC regex validation for emails), string sanitization/trimming, minimum length requirements, and successful submission payloads.
3. **Architectural Isolation & Scope Protection:** Feature implementations must preserve existing application behaviors, adhere strictly to project TypeScript interfaces, and never modify unrelated platform files or add third-party UI libraries without explicit requirement and review.
