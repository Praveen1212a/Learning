# JavaScript Utility Functions – Interview & Practice Notes

This document contains commonly asked **JavaScript coding problems** with clean implementations and explanations. These are useful for **interviews, logic building, and daily practice**.

---

## 1. Print String Without Duplicates

**Input:** `aabbccdef`
**Output:** `abcdef`

```js
function printWithoutDuplicate(str) {
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}
```

---

## 2. Print Only Repeated Characters

**Input:** `aabbc`
**Output:** `["a", "b"]`

```js
function printOnlyRepeated(str) {
  let seen = [];
  let repeated = [];

  for (let char of str) {
    if (!seen.includes(char)) {
      seen.push(char);
    } else {
      repeated.push(char);
    }
  }
  return repeated;
}
```

---

## 3. First / Last Non-Repeating Character

### Last Non-Repeating Character

**Input:** `aabbcdde`
**Output:** `e`

```js
function lastNonRepeatingChar(str) {
  let seen = [];
  let repeated = [];

  for (let char of str) {
    if (!seen.includes(char)) {
      seen.push(char);
    } else {
      repeated.push(char);
    }
  }

  for (let i = seen.length - 1; i >= 0; i--) {
    if (!repeated.includes(seen[i])) {
      return seen[i];
    }
  }
}
```

---

## 4. Print Elements With Occurrence Count

```js
function printWithOccurrence(arr) {
  let result = {};

  for (let item of arr) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
}

// Example
printWithOccurrence([1,2,3,3,4,5,4,6]);
```

---

## 5. Sum of N Numbers (Currying)

```js
function sum(a) {
  return function (b) {
    if (b === undefined) return a;
    return sum(a + b);
  };
}

// Usage
sum(1)(2)(3)(4)(); // 10
```

---

## 6. Reverse a String

```js
const str = "sum of n number";

const reversed = str
  .split("")
  .reverse()
  .join("");

console.log(reversed);
```

---

## 7. Flatten a Nested Array

```js
const array = [1, 2, [3, [4, 5, [6]]]];

function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

flattenArray(array); // [1,2,3,4,5,6]
```

---

## 8. Find the Longest Word in a String

```js
function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

findLongestWord("find longest word");
```

---

## 9. Debounce

**Use case:** Search input, API calls

```js
function myDebounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

---

## 10. Throttle

**Use case:** Scroll, resize events

```js
function myThrottle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```

---

## 📌 Interview Notes

* Use **frequency maps** for optimized string problems
* Avoid `includes()` for large inputs (O(n²))
* Prefer `React.memo` + `useCallback` in React Native lists
* Debounce → delay execution
* Throttle → limit execution rate

---

✅ This document is suitable for **GitHub README**, **interview prep**, or **personal notes**.
