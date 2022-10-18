const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");



let employeeArray=[]



const checkEmail = (input) => {
	if (input.match(/.*@[a-zA-Z]*.com/)) {
		return true;
	} else {
		return console.log("\n\x1B[31mYou need to provide a valid email");
	}
};





const keepGoing = () => {
    inquirer.prompt ([{
        message: 'do you want to add more members?',
        name: 'newDecision',
        type: 'list',
        choices: ['yes','no']
    }])
    .then(newDecision => {
        if (newDecision.newDecision === 'yes') {
            jobofEmployee() 
        } else {
            renderHtml()
        }

    })
}

const jobofEmployee = () => {
    inquirer.prompt([{
        message: 'What kind of employee do we want',
        name:'empType',
        type: 'list',
        choices: ['Intern', 'Engineer']
    }])
    .then(answer => {
        if(answer.empType === 'Intern') {
            inquirer.prompt([
                {
                    message: 'What is the name of the Intern?',
                    type: 'input',
                    name: 'name',
                },
                {
                    message: 'What is the id of the Intern?',
                    type: 'input',
                    name: 'id',
                },
                {
                    message: 'What is the email of the Intern?',
                    type: 'input',
                    name: 'email',
                    validate: checkEmail,
                },
                {
                    message: 'What is the School of the Intern?',
                    type: 'input',
                    name: 'school',
                }

            ])
            .then(intern => {
                
                let newIntern = new Intern(intern.name, intern.id, intern.email, intern.github)
                employeeArray.push(newIntern)
                keepGoing()
            })
        } else if (answer.empType === 'Engineer') {
            inquirer.prompt([
                {
                    message: 'What is the name of the Engineer?',
                    type: 'input',
                    name: 'name',
                },
                {
                    message: 'What is the id of the Engineer?',
                    type: 'input',
                    name: 'id',
                },
                {
                    message: 'What is the email of the Engineer?',
                    type: 'input',
                    name: 'email',
                    validate: checkEmail,
                },
                {
                    message: 'What is the GitHub of the Engineer?',
                    type: 'input',
                    name: 'github',
                }
            ])
            .then(engineer => {
                let newEngineer= new Engineer(engineer.name, engineer.id, engineer.email, engineer.school)
                employeeArray.push(newEngineer)
                keepGoing()                 
            })
        }
    })

}


    inquirer.prompt([
        {
            message: 'What is the name of the Manager?',
            type: 'input',
            name: 'name',
        },
        {
            message: 'What is the id of the Manager?',
            type: 'input',
            name: 'id',
        },
        {
            message: 'What is the email of the Manager?',
            type: 'input',
            name: 'email',
            validate: checkEmail,
        },
        {
            message: 'What is the office of the Manager?',
            type: 'input',
            name: 'office',
        }
    ])
    .then(manager=> {
        let newManager = new Manager(manager.name, manager.id, manager.email, manager.office)
        employeeArray.push(newManager)
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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link rel="stylesheet" href="./output/style.css">
            <title>Team!</title>
        </head>
        <body>
        <header id="header">My Team</header>
        <section  id="flex">
        ${createEmployeeCard()}
        </section>
            
            
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

            const employeeCard = 
            `
            <div class="row">
                <div class="col-6">
                    <div class="card mx-auto" style="width: 18rem">
                        <h5 class="card-header"> Name: ${employee.name}<br /><br />Role: ${employeeRole}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">Email: ${employee.email}</li>
                            <li class="list-group-item">${diff}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `

            return employeeCard;
        }).join('')

        return generatedCards;




    }