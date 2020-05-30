const Employee = require('./Employee')

class Manager extends Employee {
    constructor(emp) {
        super(emp);
        this.officeNumber = emp.officeNumber;
        this.role = "Manager";

        //freeze object so it's immutable after constructor finishes
        Object.freeze(this);
    }
}

module.exports = Manager;