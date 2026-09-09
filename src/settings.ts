/**
 * Settings Form - Generated from Vague AI Prompt:
 * "Build a settings form for my app with validation."
 */

export interface SettingsData {
  name: string;
  email: string;
  theme: string;
  notifications: boolean;
}

export class SettingsForm {
  public data: SettingsData;
  public errors: Record<string, string> = {};
  public isSubmitted: boolean = false;

  constructor(initialData?: Partial<SettingsData>) {
    this.data = {
      name: initialData?.name || "",
      email: initialData?.email || "",
      theme: initialData?.theme || "light",
      notifications: initialData?.notifications ?? true,
    };
  }

  // Basic validation from vague prompt
  public validate(): boolean {
    this.errors = {};

    if (!this.data.name) {
      this.errors.name = "Name is required";
    }

    // Naive email check (Vague AI mistake: accepts "abc@" or single char names)
    if (!this.data.email) {
      this.errors.email = "Email is required";
    } else if (!this.data.email.includes("@")) {
      this.errors.email = "Invalid email";
    }

    return Object.keys(this.errors).length === 0;
  }

  public submit(): { success: boolean; message: string } {
    if (this.validate()) {
      this.isSubmitted = true;
      return { success: true, message: "Settings saved successfully!" };
    }
    this.isSubmitted = false;
    return { success: false, message: "Validation failed" };
  }

  public renderHtml(): string {
    // Vague implementation: lacks accessible for/id pairing, lacks aria-describedby, relies on red color
    return `
      <form class="settings-form" onsubmit="return false;">
        <h2>User Settings</h2>
        
        <div class="form-group">
          <label>Name:</label>
          <input type="text" name="name" value="${this.data.name}" style="${this.errors.name ? 'border: 1px solid red;' : ''}" />
          ${this.errors.name ? `<span style="color: red;">${this.errors.name}</span>` : ''}
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="text" name="email" value="${this.data.email}" style="${this.errors.email ? 'border: 1px solid red;' : ''}" />
          ${this.errors.email ? `<span style="color: red;">${this.errors.email}</span>` : ''}
        </div>

        <div class="form-group">
          <label>Theme:</label>
          <select name="theme">
            <option value="light" ${this.data.theme === 'light' ? 'selected' : ''}>Light</option>
            <option value="dark" ${this.data.theme === 'dark' ? 'selected' : ''}>Dark</option>
          </select>
        </div>

        <div class="form-group">
          <label>
            <input type="checkbox" name="notifications" ${this.data.notifications ? 'checked' : ''} />
            Enable Notifications
          </label>
        </div>

        <button type="submit">Save Settings</button>
        ${this.isSubmitted ? '<div class="success-message">Settings saved!</div>' : ''}
      </form>
    `;
  }
}
