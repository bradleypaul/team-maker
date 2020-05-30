const Employee = require('./Employee');

class Intern extends Employee {
    constructor(emp) {
        super(emp);
        this.school = emp.school;
        
        //freeze object so it's immutable after constructor finishes
        Object.freeze(this);
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;