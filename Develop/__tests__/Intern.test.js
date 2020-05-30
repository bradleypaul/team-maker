const Intern = require('../lib/Intern');

test("Creates an intern correctly", () => {
    const temp = {
        name: "Creed Bratton",
        id: 1,
        email: "creed@www.creedthoughts.gov.www",
        school: "Scranton U"
    };

    const emp = new Intern(temp);
    expect(emp.name).toBe("Creed Bratton");
    expect(emp.id).toBe(1);
    expect(emp.email).toBe("creed@www.creedthoughts.gov.www");
    expect(emp.school).toBe("Scranton U");
    expect(emp.role).toBe("Intern");
    expect(Object.isFrozen(emp)).toBeTruthy();
});