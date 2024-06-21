import chalk from "chalk";
// Passed Version
let alien_color = "green";
if (alien_color === "Green") {
    console.log(chalk.greenBright("Congratulations! You have earned 5 points...."));
}
// Failed Version
alien_color = "Yellow";
if (alien_color === "Green") {
    console.log(chalk.greenBright("Congratulations! You have earned 5 points...."));
    // the output will be nothing
}
