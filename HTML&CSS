# Senior Frontend Developer – HTML & CSS Interview Q&A

This README contains advanced-level HTML and CSS interview questions and answers tailored for a **Senior Frontend Developer** role. It includes the user‑requested questions plus additional expert‑level topics.

---

## 1. Which HTML tags are not supported in Safari? How do you overcome that?

Safari has limited or no support for certain HTML5 elements and input types.

| HTML Tag / Feature              | Safari Support Issue                         | How to Overcome                             |
| ------------------------------- | -------------------------------------------- | ------------------------------------------- |
| `<details>` / `<summary>`       | Older Safari does not toggle correctly       | Use custom JS accordion fallback            |
| `<dialog>`                      | Safari < 15.4 does not support native dialog | Use dialog polyfill or custom modal         |
| `<input type="date">`           | Displays as normal text field                | Use date picker libraries (e.g., flatpickr) |
| `<input type="datetime-local">` | Partial UI rendering                         | Use JS-based datetime pickers               |
| `<progress>` / `<meter>`        | Visual inconsistencies                       | Build custom components using divs          |

**General Fix Approaches:**

* Polyfills (e.g., dialog-polyfill)
* Feature detection using JS
* Custom components when UI is missing
* Test across Safari iOS + macOS

---

## 2. In CSS, what happens if I set `top: 20px` without using a position value like `relative`, `absolute`, `fixed`, or `sticky`?

Nothing will happen.

`top`, `left`, `right`, and `bottom` **only work** when the element has a positioning context:

* `position: relative`
* `position: absolute`
* `position: fixed`
* `position: sticky`

If the element keeps its default `position: static`, the `top` value is ignored.

---

## 3. I have more than 10,000 `<li>` elements. How can I make the list smooth without using pagination?

Use **list virtualization (windowing)**.

### Why?

Rendering 10k items at once causes:

* Slow initial load
* Heavy DOM
* Scroll lag

### Solution

Render **only the visible items** and dynamically update as the user scrolls.

### How to implement

* **React:** use `react-window` or `react-virtualized`
* **Vanilla JS:** calculate visible range + update DOM using a container and item height

This reduces DOM nodes from 10k → ~30 and maintains smooth 60fps scrolling.

---

# Additional Senior-Level HTML Questions

## 4. Difference between `<script defer>` and `<script async>`

* **async** → Loads independently and executes immediately (order NOT guaranteed)
* **defer** → Loads independently but executes after HTML parsing (order guaranteed)

---

## 5. Why use semantic HTML?

* Better accessibility
* SEO improvement
* Cleaner markup
* Better for screen readers
* Maintainable structure

---

## 6. Explain Reflow vs Repaint

**Repaint:** Only visual changes (e.g., color).

**Reflow:** Layout recalculation → **expensive**.

To optimize:

* Minimize DOM changes
* Use transforms instead of top/left
* Batch style updates

---

## 7. `display: none` vs `visibility: hidden`

* `display: none` → Removes element from layout
* `visibility: hidden` → Element stays but is invisible

---

## 8. Why use `srcset` and `<picture>`?

* Responsive images
* Loads correct image per device
* Saves bandwidth
* Improves performance

---

## 9. What is `DOMContentLoaded`?

Triggered when HTML is parsed (excluding images/CSS). Good for fast JS initialization.

---

## 10. Block, Inline, and Inline-block elements

* **block** → Full width, new line
* **inline** → No width/height
* **inline-block** → Inline but supports width/height

---

# Additional Senior-Level CSS Questions

## 11. Explain CSS specificity priority

1. Inline styles
2. IDs
3. Classes, pseudo-classes
4. Elements
5. `!important`

---

## 12. Flexbox vs Grid

* **Flexbox:** one-dimensional
* **Grid:** two-dimensional

Use Grid for layout, Flexbox for UI components.

---

## 13. What is a stacking context?

Created by:

* `position` + `z-index`
* `opacity < 1`
* `transform`
* `filter`

Controls how elements overlap.

---

## 14. Why is `transform: translate()` preferred for animations?

It avoids layout (reflow) and uses the GPU compositor → smoother animations.

---

## 15. `margin: auto` vs `width: auto`

* `margin: auto` → Centers block elements
* `width: auto` → Expands to fill available space

---

If you want, I can also prepare:

* A PDF version
* A complete interview assignment
* JavaScript + React senior-level questions
* Coding challenges for practical rounds
