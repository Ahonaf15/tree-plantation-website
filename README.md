# Green Earth - Tree Plantation & Reforestation Campaign

A responsive web application built with **HTML**, **Tailwind CSS**, **DaisyUI**, and **Vanilla JavaScript** that enables users to explore tree species by category, inspect botanical details via interactive modals, and sponsor trees using a dynamic shopping cart.

---

## JavaScript ES6 Questions & Answers

### 1. What is the difference between `var`, `let`, and `const`?
- **Scope:** `var` is function-scoped (or globally scoped if declared outside a function), whereas `let` and `const` are block-scoped (`{ ... }`).
- **Hoisting:** `var` declarations are hoisted and initialized with `undefined`, allowing access before declaration without a `ReferenceError`. `let` and `const` are hoisted but stay in the Temporal Dead Zone (TDZ) until evaluated, throwing a `ReferenceError` if accessed early.
- **Re-declaration & Re-assignment:**
  - `var` can be both re-declared and re-assigned.
  - `let` can be re-assigned, but cannot be re-declared in the same scope.
  - `const` cannot be re-declared or re-assigned (though properties inside a `const` object or elements in a `const` array can still be mutated).

---

### 2. What is the difference between `map()`, `forEach()`, and `filter()`?
- **`map()`:** Iterates over an array, applies a callback function to each element, and returns a **new array** of the exact same length containing the transformed elements.
- **`forEach()`:** Executes a callback function once for each array element purely for side effects (like DOM manipulation or logging) and always returns **`undefined`**.
- **`filter()`:** Iterates over an array and returns a **new array** containing only the elements for which the callback function returns a truthy value (`true`).

---

### 3. What are arrow functions in ES6?
Arrow functions (`() => {}`) provide a concise syntax for writing function expressions introduced in ES6. Key characteristics include:
- **Concise Syntax:** Omit the `function` keyword; single-expression arrow functions allow implicit returns without curly braces or the `return` keyword (`const add = (a, b) => a + b;`).
- **Lexical `this` Binding:** Arrow functions do not have their own `this` context; instead, they inherit `this` from the surrounding (enclosing) lexical scope, making them ideal for callbacks and event handlers.
- **Limitations:** They cannot be used as constructors with `new` and do not have their own `arguments` object.

---

### 4. How does destructuring assignment work in ES6?
Destructuring assignment is an ES6 syntax that unpacks values from arrays or properties from objects into distinct variables cleanly and concisely.
- **Array Destructuring (position-based):**
  ```javascript
  const trees = ["Mango", "Neem", "Banyan"];
  const [first, second] = trees; // first = "Mango", second = "Neem"