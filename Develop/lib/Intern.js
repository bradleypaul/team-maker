const Employee = require('./Employee');

class Intern extends Employee {
    constructor(emp) {
        super(emp);
        this.school = emp.school;
        this.role = "Intern";

        //freeze object so it's immutable after constructor finishes
        Object.freeze(this);
    }
}

module.exports = Intern;