# Lesson 6 — Semantic HTML & ARIA

Duration: 75 minutes
Level: Intermediate (foundational accessibility)

## Learning objectives
- Understand semantic HTML and why it matters for accessibility, SEO, and maintainability.
- Use semantic structural elements: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`.
- Add meaningful headings and document outline practices.
- Understand ARIA basics: when to use ARIA, common roles and properties, and pitfalls to avoid.
- Implement simple ARIA attributes: `role`, `aria-label`, `aria-labelledby`, `aria-hidden`, and `aria-live`.
- Test semantics with a screen reader or browser accessibility tools.

## Materials
- Editor & browser
- Accessibility tools: browser devtools accessibility panel, Lighthouse, NVDA/VoiceOver (optional)
- Project `index.html` to refactor small sections

## Outline
1. Why semantic HTML? (10 min)
   - Semantic tags give meaning, not presentation. Assistive technologies and search engines rely on semantics.
   - Example: `<main>` helps screen readers skip navigation.

2. Page landmarks and structure (20 min)
   - Landmarks: `header`, `nav`, `main`, `aside`, `footer` — use them for consistent page navigation.
   - `article` vs `section`: `article` is self-contained; `section` groups thematic content.
   - Document outline and heading hierarchy: use headings (`h1`–`h6`) logically.

   Example:
   ```html
   <body>
     <header>...site header...</header>
     <nav>...main nav...</nav>
     <main>
       <article>
         <h1>Article title</h1>
         <p>Content...</p>
       </article>
       <aside>Related links</aside>
     </main>
     <footer>Contact info</footer>
   </body>
   ```

3. Introduction to ARIA (15 min)
   - ARIA = Accessible Rich Internet Applications.
   - Guiding principle: prefer native HTML semantics; use ARIA only when necessary.
   - Common ARIA roles: `role="banner"`, `role="navigation"`, `role="main"`, `role="complementary"`, `role="contentinfo"`, `role="button"`, `role="dialog"`.

4. Useful ARIA attributes and patterns (20 min)
   - `aria-label` and `aria-labelledby` for accessible naming.
   - `aria-hidden="true"` to hide decorative content from assistive tech.
   - `aria-live="polite|assertive"` for dynamic updates (notifications).
   - `aria-expanded`, `aria-controls` for disclosure widgets.

   Examples:
   ```html
   <button aria-expanded="false" aria-controls="menu">Menu</button>
   <nav id="menu">...</nav>

   <div aria-live="polite">Status: ready</div>

   <img src="decorative.png" alt="" aria-hidden="true">
   ```

5. Common pitfalls and testing (10 min)
   - Don't use ARIA to duplicate native semantics (e.g., `role="button"` on a non-interactive element without keyboard handlers).
   - Keep the accessibility tree simple: avoid incorrect labels and duplicate IDs.
   - Use browser accessibility inspector and run Lighthouse accessibility audit.

6. Hands-on exercises (homework)
   - Refactor a simple page (e.g., `index.html`) to include `header`, `nav`, `main`, and `footer` landmarks.
   - Add `aria-label` or `aria-labelledby` to an interactive control lacking visible text.
   - Add an `aria-live` status div and update it via simple JS (optional) to demonstrate live regions.

## Teacher notes
- Encourage students to test with keyboard-only navigation (Tab order, focus styles).
- Avoid overusing ARIA; teach the "use native HTML first" rule.
- Provide links to ARIA authoring practices: https://www.w3.org/TR/wai-aria-practices-1.2/

---

Next: Lesson 7 — Media: audio & video (I'll prepare the lesson and examples).