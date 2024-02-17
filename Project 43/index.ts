/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

//Array of magician's names

const magicianNames: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];

function showmagicians(Magicians: string[]): void
{
    for (const magician of Magicians){
         console.log(magician);
    }
}
function make_great(magicians: string[]): string[]{
    const greatmagicians: string[] = magicians.map(Magician => `the Great ${Magician}`);
    return greatmagicians
}

// Modify the array to add *the Great* to magician's name
const greatMagicianNames: string[] = make_great(magicianNames);

//call the function to show the original magician's names
console.log("original Magician:");
showmagicians(magicianNames);

//call the function to show the great magician's names
console.log("\nGreat Magician:");
showmagicians(greatMagicianNames);