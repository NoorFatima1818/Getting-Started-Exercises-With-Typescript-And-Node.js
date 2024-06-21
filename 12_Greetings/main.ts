import chalk from "chalk";
 
let names : string[] = [ "Mahnoor", "Bushra", "Kainat", "Muqaddas", "Javeriya", "Dua", "Wajeeha", "Ikhlas", "Isra", "Ifrah"]; // stores the list of names of my friends

// print each name 
for (let i = 0; i<names.length; i++){
   console.log(chalk.blueBright(`Hello, ${names[i]}!, Hope you have a great day!`));
}




// Method 2


for (let name of names){
   console.log(chalk.gray(`Hello, ${name}!, would you like to learn typescript?`));
}

