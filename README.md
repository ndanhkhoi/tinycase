# TinyCase

<div align="center">
  <img src="assets/command-icon.svg" width="128" height="128" alt="TinyCase Icon" />
  <p><strong>Quick text case converter running locally</strong></p>
  <p>Convert selected text or clipboard content to camelCase, PascalCase, snake_case, kebab-case, and more</p>
</div>

## ✨ Features

TinyCase is a lightweight, privacy-focused Raycast extension that helps you quickly convert text between different cases:

- 🐪 **camelCase** - for JavaScript/TypeScript variables
- 🅿️ **PascalCase** - for classes and components
- 🐍 **snake_case** - for Python and database columns
- 🔗 **kebab-case** - for URLs and CSS classes
- 🔒 **CONSTANT_CASE** - for environment variables
- 📰 **Title Case** - for headings
- 📝 **Sentence case** - for regular text
- 🔽 **lowercase** - all lowercase
- 🔼 **UPPERCASE** - all uppercase

### 🔐 Privacy First

- ✅ Runs completely locally on your Mac
- ✅ No data sent to external servers
- ✅ No internet connection required
- ✅ Your text stays on your device

## 📦 Installation

### Prerequisites

- macOS 13.0 or later
- Node.js 18.0 or later
- [Raycast](https://raycast.com/) installed

### Install Locally (Development)

Since this extension is not yet published to the Raycast Store, you can install it locally:

#### Method 1: Import Extension (Recommended)

1. **Clone or download this repository**
   ```bash
   cd ~/Works/Projects
   # If you already have the folder, skip this
   # git clone <repository-url> tinycase
   cd tinycase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Import into Raycast**
   - Open Raycast (⌘ + Space)
   - Type **"Import Extension"** and press Enter
   - Navigate to the `tinycase` folder
   - Select the folder and click **Import**

4. **Grant permissions**
   - Go to **System Settings** → **Privacy & Security** → **Accessibility**
   - Make sure **Raycast** is enabled (required for paste functionality)

#### Method 2: Development Mode

1. **Clone and install dependencies** (same as above)
   ```bash
   cd ~/Works/Projects/tinycase
   npm install
   ```

2. **Start development mode**
   ```bash
   npm run dev
   ```

3. **Grant permissions** (same as Method 1)

## 🚀 Usage

### Basic Workflow

1. **Select text** in any application (Notes, VS Code, Chrome, etc.)
   - If no text is selected, TinyCase will use your clipboard content

2. **Trigger the extension**
   - Use your assigned hotkey (recommended: set in Raycast → Extensions → TinyCase)
   - Or open Raycast and type "Convert Text Case"

3. **Choose a case type**
   - Browse the list and see live previews
   - Select the desired case type
   - Press Enter to convert

4. **Result**
   - In **Paste mode** (default): Converted text replaces your selection
   - In **Copy mode**: Converted text is copied to clipboard
   - If paste is not allowed (e.g., password fields), automatically falls back to copy

### Keyboard Shortcuts

When the case list is open:
- **Enter** - Convert and paste/copy (based on your preference)
- **⌘ + C** - Copy the result without pasting

## ⚙️ Preferences

Configure TinyCase in **Raycast → Extensions → TinyCase → Preferences**:

### Output Mode
- **Paste (replace selection)** *(default)* - Automatically pastes converted text, replacing your selection
- **Copy to clipboard** - Copies converted text to clipboard without pasting

### Default Case
Choose which case type is highlighted when you open the extension:
- camelCase *(default)*
- PascalCase
- snake_case
- kebab-case
- CONSTANT_CASE
- Title Case
- Sentence case
- lowercase
- UPPERCASE

## 🏗️ Project Structure

```
tinycase/
├── assets/
│   └── command-icon.svg      # Extension icon
├── src/
│   ├── command.tsx            # Main command UI and logic
│   └── utils.ts               # Case conversion utilities
├── .gitignore
├── package.json
├── raycast.json               # Raycast extension manifest
├── tsconfig.json
└── README.md
```

## 🎨 Icon Attribution

The TinyCase icon is a custom design created for this extension. Similar icon styles can be found at:
- [Material Symbols](https://fonts.google.com/icons)
- [Tabler Icons](https://tabler-icons.io/)
- [Lucide Icons](https://lucide.dev/)
- [Remix Icon](https://remixicon.com/)

## ✅ Testing Checklist

Before using TinyCase in production, test these scenarios:

### Basic Functionality
- [ ] Convert text in **Notes** app
- [ ] Convert text in **VS Code** or text editor
- [ ] Convert text in **Chrome** or browser
- [ ] Convert text in **Slack** or messaging app

### Edge Cases
- [ ] No text selected (should use clipboard)
- [ ] Empty clipboard and no selection (should show error)
- [ ] Long text (100+ characters)
- [ ] Text with special characters: `hello_world-123 TEST`
- [ ] Text with emojis: `hello 👋 world`

### Modes
- [ ] Paste mode works correctly
- [ ] Copy mode works correctly
- [ ] Fallback to copy when paste is not allowed (try in a password field)

### HUD Messages
- [ ] Shows "✅ Pasted as [case]" in paste mode
- [ ] Shows "📋 Copied as [case]" in copy mode
- [ ] Shows fallback message when paste fails

### Permissions
- [ ] Accessibility permission granted
- [ ] Clipboard access works

### Performance
- [ ] Extension loads quickly
- [ ] Conversion is instant
- [ ] No lag when switching between cases

## 🚢 Publishing to Raycast Store (Future)

When ready to publish:

1. **Ensure you have a Raycast Developer account**
   - Sign up at [developer.raycast.com](https://developers.raycast.com/)

2. **Test thoroughly**
   - Complete the testing checklist above
   - Fix any bugs or issues

3. **Publish**
   ```bash
   npm run publish
   ```

4. **Follow the prompts**
   - Fill in description, category, and other metadata
   - Submit for review

5. **Track submission**
   - Monitor status at [developer.raycast.com](https://developers.raycast.com/)
   - Respond to any feedback from reviewers

6. **After approval**
   - Extension will appear in Raycast Store
   - Users can install with one click

## 📝 License

MIT License - see LICENSE file for details

## 👤 Author

**ndanhkhoi**

---

<div align="center">
  <p>Made with ❤️ for the Raycast community</p>
  <p><em>Keep your text transformations private and local</em></p>
</div>
