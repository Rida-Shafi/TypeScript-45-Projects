/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/ 
const bouquet =
{
    name: "Springn Delight",
    price:250,
    description: "Beautiful arrangment of spring flowers"
}

//DEfine an arry of objects

let bouquets: Array<typeof bouquet> =[];

//pushing multiple object
bouquets.push(bouquet);
bouquets.push({
    name: "summerbliss",
    price: 350,
    description: "beautiful arrangment of summer flowers"
})

let bouquet3 = {
    name: "Red Hot",
    price: 350,
    description: "beautiful arrangment of red roses"
}

bouquets.push(bouquet3);

// console.log(bouquets);

bouquets.push({
    name: "Freshness",
    price: 250,
    description: "A beautiful arrangment of white and yellow roses"
});

// console.log(bouquets);

// Function to display bouquets
function displayBouquets(bouquets: Array<typeof bouquet>)
{
    for(let i of bouquets) {
        console.log(`title: ${i.name}
        description ${i.description}
        price: ${i.price}
        ___________/n`)
    };
    }
    displayBouquets(bouquets);
