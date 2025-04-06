// index.js

import { greet, Animal, fetchData, createMap } from './tools.js';

// Testing the greet function
console.log(greet('World')); // Output: Hello, World!

// Testing the Animal class
const dog = new Animal('Dog');
console.log(dog.speak()); // Output: Dog makes a noise.

// Testing the async function with Promise
fetchData().then(data => {
  console.log(data); // Output: Data fetched successfully!
}).catch(error => {
  console.error(error);
});

// Testing the Map function
const map = createMap();
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// key1: value1
// key2: value2
