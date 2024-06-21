// Import the chalk library for colored console output
import chalk from "chalk";
// Define a variable with a type annotation for a string
let PersonName = "Noor Fatima";
// Use template literals to create a greeting message and log it to the console with colored output using chalk
console.log(chalk.magenta(`Hello ${PersonName}, would you like to learn some Typescript today? `));
// Log the message to the console with different styles and colors
console.log(chalk.magenta(`Hello ${PersonName}, would you like to learn some Typescript today? `)); // Magenta text
console.log(chalk.blue.bold(`Hello ${PersonName}, would you like to learn some Typescript today? `)); // Bold blue text
console.log(chalk.green.underline `Hello ${PersonName}, would you like to learn some Typescript today? `); // Underlined green text
console.log(chalk.yellow.bgRed(`Hello ${PersonName}, would you like to learn some Typescript today? `)); // Yellow text with red background
