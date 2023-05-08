const connection = require("../db/connection");
// const mysql = require("mysql2");

function viewAllEmployees() {
  connection.query("SELECT * FROM employee", function (err, res) {
    console.table(res);
  });
}

function addEmployee(data) {
  const firstName = data.employeeFirstName;
  const lastName = data.employeeLastName;
  const role = data.employeeRole;
  const manager = data.employeeManager;

  connection.query(
    `INSERT INTO employee (${firstName}, ${lastName}, ${role}, ${manager})`
  );
  console.log(`${firstName}`);
  console.log(`${lastName}`);
  console.log(`${manager}`);
  console.log(`${role}`);
}

function updateEmployee(data) {
  const employee = data.newEmployee;

  console.table(`${employee}`);
}

function viewRoles(data) {
  connection.query("SELECT * FROM role", function (err, res) {
    console.table(res);
  });
}

function addRole(data) {
  const newRole = data.newRole;
  const department = data.chooseDepartment;

  console.log(`${newRole}`);
  console.log(`${department}`);
}

function updateRole(data) {
  const employee = data.employeeName;
  const role = data.role;

  console.log(`${employee}`);
  console.log(`${role}`);
}

function viewDepartments() {
  connection.query("SELECT * FROM department");
}

function addDepartment(data) {
  const newDepartment = data.newDepartment;

  console.log(`${newDepartment}`);
}

module.exports = {
  viewAllEmployees,
  addEmployee,
  updateEmployee,
  viewRoles,
  addRole,
  updateRole,
  viewDepartments,
  addDepartment,
};
