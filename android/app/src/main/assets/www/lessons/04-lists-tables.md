# Lesson 4 — Lists and Tables

Duration: 45–60 minutes
Level: Beginner → Practical

## Learning objectives
- Use ordered (`<ol>`), unordered (`<ul>`), and description (`<dl>`) lists.
- Nest lists correctly and create accessible list content.
- Build simple tables with `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, and `<td>`.
- Use proper table headers (`scope` attribute) and captions for accessibility.
- Know when to use lists/tables (data vs layout).

## Materials
- Editor & browser
- `index.html` to practice

## Outline
1. Quick recap (5 min)
   - When to use lists vs when to use tables.

2. Lists (20 min)
   - Unordered list example:
     ```html
     <ul>
       <li>Apples</li>
       <li>Bananas</li>
     </ul>
     ```
   - Ordered lists for steps.
   - Description lists for key/value pairs:
     ```html
     <dl>
       <dt>HTML</dt>
       <dd>HyperText Markup Language</dd>
     </dl>
     ```
   - Nesting lists example and keyboard accessibility considerations.

3. Tables (20 min)
   - Basic table with header and caption:
     ```html
     <table>
       <caption>Student list</caption>
       <thead>
         <tr><th scope="col">Name</th><th scope="col">Class</th></tr>
       </thead>
       <tbody>
        <tr><td>Student A</td><td>Inter</td></tr>
       </tbody>
     </table>
     ```
   - Use `scope="col"` or `scope="row"` on `th`.
   - Avoid using tables for layout; show an example of wrong usage.

4. Hands-on exercises (homework)
   - Replace the simple tables in `index.html` with semantic tables including captions and `scope` attributes.
   - Create a nested list representing a recipe with ingredients and steps.

## Example: Product table (accessible)

```html
<table>
  <caption>Shop products</caption>
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Soap</td>
      <td>40</td>
      <td>200 g</td>
    </tr>
  </tbody>
</table>
```

## Teacher notes
- Screen readers rely on `caption`, `th`, and `scope` to read tables well.
- Use CSS for visual styling; keep HTML focused on structure.

---

Next: Lesson 5 — Forms and inputs (build simple contact form).
