const Manager = require("../lib/Manager");
const Employeee = require("../lib/Employee");

test("Returns office number", () => {
  const testValue = 100;
  const eValue = new Manager("Kaelin", 1, "Kaelin@email.com", testValue);
  expect(eValue.office).toBe(testValue);
});

test('will return manager"', () => {
  const testValue = "Manager";
  const eValue = new Manager("Kaelin", 1, "kaelin@gmail.com", 100);
  expect(eValue.getRole()).toBe(testValue);
});

test("will return office number from function", () => {
  const testValue = 100;
  const eValue = new Manager("Kaelin", 1, "kaelin@gmail.com", testValue);
  expect(eValue.getOffice()).toBe(testValue);
});