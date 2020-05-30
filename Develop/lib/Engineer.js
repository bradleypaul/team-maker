const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(emp) {
        super(emp);
        this.github = emp.github;

        //freeze object so it's immutable after constructor finishes
        Object.freeze(this);
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;