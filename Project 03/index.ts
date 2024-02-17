// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// step 1 show in lower case:
let PersonName: string = "Rida Shafi"
let lowercaseName: string = PersonName.toLowerCase();
console.log(lowercaseName);

// step 2 show in upper case:
let upercaseName: string = PersonName.toUpperCase();
console.log(upercaseName);

// step 3 show in title case:
let words: string[] = PersonName.split(" ");
let titlecaseName: string = ""
for (let i = 0 ; i < words.length; i++){
    titlecaseName +=`${words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()} `
};
console.log(titlecaseName)