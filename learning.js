// // closure 

// closure is a function where the outer function variable can be access from the inner function afte the execution of outer function

// example

function outerFunction(){
    let i=1
    function innerfunction(){
        i++
        return i
    }
    return innerfunction
}
const add = outerFunction();

console.log(add())

// 2 Deep cloning and shallow cloning 

const original = {
  name: "Praveen",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};
// depp clone will kepp the original referance of an object it will change the new one
const deeclone = JSON.parse(JSON.stringify(original))
deeclone.address.city ="mumbai"

console.log(deeclone.address)
console.log(original.address)

// shallow coppy
// It will change the original referance 

const shallow = {...original}
shallow.address.city ="bombay"
console.log(shallow.address)
console.log(original.address)

// 3 what  is event loop
// Event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser or Node.js environment, while still being single-threaded. It continuously checks the call stack and the task queue, executing tasks from the queue when the call stack is empty.
console.log("start")

setTimeout(() => {
    console.log("settimeout")
}, 0);

Promise.resolve().then(() => {
    console.log("promise")
})

console.log("end")

// output
// start
// end
// promise
// settimeout

// 4 Call, Apply and Bind

// call and apply will call the function immediately
// bind will return the function

const person = {
    name: "Praveen",
    age: 24,
    greet: function(city, country){
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old and I live in ${city}, ${country}`);
    }
}

const person2 = {
    name: "John",
    age: 30
}

// call
person.greet.call(person2, "New York", "USA") // Hello, my name is John, I'm 30 years old and I live in New York, USA

// apply
person.greet.apply(person2, ["Los Angeles", "USA"]) // Hello, my name is John, I'm 30 years old and I live in Los Angeles, USA

// bind
const boundGreet = person.greet.bind(person2, "Chicago", "USA") // it will return the function
boundGreet()


// 5   between == and ===

// ==  it will check only value
// === it will check value and type

console.log(2 == '2') // true
console.log(2 === '2') // false

// 6 what is hoisting

// Hoisting is a JavaScript mechanism where variable and function declarations are been called before the code execution. In JavaScript, a variable can be declared after it has been used.

console.log(a) // undefined
var a = 10
// function can be hoisted
foo();
function foo() {
    console.log("Hello");
}

// 7 what is prototype

// Prototype is an inbuilt property of a function in JavaScript. It is an object that contains properties and methods that can be shared among all instances of a particular constructor function. Every function in JavaScript has a prototype property, which is used to attach properties and methods that should be inherited by all instances created from that function.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}


// 8 what is async and await

// Async and Await are used to handle asynchronous operations in JavaScript. Async is a keyword that is used to declare a function as asynchronous, which means that it will return a promise. Await is a keyword that is used to wait for a promise to resolve before executing the next line of code.

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

// 9 what is event bubbling

// Event bubbling is a mechanism in the DOM (Document Object Model) where an event that is triggered on a child element propagates or "bubbles up" to its parent elements. This means that when an event occurs on a child element, it first triggers the event handler for that element, and then it triggers the event handlers for its parent elements, all the way up to the root of the document.

const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener("click", () => {
    console.log("Child clicked");
});

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

// When you click on the child element, the output will be:
// Child clicked
// Parent clicked

// 10  What is a "hole" in an array eg [1,,3] is called hole in an array , we can’t use undefined bec undefined is a value in javascript eg : [1,undefined,3]
const arr = [1,,3]
console.log(arr) // [ 1, <1 empty item>, 3 ]
console.log(arr.length) // 3
console.log(arr[1]) // undefined
console.log(arr.hasOwnProperty(1)) // false

// 11 difference between null vs undefined

// null is an assigned value it means nothing
// undefined means variable is declared but not defined

let x; // undefined
let y = null; // null

console.log(x); // undefined
console.log(y); // null

console.log(typeof x); // "undefined"
console.log(typeof y); // "object"

// 12 event bubbling vs event capturing

// Event bubbling and event capturing are two different ways of handling events in the DOM (Document Object Model).

// Event bubbling is the default behavior in which an event that is triggered on a child element propagates or "bubbles up" to its parent elements. This means that when an event occurs on a child element, it first triggers the event handler for that element, and then it triggers the event handlers for its parent elements, all the way up to the root of the document.

// Event capturing, on the other hand, is a mechanism where an event that is triggered on a parent element propagates down to its child elements. This means that when an event occurs on a parent element, it first triggers the event handlers for that element, and then it triggers the event handlers for its child elements, all the way down to the target element.

const grandParent = document.getElementById("grandparent");
const parent2 = document.getElementById("parent2");
const child2 = document.getElementById("child2");

// Event Capturing
grandParent.addEventListener("click", () => {
    console.log("Grandparent clicked - Capturing");
}, true);

parent2.addEventListener("click", () => {
    console.log("Parent clicked - Capturing");
}, true);

child2.addEventListener("click", () => {
    console.log("Child clicked - Capturing");
}, true);

// Event Bubbling
grandParent.addEventListener("click", () => {
    console.log("Grandparent clicked - Bubbling");
}, false);

parent2.addEventListener("click", () => {
    console.log("Parent clicked - Bubbling");
}, false);

child2.addEventListener("click", () => {
    console.log("Child clicked - Bubbling");
}, false);

// When you click on the child element, the output will be:
// Grandparent clicked - Capturing
// Parent clicked - Capturing
// Child clicked - Capturing
// Child clicked - Bubbling
// Parent clicked - Bubbling
// Grandparent clicked - Bubbling
 
// Write a function that flattens an array of nested arrays into a single array.
function flattenArray(arr) {
  return arr.reduce((flat, item) => 
    flat.concat(Array.isArray(item) ? flattenArray(item) : item), []
  );
}

console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]

