const Employee = require('./Employee');

// Manager extends the employee class
class Manager extends Employee {
  // Manager will inculde the office number 
  constructor(name, id, email, officeNumber) {
    super(name, id, email) 
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  
  //getRole() overridden to return 'Manager'
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;