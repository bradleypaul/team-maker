const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(emp) {
        super(emp);
        this.github = emp.github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;