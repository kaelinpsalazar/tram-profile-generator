const Employee = require("../lib/Employee.js");

describe("Values", () => {
  const name = "Kaelin Salazar";
  const id = 42;
  const email = "Kaelin@gmail.com";
  const role = "Employee";

  const testEmployee = new Employee(name, id, email);

  it("Will return a name", () => {
    expect(testEmployee.getName()).toBe(name);
  });

  it("Will return Id", () => {
    expect(testEmployee.getId()).toBe(id);
  });

  it("Will Return email", () => {
    expect(testEmployee.getEmail()).toBe(email);
  });

  it("Will Reutrn role", () => {
    expect(testEmployee.getRole()).toBe(role);
  });
});