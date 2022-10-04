const Intern = require("../lib/Intern");

test("Use constructor to get school", () => {
  const getSchool = "Louisville";
  const emp = new Intern("Sarah", 1, "Sarah@gmail", getSchool);
  expect(emp.school).toBe(getSchool);
});

test("get role", () => {
  const getEmployeeRole = "Intern";
  const emp = new Intern("Sarah", 1, "Sarah@gmail", "UCLA");
  expect(emp.getRole()).toBe(getEmployeeRole);
});

test("get school", () => {
  const getEmployeeSchool = "Louisville";
  const emp = new Intern("Sarah", 1, "Sarah@gmail", getEmployeeSchool);
  expect(emp.getSchool()).toBe(getEmployeeSchool);
});