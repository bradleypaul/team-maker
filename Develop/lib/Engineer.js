const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(emp) {
        super(emp);
        this.github = emp.github;
        this.role = "Engineer";

        //freeze object so it's immutable after constructor finishes
        Object.freeze(this);
    }
}

module.exports = Engineer;