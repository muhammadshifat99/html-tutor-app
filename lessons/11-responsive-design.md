# Lesson 11 — Responsive Design

Duration: 90 minutes
Level: Intermediate

## Learning objectives
- Understand mobile-first design and fluid layouts.
- Use media queries (`@media`) and relative units (`%, em, rem, vw, vh`).
- Implement breakpoints and responsive images.
- Test layouts on different viewport sizes and devices.

## Materials
- Editor & browser (responsive emulator)
- `index.html` and `styles.css`

## Outline
1. Principles (10 min)
   - Mobile-first, content-first, progressive enhancement.

2. Units and fluid layouts (20 min)
   - Use `%`, `rem`, `vw` for flexible sizing. `max-width` to limit content width.

3. Media queries (30 min)
   - Example:
     ```css
     /* mobile-first */
     .container { padding: 12px; }
     @media (min-width: 768px) {
       .container { max-width: 720px; margin: 0 auto; }
     }
     @media (min-width: 1024px) {
       .container { max-width: 960px; }
     }
     ```

4. Responsive images recap (10 min)
   - `srcset` and `sizes` (already covered in Lesson 3) and fluid image CSS: `max-width:100%;height:auto;`.

5. Exercises (20 min)
   - Convert a fixed-width layout to responsive using Flexbox/Grid + media queries.

## Teacher notes
- Encourage mobile-first mindset; use em/rem for typography.
- Test with device emulation and real devices when possible.

---

Next: Accessibility best practices (consolidate earlier topics and add testing checklist).