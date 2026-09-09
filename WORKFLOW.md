# AI Development Workflow Comparison

## Feature
The feature selected is the **FlyRank User & Workspace Settings Form**. It manages user preferences including full name, email, theme (Light/Dark), notifications, inline validation errors, accessible markup, and submission feedback.

## Round 1 — Vague Prompt
* **Prompt used:** `"Build a settings form for my app with validation."`
* **Implementation approach:** The AI generated a basic TypeScript class with rudimentary state handling, naive validation, and unstyled HTML markup.
* **Problems discovered:** The form lacked accessibility (no `label for`/`input id` binding, no `aria-describedby` or `aria-invalid`), used only red borders for errors, lacked automated tests, and accepted invalid emails like `"user@"` and single-character names.
* **Testing performed:** Manual evaluation of empty submission, invalid inputs, keyboard navigation, and rendering.
* **Time spent:** Implementation: 8m | Testing: 5m | Fixing: 0m | Review: 4m | **Total: 17m**.

## Round 2 — Structured Prompt
* **Repository exploration:** Examined TypeScript configs, Vitest setup, `CLAUDE.md` commit rules, and core module exports.
* **Planning & Requirements:** Defined strict types (`UserSettings`, `ValidationErrors`), RFC email regex, trimmed min-length >= 2 for names, WCAG 2.1 AA accessibility (labels, `role="alert"`, warning icons), responsive styles, and Vitest unit tests.
* **Testing & Verification:** Executed `npm test` and `npm run typecheck`, passing 11 automated test cases for required fields, edge cases, and ARIA markup.
* **Time spent:** Planning: 6m | Implementation: 10m | Testing: 5m | Fixing: 2m | Review: 3m | **Total: 26m**.

## Specific Differences
* **Correctness & Edge Cases:** Round 1 used a naive `email.includes("@")` check that allowed `"abc@"`, `"@example.com"`, and single-character names. Round 2 implements RFC email regex, whitespace trimming, and minimum name length constraints.
* **Accessibility (a11y):** Round 2 introduces explicit `for`/`id` linking, `aria-required="true"`, dynamic `aria-invalid`, `aria-describedby` error associations, `role="alert"`, and non-color warning indicators (`⚠️`).
* **Testing & Code Quality:** Round 1 had 0 automated tests. Round 2 provides an encapsulated state machine, clean domain interfaces, and 11 automated unit tests in `tests/settings.test.ts`.
* **Review Effort:** Round 2 required ~9m more upfront planning but eliminated defect remediation and debugging overhead entirely.

## AI Mistake Found
During manual testing of Round 1, I discovered that the generated validation accepted malformed email addresses such as `"user@"` and `"@example.com"`. This occurred because the implementation only checked whether the email contained `"@"` (`!this.data.email.includes("@")`). Furthermore, single-character names (`"A"`) were accepted because no minimum length constraint was generated. Round 2 resolved these flaws with strict RFC email validation, name trimming, and automated regression tests.

## Lessons Learned
Vague AI prompts produce fragile, inaccessible code requiring heavy manual auditing. Structured prompts with explicit constraints, accessibility targets, and automated test mandates yield production-ready implementations on the first iteration.

## Recommended Workflow
1. **Explore & Contextualize:** Inspect repo architecture, rules (`CLAUDE.md`), and dependencies.
2. **Specify Structured Prompts:** Define schemas, validation boundaries, accessibility requirements, and edge cases.
3. **Implement with Automated Tests:** Pair feature code with unit tests covering normal and edge cases.
4. **Verify Rigorously:** Run `npm test`, `npm run typecheck`, and `npm run build` before final review.
