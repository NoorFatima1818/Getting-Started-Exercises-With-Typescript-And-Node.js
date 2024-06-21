import chalk from "chalk";
//Storing the famous person's name in a variable
let famous_person = "Quaid-e-Azam Muhammad Ali Jinnah";
// Composing the message and storing it in a new variable
let message = `${famous_person} once said, “Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.”`;
// Printing the message with light blue color using chalk
console.log(chalk.hex('#ADD8E6')(message));
