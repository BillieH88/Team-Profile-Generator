const Employee = require("../lib/Employee");

describe("Employee Class Test", () => {
    test("Creating an Employee object", () => {
        // name, id, email, role
        var e = new Employee("John Doe", 1234, "doe@test.com", "Employee");
        expect(e.getName()).toBe("John Doe");
        expect(e.getId()).toBe(1234);
        expect(e.getRole()).toBe("Employee");
    });
});