const Employee = require("../lib/Employee");

test("Create Employee", () => {
  const emp = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Use constructor to set name", () => {
  const name = "Kaelin";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Use constructor to set id", () => {
  const employeeId = 100;
  const emp = new Employee("Kaelin", testValue);
  expect(empid).toBe(employeeId);
});

test("Use constructor to se email", () => {
  const employeeEmail = "test@test.com";
  const emp = new Employee("Kaelin", 1, employeeEmail);
  expect(emp.email).toBe(employeeEmail);
});

test("get name", () => {
  const employeeName = "Kaelin";
  const emp = new Employee(employeeName);
  expect(emp.getName()).toBe(employeeName);
});

test("Get Id", () => {
  const employeeId = 42;
  const emp = new Employee("Kaelin", employeeId);
  expect(emp.getId()).toBe(employeeId);
});

test("Get Email", () => {
  const employeeEmail = "test@test.com";
  const emp = new Employee("Kaelin", 1, employeeEmail);
  expect(emp.getEmail()).toBe(employeeEmail);
});

test("get role", () => {
  const employeeRole = "Employee";
  const empid = new Employee("Kaelin", 1, "test@test.com");
  expect(emp.getRole()).toBe(employeeRole);
});