// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js")

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
                choices: [
                    "MIT",
                    "GNU GPlv3",
                    "Apache License 2.0",
                    "ISC",
                ]
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



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => 
        {
            const fileContents = generateMarkdown(answers);
            const { title } = answers;
            const fileName = title.toLowerCase().replace(" ", "-");
            console.log("Answers: ", questions);
            fs.writeFile(
                `${fileName}.md`,
                JSON.stringify(answers, null, 4),
                (err) => err ? console.error(err) : console.log("Success!")
                );
        }
        )
}

// Function call to initialize app
init();
