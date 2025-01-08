// TODO: Include packages needed for this application
import fs, { write } from "fs";     //importing fs from node
import inquirer from "inquirer";        //importing inquirer package
import generateMarkdown from "./utils/generateMarkdown.js"; //inporting default export from generatemarkdown.js

const licenses = [`MIT`,`Apache`,`ISC`,`SIL`,`ODBL`,`Null`]         //creating instance of license choices in an array
// TODO: Create an array of questions for user input
const questions = [                         //array of questions with corresponding response type
    {
        type:`input`,
        name:`title`,
        message:`Enter project title:`
    },
    {
        type:`input`,
        name:`description`,
        message:`Enter a description of your project:`
    },
    {
        type:`input`,
        name:`installation`,
        message:`How do you install your project?`
    },
    {
        type:`input`,
        name:`tests`,
        message:`Enter test instructions:`
    },
    {
        type:`input`,
        name:`usage`,
        message:`How do you use this?`
    },
    {
        type:`list`,
        name:`license`,
        message:`Which license did you use for your project?`,
        choices: licenses                                           //will use above array 
    },
    {
        type:`input`,
        name:`contributions`,
        message:`Enter contributions:`,
    },
    {
        type:`input`,
        name:`username`,
        message:`Enter your GitHub username:`
    },
    {
        type:`input`,
        name:`email`,
        message:`Enter your email:`
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {                                        //Used to write data to the file readme.md
    fs.writeFile(`README.md`,data,(err) => {
        err ? console.error(err) : console.log(`README Created`);
    });
}

// TODO: Create a function to initialize app
function init() {                                                           //initializes app by valling generate markdown with the user's response

    inquirer.prompt(questions).then(response => writeToFile(generateMarkdown(response)))
}

// Function call to initialize app
init();
