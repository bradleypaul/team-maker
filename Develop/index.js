// https://bit.ly/3e7nGwW
"use strict";
const inquirer = require('inquirer');
const fs = require('fs');

const EmployeeQuestions = require('./EmployeeQuestions');
const generate = require('./src/generateHtml');
const {createEmployee} = require('./src/util');
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


async function query(role, employees) {
    const questions = (new EmployeeQuestions(role)).getQuestions();
    const emp = await inquirer.prompt(questions);
    const employee = createEmployee(role, emp);
    employees.push(employee);
    return (await inquirer.prompt(_continue)).continue === "yes";
}

(async function () {
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
})();