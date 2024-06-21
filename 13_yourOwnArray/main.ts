import chalk from "chalk";

// Define an array called transports with examples of favorite modes of transportation
let transport1 : string[] = ["Motorcycle", "Car", "Scooty", "Train","Bus"];


// Loop through the array and print a statement for each item
for(let i = 0; i < transport1.length; i++ ){
    console.log(chalk.blueBright(`I love to travel by ${transport1[i]}.`))
    
} 


// Method 2

let transport2 : string[] = ["Honda mototcycle", "Tesla car", "BMW car"];

transport2.forEach(transport => {
    console.log(chalk.yellowBright(`I would like to own a ${transport}.`));
});
