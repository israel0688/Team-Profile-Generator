const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.officeNumber = 28;
    }
}

module.exports = Manager;