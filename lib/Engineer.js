const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.github = 'israel0688';
    }
}

module.exports = Engineer;