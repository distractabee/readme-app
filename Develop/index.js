// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js")

// license options
const licenseOptions = [
    "MIT",
    "GNU GPL v3",
    "Apache License 2.0",
    "ISC",
    "none"
];

//collect user input
const questions = 
        [
            {
                message: "What is the title of your application?",
                name: "title",
                type: "input"
            },
            {
                message: "Describe your application",
                name: "description",
                type: "input"
            },
            {
                message: "How do you install your application?",
                name: "installation",
                type: "input"
            },
            {
                message: "How do you use your application?",
                name: "usage",
                type: "input"
            },
            {
                message: "What license would you like to use for your application?",
                name: "license",
                type: "list",
                choices: licenseOptions
            },
            {
                message: "List your collaborators",
                name: "collaborators",
                type: "input"
            },
            {
                message: "What is your Github username?",
                name: "githubUrl",
                type: "input"
            },
            {
                message: "What is your email?",
                name: "email",
                type: "input"
            },
            {
                message: "How can someone contribute to your project?",
                name: "contribute",
                type: "input"
            },
            {
                message: "How can someone test your application?",
                name: "test",
                type: "input"
            },
        ];



// This function initializes the app
function init() {
    inquirer
        .prompt(questions)
          .then((answers) => {
            // write the output
            const fileContents = generateMarkdown(answers);
            const { title } = answers;

            const fileName = title.toLowerCase().replace(" ", "-");
            fs.writeFile(`${fileName}.md`, fileContents, (err) => {
              if (err) {
                console.error("Error writing file:", err);
              } else {
                console.log("Success!");
              }
            });
          });
        };

// Function call to initialize app
init();
