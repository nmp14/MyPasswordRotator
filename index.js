const inquirer = require("inquirer");
const fs = require("fs");
const Password = require("./helpers/PasswordClass");
const passwordFunctions = require("./helpers/passwordHelpers");

const init = async () => {
    const choices = await choicePrompts();
    // Pass choices answer also referred to as choices
    const useChoices = await choicesSwitch(choices.choices);
}

const choicePrompts = () => {
    return inquirer.prompt([
        {
            name: "choices",
            type: "rawlist",
            choices: ["Add new password", "Look up password from list of Organizations", "Delete password", "Update Password"]
        }
    ])
}

const choicesSwitch = async (choices) => {
    // Switch case based on asnwers to choicePrompts
    switch (choices) {
        case "Add new password":
            const addedNewPassword = await passwordFunctions.addPassword();
            init();
            break;
        case "Look up password from list of Organizations":
            // TODO
            break;
        case "Delete password":
            // TODO
            break;
        case "Update password":
            // TODO
            break;
    }
}

init();