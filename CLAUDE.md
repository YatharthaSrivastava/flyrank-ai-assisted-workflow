# CLAUDE.md - AI Development Guidelines & Workspace Context

This document guides AI assistants (Claude Code, Cursor, Antigravity) working on the **FlyRank** capstone repository.

---

## 1. Project Overview & Architecture

**FlyRank** is an intelligent flight search and ranking engine. It aggregates flight data, scores itineraries across multiple dimensions (price, duration, stopover score, carbon footprint), and provides personalized ranking.

### Technology Stack
- **Runtime:** Node.js (v20+ LTS recommended)
- **Language:** TypeScript 5.x (ESNext target, strict mode enabled)
- **Backend Framework:** Fastify / Express
- **Frontend Framework:** Next.js (App Router) / React 19
- **Validation & Parsing:** Zod
- **Testing:** Vitest / Jest, Supertest
- **Linting & Formatting:** ESLint (v9+ flat config) + Prettier

---

## 2. Directory Structure & Conventions

```text
assign1/
├── src/
│   ├── api/            # Route handlers and API endpoint controllers
│   ├── core/           # Ranking algorithms, scoring models, and business logic
│   ├── services/       # External integrations (flight APIs, pricing feeds)
│   ├── types/          # Shared TypeScript type definitions and schemas
│   └── utils/          # Helper utilities and loggers
├── tests/              # Unit, integration, and e2e test suites
├── .gitignore          # Ignored paths and build artifacts
├── CLAUDE.md           # AI assistant guidelines and stack definition
├── LICENSE             # Open-source license (MIT)
├── package.json        # Project metadata, scripts, and dependencies
└── README.md           # Project documentation and setup guide
```

---

## 3. Development Commands & Scripts

When available in `package.json`, use standard npm scripts:

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts the development server with live reload |
| `npm run build` | Compiles TypeScript sources to production bundles in `/dist` |
| `npm run start` | Runs the compiled production build |
| `npm test` | Runs the test suite |
| `npm run test:watch`| Runs tests in interactive watch mode |
| `npm run lint` | Runs ESLint for static code analysis |
| `npm run format` | Runs Prettier to enforce consistent code formatting |
| `npm run typecheck`| Runs `tsc --noEmit` to verify type safety |

---

## 4. Coding Standards & Conventions

### TypeScript & JavaScript Rules
- **Strict Typing:** Avoid `any`; use `unknown` with type narrowing or Zod schemas for untrusted input.
- **Async/Await:** Prefer `async`/`await` over raw promise chaining (`.then()`). Always handle errors with try/catch or centralized error middleware.
- **Immutability:** Prefer `const` over `let`; avoid `var`. Use readonly arrays and properties where state shouldn't mutate.
- **Functional Patterns:** Keep pure business logic (ranking, filtering) decoupled from I/O and HTTP controllers.

### Commit Messages (Conventional Commits)
All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:
- `feat:` A new feature or capability
- `fix:` A bug fix
- `docs:` Documentation changes only (README, docstrings, CLAUDE.md)
- `style:` Changes that do not affect the meaning of the code (formatting, white-space)
- `refactor:` Code change that neither fixes a bug nor adds a feature
- `perf:` Performance optimizations
- `test:` Adding missing tests or correcting existing tests
- `chore:` Maintenance tasks, dependency updates, build tooling configuration

Example: `feat(ranking): implement Pareto-frontier flight sorting algorithm`

---

## 5. AI Assistant Directives
- **Verification First:** Always run linting and type checks after making code modifications.
- **Minimal Diffs:** Make targeted changes and avoid unnecessary reformatting of unrelated files.
- **Documentation:** Keep `README.md` and inline JSDoc comments synchronized with code changes.
