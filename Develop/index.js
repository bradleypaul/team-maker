// https://bit.ly/3e7nGwW
"use strict";
const inquirer = require('inquirer');
const fs = require('fs');

const EmployeeQuestions = require('./EmployeeQuestions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generate = require('./src/generateHtml');

const chooser = [
    {
        type: "list",
        name: "role",
        message: `Which type of employee would you like to make?`,
        choices: [
            "engineer",
            "intern"
        ]
    }
];

const _continue = [
    {
        type: "list",
        name: "continue",
        message: "Would you like to add another employee?",
        choices: ["yes", "no"]
    }
];

// function to write README file
async function writeToFile(fileName, data) {
    await fs.promises.writeFile(fileName, data, "utf-8");
}

function createEmployee(role, emp) {
    // could just return emp.role = role :?
    // because all the props are already setup but eh
    if(role === "manager") {
        return new Manager(emp);
    } else if (role === "engineer") {
        return new Engineer(emp);
    } else if (role === "intern") {
        return new Intern(emp);
    }
}

async function query(role, employees) {
    const questions = (new EmployeeQuestions(role)).getQuestions();
    const emp = await inquirer.prompt(questions);
    const employee = createEmployee(role, emp);
    employees.push(employee);
    return (await inquirer.prompt(_continue)).continue === "yes";
}

async function start() {
    const employees = [];
    console.log("Hello, and thank you for using my team building app.\n");
    
    // get the flag to continue making employees/ create the manager
    let continueFlag = await query('manager', employees);
    
    //continue prompting for new employees until user is done
    while (continueFlag) {
        const ans = await inquirer.prompt(chooser);
        continueFlag = await query(ans.role, employees);
    }
    
    //generate html for all the employees
    const html = generate(employees);
    await writeToFile('dist/team.html', html);
}

start();