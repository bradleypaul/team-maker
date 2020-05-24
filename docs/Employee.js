class Employee {
    constructor(emp) {
        this.name = emp.name ;
        this.id = emp.id;
        this.email = emp.email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;