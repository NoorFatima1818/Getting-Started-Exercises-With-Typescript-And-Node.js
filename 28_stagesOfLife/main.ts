import inquirer from "inquirer"
import chalk from "chalk"

let age  = await inquirer.prompt({
    message : chalk.greenBright(" Enter the age to know  stage of life."),
    type : "input" ,
    name : "q"
})

if(age.q < 2 && age.q > 0) {

    console.log(chalk.blueBright("The person is a baby."));

}else if(age.q >=2 && age.q < 4){

    console.log(chalk.yellowBright("The person is a toddler."));

}else if(age.q >=4 && age.q < 13){

    console.log(chalk.cyanBright("The person is a kid."));

}else if(age.q >= 13 && age.q < 20){

    console.log(chalk.green("The person is a teenager."));

}else if(age.q >= 20 && age.q < 65){

    console.log(chalk.magentaBright("The person is an adult."));

}else if(age.q >= 65){

    console.log(chalk.magenta("The person is an elder."));

} else {

    console.log(chalk.redBright("Please provide valid age.... "));
}


              