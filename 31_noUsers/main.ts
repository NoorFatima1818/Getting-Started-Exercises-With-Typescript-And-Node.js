import chalk from "chalk" 

let userNames : Array<String> = ["Sara", "David", "Admin", "John", "Lily"];
userNames = [];



if (userNames.length === 0){

    console.log(chalk.redBright("We need some users..."));
}
else {
userNames.forEach((userName) => {

 if (userName === "Admin")

{

    console.log(chalk.hex('#FF69B4')(`Hello ${userName}, would you like to see a status report?`));
} 

else {

    console.log(chalk.blueBright(`Hello ${userName}, thankyou for logging in again. `));

}

}
  )
     }