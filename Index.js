const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Inter = require('./lib/Intern');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');

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


function init() {
    getEmployee()
        .then(generatePage)

        .then(pageProfile => {
            return writeFile(pageProfile);
        })
        .catch(err => {
            console.log(err);
        });
};

init();