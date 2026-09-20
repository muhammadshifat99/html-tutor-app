# Lesson 2 — Text and Inline Elements

Duration: 60 minutes
Level: Beginner

## Learning objectives
- Distinguish block vs inline elements.
- Use text-related tags: headings, paragraphs, `<strong>`, `<em>`, `<small>`, `<mark>`, `<abbr>`, `<cite>`, `<code>`, `<s>`, `<ins>`, `<del>`, `<q>`.
- Use inline structural tags: `<span>`, `<br>`, `<wbr>`.
- Replace presentational tags (`<b>`, `<i>`, `<font>`) with semantic alternatives.
- Write small reachable examples and exercises.

## Materials
- Editor (VS Code)
- Browser
- `index.html` as reference

## Teaching outline
1. Quick recap (5 min)
   - Show difference between structural HTML and styling (CSS).

2. Block vs inline (10 min)
   - Block-level: `<div>`, `<p>`, headings — take full width, can contain inline.
   - Inline: `<span>`, `<a>`, `<strong>`, `<em>` — do not force line breaks.
   - Live demo: add a `<div>` with inline children and show layout.

3. Semantic inline text tags (25 min)
   - Emphasis and importance: `<em>` (emphasis), `<strong>` (important).
   - Quotations: `<q>` for short inline quotes, `<blockquote>` for block quotes.
   - Deleted/Inserted text: `<del>`, `<ins>` — useful for revision UI.
   - Small print: `<small>` — use for legal notes.
   - Marking: `<mark>` — highlight search matches.
   - Abbreviations: `<abbr title="...">` — explain tooltips and accessibility.
   - Citations: `<cite>` for references.
   - Code: `<code>` and `<samp>` for short snippets.
   - Example and demo snippets for each tag.

4. Accessibility and semantics (10 min)
   - Screen readers and proper tags: use semantic tags instead of visual replacements.
   - Use `title` on `<abbr>` and ensure `aria-label` when needed.

5. Hands-on exercises (10 min)
   - Task A: Replace any `<b>` and `<i>` in `index.html` with `<strong>`/`<em>`.
   - Task B: Add an `<abbr>` for "HTML" with a `title` attribute.
   - Task C: Wrap a short inline quote using `<q>` and a longer one in `<blockquote>`.

## Example snippets (copy-paste)

Inline emphasis:

```html
<p>Use <strong>strong</strong> for important text and <em>em</em> for emphasis.</p>
```

Abbreviation:

```html
<p><abbr title="HyperText Markup Language">HTML</abbr> is the page structure language.</p>
```

Marked text:

```html
<p>Search result: <mark>matching phrase</mark></p>
```

Code inline:

```html
<p>Run <code>npm install</code> to install packages.</p>
```

Deleted/Inserted:

```html
<p><del>Old sentence</del> <ins>New sentence</ins></p>
```

## Exercises (homework)
- Create a short article (~200 words) using a variety of inline tags, ensuring semantic meaning.
- Highlight three abbreviations with `title` attributes.
- Submit HTML file.

## Teacher notes
- Encourage students to think about meaning, not appearance.
- Correct common mistakes: using `<b>`/`<i>` for semantics, missing `title` on `<abbr>`.

---

Next: I'll prepare Lesson 3 — Links and Images with practical tasks and accessibility checks.
