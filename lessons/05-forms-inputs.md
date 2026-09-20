# Lesson 5 — Forms and Inputs

Duration: 75 minutes
Level: Beginner → Practical

## Learning objectives
- Build HTML forms using `<form>`, `<label>`, `<input>`, `<textarea>`, `<select>` and `<button>`.
- Associate labels with controls and understand the importance of accessible forms.
- Use common input types and attributes: `type`, `name`, `id`, `value`, `placeholder`, `required`, `pattern`, `min`/`max`, `step`.
- Group related fields with `<fieldset>` and `<legend>`.
- Implement basic client-side validation (HTML5) and progressive enhancement.
- Submit forms (GET vs POST) and understand server vs client handling at a high level.

## Materials
- Editor & browser (use DevTools)
- Local `index.html` or a new `contact.html` to test forms

## Outline
1. Quick recap and why forms matter (5 min)
   - Forms collect user input; accessibility and clear labels are essential.

2. Basic form skeleton (10 min)
   - Example:
     ```html
     <form action="/submit" method="post">
       <label for="name">Name</label>
       <input id="name" name="name" type="text" required>
       <button type="submit">Send</button>
     </form>
     ```
   - Explain `action` and `method`.

3. Labels and accessibility (10 min)
   - Use `<label for="id">` or wrap the input with the label.
   - Screen readers rely on labels; clickable labels increase usability.

4. Input types and attributes (20 min)
   - Text: `text`, `search`, `tel`, `email`, `url`.
   - Password: `password`.
   - Numeric: `number` with `min`/`max`/`step`.
   - Dates: `date`, `time`, `datetime-local`.
   - Controls: `checkbox`, `radio`, `range`, `color`.
   - File upload: `file` (discuss size/security briefly).
   - Hidden inputs: `type="hidden"`.
   - Examples with `required`, `placeholder`, `pattern`.

5. Grouping and advanced controls (10 min)
   - `<textarea>` for multi-line input.
   - `<select>` and `<option>` for choices; `optgroup` for grouped options.
   - `<fieldset>` and `<legend>` for logical grouping (especially for radio/checkbox sets).

6. Validation and UX (10 min)
   - Browser-built validation: `required`, `pattern`, `minlength`, `maxlength`.
   - Show HTML5 constraint validation API (`checkValidity()`).
   - Show `novalidate` attribute and when to use it.

7. Hands-on exercise (homework)
   - Build a contact form `contact.html` with: name, email, subject (select), message (`textarea`), subscribe checkbox, and a submit button. Use proper labels and at least one validation rule.
   - Test in browser and with keyboard-only navigation.

## Example: Contact form

```html
<form action="/submit-contact" method="post">
  <fieldset>
    <legend>Contact us</legend>

    <label for="full-name">Full name</label>
    <input id="full-name" name="name" type="text" required>

    <label for="email">Email</label>
    <input id="email" name="email" type="email" required>

    <label for="subject">Subject</label>
    <select id="subject" name="subject">
      <option value="orders">Orders</option>
      <option value="support">Support</option>
      <option value="other">Other</option>
    </select>

    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required></textarea>

    <label>
      <input type="checkbox" name="subscribe" value="yes">
      Subscribe to updates
    </label>

    <button type="submit">Send</button>
  </fieldset>
</form>
```

## Teacher notes
- Emphasize accessibility: visible labels, logical tab order, and keyboard navigation.
- Explain difference between client-side validation (convenience) and server-side validation (security).
- For demonstrations, use a simple endpoint like `https://httpbin.org/post` or a local stub to show the submission.

---

Next: Lesson 6 — Semantic HTML & ARIA (I'll prepare it now).