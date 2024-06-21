import chalk from "chalk";
let car = "subaru";
// Test: 1
console.log(chalk.greenBright("Is car == 'subaru'? I predict true."));
console.log(car == "subaru"); // Output = true
// Test: 2
console.log(chalk.greenBright("Is car === 'subaru'? I predict true."));
console.log(car === "subaru"); // Output = true
// Test: 3
console.log(chalk.greenBright("Is car !== 'BMW'? I predict true."));
console.log(car !== "BMW"); // Output = true
// Test: 4
console.log(chalk.greenBright("Is car.length >= 6 ? I predict true."));
console.log(car.length >= 6); // Output = true
// Test: 5
console.log(chalk.greenBright("Is car.endssWith ('u') ? I predict true."));
console.log(car.endsWith('u')); // Output = true
// Test: 6
console.log(chalk.greenBright("Is car.toUpperCase == 'SUBARU' ? I predict true."));
console.log(car.toUpperCase() == "SUBARU"); // Output = true
// Test: 7
console.log(chalk.redBright("Is car === 'Subaru'? I predict false."));
console.log(car === "Subaru"); // Output = false
// Test: 8
console.log(chalk.redBright("Is car == 'BMW'? I predict false."));
console.log(car == "BMW"); // Output = false
// Test: 9
console.log(chalk.redBright("Is car !== 'subaru'? I predict false."));
console.log(car !== "subaru"); // Output = false
// Test: 10
console.log(chalk.redBright("Is car.length >= 10 ? I predict false."));
console.log(car.length >= 10); // Output = false
// Test: 11
console.log(chalk.redBright("Is car.startsWith ('S') ? I predict false."));
console.log(car.startsWith('S')); // Output = false
// Test: 12
console.log(chalk.redBright("Is car.toLowerCase == 'Subaru' ? I predict false."));
console.log(car.toLowerCase() == "Subaru"); // Output = false
