// EMPLOYEE IS THE PARENT CLASS (that holds the Employee object)
class Employee {
  //with a constructor function with parameters of name, id, email and role
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  //get name method that returns the name entered
  getName() {
    return this.name;
  } 
  // get id method returns the id entered
  getId() {
    return this.id;
  }
  // get email method returns the email entered
  getEmail() {
    return this.email;
  }
  // get role method returns role as "Employee"
  getRole() {
    return "Employee";
  } 


}
// node function allows us to export this module  (constructor class) in subclass files
module.exports = Employee;

//!! TEST!! //