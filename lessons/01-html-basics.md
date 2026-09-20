# Lesson 1 — HTML Basics

Duration: 60 minutes
Level: Beginner → Foundational

## Learning objectives
- Understand what HTML is and how it fits into the web platform.
- Know the structure of a basic HTML document (doctype, head, body).
- Use common block and inline elements: headings, paragraphs, strong/em/inline tags.
- Save and open an HTML file in a browser.
- Read and modify the example in `index.html`.

## Materials
- Live editor (VS Code, or any text editor)
- Modern browser (Chrome/Firefox/Edge)
- `index.html` in the project folder as example

## Outline & notes
1. Quick introduction (5 min)
   - HTML = HyperText Markup Language. It describes page structure and content.
   - Relationship: HTML (structure) → CSS (presentation) → JS (behavior).

2. HTML document structure (15 min)
   - Explain: `<!doctype html>`, `<html>`, `<head>`, `<meta charset="utf-8">`, `<title>`, `<body>`.
   - Live demo: create `basic.html` with skeleton and open in browser.

   Example skeleton:

   ```html
   <!doctype html>
   <html lang="en">
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width,initial-scale=1">
     <title>My first page</title>
   </head>
   <body>
     <h1>Hello, world!</h1>
     <p>This is my first HTML page.</p>
   </body>
   </html>
   ```

3. Common elements (20 min)
   - Headings: `<h1>`–`<h6>`
   - Paragraphs: `<p>`
   - Emphasis: `<strong>`, `<em>`
   - Line breaks: `<br>` (when needed)
   - Horizontal rule: `<hr>`
   - Comments: `<!-- comment -->`

   Live activity: open `index.html` and find these elements; change text and refresh browser.

4. Editing `index.html` exercise (10–15 min)
   - Task A: Change the page `<title>` and a heading.
   - Task B: Replace one inline `<b>` with `<strong>` and one `<i>` with `<em>` in `index.html`.
   - Task C: Save and refresh; observe differences.

5. Quick quiz & recap (5 min)
   - What tag holds metadata? (`<head>`)
   - Which tag is best for important emphasis? (`<strong>`)

## Exercises (homework)
- Create a simple page about yourself with a title, one paragraph, and three headings.
- Submit the file or open it in the browser and screenshot it.

## Tips for students
- Use semantic tags—replace presentation tags like `<b>` and `<i>` with `<strong>` and `<em>`.
- Keep HTML files small and readable; indent nested elements.

## Additional resources
- MDN Web Docs — HTML basics: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics
- Free interactive: freeCodeCamp — Responsive Web Design course

## Answer key / teacher notes
- Confirm students can open the file locally by double-clicking or using `Live Server` in VS Code.
- Look for correct doctype and `<meta charset>` on submitted files.

---

Next lesson suggestion: "Text and inline elements" with practical exercises on lists and basic inline tags.
