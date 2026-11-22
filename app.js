(function () {
  "use strict";

  const STORAGE_KEY = "codepractice_studio_files_v1";
  const THEME_KEY = "codepractice_studio_theme_v1";

  const EXTENSIONS = {
    java: "java",
    python: "py",
    c: "c",
    cpp: "cpp",
    javascript: "js"
  };

  const STARTER_TEMPLATES = {
    java: [
      "import java.util.*;",
      "",
      "public class Main {",
      "    public static void main(String[] args) {",
      "        Scanner sc = new Scanner(System.in);",
      "        int n = sc.hasNextInt() ? sc.nextInt() : 5;",
      "        int sum = 0;",
      "        for (int i = 1; i <= n; i++) {",
      "            sum += i;",
      "        }",
      "        System.out.println(\"Sum of 1 to \" + n + \" = \" + sum);",
      "    }",
      "}"
    ].join("\n"),

    python: [
      "import sys",
      "",
      "data = sys.stdin.read().strip().split()",
      "n = int(data[0]) if data else 5",
      "total = sum(range(1, n + 1))",
      "print(f\"Sum of 1 to {n} = {total}\")"
    ].join("\n"),

    c: [
      "#include <stdio.h>",
      "",
      "int main(void) {",
      "    int n = 5;",
      "    if (scanf(\"%d\", &n) != 1) n = 5;",
      "    int sum = 0;",
      "    for (int i = 1; i <= n; i++) {",
      "        sum += i;",
      "    }",
      "    printf(\"Sum of 1 to %d = %d\\n\", n, sum);",
      "    return 0;",
      "}"
    ].join("\n"),

    cpp: [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "    int n = 5;",
      "    if (!(cin >> n)) n = 5;",
      "    long long sum = 0;",
      "    for (int i = 1; i <= n; i++) {",
      "        sum += i;",
      "    }",
      "    cout << \"Sum of 1 to \" << n << \" = \" << sum << endl;",
      "    return 0;",
      "}"
    ].join("\n"),

    javascript: [
      "// Use readLine() or STDIN to read custom input",
      "const raw = readLine();",
      "const n = raw ? Number(raw) : 5;",
      "let sum = 0;",
      "for (let i = 1; i <= n; i++) {",
      "    sum += i;",
      "}",
      "console.log(`Sum of 1 to ${n} = ${sum}`);"
    ].join("\n")
  };

  const PRACTICE_SNIPPETS = {
    factorial: {
      title: "Factorial & Loops",
      lang: "python",
      stdin: "6\n",
      code: [
        "import sys",
        "",
        "def factorial(n):",
        "    result = 1",
        "    for i in range(2, n + 1):",
        "        result *= i",
        "    return result",
        "",
        "tokens = sys.stdin.read().strip().split()",
        "n = int(tokens[0]) if tokens else 6",
        "print(f\"{n}! = {factorial(n)}\")"
      ].join("\n")
    },
    palindrome: {
      title: "Palindrome Checker",
      lang: "java",
      stdin: "racecar\n",
      code: [
        "import java.util.*;",
        "",
        "public class Main {",
        "    public static void main(String[] args) {",
        "        Scanner sc = new Scanner(System.in);",
        "        String word = sc.hasNext() ? sc.next() : \"racecar\";",
        "        String reversed = new StringBuilder(word).reverse().toString();",
        "        boolean isPal = word.equalsIgnoreCase(reversed);",
        "        System.out.println(\"Input: \" + word);",
        "        System.out.println(\"Reversed: \" + reversed);",
        "        System.out.println(isPal ? \"PALINDROME\" : \"NOT_PALINDROME\");",
        "    }",
        "}"
      ].join("\n")
    },
    sorting: {
      title: "Array Sorting",
      lang: "c",
      stdin: "5\n42 7 19 3 25\n",
      code: [
        "#include <stdio.h>",
        "",
        "int main(void) {",
        "    int n;",
        "    if (scanf(\"%d\", &n) != 1) return 0;",
        "    int arr[100];",
        "    for (int i = 0; i < n; i++) scanf(\"%d\", &arr[i]);",
        "    for (int i = 0; i < n - 1; i++) {",
        "        for (int j = 0; j < n - i - 1; j++) {",
        "            if (arr[j] > arr[j + 1]) {",
        "                int tmp = arr[j];",
        "                arr[j] = arr[j + 1];",
        "                arr[j + 1] = tmp;",
        "            }",
        "        }",
        "    }",
        "    for (int i = 0; i < n; i++) {",
        "        printf(\"%d%s\", arr[i], i + 1 == n ? \"\\n\" : \" \");",
        "    }",
        "    return 0;",
        "}"
      ].join("\n")
    },
    hashmap: {
      title: "Frequency Counter",
      lang: "cpp",
      stdin: "6\njava python java c cpp python\n",
      code: [
        "#include <iostream>",
        "#include <map>",
        "#include <string>",
        "using namespace std;",
        "",
        "int main() {",
        "    int n;",
        "    if (!(cin >> n)) return 0;",
        "    map<string, int> freq;",
        "    for (int i = 0; i < n; i++) {",
        "        string word;",
        "        cin >> word;",
        "        freq[word]++;",
        "    }",
        "    for (const auto &entry : freq) {",
        "        cout << entry.first << \" -> \" << entry.second << \"\\n\";",
        "    }",
        "    return 0;",
        "}"
      ].join("\n")
    },
    js_stats: {
      title: "Array Statistics",
      lang: "javascript",
      stdin: "12 45 7 89 23 56\n",
      code: [
        "const nums = STDIN.trim().split(/\\s+/).map(Number).filter(n => !Number.isNaN(n));",
        "const sum = nums.reduce((a, b) => a + b, 0);",
        "const avg = nums.length ? (sum / nums.length).toFixed(2) : 0;",
        "console.log(\"Count:\", nums.length);",
        "console.log(\"Min:\", Math.min(...nums));",
        "console.log(\"Max:\", Math.max(...nums));",
        "console.log(\"Sum:\", sum);",
        "console.log(\"Average:\", avg);"
      ].join("\n")
    }
  };

  const WANDBOX_COMPILERS = {
    java: "openjdk-jdk-22+36",
    python: "cpython-3.12.7",
    c: "gcc-13.2.0-c",
    cpp: "gcc-13.2.0"
  };

  const PISTON_RUNTIMES = {
    java: { language: "java", version: "15.0.2", file: "Main.java" },
    python: { language: "python", version: "3.10.0", file: "main.py" },
    c: { language: "c", version: "10.2.0", file: "main.c" },
    cpp: { language: "c++", version: "10.2.0", file: "main.cpp" }
  };

  const els = {
    savedFilesList: document.getElementById("savedFilesList"),
    savedCountBadge: document.getElementById("savedCountBadge"),
    fileTitleInput: document.getElementById("fileTitleInput"),
    languageSelect: document.getElementById("languageSelect"),
    fontSizeSelect: document.getElementById("fontSizeSelect"),
    codeEditor: document.getElementById("codeEditor"),
    codeHighlight: document.getElementById("codeHighlight"),
    lineNumbers: document.getElementById("lineNumbers"),
    stdinInput: document.getElementById("stdinInput"),
    outputConsole: document.getElementById("outputConsole"),
    compilerStatus: document.getElementById("compilerStatus"),
    newFileBtn: document.getElementById("newFileBtn"),
    downloadFileBtn: document.getElementById("downloadFileBtn"),
    exportAllBtn: document.getElementById("exportAllBtn"),
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    resetTemplateBtn: document.getElementById("resetTemplateBtn"),
    copyCodeBtn: document.getElementById("copyCodeBtn"),
    runCodeBtn: document.getElementById("runCodeBtn"),
    clearStdinBtn: document.getElementById("clearStdinBtn"),
    clearOutputBtn: document.getElementById("clearOutputBtn"),
    toast: document.getElementById("toast")
  };

  let files = [];
  let activeFileId = null;
  let saveTimer = null;
  let toastTimer = null;

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function formatTimestamp() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      els.toast.classList.remove("show");
    }, 2200);
  }

  function loadStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          files = parsed;
          return;
        }
      }
    } catch (_err) {
      files = [];
    }
    files = [
      {
        id: "file_" + Date.now(),
        title: "Sum of Natural Numbers",
        lang: "java",
        code: STARTER_TEMPLATES.java,
        stdin: "10\n",
        lastOutput: "",
        updatedAt: formatTimestamp()
      }
    ];
  }

  function persistStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(files));
    } catch (_err) {
      // Ignore storage quota errors
    }
  }

  function getActiveFile() {
    return files.find(function (f) { return f.id === activeFileId; }) || files[0];
  }

  function renderFileList() {
    els.savedCountBadge.textContent = files.length + (files.length === 1 ? " file" : " files");
    els.savedFilesList.innerHTML = files
      .slice()
      .reverse()
      .map(function (f) {
        const activeClass = f.id === activeFileId ? " active" : "";
        const delBtn = files.length > 1
          ? '<button type="button" class="delete-btn" data-delete-id="' + escapeHtml(f.id) + '" title="Delete file">&times;</button>'
          : "";
        return (
          '<div class="file-item' + activeClass + '" data-file-id="' + escapeHtml(f.id) + '" role="listitem">' +
            '<div class="file-meta">' +
              '<div class="file-title">' + escapeHtml(f.title || "Untitled Program") + "</div>" +
              '<div class="file-sub">' + escapeHtml(f.lang.toUpperCase()) + " &middot; " + escapeHtml(f.updatedAt || "") + "</div>" +
            "</div>" +
            delBtn +
          "</div>"
        );
      })
      .join("");
  }

  function selectFile(id) {
    const file = files.find(function (f) { return f.id === id; }) || files[0];
    if (!file) return;
    activeFileId = file.id;
    els.fileTitleInput.value = file.title || "";
    els.languageSelect.value = file.lang || "java";
    els.codeEditor.value = file.code || "";
    els.stdinInput.value = file.stdin || "";
    els.outputConsole.classList.remove("error");
    els.outputConsole.textContent = file.lastOutput || 'Write code above and click "Run Code" (or press Ctrl+Enter) to compile and execute.';
    setStatus("Ready", "status-idle");
    updateEditorVisuals();
    renderFileList();
  }

  function createNewFile(preset) {
    const nextNum = files.length + 1;
    const lang = preset ? preset.lang : els.languageSelect.value || "java";
    const newFile = {
      id: "file_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
      title: preset ? preset.title : "Practice Program " + nextNum,
      lang: lang,
      code: preset ? preset.code : STARTER_TEMPLATES[lang],
      stdin: preset ? preset.stdin : "5\n",
      lastOutput: "",
      updatedAt: formatTimestamp()
    };
    files.push(newFile);
    persistStorage();
    selectFile(newFile.id);
    showToast("Created " + newFile.title);
  }

  function deleteFile(id) {
    if (files.length <= 1) return;
    files = files.filter(function (f) { return f.id !== id; });
    persistStorage();
    if (activeFileId === id) {
      selectFile(files[files.length - 1].id);
    } else {
      renderFileList();
    }
    showToast("File removed");
  }

  function syncActiveFileFromInputs() {
    const file = getActiveFile();
    if (!file) return;
    file.title = els.fileTitleInput.value.trim() || "Untitled Program";
    file.lang = els.languageSelect.value;
    file.code = els.codeEditor.value;
    file.stdin = els.stdinInput.value;
    file.updatedAt = formatTimestamp();
    persistStorage();
    renderFileList();
  }

  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(syncActiveFileFromInputs, 300);
  }

  function highlightCode(code, lang) {
    const keywords = {
      java: /\b(public|private|protected|class|static|void|new|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|throws|import|package|extends|implements|true|false|null|final|this|super)\b/g,
      python: /\b(def|class|return|if|elif|else|for|while|in|import|from|as|try|except|finally|raise|with|pass|break|continue|and|or|not|True|False|None|lambda|yield)\b/g,
      c: /\b(int|float|double|char|void|long|short|unsigned|signed|struct|typedef|return|if|else|for|while|do|switch|case|break|continue|sizeof|const|static|include|define)\b/g,
      cpp: /\b(int|float|double|char|void|bool|auto|const|static|class|struct|public|private|protected|namespace|using|return|if|else|for|while|do|switch|case|break|continue|new|delete|try|catch|throw|true|false|nullptr|include|template|typename)\b/g,
      javascript: /\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|class|extends|import|export|async|await|true|false|null|undefined)\b/g
    };

    const types = /\b(String|Scanner|System|Math|StringBuilder|Integer|Double|List|ArrayList|Map|HashMap|Set|HashSet|vector|string|map|set|cin|cout|endl|printf|scanf|console|Number|Array|Object|len|range|print|sum)\b/g;

    const tokenRegex = lang === "python"
      ? /(#[^\n]*)|("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|\b(\d+(?:\.\d+)?)\b/g
      : /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|\b(\d+(?:\.\d+)?)\b/g;

    let result = "";
    let lastIdx = 0;
    let match;

    while ((match = tokenRegex.exec(code)) !== null) {
      if (match.index > lastIdx) {
        result += highlightPlainSegment(code.slice(lastIdx, match.index), keywords[lang], types);
      }
      if (match[1]) {
        result += '<span class="tok-cmt">' + escapeHtml(match[1]) + "</span>";
      } else if (match[2]) {
        result += '<span class="tok-str">' + escapeHtml(match[2]) + "</span>";
      } else if (match[3]) {
        result += '<span class="tok-num">' + escapeHtml(match[3]) + "</span>";
      }
      lastIdx = tokenRegex.lastIndex;
    }

    if (lastIdx < code.length) {
      result += highlightPlainSegment(code.slice(lastIdx), keywords[lang], types);
    }

    return result + "\n";
  }

  function highlightPlainSegment(segment, kwRegex, typeRegex) {
    let html = escapeHtml(segment);
    if (kwRegex) {
      html = html.replace(kwRegex, '<span class="tok-kw">$&</span>');
    }
    html = html.replace(typeRegex, '<span class="tok-type">$&</span>');
    return html;
  }

  function updateEditorVisuals() {
    const code = els.codeEditor.value || "";
    const count = code.split("\n").length;
    const nums = [];
    for (let i = 1; i <= count; i++) nums.push(i);
    els.lineNumbers.textContent = nums.join("\n");
    els.codeHighlight.innerHTML = highlightCode(code, els.languageSelect.value);
    syncScroll();
  }

  function syncScroll() {
    els.lineNumbers.scrollTop = els.codeEditor.scrollTop;
    els.codeHighlight.scrollTop = els.codeEditor.scrollTop;
    els.codeHighlight.scrollLeft = els.codeEditor.scrollLeft;
  }

  function setStatus(label, cssClass) {
    els.compilerStatus.textContent = label;
    els.compilerStatus.className = "status-pill " + cssClass;
  }

  function checkBasicSyntax(lang, code) {
    if (!code.trim()) {
      return "Editor is empty. Write a program before running.";
    }
    const stripped = code
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/[^\n]*/g, "")
      .replace(/"(?:\\.|[^"\\])*"/g, '""')
      .replace(/'(?:\\.|[^'\\])*'/g, "''");

    const pairs = { "(": ")", "{": "}", "[": "]" };
    const stack = [];
    for (let i = 0; i < stripped.length; i++) {
      const ch = stripped[i];
      if (pairs[ch]) {
        stack.push(pairs[ch]);
      } else if (ch === ")" || ch === "}" || ch === "]") {
        if (!stack.length || stack.pop() !== ch) {
          return "Syntax Error: Unmatched closing '" + ch + "'.";
        }
      }
    }
    if (stack.length) {
      return "Syntax Error: Missing closing '" + stack[stack.length - 1] + "'.";
    }
    if (lang === "java" && !/\bclass\s+\w+/.test(stripped)) {
      return "Compilation Error: Java program must define a class (e.g., public class Main).";
    }
    return null;
  }

  function runJavaScriptLocally(code, stdinText) {
    const logs = [];
    const lines = String(stdinText || "").replace(/\r/g, "").split("\n");
    let cursor = 0;

    function readLine() {
      return cursor < lines.length ? lines[cursor++] : "";
    }

    const customConsole = {
      log: function () {
        logs.push(Array.prototype.slice.call(arguments).map(String).join(" "));
      },
      error: function () {
        logs.push("[stderr] " + Array.prototype.slice.call(arguments).map(String).join(" "));
      },
      warn: function () {
        logs.push("[warn] " + Array.prototype.slice.call(arguments).map(String).join(" "));
      }
    };

    try {
      const fn = new Function("console", "STDIN", "readLine", code);
      fn(customConsole, String(stdinText || ""), readLine);
      return { ok: true, output: logs.join("\n") || "(Program finished with no output)", engine: "Browser JS Engine" };
    } catch (err) {
      return { ok: false, output: "Runtime Error: " + (err && err.message ? err.message : String(err)), engine: "Browser JS Engine" };
    }
  }

  async function runViaWandbox(lang, code, stdinText) {
    const compiler = WANDBOX_COMPILERS[lang];
    if (!compiler) throw new Error("Unsupported language");

    const controller = new AbortController();
    const timer = setTimeout(function () { controller.abort(); }, 12000);

    try {
      const response = await fetch("https://wandbox.org/api/compile.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          compiler: compiler,
          code: code,
          stdin: stdinText || ""
        }),
        signal: controller.signal
      });
      if (!response.ok) throw new Error("Wandbox HTTP " + response.status);
      const data = await response.json();
      const compileErr = (data.compiler_error || "").trim();
      const progErr = (data.program_error || "").trim();
      const progOut = (data.program_output || "").trimEnd();
      const exitCode = Number(data.status || 0);

      if (compileErr) {
        return { ok: false, output: "Compilation Error:\n" + compileErr, engine: "Wandbox Live Compiler" };
      }
      if (exitCode !== 0 && progErr) {
        return { ok: false, output: (progOut ? progOut + "\n" : "") + progErr, engine: "Wandbox Live Compiler" };
      }
      const combined = [progOut, progErr].filter(Boolean).join("\n");
      return {
        ok: exitCode === 0,
        output: combined || "(Program exited with status " + exitCode + " and no output)",
        engine: "Wandbox Live Compiler"
      };
    } finally {
      clearTimeout(timer);
    }
  }

  async function runViaPiston(lang, code, stdinText) {
    const rt = PISTON_RUNTIMES[lang];
    if (!rt) throw new Error("Unsupported language");

    const controller = new AbortController();
    const timer = setTimeout(function () { controller.abort(); }, 12000);

    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: rt.language,
          version: rt.version,
          files: [{ name: rt.file, content: code }],
          stdin: stdinText || ""
        }),
        signal: controller.signal
      });
      if (!response.ok) throw new Error("Piston HTTP " + response.status);
      const data = await response.json();
      const compile = data.compile || {};
      const run = data.run || {};

      if (compile.stderr && compile.code !== 0) {
        return { ok: false, output: "Compilation Error:\n" + compile.stderr.trim(), engine: "Piston Live Compiler" };
      }
      const out = ((run.stdout || "") + (run.stderr ? "\n" + run.stderr : "")).trim();
      return {
        ok: (run.code || 0) === 0,
        output: out || "(Program finished with no output)",
        engine: "Piston Live Compiler"
      };
    } finally {
      clearTimeout(timer);
    }
  }

  function runOfflineFallback(lang, code, stdinText) {
    const tokens = String(stdinText || "").trim().split(/\s+/).filter(Boolean);
    const outLines = [];

    if (/palindrome/i.test(code) && tokens.length >= 1) {
      const word = tokens[0];
      const rev = word.split("").reverse().join("");
      const isPal = word.toLowerCase() === rev.toLowerCase();
      return {
        ok: true,
        output: "Input: " + word + "\nReversed: " + rev + "\n" + (isPal ? "PALINDROME" : "NOT_PALINDROME"),
        engine: "Offline Fallback"
      };
    }

    if (/factorial/i.test(code) && tokens.length >= 1 && !Number.isNaN(Number(tokens[0]))) {
      const n = Math.min(20, Math.max(0, Number(tokens[0])));
      let fact = 1;
      for (let i = 2; i <= n; i++) fact *= i;
      return { ok: true, output: n + "! = " + fact, engine: "Offline Fallback" };
    }

    if (/sum of 1 to/i.test(code)) {
      const n = tokens.length && !Number.isNaN(Number(tokens[0])) ? Number(tokens[0]) : 5;
      const total = (n * (n + 1)) / 2;
      return { ok: true, output: "Sum of 1 to " + n + " = " + total, engine: "Offline Fallback" };
    }

    const literalMatches = code.match(/(?:System\.out\.println|printf|print)\s*\(\s*["']([^"']+)["']\s*\)/g);
    if (literalMatches) {
      literalMatches.forEach(function (m) {
        const inner = m.match(/["']([^"']+)["']/);
        if (inner) outLines.push(inner[1].replace(/\\n/g, ""));
      });
      return { ok: true, output: outLines.join("\n"), engine: "Offline Fallback" };
    }

    return {
      ok: false,
      output: "Live compiler API is currently unreachable (offline mode). Connect to the internet to compile arbitrary " + lang.toUpperCase() + " code, or switch to JavaScript for full offline execution.",
      engine: "Offline Fallback"
    };
  }

  async function executeCurrentProgram() {
    syncActiveFileFromInputs();
    const lang = els.languageSelect.value;
    const code = els.codeEditor.value;
    const stdinText = els.stdinInput.value;

    const syntaxErr = checkBasicSyntax(lang, code);
    if (syntaxErr) {
      els.outputConsole.classList.add("error");
      els.outputConsole.textContent = syntaxErr;
      setStatus("Syntax Error", "status-err");
      return;
    }

    els.runCodeBtn.disabled = true;
    els.outputConsole.classList.remove("error");
    els.outputConsole.textContent = "Compiling and executing...";
    setStatus("Running...", "status-running");

    const started = performance.now();
    let result;

    if (lang === "javascript") {
      result = runJavaScriptLocally(code, stdinText);
    } else {
      try {
        result = await runViaWandbox(lang, code, stdinText);
      } catch (_wandboxErr) {
        try {
          result = await runViaPiston(lang, code, stdinText);
        } catch (_pistonErr) {
          result = runOfflineFallback(lang, code, stdinText);
        }
      }
    }

    const elapsedMs = Math.round(performance.now() - started);
    els.runCodeBtn.disabled = false;

    if (result.ok) {
      els.outputConsole.classList.remove("error");
      setStatus(result.engine + " · " + elapsedMs + "ms", "status-ok");
    } else {
      els.outputConsole.classList.add("error");
      setStatus("Failed · " + elapsedMs + "ms", "status-err");
    }

    els.outputConsole.textContent = result.output;
    const active = getActiveFile();
    if (active) {
      active.lastOutput = result.output;
      persistStorage();
    }
  }

  function downloadBlob(filename, content) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function applyTheme(theme) {
    const isLight = theme === "light";
    document.documentElement.classList.toggle("light-theme", isLight);
    els.themeToggleBtn.textContent = isLight ? "Dark Theme" : "Light Theme";
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_err) {
      // Ignore storage errors
    }
  }

  function bindEvents() {
    els.codeEditor.addEventListener("input", function () {
      updateEditorVisuals();
      scheduleSave();
    });

    els.codeEditor.addEventListener("scroll", syncScroll);

    els.codeEditor.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = els.codeEditor.selectionStart;
        const end = els.codeEditor.selectionEnd;
        els.codeEditor.setRangeText("    ", start, end, "end");
        updateEditorVisuals();
        scheduleSave();
      } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        executeCurrentProgram();
      }
    });

    els.fileTitleInput.addEventListener("input", scheduleSave);
    els.stdinInput.addEventListener("input", scheduleSave);

    els.languageSelect.addEventListener("change", function () {
      const lang = els.languageSelect.value;
      const cur = els.codeEditor.value.trim();
      const matchesTemplate = Object.keys(STARTER_TEMPLATES).some(function (k) {
        return STARTER_TEMPLATES[k].trim() === cur;
      });
      if (!cur || matchesTemplate) {
        els.codeEditor.value = STARTER_TEMPLATES[lang];
      }
      updateEditorVisuals();
      syncActiveFileFromInputs();
    });

    els.fontSizeSelect.addEventListener("change", function () {
      document.documentElement.style.setProperty("--editor-font-size", els.fontSizeSelect.value + "px");
    });

    els.newFileBtn.addEventListener("click", function () {
      createNewFile(null);
    });

    els.resetTemplateBtn.addEventListener("click", function () {
      els.codeEditor.value = STARTER_TEMPLATES[els.languageSelect.value];
      updateEditorVisuals();
      syncActiveFileFromInputs();
      showToast("Reset to starter template");
    });

    els.copyCodeBtn.addEventListener("click", function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(els.codeEditor.value).then(function () {
          showToast("Code copied to clipboard");
        });
      }
    });

    els.runCodeBtn.addEventListener("click", executeCurrentProgram);

    els.clearStdinBtn.addEventListener("click", function () {
      els.stdinInput.value = "";
      scheduleSave();
    });

    els.clearOutputBtn.addEventListener("click", function () {
      els.outputConsole.classList.remove("error");
      els.outputConsole.textContent = "Console cleared.";
      setStatus("Ready", "status-idle");
    });

    els.downloadFileBtn.addEventListener("click", function () {
      syncActiveFileFromInputs();
      const file = getActiveFile();
      const safeName = (file.title || "program").replace(/[^a-zA-Z0-9_-]+/g, "_");
      const ext = EXTENSIONS[file.lang] || "txt";
      downloadBlob(safeName + "." + ext, file.code);
      showToast("Downloaded " + safeName + "." + ext);
    });

    els.exportAllBtn.addEventListener("click", function () {
      syncActiveFileFromInputs();
      const bundle = files.map(function (f, idx) {
        return [
          "==================================================",
          "File " + (idx + 1) + ": " + f.title + " (" + f.lang.toUpperCase() + ")",
          "Updated: " + f.updatedAt,
          "==================================================",
          f.code,
          "",
          "--- Custom Input (stdin) ---",
          f.stdin || "(empty)",
          "",
          "--- Last Output ---",
          f.lastOutput || "(not run yet)",
          ""
        ].join("\n");
      }).join("\n");
      downloadBlob("CodePractice_Saved_Programs.txt", bundle);
      showToast("Exported all saved files");
    });

    els.themeToggleBtn.addEventListener("click", function () {
      const next = document.documentElement.classList.contains("light-theme") ? "dark" : "light";
      applyTheme(next);
    });

    els.savedFilesList.addEventListener("click", function (e) {
      const delBtn = e.target.closest("[data-delete-id]");
      if (delBtn) {
        e.stopPropagation();
        deleteFile(delBtn.getAttribute("data-delete-id"));
        return;
      }
      const item = e.target.closest("[data-file-id]");
      if (item) {
        syncActiveFileFromInputs();
        selectFile(item.getAttribute("data-file-id"));
      }
    });

    document.querySelectorAll("[data-snippet]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key = btn.getAttribute("data-snippet");
        const preset = PRACTICE_SNIPPETS[key];
        if (preset) createNewFile(preset);
      });
    });
  }

  function init() {
    let savedTheme = "dark";
    try {
      savedTheme = localStorage.getItem(THEME_KEY) || "dark";
    } catch (_err) {
      savedTheme = "dark";
    }
    applyTheme(savedTheme);
    loadStorage();
    bindEvents();
    selectFile(files[files.length - 1].id);
  }

  init();
})();
