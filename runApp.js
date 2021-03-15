//RUNS THE APPLICATION//
// import classes from other files
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// require enquirer to get answers and fs to read and write file
const inquirer = require('inquirer');
const fs = require('fs');

console.log("Please enter your coworkers info to generate team");

// empty employee array
const employees = [];

// function that runs after initializing
function runApp() {
  // startHtml();
  addWorker();
}


//starting with coworkers :name/ id / email / role
function addWorker() {
  inquirer.prompt([{

    type: 'input',
    message: "What is your team members name?",
    name: 'name'
  }, 
  {
    type: 'input',
    message: "What is your team members id?",
    name: 'id'
  },
  {
    type:'input',
    message: "What is your team members email address?",
    name: 'email'
  },
  { // then prompt user: engineer, intern, manager,
    type: 'list',
    message: "What is their role?" ,
    choices: ["Engineer", "Intern", "Manager"],
    name: 'role'
  }])

  .then(({ name, id, email, role }) => {
      // based on type of worker is chosen prompt questions 
      let roleChosen = "";

      if (role = "Enginer") {
        roleChosen = "Github username";

      } else if (role = "Intern") {
        roleChosen = "School name";

      } else {
        // for manager
        roleChosen = "Office phone number";
      }
      inquirer.prompt([{
        type: 'input',
        message: `What is your coworker's ${roleChosen} `,
        name: "roleChosen"
      },
      {
        type: 'list',
        message: "Would you like to add more coworkers",
        choices: ["yes", "no"],
        name: "moreWorkers"
      }])

        // adds new worker
        .then(({ roleChosen, moreWorkers }) => {
            let newWorker;

            if (role === "Engineer") {
              newWorker = new Engineer(name, id, email, roleChosen);

            } else if (role === "Intern") {
              newWorker = new Intern(name, id, email, roleChosen);

            } else {
              newWorker = new Manager(name, id, email, roleChosen);
            }

            //push new workers into empty array and html
            employees.push(newWorker);

            addHtml(newWorker)
              .then(() => {

                  if (moreWorkers === "yes") {
                    addWorker();

                    //when no is chosen
                  } else {

                    //html file with team members info on cards on html 
                    finishHtml();
                  }
                });
          });
    });
}









//1//create classes for each so those tests pass//*

//2//then index.js write code and use inquirer to  get answers//*

//3// based on those answers call constructor to create new inter, manager, engineer 

//4//pass in those properties to get your manager, enginner, intern objects

//5// then call constructors and all their values

// runs app
runApp();