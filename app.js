const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
// const generateTeam = require("./src/template.js");
// const employee = require("./lib/employee");



let employeeArray=[]





const questContinue = () => {
    inquirer.prompt ([{
        message: 'do you want to add more members?',
        type: 'list',
        choices: ['yes','no'],
        name: 'yesOrNo'
    }])
    .then(yesOrNo => {
        if (yesOrNo.yesOrNo === 'yes') {
            jobofEmployee() 
        } else {
            console.log('you are done')
            renderHtml()
        }

    })
}

const jobofEmployee = () => {
    inquirer.prompt([{
        message: 'What kind of employee do we want',
        type: 'list',
        choices: ['Engineer', 'Intern'],
        name:'empType'
    }])
    .then(answer => {
        console.log(answer)
        if(answer.empType === 'Engineer') {
            inquirer.prompt([
                {
                    message: 'What is the name of the Engineer?',
                    type: 'input',
                    name: 'name'
                },
                {
                    message: 'What is the id of the Engineer?',
                    type: 'input',
                    name: 'id'
                },
                {
                    message: 'What is the email of the Engineer?',
                    type: 'input',
                    name: 'email'
                },
                {
                    message: 'What is the GitHub of the Engineer?',
                    type: 'input',
                    name: 'github'
                }

            ])
            .then(engineer => {
                console.log(engineer)
                let newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
                employeeArray.push(newEngineer)
                console.log(employeeArray)
                questContinue()
            })
        } else if (answer.empType === 'Intern') {
            inquirer.prompt([
                {
                    message: 'What is the name of the Intern?',
                    type: 'input',
                    name: 'name'
                },
                {
                    message: 'What is the id of the Intern?',
                    type: 'input',
                    name: 'id'
                },
                {
                    message: 'What is the email of the Intern?',
                    type: 'input',
                    name: 'email'
                },
                {
                    message: 'What is the School of the Intern?',
                    type: 'input',
                    name: 'school'
                }
            ])
            .then(intern => {
                let newIntern= new Intern(intern.name, intern.id, intern.email, intern.school)
                employeeArray.push(newIntern)
                console.log(employeeArray)
                questContinue()                 
            })
        }
    })

}


    inquirer.prompt([
        {
            message: 'What is the name of the Manager?',
            type: 'input',
            name: 'name'
        },
        {
            message: 'What is the id of the Manager?',
            type: 'input',
            name: 'id'
        },
        {
            message: 'What is the email of the Manager?',
            type: 'input',
            name: 'email'
        },
        {
            message: 'What is the office of the Manager?',
            type: 'input',
            name: 'office'
        }
    ])
    .then(manager=> {
        console.log(manager)
        let newManager = new Manager(manager.name, manager.id, manager.email, manager.office)
        employeeArray.push(newManager)
        console.log(employeeArray)
        jobofEmployee()
    });

    function renderHtml () {
        const htmlPage = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        ${createEmployeeCard()}
        
            
            
        </body>
        </html>`

        fs.writeFileSync(path.join(__dirname, 'test.html'), htmlPage)
    }

    function createEmployeeCard () {
        const generatedCards = employeeArray.map((employee)=>{

            const employeeRole = employee.getRole()
            let diff;

            if (employeeRole === 'Engineer') {
                diff = `github: ${employee.github}`
            } else if (employeeRole === 'Manager') {
                diff = `office: ${employee.office}`
            } else {
                diff = `school: ${employee.school}`
            }

            const employeeCard = `
            <div>
                <h1>${employee.name}</h1>
                <h2>${employeeRole}</h2>
                <h3>${employee.id}</h3>
                <h4>${employee.email}</h4>
                <h5>${diff}</h5>
            </div>`

            return employeeCard;
        }).join('')

        return generatedCards;




    }
    