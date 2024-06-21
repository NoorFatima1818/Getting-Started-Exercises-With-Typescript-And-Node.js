import chalk from "chalk";
// an array of students
let students = ["Fatima", "Areej", "Iman", "Saba", "Aroob", "Kinza"];
// making function to display students by index
function display(index) {
    console.log(students[index]);
}
// Intentional error: Accessing an out-of-bounds index
display(7); // It will through an error as array indices are from 0 to 5
// Handling error
function display2(index) {
    if (index >= 0 && index == students.length) {
        console.log(chalk.cyanBright(students[index]));
    }
    else {
        console.log(chalk.red("Index Out Of Bounds"));
    }
}
display2(5); // it will print Kinza
display2(6); // it will print Index Out Of Bounds
