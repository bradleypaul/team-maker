const Employee = require('./Employee')

class Manager extends Employee {
    constructor(emp) {
        super(emp);
        this.officeNumber = emp.officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;