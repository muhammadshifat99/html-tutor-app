# Lesson 10 — Layout: Flexbox & Grid

Duration: 120 minutes
Level: Intermediate → Practical

## Learning objectives
- Use Flexbox for 1-dimensional layout: `display:flex`, `justify-content`, `align-items`, `flex-direction`, `flex-wrap`.
- Use CSS Grid for 2-dimensional layout: `display:grid`, `grid-template-columns/rows`, `gap`, `grid-area`.
- Choose between Flexbox and Grid depending on layout needs.
- Build responsive components with both systems.

## Materials
- Editor & browser (DevTools)
- `index.html` to add layout examples

## Outline
1. Flexbox fundamentals (45 min)
   - Container vs items, main/cross axis.
   - Practical patterns: nav bars, horizontal lists, centered content.
   - Example:
     ```css
     .row { display:flex; gap:12px; align-items:center; }
     .row .item { flex:1; }
     ```

2. Grid fundamentals (45 min)
   - Defining tracks, placing items, named areas.
   - Example:
     ```css
     .grid { display:grid; grid-template-columns: 200px 1fr 200px; gap:16px; }
     .hero { grid-column: 1 / -1; }
     ```

3. Hands-on exercise (30 min)
   - Build a two-column layout with header/footer using Grid; use Flexbox for a card row inside the main column.

4. Teacher notes
   - Recommend using Grid for page layout and Flexbox for components, but both are useful.
   - Use DevTools to visualize grid and flex lines.

---

Next: Responsive design lesson will build on these techniques.
