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
        choices: ['MIT','GPL', 'Apache', 'Boost', 'Unlicense']
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
function writeToFile(fileName, data) {
    fs.writeFile(README.md, generateMarkdown(data), err => {
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
