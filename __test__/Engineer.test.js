const Engineer = require("../lib/Engineer");

describe("Employee Class Test", () => {
    test("Creating an Employee object", () => {
        // name, id, email, github
        var e = new Engineer("John Doe", 1234, "doe@test.com", "john");
        expect(e.getEmail()).toBe("doe@test.com");
        expect(e.getId()).toBe(1234);
        expect(e.getRole()).toBe("Engineer");
    });
});