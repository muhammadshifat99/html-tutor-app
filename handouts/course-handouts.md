Course Handouts — HTML Full Curriculum

Printed reference summarizing Lessons 1–16

Lesson 1 — HTML Basics
- What: Purpose of HTML; document skeleton (`<!doctype html>`, `html`, `head`, `body`).
- Key tags: `h1`–`h6`, `p`, `strong`, `em`, `br`, `hr`.
- Quick tasks: Create a `basic.html` page; change `<title>` and refresh.

Lesson 2 — Text & Inline Elements
- Distinguish block vs inline; use semantic inline tags: `strong`, `em`, `abbr`, `mark`, `code`, `q`, `del`, `ins`.
- Replace presentational tags (`b`, `i`) with semantic ones.
- Exercise: annotate abbreviations and wrap inline quotes.

Lesson 3 — Links & Images
- Links: `<a href=...>`; `target="_blank"` + `rel="noopener noreferrer"`.
- Images: `img` with `src` and descriptive `alt`; decorative images use `alt=""`.
- Responsive images: `srcset` + `sizes`; use `loading="lazy"`.

Lesson 4 — Lists & Tables
- Lists: `<ul>`, `<ol>`, `<dl>`; nest lists correctly.
- Tables: `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<th scope=>` for accessibility.
- Rule: Use tables for tabular data only, not layout.

Lesson 5 — Forms & Inputs
- Form elements: `<form>`, `<label>`, `<input>`, `<textarea>`, `<select>`, `<button>`.
- Accessibility: associate `<label for>` with inputs; use `fieldset`/`legend`.
- Validation: HTML5 attributes (`required`, `pattern`, `min`/`max`).

Lesson 6 — Semantic HTML & ARIA
- Semantic landmarks: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`.
- ARIA: use only when native HTML lacks semantics; common attributes: `role`, `aria-label`, `aria-hidden`, `aria-live`.
- Test with keyboard and accessibility tools.

Lesson 7 — Media: Audio & Video
- Use `<audio>` and `<video>` with `controls` and fallback content.
- Captions: add `<track kind="captions">` and provide transcripts.
- Accessibility: avoid autoplay; add `poster`, `loading`, and responsive sizing.

Lesson 8 — DOM & HTML APIs
- Selectors: `getElementById`, `querySelector`, `querySelectorAll`.
- Manipulation: `textContent`, `innerHTML`, `createElement`, `appendChild`, `remove()`.
- Events: `addEventListener`, `preventDefault`, `event.target`; use `classList` and `dataset`.

Lesson 9 — CSS Basics for HTML
- Attach methods: inline, `<style>`, external `link`.
- Selectors: element, class, id, combinators; box model and `box-sizing`.
- Common properties: `color`, `background`, `margin`, `padding`, `border`.

Lesson 10 — Flexbox & Grid
- Flexbox for 1D layouts (rows/columns): `display:flex`, `justify-content`, `align-items`.
- Grid for 2D layouts: `display:grid`, `grid-template-columns`, `gap`, named areas.
- Use DevTools grid/flex visualizers when designing.

Lesson 11 — Responsive Design
- Mobile-first approach, `@media` queries, relative units (`%, em, rem, vw`).
- Breakpoints example: 768px and 1024px.
- Test with device emulation and scale images with `max-width:100%`.

Lesson 12 — Accessibility Best Practices
- Run audits (Lighthouse, axe), ensure keyboard navigation and visible focus.
- Provide descriptive `alt`, labels, and sufficient contrast.
- Keep ARIA minimal and test with screen readers.

Lesson 13 — SEO & Performance Basics
- SEO: semantic HTML, descriptive titles/meta descriptions, heading structure.
- Performance: optimize images, lazy-load, minimize render-blocking resources, use `defer`/`async`.
- Measure with Lighthouse and prioritize LCP/CLS improvements.

Lesson 14 — Projects & Portfolio
- Project checklist: semantics, accessibility, responsiveness, deployability.
- Suggested projects: portfolio site, product list, blog template, TODO app.
- Deployment: GitHub Pages, Netlify; include a README.

Lesson 15 — Assessments & Quizzes
- Mix of MCQs and practical tasks; rubric: semantics/accessibility (30%), responsiveness (25%), functionality (20%).
- Example practical: clean a broken HTML file and make it accessible.

Lesson 16 — Resources & Next Steps
- MDN, W3C ARIA Authoring Practices, freeCodeCamp, Lighthouse docs.
- Next topics: advanced CSS, JS frameworks, server basics, accessibility specialization.

Printing notes
- Use a markdown-to-PDF tool (Pandoc or VS Code "Print Markdown") to create printable PDFs.
- Recommended font size: 11–12pt, use page breaks between lessons.

-- End of handouts --
