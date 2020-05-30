const util = require('../src/util');

test("creation of employee based on input", ()=>{
    const manager = util.createEmployee('manager', {});
    expect(manager.role).toBe("Manager");

    const engineer = util.createEmployee('engineer', {});
    expect(engineer.role).toBe("Engineer");

    const intern = util.createEmployee('intern', {});
    expect(intern.role).toBe("Intern");

    // empty employee role
    let employee = util.createEmployee('', {});
    expect(employee.role).toBe("Employee");

    // null role
    employee = util.createEmployee(null, {});
    expect(employee.role).toBe("Employee");

    // undefined
    employee = util.createEmployee(undefined, {});
    expect(employee.role).toBe("Employee");

    // empty array role
    employee = util.createEmployee([], {});
    expect(employee.role).toBe("Employee");

    // empty object
    employee = util.createEmployee({}, {});
    expect(employee.role).toBe("Employee");

    // number
    employee = util.createEmployee(34, {});
    expect(employee.role).toBe("Employee");
    
    // "Employee"
    employee = util.createEmployee("Employee", {});
    expect(employee.role).toBe("Employee");
});