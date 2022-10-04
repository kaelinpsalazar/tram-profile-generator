const Employee = require ("./employee.js")

class Manager extends Employee {
    constructor(name, id, email, office) {
        super (name, id, email)
        this.office = office
    }
    
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Manager'
    }

    getOffice() {
        return this.office
    }

}

module.exports = Manager