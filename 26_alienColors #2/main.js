import chalk from "chalk";
// Version: 1 (runs if block)
let alien_color = "green";
if (alien_color === "green") {
    console.log(chalk.greenBright("Congratulations! You have earned 5 points for shooting the alien..."));
}
else {
    console.log(chalk.yellowBright("Hurray! You have earned 10 points...."));
}
// Version: 2 (runs else block)
alien_color = "Yellow";
if (alien_color === "green") {
    console.log(chalk.greenBright("Congratulations! You have earned 5 points for shooting the alien..."));
}
else {
    console.log(chalk.yellowBright("Hurray! You have earned 10 points...."));
}
