import chalk from "chalk"

// array of magicians
let magicians : string[] = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel", "Dynamo"];

// passing array to function to print magicians in array 
function show_magicians(magicians: string[] ):void{

    magicians.forEach((magic)=>{
    console.log(magic)
})
    
}

// modifying array of magicians by adding "the great"
function make_great(magicians: string[]){

    magicians.forEach((magic)=>{
        console.log(`The great ${magic}.`)
    })
}

console.log(chalk.magentaBright("\nOriginal Magicians:"));
show_magicians(magicians);

console.log(chalk.blueBright("\nGreat Magicians:"));
make_great(magicians);



 


              