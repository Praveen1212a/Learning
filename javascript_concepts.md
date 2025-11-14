# JavaScript Interview Questions & Concepts

## Table of Contents
1. [Closure](#closure)
2. [Deep Cloning vs Shallow Cloning](#deep-cloning-vs-shallow-cloning)
3. [Event Loop](#event-loop)
4. [Call, Apply and Bind](#call-apply-and-bind)
5. [== vs ===](#-vs-)
6. [Hoisting](#hoisting)
7. [Prototype](#prototype)
8. [Async and Await](#async-and-await)
9. [Event Bubbling](#event-bubbling)
10. [Array Holes](#array-holes)
11. [Null vs Undefined](#null-vs-undefined)
12. [Event Bubbling vs Event Capturing](#event-bubbling-vs-event-capturing)
13. [Array Flattening](#array-flattening)
14. [For...in vs For...of](#forin-vs-forof)
15. [Object Length](#object-length)
16. [String Indexing](#string-indexing)
17. [Synchronous vs Asynchronous](#synchronous-vs-asynchronous)
18. [Achieving Asynchronous Behavior](#achieving-asynchronous-behavior)
19. [Async/Await Challenges](#asyncawait-challenges)
20. [Promise.all vs Promise.allSettled](#promiseall-vs-promiseallsettled)
21. [Map vs Reduce](#map-vs-reduce)
22. [Promise vs Callback](#promise-vs-callback)
23. [React getDerivedStateFromProps](#react-getderivedstatefromprops)

---

## Closure

**Definition:** Closure is a function where the outer function variable can be accessed from the inner function after the execution of outer function.

**Example:**
```javascript
function outerFunction(){
    let i = 1;
    function innerFunction(){
        i++;
        return i;
    }
    return innerFunction;
}
const add = outerFunction();
console.log(add()); // Output: 2
```

---

## Deep Cloning vs Shallow Cloning

### Deep Clone
- Keeps the original reference of an object intact
- Changes to the cloned object won't affect the original

```javascript
const original = {
    name: "Praveen",
    address: {
        city: "Chennai",
        pincode: 600001
    }
};

const deepClone = JSON.parse(JSON.stringify(original));
deepClone.address.city = "Mumbai";

console.log(deepClone.address); // { city: "Mumbai", pincode: 600001 }
console.log(original.address);  // { city: "Chennai", pincode: 600001 }
```

### Shallow Copy
- Changes the original reference
- Modifications affect nested objects in the original

```javascript
const shallow = {...original};
shallow.address.city = "Bombay";
console.log(shallow.address); // { city: "Bombay", pincode: 600001 }
console.log(original.address); // { city: "Bombay", pincode: 600001 }
```

---

## Event Loop

**Definition:** Event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser or Node.js environment, while still being single-threaded. It continuously checks the call stack and the task queue, executing tasks from the queue when the call stack is empty.

**Example:**
```javascript
console.log("start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("promise");
});

console.log("end");

// Output:
// start
// end
// promise
// setTimeout
```

---

## Call, Apply and Bind

- **Call and Apply:** Call the function immediately
- **Bind:** Returns the function

```javascript
const person = {
    name: "Praveen",
    age: 24,
    greet: function(city, country){
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old and I live in ${city}, ${country}`);
    }
};

const person2 = {
    name: "John",
    age: 30
};

// Call
person.greet.call(person2, "New York", "USA");

// Apply
person.greet.apply(person2, ["Los Angeles", "USA"]);

// Bind
const boundGreet = person.greet.bind(person2, "Chicago", "USA");
boundGreet();
```

---

## == vs ===

- **==:** Checks only value (type coercion)
- **===:** Checks value and type (strict equality)

```javascript
console.log(2 == '2');  // true
console.log(2 === '2'); // false
```

---

## Hoisting

**Definition:** Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top during code execution. Variables can be declared after they have been used.

```javascript
console.log(a); // undefined
var a = 10;

// Functions can be hoisted
foo(); // "Hello"
function foo() {
    console.log("Hello");
}
```

---

## Prototype

**Definition:** Prototype is an inbuilt property of a function in JavaScript. It contains properties and methods that can be shared among all instances of a particular constructor function.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};
```

---

## Async and Await

**Definition:** Async and Await are used to handle asynchronous operations in JavaScript. Async declares a function as asynchronous (returns a promise). Await waits for a promise to resolve before executing the next line.

```javascript
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
}

getData(); // Fetching data... (after 2 seconds) Data fetched
```

---

## Event Bubbling

**Definition:** Event bubbling is a mechanism where an event triggered on a child element propagates up to its parent elements.

```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener("click", () => {
    console.log("Child clicked");
});

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

// When child is clicked:
// Child clicked
// Parent clicked
```

---

## Array Holes

**Definition:** A "hole" in an array is an empty slot (not undefined). Example: `[1,,3]`

```javascript
const arr = [1,,3];
console.log(arr);                  // [ 1, <1 empty item>, 3 ]
console.log(arr.length);           // 3
console.log(arr[1]);               // undefined
console.log(arr.hasOwnProperty(1)); // false
```

---

## Null vs Undefined

- **null:** Assigned value that means "nothing"
- **undefined:** Variable is declared but not defined

```javascript
let x;        // undefined
let y = null; // null

console.log(typeof x); // "undefined"
console.log(typeof y); // "object"
```

---

## Event Bubbling vs Event Capturing

- **Event Bubbling:** Event propagates from child to parent (default)
- **Event Capturing:** Event propagates from parent to child

```javascript
// Event Capturing (third parameter: true)
grandParent.addEventListener("click", () => {
    console.log("Grandparent clicked - Capturing");
}, true);

// Event Bubbling (third parameter: false)
grandParent.addEventListener("click", () => {
    console.log("Grandparent clicked - Bubbling");
}, false);
```

---

## Array Flattening

**Function to flatten nested arrays:**

```javascript
function flattenArray(arr) {
    return arr.reduce((flat, item) => 
        flat.concat(Array.isArray(item) ? flattenArray(item) : item), []
    );
}

console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
```

---

## For...in vs For...of

- **for...in:** Iterates over indexes/keys of an iterable object
- **for...of:** Iterates over values of an iterable object

```javascript
const arr = ['a', 'b', 'c'];

for (let index in arr) {
    console.log(index); // 0, 1, 2
}

for (let value of arr) {
    console.log(value); // 'a', 'b', 'c'
}
```

---

## Object Length

**Finding the length of an object:**

```javascript
const obj = {
    name: "Praveen",
    age: 24,
    city: "Chennai"
};

const length = Object.keys(obj).length;
console.log(length); // Output: 3
```

---

## String Indexing

**Strings are indexed starting from 0:**

```javascript
const str = "car race";
console.log(str[0]);              // 'c' (first character)
console.log(str[4]);              // 'r' (fifth character)
console.log(str[str.length - 1]); // 'e' (last character)
console.log(str[10]);             // undefined (out of bounds)
```

---

## Synchronous vs Asynchronous

- **Synchronous:** Tasks performed one after another, blocking execution
- **Asynchronous:** Tasks run in background, non-blocking execution

---

## Achieving Asynchronous Behavior

### 1. Callbacks
```javascript
setTimeout(() => {
    console.log("This is a callback function");
}, 1000);
```

### 2. Promises
```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});
```

### 3. Async/Await
```javascript
async function fetchData() {
    const data = await myPromise;
    console.log(data);
}
```

---

## Async/Await Challenges

1. **Error Handling:** Complex error handling with multiple operations
2. **Sequential Execution:** May not be optimal for parallel tasks
3. **Compatibility:** Older browser support issues
4. **Debugging:** More complex debugging process
5. **Understanding:** Requires good knowledge of Promises
6. **Blocking:** Can block execution if not used properly
7. **Stack Traces:** Less informative error traces

---

## Promise.all vs Promise.allSettled

### Promise.all
- Fails fast: If any promise rejects, the entire operation fails
- Returns results only if all promises resolve

```javascript
Promise.all([fetchUser(), fetchPosts(), fetchComments()])
    .then((results) => {
        console.log("All API results:", results);
    })
    .catch((error) => {
        console.log("Promise.all rejected:", error);
    });
```

### Promise.allSettled
- Waits for all promises to complete (resolved or rejected)
- Returns status and result/reason for each promise

```javascript
Promise.allSettled([fetchUser(), fetchPosts(), fetchComments()])
    .then((results) => {
        console.log("Promise.allSettled results:", results);
        // [
        //   { status: 'fulfilled', value: { name: "Alice" } },
        //   { status: 'rejected', reason: 'Posts API failed' },
        //   { status: 'fulfilled', value: ["Nice!", "Great!"] }
        // ]
    });
```

---

## Map vs Reduce

### Map
- Returns a new array with results of calling a function on every element
- Same length as original array

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

### Reduce
- Executes a reducer function on each element, resulting in a single output value

```javascript
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15
```

---

## Promise vs Callback

### Callback
- Function passed as argument to another function
- Can lead to callback hell if not managed properly

### Promise
- Object representing eventual completion of an asynchronous operation
- Provides cleaner way to handle async operations
- Avoids callback hell with chaining

---

## React getDerivedStateFromProps

**Definition:** A static lifecycle method called right before rendering when new props or state are received. Allows a component to update its internal state based on changes in props.

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
    // Return an object to update state, or null for no update
    if (nextProps.value !== prevState.value) {
        return {
            value: nextProps.value
        };
    }
    return null;
}
```

---

*This document covers essential JavaScript concepts frequently asked in technical interviews.*
