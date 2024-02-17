"use strict";
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Non-empty array case
let userNames = ['Anabia', 'Sana', 'Ayat', 'Zoya', 'Zara'];
//function case
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log('we need to find some users!');
        return;
    }
    for (const username of userNames) {
        if (username.toLowerCase() === 'admin') {
            console.log(`Hello admin,would you like to see a status report?`);
        }
        else {
            console.log(`hello ${username}, thank you for login again.`);
        }
    }
}
console.log(`for non empty username:\n`);
greetUsers(userNames);
// To make array empty we just assing an empty array to usernames
userNames = [];
console.log(`\n\n For empty username:\n`);
greetUsers(userNames);
