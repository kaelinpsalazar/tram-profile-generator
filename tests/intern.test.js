const Intern = require("../lib/Intern");

test("Will return School", () => {
  const testValue = "school";
  const eValue = new Intern("Kaelin", 1, "kaelin@email.com", testValue);
  expect(eValue.school).toBe(testValue);
});

test("will return role", () => {
  const testValue = "Intern";
  const eValue = new Intern("Kaelin", 1, "kaelin@email.com", "UCLA");
  expect(eValue.getRole()).toBe(testValue);
});

test("Get School", () => {
  const testValue = "School";
  const eValue = new Intern("Kaelin", 1, "kaelin@email.com", testValue);
  expect(eValue.getSchool()).toBe(testValue);
});