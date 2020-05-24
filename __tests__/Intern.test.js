const Intern = require('../lib/Intern.js')



test('creates an intern object', () => {
    const intern = new Intern('Jay');

    expect(intern.name).toBe('Jay');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});