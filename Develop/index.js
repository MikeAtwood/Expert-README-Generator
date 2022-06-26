// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Title of Project',
            validate: titleInput => {
                if (titleInput) {
                return true;
            } else {
                console.log('Please enter title');
                return false;
            }
        }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description of Project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter description of Project');
                    return false;
                }
        }
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Table of Contents',
            validate: contentsInput => {
                if (contentsInput) {
                    return true;
                } else {
                    console.log('Please enter table of contents of Project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation Instructions (optional)',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage (optional)',
        },
        {
            type: 'confirm',
            name: 'License',
            message: 'License (optional)',
            default: false
        },
        {
            type: 'input',
            name: 'Contributing',
            messafety: 'Contributing Documentation  (optional)',
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Test Results (optional)',
        },
        {
            type: 'input',
            name: 'Questions', 
            message: 'Questions'
        },

    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // This will call the questions function
    questions();
};

// Function call to initialize app
init();
