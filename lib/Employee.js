const inquirer = require('inquirer');

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = 546546;
        this.email = 'email@email.com';
    }

}


const getEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name: ',
            
            validate: answer =>{
                if (answer) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
              }


        },

        {
            type: 'number',
            name: 'id',
            message: 'Enter id#: ',
            validate: idInput =>{
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter id#!');
                    return false;
                }
            }
        },

        {
            type: 'text',
            name: 'email',
            message: 'Enter email: '
        }
    ])

    .then(({name}) => {
        this.employee = new Employee(name);
    });

}


//getEmployee();



module.exports = Employee;