# Lesson 3 — Links and Images

Duration: 60 minutes
Level: Beginner → Practical

## Learning objectives
- Create and configure links with `<a>`: URLs, anchors, `target`, `rel`, and mailto/tel links.
- Add images with `<img>` and provide accessible `alt` text.
- Use `figure` + `figcaption` for image context.
- Implement responsive images with `srcset`/`sizes` and `loading="lazy"`.
- Understand common security attributes (`rel="noopener noreferrer"`).

## Materials
- Editor & browser
- Sample images (place in `images/` folder)
- `index.html` for live testing

## Outline
1. Quick recap (5 min)
   - Links connect pages; images provide visual content.

2. Anchors and links (20 min)
   - Basic link:
     ```html
     <a href="https://example.com">Visit example.com</a>
     ```
   - Open in new tab (`target="_blank"`) and why to add `rel="noopener noreferrer"` for security.
     ```html
     <a href="https://example.com" target="_blank" rel="noopener noreferrer">Open safely</a>
     ```
   - Anchor links (same page):
     ```html
     <a href="#section2">Jump to section 2</a>
     <h2 id="section2">Section 2</h2>
     ```
   - Mail and phone links:
     ```html
     <a href="mailto:teacher@example.com">Email teacher</a>
     <a href="tel:+880123456789">Call</a>
     ```
   - Link text accessibility: avoid "click here" — be descriptive.

3. Images basics (15 min)
   - Required attributes: `src` and `alt`.
     ```html
    <img src="images/logo.png" alt="Course logo">
     ```
   - `alt` rules: describe function, not visuals; empty `alt=""` for decorative images.
   - `width`/`height` for layout stability (use real pixel values or CSS).
   - `loading="lazy"` to defer offscreen images.

4. Responsive images (10 min)
   - `srcset` + `sizes` example:
     ```html
     <img src="images/bg-800.jpg"
          srcset="images/bg-400.jpg 400w, images/bg-800.jpg 800w, images/bg-1200.jpg 1200w"
          sizes="(max-width: 600px) 100vw, 800px"
          alt="Scenic background">
     ```
   - Explain how browser picks the best candidate.

5. Figure and captions (5 min)
   - Use `figure` to group image and caption:
     ```html
     <figure>
       <img src="images/product.jpg" alt="Blue soap bar">
       <figcaption>Blue soap — 200g</figcaption>
     </figure>
     ```

6. Hands-on exercises (homework)
   - Add three links to `index.html`: an external link, a mailto link, and an anchor to another section.
   - Replace one decorative image with `alt=""` and one informative image with descriptive `alt`.
   - Add responsive `srcset` for one image.

## Example gallery snippet

```html
<section>
  <h2>Gallery</h2>
  <figure>
    <img src="images/soap-400.jpg"
         srcset="images/soap-200.jpg 200w, images/soap-400.jpg 400w, images/soap-800.jpg 800w"
         sizes="(max-width: 600px) 100vw, 400px"
         alt="Round soap bar on white background" loading="lazy">
    <figcaption>Handmade soap — 200g</figcaption>
  </figure>

  <p>Buy now: <a href="mailto:orders@example.com">orders@example.com</a></p>
</section>
```

## Teacher notes
- Emphasize accessibility: `alt` is critical for screen readers.
- Explain privacy and security implications of `target="_blank"`.
- Encourage testing images on mobile emulators to see responsive behavior.

---

Next: I'll prepare Lesson 4 — Lists and Tables.
