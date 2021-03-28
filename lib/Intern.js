const Employee = require('./Employee');

//Intern extends the employee class
class Intern extends Employee {
  // Intern will include id, email and school 
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  //getRole () will be overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
} 

module.exports = Intern;