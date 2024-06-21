import chalk from "chalk";
// creating a few emplyee objects
const employee1 = {
    name: "Shahmeer",
    age: 36,
    position: "Software Engineer",
    department: "Engineering",
    isActive: true
};
const employee2 = {
    name: "Dua",
    age: 27,
    position: "UX Designer",
    department: "Design",
    isActive: false
};
const employee3 = {
    name: "Muhammad Asad",
    age: 45,
    position: "Project Manager",
    department: "Management",
    isActive: true
};
const employee4 = {
    name: "Fatima",
    age: 26,
    position: "Data Analyst",
    department: "Data Science",
    isActive: true
};
const employee5 = {
    name: "Ali",
    age: 36,
    position: "Security Specialist",
    department: "Security",
    isActive: false
};
// storing objects in array
const employees = [employee1, employee2, employee3, employee4, employee5];
// function to show employees data
function employeesData(emplyees) {
    employees.forEach(employee => {
        console.log(chalk.cyanBright(employee));
    });
}
// showing employees in organization
console.log(chalk.blueBright("Employees Data:"));
employeesData(employees);
