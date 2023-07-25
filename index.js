const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'thepassword10',
    database: 'employee_db',
  }
);

function init()
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: '["View all departments", "View all roles", "View all employees". "Add department", "Add role", "Add employee", "Update employee role"]',
      name: 'userChoice',
    }
  ])
  .then((response) => {
    console.log(response);

    if (response.userChoice === "View all departments")
    {
      viewDepartments();
    }

    else if (response.userChoice === "View all roles")
    {
      viewRoles();
    }
    else if (response.userChoice === "View all employees")
    {
      viewEmployees();
    }
  });

function viewDepartments()
  {
    db.query('SELECT * FROM department', function (err, results) {
      console.table(results)
    });
  }

function viewRoles()
  {
    db.query('SELECT * FROM role', function (err, results) {
      console.table(results)
    });
  }

function viewEmployees()
  {
    db.query('SELECT * FROM employees', function (err, results) {
      console.table(results)
    });
  }