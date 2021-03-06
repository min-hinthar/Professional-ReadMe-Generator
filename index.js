// TODO: Include packages needed for this application
// require inquirer npm package install
const inquirer = require('inquirer');
// require fs file write package
const fs = require('fs');
// require markdown.js
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        // WHEN I enter my project title
        // THEN this is displayed as the title of the README
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        type: 'input',
        name: 'description',
        message: 'How would you describe the nature and purpose of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What technologies/packages are required to install in order to run the application/project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe several usage information of this project:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Would you like other developers to contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test run your application/project?'
    },
    {
        // WHEN I choose a license for my application from a list of options
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your application:',
        // choices of licenses from https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633
        choices: [
            'MIT',
            'Apache-2.0',
            'GPL-3.0',
            'BSD-2-Clause',
            'BSD-3-Clause',
            'BSD-4-Clause',
        ]
    },
    {
        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'gitHubProfile',
        message: 'What is your GitHub profile url?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address for others to contact you about your project:'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // require fs to write the input data to file name and return success or error 
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            console.log('An error has occured! Please retry:', err);
        } else {
            console.log('Success!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    // require inquirer to push prompts of questions in questions array
    inquirer.prompt(questions)
        .then((data) => {
            // write the data into the markdown file using generateMarkdown function and name it as README.md 
            writeToFile('README.md', generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
