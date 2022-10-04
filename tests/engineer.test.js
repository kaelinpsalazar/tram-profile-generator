const Engineer = require("../lib/Engineer");

test("Use constructor for Git hub", () => {
  const employeeGithub = "GitHubUser";
  const emp = new Engineer("Kaelin", 1, "Kaelin@gmail.com", employeeGithub);
  expect(emp.github).toBe(employeeGithub);
});

test("get Role", () => {
  const getEmployeeRole = "Engineer";
  const emp = new Engineer("Kaelin", 1, "Kaelin@gmail.com", "GitHubUser");
  expect(emp.getRole()).toBe(getEmployeeRole);
});

test("Git Github", () => {
  const getEmployeeGithub = "GitHubUser";
  const emp = new Engineer("Kaelin", 1, "Kaelin@gmail.com", getEmployeeGithub);
  expect(emp.getGithub()).toBe(getEmployeeGithub);
});