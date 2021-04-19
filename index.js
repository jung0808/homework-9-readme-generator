// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
console.log(generateMarkdown);
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "gitHubName",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "Please describe installation instruction?",
  },
  {
    type: "input",
    name: "usageInformation",
    message: "Please describe usage information of your project?",
  },
  {
    type: "input",
    name: "guidelines",
    message: "Please describe contribution guidelines?",
  },
  {
    type: "input",
    name: "testInstruction",
    message: "Please describe test instructions?",
  },
  {
    type: "list",
    message: "Choose a license for your project",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    name: "license",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else console.log("Good job!");
  });
}

// TODO: Create a function to initialize app
function init() {
  //Ask user questions by using inquirer prompt.
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    console.log(response.projectTitle);
    console.log(generateMarkdown(response));
  });
}

// Function call to initialize app
init();
