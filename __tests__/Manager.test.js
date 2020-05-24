const Manager = require('../lib/Manager.js')



test('creates an manager object', () => {
    const manager = new Manager('Rick');

    expect(manager.name).toBe('Rick');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});