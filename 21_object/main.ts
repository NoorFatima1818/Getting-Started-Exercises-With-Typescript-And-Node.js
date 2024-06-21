import chalk from "chalk"

// defining typescript interface for an employee

interface Employee {

    name : string;
    age : number;
    position : string;
    department : string;
    isActive : boolean
} 

// creating a few emplyee objects

const employee1 : Employee = {

    name : "Shahmeer",
    age : 36,
    position : "Software Engineer",
    department : "Engineering",
    isActive : true
}

const employee2 : Employee = {

    name : "Dua",
    age :27,
    position : "UX Designer",
    department : "Design",
    isActive : false
}

const employee3 : Employee = {

    name : "Muhammad Asad",
    age : 45,
    position : "Project Manager",
    department : "Management",
    isActive : true
}

const employee4 : Employee = {

    name : "Fatima",
    age : 26,
    position : "Data Analyst",
    department : "Data Science",
    isActive : true
}

const employee5 : Employee = {

    name : "Ali",
    age : 36,
    position : "Security Specialist",
    department : "Security",
    isActive : false
}

// storing objects in array

const employees : Employee[] = [employee1,employee2,employee3,employee4,employee5]

// function to show employees data

function employeesData (emplyees : Employee[] ): void {

    employees.forEach(employee => {
        console.log(chalk.cyanBright(`${employee.name}, Age: ${employee.age}, Position: ${employee.position}, Department: ${employee.department}, Status: ${employee.isActive ? "Active" : "Inactive"}`));
    });
}

// showing employees in organization
console.log(chalk.blueBright("Employees Data:"));
employeesData(employees);

