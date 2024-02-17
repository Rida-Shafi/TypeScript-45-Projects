"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Defining a function that accepts a size and the text of a mnessage that should be printed on the Shirt.
const make_Shirt = (size, message) => {
    console.log(`Size: ${size}, Message: '${message}'`);
    return `Size: ${size}, Message: '${message}'`;
};
// Define variable 
let size = "Medium";
let message = "TypeScrip Insight with Kamran";
// Call the function
make_Shirt("Large", "TypeScrip Insights");
make_Shirt(size, message);
