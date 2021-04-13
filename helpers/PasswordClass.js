const fs = require("fs");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

class Password {
    constructor(organization, password) {
        this.organization = organization
        this.password = password
    }

    async savePassword() {
        if (!fs.existsSync("../myPasswords")) {
            fs.mkdirSync("../myPasswords");
        }

        const csvWriter = await createCsvWriter({
            path: './myPasswords/passwords.csv',
            header: [
                { id: 'org', title: 'ORGANIZATION' },
                { id: 'pass', title: 'PASSWORD' }
            ],
            append: true
        });

        const records = [{ org: this.organization, pass: this.password }]

        await csvWriter.writeRecords(records)
            .then(() => {
                console.log('Saved succesfully!');
            })
            .catch((err) => {
                console.log('Save failed', err);
            });

        console.log("done");
    }
}

module.exports = Password;