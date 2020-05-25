const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.school = 'UTB';
    }
}

school = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'Enter School Name: ',
            validate: gitAnswer =>{
                if (gitAnswer) {
                  return true;
                } else {
                  console.log('Please enter your School Name!');
                  return false;
                }
              }
        }
    ])
}

module.exports = Intern;