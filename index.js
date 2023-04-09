// const inquirer = require("inquirer");

const questions = [
  "What Would You Like to Do?",
  "Please Specify New Employee Name",
  "Please Specify Employee Name",
  "Please Specify Employee Role",
  "Which Department Does This Role Belong To?",
  "Please Specify New Department",
];

const [
  menu,
  newEmployeeName,
  employeeName,
  employeeRole,
  addRole,
  whichDepartment,
  addDepartment,
] = questions;

function init() {
  console.log(
    `
        ,======================================================,
        |                                                      |
        |    ______                 _                          |
        |   | _____|--,----_  ____ | | ___  _   _  ___  ___    |
        |   |   _| |  _   _ || ,_ || |/ _ || | | |/ _ |/ _ |   |
        |   |  |___| | | | | | | ) | | (_) | |_| |  __/  __/   |
        |   |______|_| |_|_|_| .__/|_||___/|___, ||___||___|   |
        |                    |_|            |___/              |
        |    __  __                                            |
        |   |  |/  | ___ _ _ __   ___ _  __ _  ___ _ __        |
        |   | ||/| |/  _| |  _ | /  _  |/ _  |/ _ |  __|       |
        |   | |  | |  (_) | | | |  (_) | (_) |  __/ |          |
        |   |_|  |_||__,__|_| |_||__,__||__, ||___|_|          |
        |                               |____/                 |
        |                                                      |
        '======================================================'
        `
  );

  inquirer
    .prompt([
      {
        type: "list",
        message: menu,
        name: "menu",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
      },
    ])
    .then((data) => {
      const menu = data.menu;
      switch (menu) {
        case "View All Employees":
          console.log(``);
        case "Add Employee":
          inquirer
            .prompt([
              {
                type: "input",
                message: newEmployeeName,
                name: "newEmployee",
              },
            ])
            .then((data) => {
              addEmployee(data);
            });
        case "Update Employee Role":
          inquirer
            .prompt([
              {
                type: "input",
                message: employeeName,
                name: "employeeName",
              },
              {
                type: "input",
                message: employeeRole,
                name: "role",
              },
            ])
            .then((data) => {
              updateRole(data);
            });
        case "View All Roles":
          console.log(``);
        case "Add Role":
          inquirer
            .prompt([
              {
                type: "input",
                message: addRole,
                name: "newRole",
              },
              {
                type: "input",
                message: whichDepartment,
                name: "chooseDepartment",
              },
            ])
            .then((data) => {
              addRole(data);
            });
        case "View All Departments":
          console.log(``);
        case "Add Department":
          inquirer
            .prompt([
              {
                type: "input",
                message: addDepartment,
                name: "newDepartment",
              },
            ])
            .then((data) => {
              addDepartment(data);
            });
        default:
          return "";
      }
    });
}

init();
