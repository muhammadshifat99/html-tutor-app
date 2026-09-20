# Lesson 13 — SEO & Performance Basics

Duration: 75 minutes
Level: Intermediate

## Learning objectives
- Understand basic SEO: semantic markup, meaningful titles, meta descriptions, headings.
- Learn performance fundamentals: reduce payload, optimize images, minimize render-blocking CSS/JS.
- Use Lighthouse to measure performance and follow simple optimizations.
- Implement caching and hints: `preload`, `prefetch`, and `async/defer` for scripts.

## Materials
- Editor & browser, Lighthouse

## Outline
1. SEO fundamentals (20 min)
   - Use descriptive `<title>`, `<meta name="description">`, structured headings, `alt` text, and semantic HTML.
   - Basic sitemaps and robots.txt (overview).

2. Performance fundamentals (30 min)
   - Optimize images (modern formats, compression), lazy loading, CSS minification.
   - Use `link rel="preload"` for critical assets; `defer`/`async` for noncritical scripts.

3. Measurement and tools (15 min)
   - Lighthouse metrics: FCP, LCP, CLS, TTI.
   - Addressing CLS: include width/height or CSS aspect-ratio on images.

4. Exercises (10 min)
   - Run Lighthouse on `index.html`, fix one performance and one SEO issue.

## Teacher notes
- Focus on small wins: compression, caching, images, and critical CSS.
- Explain tradeoffs between development speed and production optimization.

---

Next: Projects and portfolio guidance.
