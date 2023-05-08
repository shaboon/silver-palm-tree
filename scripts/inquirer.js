const connection = require("../db/connection");
// const mysql = require("mysql2");

function viewAllEmployees() {
  connection.query("SELECT * FROM employee", function (err, res) {
    console.table(res);
  });
}

function addEmployee(data) {
  const firstName = data.firstName;
  const lastName = data.lastName;
  const role = data.employeeRole;
  const manager = data.employeeManager;

  console.log(`${firstName}`);
  console.log(`${lastName}`);
  console.log(`${manager}`);
  console.log(`${role}`);

  connection.query(
    `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
    ("${firstName}", "${lastName}", ${role}, ${manager})`,
    function (err, res) {
      if (err) throw err;
      console.log(`Employee: ${firstName} added, to role: ${role}`);
    }
  );
}

function updateEmployee(data) {
  const id = data.id;
  const firstName = data.firstname;
  const lastName = data.lastname;
  const manager_id = data.manager;
  const role = data.role;

  connection.query(
    `
      UPDATE employee
      SET first_name = "${firstName}", last_name = "${lastName}", 
      manager_id = ${manager_id}, 
      role_id = ${role}
      
      WHERE id = ${id}`,
    function (err, res) {
      if (err) throw err;
      console.log(`Employee: ${firstName} updated, to role: ${role}`);
    }
  );
}

function viewRoles() {
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
  connection.query("SELECT * FROM department", function (err, res) {
    console.table(res);
  });
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
