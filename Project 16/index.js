"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = [
    "Zohaib", "Arham", "Ahmed"
];
// Project 16 Solution:
//Step 01 informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`);
}
//Step 02  Add one new guest to the beginning of your array.
let newGuestAtBeginnig = "Ali";
guestList.unshift(newGuestAtBeginnig);
// console.log(guestList)
//Step 03 Add one new guest to the middle of your array.
let newGuestInMiddle = "Asif";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
// console.log(guestList)
//step 04 use push() func to add one new guest to the end of your array.
let newGuestAtEnd = "Izghaan";
guestList.push(newGuestAtEnd);
// console.log(guestList)
//final step print a new set of invitation messages.
console.log("New set of invitation message: ");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner at a bigger dinner table.`);
}
console.log(guestList);
