const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.school = 'UTB';
    }
}

module.exports = Intern;