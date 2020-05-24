const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {

    const employee = new Employee('Jack');

    expect(employee.name).toBe('Jack');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

