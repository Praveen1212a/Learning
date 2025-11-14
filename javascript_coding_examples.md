# JavaScript Coding Interview Questions & Solutions

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Interview Prep](https://img.shields.io/badge/Interview-Prep-success?style=for-the-badge)](https://github.com)

> A comprehensive collection of JavaScript coding problems and solutions commonly asked in technical interviews.

## 📋 Table of Contents

- [String Manipulation](#-string-manipulation)
  - [Remove Duplicate Characters](#remove-duplicate-characters)
  - [String Reversal](#string-reversal)
  - [Find Longest Word](#find-longest-word)
  - [Palindrome Check](#palindrome-check)
- [Array Operations](#-array-operations)
  - [Array Flattening](#array-flattening)
  - [Find Largest Number](#find-largest-number)
- [Mathematical Operations](#-mathematical-operations)
  - [Prime Number Check](#prime-number-check)
- [Advanced Concepts](#-advanced-concepts)
  - [Event Loop](#event-loop)
  - [Debounce & Throttle](#debounce--throttle)

---

## 🔤 String Manipulation

### Remove Duplicate Characters

**Problem:** Given a string with duplicate characters, remove duplicates and return a string with unique characters only.

**Input:** `"geremany"`  
**Expected Output:** `"germany"`

#### Solution 1: Using Loop and `includes()`
```javascript
const input = "geremany";
let result = "";

for (let c of input) {
    if (!result.includes(c)) {
        result += c;
    }
}

console.log(result); // Output: "germany"
```

#### Solution 2: Using Set (ES6)
```javascript
const input = "geremany";
const result = [...new Set(input)].join('');
console.log(result); // Output: "germany"
```

**📊 Time Complexity:**
- Solution 1: O(n²)
- Solution 2: O(n)

---

### String Reversal

**Problem:** Reverse a given string.

**Input:** `"car race"`  
**Expected Output:** `"ecar rac"`

```javascript
const given = "car race";

function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverseString(given)); // Output: "ecar rac"
```

**💡 Alternative Methods:**
```javascript
// Using built-in methods
const reversed = str.split("").reverse().join("");

// Using recursion
function reverseRecursive(str) {
    if (str === "") return "";
    return reverseRecursive(str.substr(1)) + str.charAt(0);
}
```

---

### Find Longest Word

**Problem:** Find the longest word in a sentence.

**Input:** `"The quick brown fox jumped over the lazy dog"`  
**Expected Output:** `"jumped"`

```javascript
const sentence = "The quick brown fox jumped over the lazy dog";

function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";
    
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord(sentence)); // Output: "jumped"
```

**🔧 One-liner Solution:**
```javascript
const findLongest = str => str.split(" ").reduce((a, b) => a.length > b.length ? a : b);
```

---

### Palindrome Check

**Problem:** Check if a string reads the same forwards and backwards.

**Input:** `"racecar"`  
**Expected Output:** `true`

```javascript
const palindromeStr = "racecar";

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome(palindromeStr)); // Output: true
```

**⚡ Optimized Solution:**
```javascript
function isPalindromeOptimized(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
```
```
function reverseString(str){
    let result = "";
    for(let i=str.length-1;i>=0;i--){
        result += str[i];
    }
    return result;
}
```

---

## 📊 Array Operations

### Array Flattening

**Problem:** Flatten a nested array into a single-level array.

**Input:** `[1, [2, [3, 4], 5], 6]`  
**Expected Output:** `[1, 2, 3, 4, 5, 6]`

#### Method 1: Using Recursion
```javascript
const arr = [1, [2, [3, 4], 5], 6];

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

console.log(flattenArray(arr)); // Output: [1, 2, 3, 4, 5, 6]
```

#### Method 2: Using Built-in `flat()`
```javascript
console.log(arr.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6]
```

#### Method 3: Using `reduce()`
```javascript
function flattenArrayReduce(arr) {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenArrayReduce(item) : item);
    }, []);
}
```

**📈 Performance Comparison:**
| Method | Performance | Browser Support |
|--------|-------------|-----------------|
| Recursion | Good | All browsers |
| `flat()` | Excellent | ES2019+ |
| `reduce()` | Good | ES5+ |

---

### Find Largest Number

**Problem:** Find the largest number in an array.

**Input:** `[3, 5, 7, 2, 8, -1, 4]`  
**Expected Output:** `8`

```javascript
const numbers = [3, 5, 7, 2, 8, -1, 4];

function findLargestNumber(arr) {
    let largest = arr[0];
    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}

console.log(findLargestNumber(numbers)); // Output: 8
```

**🚀 Alternative Solutions:**
```javascript
// Using Math.max()
const largest = Math.max(...numbers);

// Using reduce()
const largest = numbers.reduce((max, num) => num > max ? num : max);

// Using sort()
const largest = [...numbers].sort((a, b) => b - a)[0];
```

---

## 🔢 Mathematical Operations

### Prime Number Check

**Problem:** Check if a number is prime.

**Input:** `29`  
**Expected Output:** `true`

```javascript
const numToCheck = 29;

function isPrime(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(numToCheck)); // Output: true
```

**✨ Key Optimizations:**
- Check only up to `√n` instead of `n`
- Handle edge cases (numbers ≤ 1)
- Early return for efficiency

**🧮 Time Complexity:** O(√n)

---

## 🚀 Advanced Concepts

### Event Loop

**Concept:** Understanding JavaScript's asynchronous execution model.

```javascript
console.log("start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("promise");
});

console.log("end");
```

**📤 Output Order:**
```
start
end
promise
setTimeout
```

**🔍 Explanation:**
1. **Call Stack:** `console.log("start")` and `console.log("end")` execute immediately
2. **Microtask Queue:** Promise callbacks have higher priority
3. **Macrotask Queue:** `setTimeout` callbacks execute after microtasks

---

### Debounce & Throttle

Two essential techniques for optimizing performance in web applications.

#### 🕐 Debounce

**Definition:** Delays function execution until after a specified delay since the last call.

**Use Cases:** Search input, form validation, resize events

```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Example: Search input debouncing
const debouncedSearch = debounce((query) => {
    console.log(`Searching for: ${query}`);
    // API call would go here
}, 300);
```

#### ⚡ Throttle

**Definition:** Ensures function is called at most once in a specified time period.

**Use Cases:** Scroll events, mouse movements, API rate limiting

```javascript
function throttle(func, delay) {
    let lastCallTime = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCallTime >= delay) {
            lastCallTime = now;
            func.apply(this, args);
        }
    };
}

// Example: Scroll event throttling
const throttledScrollHandler = throttle(() => {
    console.log('Scroll position:', window.scrollY);
}, 100);
```

#### 🎯 When to Use What?

| Technique | Best For | Behavior |
|-----------|----------|----------|
| **Debounce** | Search suggestions, Form validation | Waits for pause in activity |
| **Throttle** | Scroll events, Progress tracking | Executes at regular intervals |

#### 📋 Interview Questions & Answers

**Q: What's the difference between debounce and throttle?**

**A:** 
- **Debounce:** Resets the timer on each call, executes only after silence period
- **Throttle:** Executes at regular intervals, ignores excess calls during the interval

**Q: When would you use debounce vs throttle?**

**A:**
- Use **DEBOUNCE** when you want to wait for a pause in activity
- Use **THROTTLE** when you want to limit frequency but maintain regular updates

---

## 📚 Additional Resources

### 🔗 Useful Links
- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript Info](https://javascript.info/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

### 📖 Study Tips
1. **Practice regularly** - Code every day
2. **Understand concepts** - Don't just memorize
3. **Optimize solutions** - Consider time/space complexity
4. **Test edge cases** - Empty arrays, null values, etc.

---

## 🤝 Contributing

Feel free to contribute additional problems and solutions! Please ensure:
- ✅ Code is well-commented
- ✅ Examples include expected output
- ✅ Time/space complexity is mentioned
- ✅ Multiple solution approaches when applicable

---

<div align="center">

**Happy Coding! 🎉**

*This repository is maintained for educational purposes and interview preparation.*

</div>
