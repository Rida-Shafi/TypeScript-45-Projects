"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = [
    "Zohaib", "Arham", "Ahmed"
];
exports.guestList = guestList;
//step one  print the name of person who cant make it.
let guestHowCantMakeIt = "Zohaib";
console.log(`Unfortunately, ${guestHowCantMakeIt} won't be able to make it to dinner.`);
// step two Replace the name of guest who can't make it
let NewGuest = "Abid";
let indexOfguestHowCantMakeIt = guestList.indexOf(guestHowCantMakeIt);
// console.log(indexOfguestHowCantMakeIt)
if (indexOfguestHowCantMakeIt !== -1) {
    guestList[indexOfguestHowCantMakeIt] = NewGuest;
}
//console.log(guestList[2])
//step three Print a second set of invitation messages
console.log("second set of invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, Please join us for dinner, you're invited!`);
});
