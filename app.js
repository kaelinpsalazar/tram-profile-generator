const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");

const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require("./lib/htmlRenderer");

let employeeArray=[]

const finished = () => {
    let myTeamHtml = render(employeeArray)
    fse.outputFile('output/team.html', 'myTeamHtml')
   .then(() => {
       console.log('The file has been saved!');
   })
   .catch(err => {
       console.error(err)
   });
}



const questContinue = () => {
    inquirer.prompt ([{
        message: 'do you want to add more members?',
        type: 'list',
        choices: ['yes','no'],
        name: 'yesOrNo'
    }])
    .then(yesOrNo => {
        if (yesOrNo.yesOrNo === 'yes') {
            engineerOrIntern() 
        } else {
            console.log('you are done')
        }

    })
}

const engineerOrIntern = () => {
    inquirer.prompt([{
        message: 'Are we adding an engineer or an intern',
        type: 'list',
        choices: ['Engineer', 'Intern'],
        name:'engOrInt'
    }])
    .then(answer => {
        console.log(answer)
        if(answer.engOrInt === 'Engineer') {
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
                    name: 'GitHub'
                }

            ])
            .then(engineer => {
                console.log(engineer)
                let newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
                employeeArray.push(newEngineer)
                console.log(employeeArray)
                questContinue()
            })
        } else if (answer.engOrInt === 'Intern') {
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
                    name: 'School'
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
        engineerOrIntern()
    });
    