const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Arizona State";
  const e = new Intern("Axle", 1, "Intern", "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Axle", 1, "Intern", "test@test.com", "Arizona State");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Arizona State";
  const e = new Intern("Axle", 1, "Intern", "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});