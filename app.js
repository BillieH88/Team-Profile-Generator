const inquirer = require("inquirer");
const express = require("express");

const groupMember = [];
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const PORT = process.env.PORT || 3000;

const app = express();

// Set EJS as templating engine
app.set("view engine", "ejs");

async function promptManager() {
    const answers = await inquirer.prompt([{
            type: "input",
            message: ">> Manager: \nWhat is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
            validate: function(email) {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                    email
                );
            },
        },
        {
            type: "input",
            message: "What number is your office?",
            name: "officeNumber",
        },

        //What would go here to validate that an email address was entered?
    ]);
    const { name, id, email, officeNumber } = answers;
    const manager = new Manager(name, id, email, officeNumber);
    groupMember.push(manager);
    start();
}

// const libs = [
async function promptEngineer() {
    const answers = await inquirer.prompt([{
            type: "input",
            message: ">> Engineer: \nWhat is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
            validate: function(email) {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                    email
                );
            },
        },
        {
            type: "input",
            message: "which is your github account username?",
            name: "github",
        },
        //What would go here to validate that an email address was entered?
    ]);
    const { name, id, email, github } = answers;
    const engineer = new Engineer(name, id, email, github);
    groupMember.push(engineer);
    start();
}

// const libs = [
async function promptIntern() {
    const answers = await inquirer.prompt([{
            type: "input",
            message: ">> Intern: \nWhat is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
            validate: function(email) {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                    email
                );
            },
        },
        {
            type: "input",
            name: "school",
            message: "which school are you attending?",
        },
    ]);
    const { name, id, email, school } = answers;
    const intern = new Intern(name, id, email, school);
    groupMember.push(intern);
    start();
}

function start() {
    inquirer
        .prompt([{
            type: "list",
            name: "option",
            message: "Please select an option",
            choices: ["Engineer", "Intern", "Quit"],
        }, ])
        .then(({ option }) => {
            switch (option.toLowerCase()) {
                case "engineer":
                    promptEngineer();
                    break;
                case "intern":
                    promptIntern();
                    break;
                case "quit":
                    app.listen(3000, () =>
                        console.log(
                            `Visit http://localhost:${PORT} >>> Click Ctrl+C to quit`
                        )
                    );
                    break;
                default:
                    console.log("Invalid input");
                    start();
                    break;
            }
        });
}

promptManager();

app.get("/", (req, res) => {
    res.render("index", { data: groupMember });
});