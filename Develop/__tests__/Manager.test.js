const Manager = require('../lib/Manager');

test("Creates a manager correctly", () => {
    const temp = {
        name: "Paul",
        id: 1,
        email: "paul@office.com",
        officeNumber: 7
    };

    const emp = new Manager(temp);
    expect(emp.name).toBe("Paul");
    expect(emp.id).toBe(1);
    expect(emp.email).toBe("paul@office.com");
    expect(emp.officeNumber).toBe(7);
    expect(emp.role).toBe("Manager");
    expect(Object.isFrozen(emp)).toBeTruthy();
});