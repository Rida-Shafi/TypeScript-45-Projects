"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified */
//Array of magician's names
const magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];
function showmagicians(Magicians) {
    for (const magician of Magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatmagicians = magicians.map(Magician => `the Great ${Magician}`);
    return greatmagicians;
}
// Modify the array to add *the Great* to magician's name
const greatMagicianNames = make_great(magicianNames);
//call the function to show the original magician's names
console.log("original Magician:");
showmagicians(magicianNames);
//call the function to show the great magician's names
console.log("\nGreat Magician:");
showmagicians(greatMagicianNames);
