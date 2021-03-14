// node built in function to load modules
const Employee = require('./Employee');

// Engineer extends the Employee class
// name,id and email are inhereted
class Engineer extends Employee {
  //will contain id, email, github
  constructor(name, id, email, gitHub) {
    //use super to use inhereted parameters, not to repeat code
    super(name, id, email)
    // will include github(github username) getGitHub()
    this.gitHub = gitHub;
  }  
  
  getGitHub() {
    return this.getGitHub;
  }
  
  // getRole will be overridden to return 'Engineer'
  getRole() {
    return "Engineer";
  }
}
// export module
module.exports = Engineer;
