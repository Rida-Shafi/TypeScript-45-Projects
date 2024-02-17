/*Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

 • Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

// Project 18


// Step 1: Creat an array to store Travel destinations.

let travelDestinations: string[] =["Itlay" , "Paris" , "Madina Munawara" , "Turkey" , "Maldives"]

// Step 2:• Print your array in its original order.
console.log("Original Order:")
console.log(travelDestinations)

// Step 3: Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list")
console.log([...travelDestinations].sort())

// Step 4:Show that your array is still in its original order by printing it.

console.log("Show array is still in its original order.")
console.log(travelDestinations)

// step 5:Print your array in reverse alphabetical order without changing the order of the original list.

console.log("\n Reverse Alphabetical order without modifying the actual list")
console.log([...travelDestinations].sort().reverse())

// Step 6:Show that your array is still in its original order by printing it again.
console.log("Show array is still in its original order.")
console.log(travelDestinations)

// Step 7: Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReserve Order")
travelDestinations.reverse()
console.log(travelDestinations)

// Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back To Original")
travelDestinations.reverse()
console.log(travelDestinations)
 
// Step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nChange To Alphabetical Order")
travelDestinations.sort()
console.log(travelDestinations)
 
// Step 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nChange To Reverse Alphabetical Order")
travelDestinations.sort().reverse()
console.log(travelDestinations)
 