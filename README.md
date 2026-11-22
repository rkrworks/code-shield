# CodePractice Studio

A lightweight, standalone web-based coding practice compiler for **Java**, **Python**, **C**, **C++**, and **JavaScript**. Designed purely for distraction-free coding practice with zero login screens, zero admin panels, and zero external build steps.

## Features

- **Multi-Language Compilation**: Live compilation for Java (OpenJDK), Python 3, C (GCC), and C++ (G++) via Wandbox with automatic Piston API fallback, plus instant in-browser execution for JavaScript and an offline fallback mode.
- **Syntax-Highlighted Code Editor**: Synchronized line-number gutter, live syntax highlighting, `Tab` indentation, adjustable font size, and `Ctrl+Enter` / `Cmd+Enter` run shortcut.
- **Local Workspace Persistence**: Create, switch, rename, and delete multiple practice files stored automatically in browser `localStorage`.
- **Quick Practice Snippets**: Ready-to-run starter programs for loops, strings, sorting, frequency maps, and array statistics.
- **Export & Themes**: Download individual source files (`.java`, `.py`, `.c`, `.cpp`, `.js`), export all saved programs as `.txt`, and toggle between Dark and Light themes.

## How to Run Locally

Open `index.html` directly in any modern browser, or serve the folder with any static server:

```bash
python3 -m http.server 8000
```

## Deploying to Vercel or GitHub Pages

1. Upload all files in this folder (`index.html`, `styles.css`, `app.js`, `vercel.json`, `README.md`) to a GitHub repository.
2. Import the repository into Vercel (Framework Preset: **Other**) or enable **GitHub Pages** from the repository settings.

## Credits

Developed and maintained by **Kaushik Ram Ravuru**.
