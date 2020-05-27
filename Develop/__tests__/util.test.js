const util = require('../src/util');

test("creation of employ based on input", ()=>{
    const manager = util.createEmployee('manager', {});
    expect(manager.getRole()).toBe("Manager");

    const engineer = util.createEmployee('engineer', {});
    expect(engineer.getRole()).toBe("Engineer");

    const intern = util.createEmployee('intern', {});
    expect(intern.getRole()).toBe("Intern");
});