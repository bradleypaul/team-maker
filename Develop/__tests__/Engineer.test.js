const Engineer = require('../lib/Engineer');

test("Creates an Engineer correctly", () => {
    const temp = {
        name: "Paul",
        id: 1,
        email: "paul@office.com",
        github: "bradleypaul"
    };

    const emp = new Engineer(temp);
    expect(emp.name).toBe("Paul");
    expect(emp.id).toBe(1);
    expect(emp.email).toBe("paul@office.com");
    expect(emp.github).toBe("bradleypaul");
    expect(emp.role).toBe("Engineer");
    expect(Object.isFrozen(emp)).toBeTruthy();
});