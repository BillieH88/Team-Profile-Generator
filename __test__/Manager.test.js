const Manager = require("../lib/Manager");

describe("Employee Class Test", () => {
    test("Creating an Employee object", () => {
        // name, id, email, officeNumber
        var e = new Manager("John Doe", 1234, "doe@test.com", 4442);
        expect(e.getName()).toBe("John Doe");
        expect(e.getOffice()).toBe(4442);
        expect(e.getRole()).toBe("Manager");
    });
});