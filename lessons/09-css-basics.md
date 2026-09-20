# Lesson 9 — CSS Basics for HTML

Duration: 90 minutes
Level: Beginner → Practical

## Learning objectives
- Understand how CSS attaches to HTML: inline, internal, external stylesheets.
- Select elements with type, class, id selectors and combinators.
- Use basic properties: color, background, font, margin, padding, border.
- Understand the box model and how `display` affects layout.
- Use developer tools to inspect and live-edit styles.

## Materials
- Editor & browser with DevTools
- `index.html` for examples

## Outline
1. CSS introduction and attach methods (10 min)
   - `<style>` vs `<link rel="stylesheet">` vs inline `style`.

2. Selectors and specificity (20 min)
   - Type, class (`.class`), id (`#id`), descendant, child (`>`), adjacent (`+`), attribute selectors.
   - Specificity rules and why avoid `!important`.

3. Box model & display (20 min)
   - `box-sizing` (content-box vs border-box).
   - `display: block|inline|inline-block|none`.
   - `margin` vs `padding` vs `border`.

4. Common properties (20 min)
   - `color`, `background-color`, `font-size`, `line-height`, `text-align`.
   - `width`, `height`, `max-width`.

5. Developer tools demo (10 min)
   - Inspect element, toggle rules, edit and test.

6. Exercises (homework)
   - Create a stylesheet `styles.css`, style `index.html` header, tables, and buttons.
   - Use `box-sizing: border-box` and inspect spacing.

## Example snippet

```css
/* styles.css */
* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; color:#222; }
header { background:#333; color:#fff; padding:16px; }
button { background:#0a74da; color:#fff; border:none; padding:8px 12px; }
```

---

Next: Layout fundamentals — Flexbox and Grid.
