import chalk from "chalk";
//array of magicians
let magicians = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel", "Dynamo"];
// passing array to function to print magicians in array 
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// modifying array of mgicians by adding "the great"
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great.";
    }
}
console.log(chalk.magentaBright("\n Magicians:"));
make_great(magicians); // modifies original array
show_magicians(magicians); // show modified names
