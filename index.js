const inquirer = require ("inquirer");
const path = require('path');
const Manager = require('./lib/manager');

const fs = require('fs');
let employeeArray= [];


inquirer.prompt([
    {
        message: "What is the name of the manager?",
        type: 'input',
        name:'name'
    },
    {
        message: "What is the id of the manager?",
        type: 'input',
        name:'id'
    },
    {
        message: "What is the email of the manager?",
        type: 'input',
        name:'email'
    },
    {
        message: "What is the office of the manager?",
        type: 'input',
        name:'office'
    }
])

.then(manager => {
    console.log(manager)
    let newManager =new Manager(manager.name,manager.id, manager.email, manager.office)
    employeeArray.push(newManager)
    console.log(employeeArray)
})