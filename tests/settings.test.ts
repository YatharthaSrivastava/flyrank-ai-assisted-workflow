import { describe, it, expect, beforeEach } from "vitest";
import {
  validateSettings,
  SettingsForm,
  type UserSettings,
} from "../src/settings";

describe("Settings Form - Validation & Logic (Round 2)", () => {
  describe("validateSettings unit function", () => {
    it("should fail validation when name and email are empty", () => {
      const result = validateSettings({});
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe("Name is required.");
      expect(result.errors.email).toBe("Email is required.");
    });

    it("should fail validation when name is shorter than 2 characters", () => {
      const singleCharResult = validateSettings({ name: "A", email: "alex@flyrank.ai" });
      expect(singleCharResult.isValid).toBe(false);
      expect(singleCharResult.errors.name).toBe("Name must contain at least 2 characters.");

      const whitespaceResult = validateSettings({ name: "   ", email: "alex@flyrank.ai" });
      expect(whitespaceResult.isValid).toBe(false);
      expect(whitespaceResult.errors.name).toBe("Name is required.");
    });

    it("should fail validation for invalid email formats", () => {
      const invalidEmails = [
        "plainaddress",
        "#@%^%#$@#$@#.com",
        "@example.com",
        "Joe Smith <email@example.com>",
        "email.example.com",
        "email@example@example.com",
        "user@",
        "user@domain..com",
      ];

      for (const email of invalidEmails) {
        const result = validateSettings({ name: "Alex Mercer", email });
        expect(result.isValid, `Expected '${email}' to be invalid`).toBe(false);
        expect(result.errors.email).toBe("Please enter a valid email address (e.g. user@example.com).");
      }
    });

    it("should pass validation with valid inputs", () => {
      const validPayload: UserSettings = {
        name: "Yathartha Srivastava",
        email: "yathartha@flyrank.ai",
        theme: "dark",
        notifications: true,
      };

      const result = validateSettings(validPayload);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors).length).toBe(0);
    });
  });

  describe("SettingsForm State Machine & Submission", () => {
    let form: SettingsForm;

    beforeEach(() => {
      form = new SettingsForm();
    });

    it("should initialize with default values", () => {
      const data = form.getData();
      expect(data.name).toBe("");
      expect(data.email).toBe("");
      expect(data.theme).toBe("light");
      expect(data.notifications).toBe(true);
      expect(form.isSuccess()).toBe(false);
    });

    it("should reject submission when empty and record errors", () => {
      const result = form.submit();
      expect(result.success).toBe(false);
      expect(result.message).toContain("Please correct the errors");
      expect(form.getErrors().name).toBe("Name is required.");
      expect(form.getErrors().email).toBe("Email is required.");
      expect(form.isSuccess()).toBe(false);
    });

    it("should clear field errors when user sets new field values", () => {
      form.submit();
      expect(form.getErrors().name).toBeDefined();

      form.setField("name", "Engineering Lead");
      expect(form.getErrors().name).toBeUndefined();
    });

    it("should successfully submit with valid data and return trimmed values", () => {
      form.setField("name", "  Aviation Tech  ");
      form.setField("email", "  growth@flyrank.ai  ");
      form.setField("theme", "dark");
      form.setField("notifications", false);

      const result = form.submit();
      expect(result.success).toBe(true);
      expect(result.message).toContain("Settings saved successfully");
      expect(result.data?.name).toBe("Aviation Tech");
      expect(result.data?.email).toBe("growth@flyrank.ai");
      expect(result.data?.theme).toBe("dark");
      expect(result.data?.notifications).toBe(false);
      expect(form.isSuccess()).toBe(true);
    });
  });

  describe("Accessibility & Markup Verification", () => {
    it("should render accessible labels with corresponding for/id attributes", () => {
      const form = new SettingsForm({ name: "Alex", email: "alex@flyrank.ai" });
      const html = form.renderHtml();

      expect(html).toContain('label for="settings-name"');
      expect(html).toContain('id="settings-name"');
      expect(html).toContain('type="text"');
      expect(html).toContain('label for="settings-email"');
      expect(html).toContain('id="settings-email"');
      expect(html).toContain('type="email"');
      expect(html).toContain('label for="settings-theme"');
      expect(html).toContain('id="settings-theme"');
      expect(html).toContain('label for="settings-notifications"');
      expect(html).toContain('id="settings-notifications"');
      expect(html).toContain('type="checkbox"');
    });

    it("should include aria-invalid, role=alert, and aria-describedby when errors occur", () => {
      const form = new SettingsForm();
      form.submit(); // Trigger errors
      const html = form.renderHtml();

      expect(html).toContain('aria-invalid="true"');
      expect(html).toContain('aria-describedby="settings-name-error"');
      expect(html).toContain('id="settings-name-error" role="alert"');
      expect(html).toContain('aria-describedby="settings-email-error"');
      expect(html).toContain('id="settings-email-error" role="alert"');
      // Visual non-color indicator (warning symbol)
      expect(html).toContain("⚠️");
    });

    it("should render success banner with live region on successful submission", () => {
      const form = new SettingsForm({ name: "Sarah Connor", email: "sarah@skynet.ai" });
      form.submit();
      const html = form.renderHtml();

      expect(html).toContain('id="form-success-banner" role="status" aria-live="polite"');
      expect(html).toContain("Settings saved successfully!");
      expect(html).toContain('aria-invalid="false"');
    });
  });
});
