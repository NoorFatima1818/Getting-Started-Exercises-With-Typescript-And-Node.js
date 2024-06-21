// Importing the chalk library for colored console output
import chalk from "chalk"

let nameOfPerson : string = "Noor Fatima";


// Converting the entire string to lowercase
 let lowerCase = nameOfPerson.toLowerCase();

 // Converting the entire string to uppercase
 let upperCase = nameOfPerson.toUpperCase();

 // Converting the string to title case manually
 let titleCase = nameOfPerson.charAt(0).toUpperCase() + nameOfPerson.slice(1,4).toLowerCase()+ " " + nameOfPerson.charAt(5).toUpperCase()+ nameOfPerson.slice(6).toLowerCase() 

 console.log(chalk.magentaBright(`My name in lower case: ${lowerCase}`));

 console.log(chalk.blueBright(`My name in upper case: ${upperCase}`));

 console.log(chalk.yellowBright(`My name in title case: ${titleCase}`));