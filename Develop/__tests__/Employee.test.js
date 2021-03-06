const Employee = require('../lib/Employee');

test("Creates an employee correctly", () => {
    const temp = {
        name: "Jim",
        id: 1,
        email: "jim@office.com"
    };

    const emp = new Employee(temp);
    expect(emp.name).toBe("Jim");
    expect(emp.id).toBe(1);
    expect(emp.email).toBe("jim@office.com");
    expect(emp.role).toBe("Employee");
});