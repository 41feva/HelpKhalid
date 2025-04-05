// index.js

// Importing everything from tools.js
import { greet, Animal, fetchData, promiseExample, createMap } from './tools.js';

// Test the greet function (Modularity)
console.log(greet("Developer")); // Should print: Hello, Developer!

// Test the Animal class
const myAnimal = new Animal("Buddy");
console.log(myAnimal.speak()); // Should print: Buddy makes a sound.

// Test the async function that returns a Promise
fetchData().then((result) => {
  console.log(result); // Should print: Data fetched successfully via async!
}).catch((error) => {
  console.error(error);
});

// Test the explicit Promise example
promiseExample().then((result) => {
  console.log(result); // Should print: Promise resolved successfully!
}).catch((error) => {
  console.error(error);
});

// Test the Map function
const map = createMap();
console.log("Map contents:");
for (const [key, value] of map) {
  console.log(`${key}: ${value}`); // Prints each key-value pair from the map.
}
