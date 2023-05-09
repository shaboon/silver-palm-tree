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
} = require("./scripts/operations.js");

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

const createRole = [
  "What is the Title of the New Role?",
  "What is the Salary of the New Role?",
  "Which Department Does This Role Belong To?",
];

const [addNewRole, addNewSalary, whichDepartment] = createRole;

const newDepartment = ["What is the Name of the New Department?"];

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
  cmsMenu();
}

function cmsMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
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
      switch (data.menu) {
        case "View All Employees":
          viewAllEmployees();
          cmsMenu();
          break;
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
              cmsMenu();
            });
          break;
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
              cmsMenu();
            });
          break;
        case "View All Roles":
          viewRoles();
          cmsMenu();
          break;
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
                message: addNewSalary,
                name: "newSalary",
              },
              {
                type: "input",
                message: whichDepartment,
                name: "chooseDepartment",
              },
            ])
            .then((data) => {
              addRole(data);
              cmsMenu();
            });
          break;
        case "View All Departments":
          viewDepartments();
          cmsMenu();
          break;
        case "Add Department":
          inquirer
            .prompt([
              {
                type: "input",
                message: newDepartment,
                name: "newDepartment",
              },
            ])
            .then((data) => {
              addDepartment(data);
              cmsMenu();
            });
          break;
        default:
          console.log("Quitting");
          return process.exit(0);
      }
    });
}

init();
