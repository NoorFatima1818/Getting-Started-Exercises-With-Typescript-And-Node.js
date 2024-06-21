import chalk from "chalk";
let current_users = ["John", "Sara", "David", "Lily", "Harry", "Josh", "bob", "Rose", "Steve", "Kate"];
let new_users = ["Noor", "Fatima", "Josh", "Hadi", "Ali", "Harry", "KATE", "Okasha", "Bob", "Hira"];
// loop through new users to check if the user name is taken 
new_users.forEach((new_user) => {
    // converting new_users to to lowercase for case insensitivite comparision
    const new_user_lower = new_user.toLowerCase();
    // Check if new_user_lower is in current_users (case insensitive)
    const is_taken = current_users.some((current_user) => current_user.toLowerCase() === new_user_lower);
    // conditions
    if (is_taken) {
        console.log(chalk.redBright(`The username "${new_user}" is already taken. Please enter a new username.`));
    }
    else {
        console.log(chalk.greenBright(`The username "${new_user} is available."`));
    }
});
