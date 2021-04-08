const inquirer = require("inquirer");

// Add a new password
const addPassword = async () => {
    const newPassword = await getPassword();
    const { org, pass, confirm } = newPassword;

    if (!pass || !confirm) {
        console.log("Invalid password");
        process.exit(0);
    }

    if (pass !== confirm) {
        console.log("\nPasswords did not match. Try again.\n");
        return;
    }
}

// Prompt user for password info.
const getPassword = () => {
    return inquirer.prompt([
        {
            name: "org",
            type: "input",
            message: "Enter organization/site that password belongs to: "
        },
        {
            name: "pass",
            type: "password",
            message: "Enter password: "
        },
        {
            name: "confirm",
            type: "password",
            message: "Re-enter password to confirm"
        }
    ]);
}

module.exports = { addPassword }