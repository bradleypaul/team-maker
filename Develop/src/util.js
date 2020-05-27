const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
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

module.exports.createEmployee = createEmployee;