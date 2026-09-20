# Lesson 8 — DOM & HTML APIs

Duration: 90 minutes
Level: Intermediate

## Learning objectives
- Understand the DOM as the browser's representation of the document.
- Select elements (`getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`).
- Read and update content (`textContent`, `innerHTML`) and attributes (`getAttribute`, `setAttribute`).
- Create/remove nodes (`createElement`, `appendChild`, `removeChild`, `replaceChild`).
- Add event listeners and handle events (`addEventListener`, event object, `preventDefault`).
- Use `dataset`, `classList`, and basic form handling with JavaScript.
- Briefly use storage APIs (`localStorage`) and touch on performance/accessibility considerations.

## Materials
- `index.html` sample file
- Browser console and DevTools

## Outline
1. What is the DOM? (10 min)
   - Explain nodes, elements, tree structure.

2. Selecting elements (15 min)
   - Examples:
     ```js
     const el = document.getElementById('myId');
     const items = document.querySelectorAll('.item');
     const first = document.querySelector('nav a');
     ```

3. Reading and writing content (10 min)
   - Use `textContent` for text-only updates; `innerHTML` when inserting markup (use carefully).
   - Example:
     ```js
     el.textContent = 'Hello';
     el.innerHTML = '<strong>Bold</strong>';
     ```

4. Attributes, classes, and data (10 min)
   - `el.setAttribute('aria-hidden','true')`
   - `el.classList.add('hidden')`, `el.dataset.id`

5. Creating and manipulating nodes (15 min)
   - Example:
     ```js
     const li = document.createElement('li');
     li.textContent = 'New item';
     document.querySelector('ul').appendChild(li);
     ```
   - Removing and replacing nodes.

6. Events and interactivity (20 min)
   - `addEventListener('click', handler)`; event object and `e.target`.
   - Prevent form submit with `e.preventDefault()` and validate before sending.
   - Debounce/throttle concept (brief) for performance-sensitive handlers.

7. Small project & exercises (10 min)
   - Build a TODO list: add item, mark done (toggle class), remove item; persist to `localStorage`.
   - Exercise: make a button toggle visibility of a section using `aria-expanded` and `classList`.

## Example: small TODO (skeleton)

```html
<!-- HTML -->
<input id="newItem" placeholder="Add item">
<button id="add">Add</button>
<ul id="list"></ul>

<script>
  const input = document.getElementById('newItem');
  const add = document.getElementById('add');
  const list = document.getElementById('list');

  add.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.textContent = text;
    const remove = document.createElement('button');
    remove.textContent = 'Remove';
    remove.addEventListener('click', () => li.remove());
    li.appendChild(remove);
    list.appendChild(li);
    input.value = '';
  });
</script>
```

## Teacher notes
- Encourage students to test changes in DevTools and step through event handlers.
- Emphasize safety: avoid `innerHTML` with untrusted content to prevent XSS.
- Show how `localStorage.setItem('todo', JSON.stringify(...))` can persist simple state.

---

Next: Lesson 9 — `CSS basics for HTML` (I will prepare practical examples and exercises).