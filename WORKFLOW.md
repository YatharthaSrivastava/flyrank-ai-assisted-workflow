# AI Development Workflow Comparison

## Feature
The feature selected is the **FlyRank User & Workspace Settings Form**. It manages user preferences including name, email, theme (Light/Dark), notification preferences, inline validation, and submission feedback.

## Round 1 — Vague Prompt
* **Prompt used:** `"Build a settings form for my app with validation."`
* **Implementation approach:** The AI generated a basic TypeScript class with rudimentary state handling, naive validation, and unstyled HTML markup.
* **Problems discovered:** The form lacked accessibility (no `label for`/`input id` binding, no `aria-describedby` or `aria-invalid`), used only color for error signaling, lacked automated tests, and accepted invalid emails like `"user@"` and single-character names.
* **Testing performed:** Manual evaluation of empty form submission, invalid inputs, and rendering.
* **Time spent:** Implementation: 8m | Testing: 5m | Fixing: 0m | Review: 4m | **Total: 17m**.

## Round 2 — Structured Prompt
* **Repository exploration:** Examined TypeScript configs, Vitest setup, `CLAUDE.md` commit rules, and core module exports.
* **Planning & Requirements:** Defined strict types (`UserSettings`), RFC 5322 email regex, trimmed min-length >= 2 for names, WCAG 2.1 AA accessibility (labels, `role="alert"`, warning icons), responsive styles, and Vitest unit tests.
* **Testing & Verification:** Executed `npm test` and `npm run typecheck`, passing 11 automated test cases for required fields, edge cases, and ARIA markup.
* **Time spent:** Planning: 6m | Implementation: 10m | Testing: 5m | Fixing: 2m | Review: 3m | **Total: 26m**.

## Specific Differences
* **Validation:** Round 1 used naive `email.includes("@")` accepting `"abc@"`. Round 2 uses standard RFC email regex and strict name trimming.
* **Accessibility:** Round 2 adds explicit `for`/`id` linking, `aria-required`, dynamic `aria-invalid`, `aria-describedby`, `role="alert"`, and non-color warning icons (`⚠️`).
* **Automated Testing:** Round 1 included 0 tests. Round 2 includes a full Vitest suite in `tests/settings.test.ts` (11 tests).
* **Review Effort:** Round 2 required more upfront planning (+9m) but eliminated defect remediation and debugging overhead.

## AI Mistake Found
In Round 1, the AI wrote defective email validation: `if (!this.data.email.includes("@"))`. In testing, inputs like `"user@"` and `"@example.com"` falsely passed validation, and single-letter names were accepted.

## Lessons Learned
Vague AI prompts produce fragile, inaccessible code requiring heavy manual auditing. Structured prompts with explicit constraints and automated testing yield production-ready implementations on the first iteration.

## Recommended Workflow
1. **Explore & Contextualize:** Inspect repo architecture, rules (`CLAUDE.md`), and dependencies.
2. **Specify Structured Prompts:** Define schemas, validation rules, accessibility requirements, and edge cases.
3. **Implement with Automated Tests:** Pair feature code with unit tests covering normal and edge cases.
4. **Verify Rigorously:** Run `npm test`, `npm run typecheck`, and `npm run build` before final review.
