
const Engineer = require("../lib/Engineer");

test("Will return github user", () => {
  const testValue = "username";
  const eValue = new Engineer("Kaelin", 1, "kaelin@gmail.com", testValue);
  expect(eValue.github).toBe(testValue);
});

test("will return engineer", () => {
  const testValue = "Engineer";
  const eValue = new Engineer("Kaelin", 1, "kaelin@gmail.com", "username");
  expect(eValue.getRole()).toBe(testValue);
});

test("Will return gihub from function)", () => {
  const testValue = "username";
  const eValue = new Engineer("Kaelin", 1, "kaelin@gmail.com", testValue);
  expect(eValue.getGithub()).toBe(testValue);
});