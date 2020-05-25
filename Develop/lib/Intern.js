const Employee = require('./Employee');

class Intern extends Employee {
    constructor(emp) {
        super(emp);
        this.school = emp.school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;