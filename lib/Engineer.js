const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.github = github;
    }
}

getGithub = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter github: ',
            validate: gitAnswer =>{
                if (gitAnswer) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
              }
        }
    ])
}


module.exports = Engineer;