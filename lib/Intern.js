const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
        this.role = this.getRole();
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}
module.exports = Intern;

// `school`

// * `getSchool()`

// * `getRole()`   // Overridden to return 'Intern'