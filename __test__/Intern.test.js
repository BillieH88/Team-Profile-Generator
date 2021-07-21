const Intern = require("../lib/Intern");

describe("Employee Class Test", () => {
    test("Creating an Employee object", () => {
        // name, id, email, school
        var e = new Intern("John Doe", 1234, "doe@test.com", "Harvard University");
        expect(e.getName()).toBe("John Doe");
        expect(e.getSchool()).toBe("Harvard University");
        expect(e.getRole()).toBe("Intern");
    });
});