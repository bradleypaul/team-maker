const Employee = require('./Employee')

class Manager extends Employee {
    constructor(emp) {
        super(emp);
        this.officeNumber = emp.officeNumber;

        //freeze object so it's immutable after constructor finishes
        Object.freeze(this);
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;