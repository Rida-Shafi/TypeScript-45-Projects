"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteTranspotation = [];
favoriteTranspotation.push(["motorcycle", "Honda"]);
favoriteTranspotation.push(["car", "Toyota"]);
favoriteTranspotation.push(["bicycle", "Trek"]);
// console.log(favoriteTranspotation)
// “I would like to own a Honda motorcycle.”
// using to  for each loop print a series of statements
favoriteTranspotation.forEach(([transport, brand]) => { console.log(`I would like to buy a ${brand} ${transport}.`); });
