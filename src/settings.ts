/**
 * FlyRank.ai 🚀 - User & Workspace Settings Module
 * Implements accessible, validated settings form conforming to WCAG 2.1 AA.
 */

export type ThemeMode = "light" | "dark";

export interface UserSettings {
  name: string;
  email: string;
  theme: ThemeMode;
  notifications: boolean;
}

export type ValidationErrors = {
  name?: string;
  email?: string;
  theme?: string;
  notifications?: string;
};

export interface FormValidationResult {
  isValid: boolean;
  errors: ValidationErrors;
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  data?: UserSettings;
  errors?: ValidationErrors;
}

// RFC 5322 compliant simplified robust email regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Validates user settings inputs according to strict domain rules.
 */
export function validateSettings(data: Partial<UserSettings>): FormValidationResult {
  const errors: ValidationErrors = {};

  // Name validation: required, minimum 2 characters (trimmed)
  const trimmedName = data.name?.trim() ?? "";
  if (!trimmedName) {
    errors.name = "Name is required.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  }

  // Email validation: required, standard valid email format
  const trimmedEmail = data.email?.trim() ?? "";
  if (!trimmedEmail) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address (e.g. user@example.com).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Settings Form Component managing state, validation, accessibility, and rendering.
 */
export class SettingsForm {
  private data: UserSettings;
  private errors: ValidationErrors = {};
  private isSubmitted: boolean = false;
  private submissionFeedback: string | null = null;

  constructor(initialData?: Partial<UserSettings>) {
    this.data = {
      name: initialData?.name ?? "",
      email: initialData?.email ?? "",
      theme: initialData?.theme ?? "light",
      notifications: initialData?.notifications ?? true,
    };
  }

  public getData(): Readonly<UserSettings> {
    return { ...this.data };
  }

  public getErrors(): Readonly<ValidationErrors> {
    return { ...this.errors };
  }

  public isSuccess(): boolean {
    return this.isSubmitted && Object.keys(this.errors).length === 0;
  }

  public setField<K extends keyof UserSettings>(field: K, value: UserSettings[K]): void {
    this.data[field] = value;
    // Clear field-level error on change
    if (this.errors[field]) {
      delete this.errors[field];
    }
  }

  public validate(): boolean {
    const result = validateSettings(this.data);
    this.errors = result.errors;
    return result.isValid;
  }

  public submit(): FormSubmissionResult {
    const isValid = this.validate();
    if (!isValid) {
      this.isSubmitted = false;
      this.submissionFeedback = "Please correct the errors in the form before submitting.";
      return {
        success: false,
        message: this.submissionFeedback,
        errors: this.errors,
      };
    }

    this.isSubmitted = true;
    this.submissionFeedback = "Settings saved successfully! Your preferences have been updated.";
    return {
      success: true,
      message: this.submissionFeedback,
      data: { ...this.data, name: this.data.name.trim(), email: this.data.email.trim() },
    };
  }

  /**
   * Generates accessible, responsive HTML markup conforming to WCAG 2.1 AA standards.
   */
  public renderHtml(): string {
    const nameInvalid = Boolean(this.errors.name);
    const emailInvalid = Boolean(this.errors.email);

    return `
<div class="settings-container" style="max-width: 540px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif; padding: 1.5rem; box-sizing: border-box;">
  <form id="flyrank-settings-form" class="settings-form" novalidate aria-labelledby="settings-heading" onsubmit="return false;">
    <h2 id="settings-heading" style="font-size: 1.5rem; margin-bottom: 1.25rem; color: #1e293b;">FlyRank Account Settings</h2>
    
    ${
      this.isSubmitted && this.submissionFeedback
        ? `<div id="form-success-banner" role="status" aria-live="polite" style="padding: 0.75rem 1rem; margin-bottom: 1.25rem; background-color: #ecfdf5; border: 1px solid #10b981; border-radius: 6px; color: #065f46; font-weight: 500;">
             <span aria-hidden="true">✓ </span>${this.escapeHtml(this.submissionFeedback)}
           </div>`
        : ""
    }

    ${
      !this.isSubmitted && this.submissionFeedback
        ? `<div id="form-error-banner" role="alert" aria-live="assertive" style="padding: 0.75rem 1rem; margin-bottom: 1.25rem; background-color: #fef2f2; border: 1px solid #ef4444; border-radius: 6px; color: #991b1b; font-weight: 500;">
             <span aria-hidden="true">⚠️ </span>${this.escapeHtml(this.submissionFeedback)}
           </div>`
        : ""
    }

    <!-- Name Field -->
    <div class="form-group" style="margin-bottom: 1.25rem;">
      <label for="settings-name" style="display: block; font-weight: 600; margin-bottom: 0.375rem; color: #334155;">
        Full Name <span style="color: #dc2626;" aria-hidden="true">*</span>
      </label>
      <input
        type="text"
        id="settings-name"
        name="name"
        value="${this.escapeHtml(this.data.name)}"
        required
        aria-required="true"
        aria-invalid="${nameInvalid}"
        ${nameInvalid ? 'aria-describedby="settings-name-error"' : ""}
        style="width: 100%; box-sizing: border-box; padding: 0.625rem; border: 1.5px solid ${nameInvalid ? "#dc2626" : "#cbd5e1"}; border-radius: 6px; font-size: 1rem;"
      />
      ${
        nameInvalid
          ? `<div id="settings-name-error" role="alert" style="color: #dc2626; font-size: 0.875rem; margin-top: 0.375rem; display: flex; align-items: center; gap: 4px;">
               <span aria-hidden="true">⚠️</span> <span>${this.escapeHtml(this.errors.name!)}</span>
             </div>`
          : ""
      }
    </div>

    <!-- Email Field -->
    <div class="form-group" style="margin-bottom: 1.25rem;">
      <label for="settings-email" style="display: block; font-weight: 600; margin-bottom: 0.375rem; color: #334155;">
        Email Address <span style="color: #dc2626;" aria-hidden="true">*</span>
      </label>
      <input
        type="email"
        id="settings-email"
        name="email"
        value="${this.escapeHtml(this.data.email)}"
        required
        aria-required="true"
        aria-invalid="${emailInvalid}"
        ${emailInvalid ? 'aria-describedby="settings-email-error"' : ""}
        style="width: 100%; box-sizing: border-box; padding: 0.625rem; border: 1.5px solid ${emailInvalid ? "#dc2626" : "#cbd5e1"}; border-radius: 6px; font-size: 1rem;"
      />
      ${
        emailInvalid
          ? `<div id="settings-email-error" role="alert" style="color: #dc2626; font-size: 0.875rem; margin-top: 0.375rem; display: flex; align-items: center; gap: 4px;">
               <span aria-hidden="true">⚠️</span> <span>${this.escapeHtml(this.errors.email!)}</span>
             </div>`
          : ""
      }
    </div>

    <!-- Theme Preference -->
    <div class="form-group" style="margin-bottom: 1.25rem;">
      <label for="settings-theme" style="display: block; font-weight: 600; margin-bottom: 0.375rem; color: #334155;">
        Theme Preference
      </label>
      <select
        id="settings-theme"
        name="theme"
        style="width: 100%; box-sizing: border-box; padding: 0.625rem; border: 1.5px solid #cbd5e1; border-radius: 6px; font-size: 1rem; background-color: #ffffff;"
      >
        <option value="light" ${this.data.theme === "light" ? "selected" : ""}>Light Mode</option>
        <option value="dark" ${this.data.theme === "dark" ? "selected" : ""}>Dark Mode</option>
      </select>
    </div>

    <!-- Notification Toggle -->
    <div class="form-group" style="margin-bottom: 1.5rem;">
      <div style="display: flex; align-items: center; gap: 0.625rem;">
        <input
          type="checkbox"
          id="settings-notifications"
          name="notifications"
          ${this.data.notifications ? "checked" : ""}
          style="width: 1.125rem; height: 1.125rem; cursor: pointer;"
        />
        <label for="settings-notifications" style="cursor: pointer; font-weight: 500; color: #334155;">
          Receive FlyRank AI visibility score updates & weekly growth reports
        </label>
      </div>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      id="settings-submit-btn"
      style="width: 100%; padding: 0.75rem 1.25rem; font-size: 1rem; font-weight: 600; color: #ffffff; background-color: #2563eb; border: none; border-radius: 6px; cursor: pointer; transition: background-color 0.2s;"
    >
      Save Settings
    </button>
  </form>
</div>
    `.trim();
  }

  private escapeHtml(str: string): string {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
