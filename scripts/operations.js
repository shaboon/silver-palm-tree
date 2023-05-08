const connection = require("../db/connection");

function viewAllEmployees() {
  connection.query(
    `SELECT
    employee.id,
    employee.first_name,
    employee.last_name,
    role.title,
    department.name AS department,
    role.salary,
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM
    employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id;`,
    function (err, res) {
      console.log("\n");
      console.table(res);
    }
  );
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
  connection.query(
    `
    SELECT role.id, 
    role.title, 
    role.salary, 
    department.name AS department_id
    FROM role
    LEFT JOIN department ON role.department_id = department.id;
    `,
    function (err, res) {
      console.table(res);
    }
  );
}

function addRole(data) {
  const newRole = data.newRole;
  const newSalary = data.newSalary;
  const department = data.chooseDepartment;

  console.log(`${newRole}`);
  console.log(`${newSalary}`);
  console.log(`${department}`);

  connection.query(
    `INSERT INTO role (title, salary, department_id)
    VALUES
    ("${newRole}", ${newSalary}, ${department})`,
    function (err, res) {
      if (err) throw err;
      console.log(`Role: ${newRole} added, to Department: ${department}`);
    }
  );
}

function updateRole(data) {
  const updatedTitle = data.updatedTitle;
  const updatedSalary = data.updatedSalary;
  const updatedDepartment = data.updatedDepartment;

  connection.query(
    `
      UPDATE role
      SET title = "${updatedTitle}" 
      salary = ${updatedSalary}, 
      department_id = ${updatedDepartment}
      
      WHERE id = ${id}`,
    function (err, res) {
      if (err) throw err;
      console.log(`Role ${id} is now: ${updatedTitle}`);
    }
  );
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, res) {
    console.table(res);
  });
}

function addDepartment(data) {
  const newDepartment = data.newDepartment;
  console.log(`${newDepartment}`);

  connection.query(
    `INSERT INTO department (name)
    VALUES
    ("${newDepartment}")`,
    function (err, res) {
      if (err) throw err;
      console.log(`New Department: ${newDepartment} added`);
    }
  );
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
