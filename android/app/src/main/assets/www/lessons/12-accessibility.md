# Lesson 12 — Accessibility Best Practices

Duration: 90 minutes
Level: Intermediate → Practical

## Learning objectives
- Run accessibility audits and interpret results (Lighthouse, axe).
- Ensure keyboard accessibility: focus order, visible focus, skip links.
- Provide meaningful alt text, labels, and captions.
- Use color with sufficient contrast and avoid color-only indicators.
- Test with screen readers and emulate reduced-motion preferences.

## Materials
- Browser DevTools, Lighthouse
- axe (browser extension) optional

## Outline
1. Tools and audits (15 min)
   - Run Lighthouse accessibility and review issues.

2. Keyboard accessibility (20 min)
   - Ensure all interactive controls reachable by keyboard; `tabindex` rules.
   - Add `:focus` styles for visibility.

3. Images, text, and color contrast (20 min)
   - Alt text guidance, contrast ratios (WCAG 4.5:1 for normal text), tools for checking.

4. Forms and labels (15 min)
   - Use `label`, `aria-describedby`, and clear error messaging.

5. ARIA recap and testing (10 min)
   - Use `aria-live` for updates; avoid inaccessible ARIA patterns.

6. Exercises (10–20 min)
   - Run Lighthouse on `index.html` and fix 3 accessibility issues.

## Teacher notes
- Accessibility improves UX for everyone; treat it as a core requirement.
- Provide a checklist students can run before submitting projects.

---

Next: SEO & performance basics lesson will follow.
