// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// This video is for comment tutorial

//Please don't change  4 to 20. (Rida)

let PersonName: string = "Rida Shafi"

let lowercaseName: string = PersonName.toLowerCase();
let upercaseName: string = PersonName.toUpperCase();


let words: string[] = PersonName.split(" ");

let titlecaseName: string = ""

for (let i = 0 ; i < words.length; i++){
    titlecaseName +=`${words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()} `
};

console.log(lowercaseName);
console.log(upercaseName);
console.log(titlecaseName);
