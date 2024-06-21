 import chalk from "chalk";
 
 let names : string[] = [ "Mahnoor", "Bushra", "Kainat", "Muqaddas", "Javeriya", "Dua", "Wajeeha", "Ikhlas", "Isra", "Ifrah"]; // stores the list of names of my friends

 // print each name 
 for (let i = 0; i<names.length; i++){
    console.log(chalk.blueBright( `\t ${names[i]} \t`));
 }
