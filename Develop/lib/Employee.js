class Employee {
    constructor(emp) {
        this.name = emp.name;
        this.id = emp.id;
        this.email = emp.email;
        this.role = "Employee";
    }
}

module.exports = Employee;