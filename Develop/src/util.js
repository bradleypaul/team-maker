const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

function createEmployee(role, emp) {
    // could just return emp.role = role :?
    // because all the props are already setup but eh

    switch (role) {
        case "manager":
            return new Manager(emp);
        case "engineer":
            return new Engineer(emp);
        case "intern":
            return new Intern(emp);
        default:
            return new Employee(emp);
    }
}

module.exports.createEmployee = createEmployee;