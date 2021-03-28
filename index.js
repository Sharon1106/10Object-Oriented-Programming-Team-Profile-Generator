const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

// empty employees array
const employees = [];

console.log("Please enter your coworkers info to generate your team");
//starting with coworkers:name/ id / email / role
function addWorker() {
  inquirer.prompt([{

    type: 'input',
    message: "What is your coworkers name?",
    name: 'name'
  }, 
  {
    type: 'input',
    message: "What is your coworkers id?",
    name: 'id'
  },
  {
    type:'input',
    message: "What is your coworkers email address?",
    name: 'email'
  },
  { // then prompt user: engineer, intern, manager,
    type: 'list',
    message: "What is their role?" ,
    choices: ["Engineer", "Intern", "Manager"],
    name: 'role'
  }])

  .then(({ name, id, email, role }) => {
      // based on type of worker is chosen change prompt
      let roleChosen = "";
      if (role === "Engineer") {
        roleChosen = "Github username";

      } else if (role === "Intern") {
        roleChosen = "School name";

      } else {
        // for manager
        roleChosen = "Office phone number";
      }
      
      inquirer.prompt([{
        type: 'input',
        message: `What is your coworker's ${roleChosen}? `,
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
            editHtml(newWorker)
              .then(() => {
                  if (moreWorkers === "yes") {
                    addWorker();

                    //when no is chosen
                  } else {

                    //finish
                    finishHtml();
                  }
                });
          });
    });
}

function createHtml() {
  const html = ` <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body style="background-color: #525564;">
  
      <header>
        <div class="jumbo p-5 text-center shadow-1-strong " style= "background-color: #74828F;  ">
          <h1 class="mb-3" style="color:white; font-family: 'EB Garamond', serif, Arial;">My Team!</h1>
        </div>
      </header>
  
      <main>
       <div class="container">      
        <div class="row">`;
          fs.writeFile('./dist/team.html', html, (err) => {
              if (err) {
                throw err;
              };
            });

}
function editHtml(worker) {

  return new Promise ((res, rej) => {
      let newName = worker.getName();
      let newRole = worker.getRole();
      let newId = worker.getId();
      let newEmail = worker.getEmail();
      let data = "";

      if (newRole === "Engineer") {
        let gitHub = worker.getGithub();
        data = `
          <div class = "row my-5 col-lg-4 col-md-6 col-sm-8 col-xs-8">
            <div class="row">
              <div class="card text-center shadow-1-strong" style="background-color:  #FEF6EB;">
                <div class="card-header" style="font-family: 'EB Garamond', serif, Arial; font-size: 30px; font-weight: 200; color: #525564;">${newName}</div>
                  <ul class="list-group list-group-flush shadow-1-strong ">
                    <li class="list-group-item">ID: ${newId}</li>
                    <li class="list-group-item">Email: <a href="#" class="card-link">${newEmail}</a></li>
                    <li class="list-group-item">GitHub: <a href="#" class="card-link">${gitHub}</a></li>
                  </ul>
                <div class="card-footer" style="font-family: 'EB Garamond', serif, Arial; font-size:  30px; color: #525564">${newRole} <i class="fas fa-glasses"></i></div>
              </div>
            </div>
          </div>`;

      } else if (newRole === "Intern") {
        const school = worker.getSchool();
        data = `
          <div class = "row my-5 col-lg-4 col-md-6 col-sm-8 col-xs-8">
            <div class="row">
              <div class="card text-center shadow-1-strong" style="background-color:  #FEF6EB;">
                <div class="card-header" style="font-family: 'EB Garamond', serif, Arial; font-size: 30px; font-weight: 200; color: #525564;">${newName}</div>
                  <ul class="list-group list-group-flush shadow-1-strong ">
                    <li class="list-group-item">ID: ${newId}</li>
                    <li class="list-group-item">Email: <a href="#" class="card-link">${newEmail}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                  </ul>
                  <div class="card-footer" style="font-family: 'EB Garamond', serif, Arial; font-size: 30px; color: #525564">${newRole} <i class="fas fa-user-graduate"></i></div>
              </div>
            </div> 
          </div>`;

      } else {//manager
        let officeNumber = worker.getOfficeNumber();
        data = `
          <div class = "row my-5 col-lg-4 col-md-6 col-sm-8 col-xs-8">
            <div class="row">
              <div class="card text-center shadow-1-strong" style="background-color:  #FEF6EB;">
                <div class="card-header" style="font-family: 'EB Garamond', serif, Arial; font-size: 30px; font-weight: 200; color: #525564;">${newName}</div>
                  <ul class="list-group list-group-flush shadow-1-strong ">
                    <li class="list-group-item">ID: ${newId}</li>
                    <li class="list-group-item">Email: <a href="#" class="card-link">${newEmail}</a></li>
                    <li class="list-group-item">Office Number: ${officeNumber}</li>
                  </ul>
                <div class="card-footer" style="font-family: 'EB Garamond', serif, Arial; font-size: 30px; color: #525564">${newRole} <i class="fas fa-mug-hot"></i></div>
              </div>
            </div>
          </div>
      `;
      }

      fs.appendFile('./dist/team.html', data, (err) => {
        if (err) {
          return rej(err);
        };
        return res();
      });
    })
}
function finishHtml () {
  const html = `</div> 
       </div>
      </main>

       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"></script>
  </body>
</html>`;
    fs.appendFile('./dist/team.html', html, (err) => {
      if (err) {
        console.log(err);
      };
      console.log("Your team was succesfully generated in dist folder!");
    })
}
// function that runs after initializing
function runApp() {
  addWorker();
  createHtml();
}
// runs app
runApp();