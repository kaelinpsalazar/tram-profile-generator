const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Use constructo to set office", () => {
  const managerOfficeNumber = 100;
  const e = new Manager("John", 1, "John@gmail.com", managerOfficeNumber);
  expect(e.officeNumber).toBe(managerOfficeNumber);
});

test('get role', () => {
  const managerRole = "Manager";
  const e = new Manager("John", 1, "John@gmail.com", 100);
  expect(e.getRole()).toBe(managerRole);
});

test("Get ffice Number", () => {
  const officeNumber = 100;
  const e = new Manager("John", 1, "John@gmail.com", officeNumber);
  expect(e.getOfficeNumber()).toBe(officeNumber);
});