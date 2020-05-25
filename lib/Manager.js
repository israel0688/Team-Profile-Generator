const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.officeNumber = officeNumber;
    }
}

officeNumber = () => {
    return inquirer.prompt([
        {
            type: 'Number',
            name: 'officeNumber',
            message: 'Enter Office Number: ',
            validate: gitAnswer =>{
                if (gitAnswer) {
                  return true;
                } else {
                  console.log('Please enter office Number!');
                  return false;
                }
              }
        }
    ])
}

module.exports = Manager;