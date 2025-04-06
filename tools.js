// tools.js

// 1. Modularity: Exporting a simple function
export function greet(name) {
  return `Hello, ${name}!`;
}

// 2. Class: Defining and exporting a class
export class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

// 3. Async Function & 4. Promises: Function that returns a Promise
export async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}

// 5. Maps: Function that demonstrates the use of Map
export function createMap() {
  const myMap = new Map();
  myMap.set('key1', 'value1');
  myMap.set('key2', 'value2');
  return myMap;
}
