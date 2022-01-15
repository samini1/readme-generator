// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'Enter project title.',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter a valid response');
            return false;
        }
    }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
        validate: desInput => {
            if (desInput) {
                return true;
            } else {
                console.log('Please enter a valid response');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation information',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter a valid response');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please enter a valid response');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter guidelines for contributing',
        validate: contInput => {
            if (contInput) {
                return true;
            } else {
                console.log('Please enter a valid response');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter a valid response');
                return false;
            }
        }
    },    
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application.',
        choices: 
            [{name:'Apache', value: 0},
            {name:'Boost', value: 1},
            {name:'GNU GPL v3', value: 2},
            {name:'GNU GPL v2', value: 3},
            {name:'MIT', value: 4},
            {name:'Mozilla', value: 5},
            {name:'Unlicense', value: 6},
            {name:'Apache', value: 7},
            {name:'I do not want to choose a license now', value: 8}
            ]
    },
    {
        type: 'input',
        name: 'gitub',
        message: 'Enter your GitHub username',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter a valid response');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid response');
                return false;
            }
        }
    }
       
];



// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFile(README.md, generateMarkdown(answers), err => {
        if (err) {
            return console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => { 
        console.log('Using these responses to generate a README: '); 
        console.log(answers);

    })

    writeToFile();
}

// Function call to initialize app
init();
