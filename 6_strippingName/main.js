import chalk from "chalk";
let name1 = "\n \t Noor Fatima \t \n"; // This saves with whitespace
console.log(chalk.cyan(` Name with whitespaces: ${name1}`));
let name2 = name1.trim(); // This save without whitespaces
console.log(chalk.blue(`Stripped name: ${name2}`));
