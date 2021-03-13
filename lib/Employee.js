// employee is a parent class that creates a Employee object
class Employee {
  //with a constructor function with parameters of name, id, email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //get name function that returns the name entered
  getName() {
    return this.name;
  } 
  // get id function returns the id entered
  getId() {
    return this.id;
  }
  // get email function returns the email entered
  getEmail() {
    return this.email;
  }
  // get role funtion returns role as "Employee"
  getRole() {
    return "Employee";
  } 


}
//allows us to use this class in sublass files
module.exports = Employee;

//!! TEST!! //