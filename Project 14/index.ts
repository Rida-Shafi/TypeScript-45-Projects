// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: Array<string> = [
    "Zohaib" , "Arham" , "Ahmed" , "Saad" , "Junaid" , "Maaz" , "Kabir",
];

// Loop for each to print invitation

guestList.forEach((guestName) =>
{
console.log(`Dear ${guestName}, "Please join us for dinner, you're invited!"`)
})
