const inquirer = require("inquirer");

const {
  viewAllEmployees,
  addEmployee,
  updateEmployee,
  viewRoles,
  addRole,
  updateRole,
  viewDepartments,
  addDepartment,
} = require("./scripts/inquirer");

const questions = [
  "What Would You Like to Do?",
  "Please Specify New Employee Name",
  "Please Specify Employee Name",
  "Which Department Does This Role Belong To?",
  "Please Specify New Department",
];

const [
  menu,
  newEmployeeName,
  employeeName,
  employeeRole,
  addNewRole,
  whichDepartment,
  addNewDepartment,
] = questions;

const employeeNewName = [
  "What is the Employee's First Name?",
  "What is the Employee's Last Name?",
  "Who is the Employee's Manager ID?",
  "Please Specify Employee Role",
];

const [employeeFirstName, employeeLastName, employeeManager, employeeNewRole] =
  employeeNewName;

const employeeUpdate = [
  "Which Employee Would You Like to Update?",
  "What is the Employee's Updated First Name?",
  "What is the Employee's Updated Last Name?",
  "Who is the Employee's Updated Manager ID?",
  "Please Specify New Employee Role",
];

const [
  employeeID,
  employeeFName,
  employeeLName,
  employeeBoss,
  employeeRoleNow,
] = employeeUpdate;

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
        |   |_|  |_|.__,__|_| |_|.__,__||__, |.___|_|          |
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
          "Update Employee",
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
          viewAllEmployees();
          return;
        case "Add Employee":
          inquirer
            .prompt([
              {
                type: "input",
                message: employeeFirstName,
                name: "firstName",
              },
              {
                type: "input",
                message: employeeLastName,
                name: "lastName",
              },
              {
                type: "input",
                message: employeeNewRole,
                name: "employeeRole",
              },
              {
                type: "input",
                message: employeeManager,
                name: "employeeManager",
              },
            ])
            .then((data) => {
              addEmployee(data);
            });
          return;
        case "Update Employee":
          inquirer
            .prompt([
              {
                type: "input",
                message: employeeID,
                name: "id",
              },
              {
                type: "input",
                message: employeeFName,
                name: "firstname",
              },
              {
                type: "input",
                message: employeeLName,
                name: "lastname",
              },
              {
                type: "input",
                message: employeeBoss,
                name: "manager",
              },
              {
                type: "input",
                message: employeeRoleNow,
                name: "role",
              },
            ])
            .then((data) => {
              updateEmployee(data);
            });
          return;
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
          return;
        case "View All Roles":
          viewRoles();
          return;
        case "Add Role":
          inquirer
            .prompt([
              {
                type: "input",
                message: addNewRole,
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
          return;
        case "View All Departments":
          viewDepartments();
          return;
        case "Add Department":
          inquirer
            .prompt([
              {
                type: "input",
                message: addNewDepartment,
                name: "newDepartment",
              },
            ])
            .then((data) => {
              addDepartment(data);
            });
          return;
        default:
          return console.log("Quitting");
      }
    });
}

init();
