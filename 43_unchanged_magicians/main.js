import chalk from "chalk";
// array of magicians
let magicians = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel", "Dynamo"];
// passing array to function to print magicians in array 
function show_magicians(magicians) {
    magicians.forEach((magic) => {
        console.log(magic);
    });
}
// modifying array of mgicians bt adding "the great"
function make_great(magicians) {
    magicians.forEach((magic) => {
        console.log(`The great ${magic}.`);
    });
}
console.log(chalk.magentaBright("\nOriginal Magicians:"));
show_magicians(magicians);
console.log(chalk.blueBright("\nGreat Magicians:"));
make_great(magicians);
