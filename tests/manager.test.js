const Employee = require("../lib/manager");

describe ('Employee', () => {
    it ('should have a string value of the employees name', () => {
            const employeeName = "Kaelin";

            const obj = new Employee (employeeName, '','');
            expect(obj.getName()).toEqual(employeeName);
        });
    });

describe ('Id', () => {
    it ('should have a string value of the employees name', () => {
            const employeeID = "01";

            const obj = new Employee (employeeID, '','');
            expect(obj.getID()).toEqual(employeeID);
        });
    });

describe ('Email', () => {
    it ('should have a string value of the employees name', () => {
            const employeeEmail = "kaelin@gmail.com";
            const obj = new Employee (employeeEmail, '','');
            expect(obj.getEmail()).toEqual(employeeEmail);
        });
    });

describe ('Role', () => {
    it ('should have a string value of the employees name', () => {
            const employeeRole = "Kaelin";

            const obj = new Employee (employeeName, '','');
            expect(obj.getRol()).toEqual(employeeName);
        });
    });